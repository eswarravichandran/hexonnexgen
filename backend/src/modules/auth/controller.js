const {registerUser, loginUser} = require('./service.js');

const register = async (req, res) => {
    try {
        const user = await registerUser(req.body);
        res.status(201).json(user);
    }
    catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

const login = async (req, res) => {
    try {
        const result = await loginUser(req.body);
        res.json(result);
    }
    catch (error) {
        res.status(401).json({
            message: error.message,
        });
    }
};

module.exports = {register, login};