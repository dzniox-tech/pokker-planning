const LoginModel = require('../models/loginModel');

module.exports.InstitutionLoginCheck = async(req, res, next) => {

    try {
        const Login = await LoginModel.InstitutionLoginCheck(req.body)

        res.status(200).json({ "status": true, "data": Login });

    } catch (e) {
        res.status(200).json({ "status": false, "data": 'Bad request!' });
    }
}

module.exports.DepartmentLoginCheck = async(req, res, next) => {

    try {
        const Login = await LoginModel.DepartmentLoginCheck(req.body)

        res.status(200).json({ "status": true, "data": Login });

    } catch (e) {
        res.status(200).json({ "status": false, "data": 'Bad request!' });
    }
}