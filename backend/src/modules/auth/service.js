const pool = require('../../config/db.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const registerUser = async (data) => {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    const query = `INSERT INTO users(name, email, password, role) VALUES($1, $2, $3, $4) RETURNING *`;
    const values = [data.name, data.email, hashedPassword, data.role,];
    const result = await pool.query(query, values);
    return result.rows[0];
};

const loginUser = async (data) => {
    const query = `SELECT * FROM users WHERE email = $1`;
    const result = await pool.query(query, [data.email,]);
    const user = result.rows[0];
    
    if (!user) {
        throw new Error("Invalid credentials");
    }
    
    const isMatch = await bcrypt.compare(data.password, user.password);
    
    if (!isMatch) {
        throw new Error("Invalid credentials");
    }
    
    const token = jwt.sign({
        id: user.id,
        role: user.role,
    },
    process.env.JWT_SECRET,
    {
        expiresIn: "1d",
    });
    
    return {
        token,
        user,
    };
};

module.exports = {registerUser, loginUser};