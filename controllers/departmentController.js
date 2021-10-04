const DepartmentModel = require('../models/departmentModel');

module.exports.GetAllDepartmentWithInstitution = async(req, res, next) => {

    try {
        const Departments = await DepartmentModel.GetAllDepartmentWithInstitution(req.body)

        res.status(200).json({ "status": true, "data": Departments });

    } catch (e) {
        res.status(200).json({ "status": false, "data": 'Bad request!' });
    }
}
module.exports.GetDepartmentWithID = async(req, res, next) => {

    try {
        const Department = await DepartmentModel.GetDepartmentWithID(req.body)

        res.status(200).json({ "status": true, "data": Department });

    } catch (e) {
        res.status(200).json({ "status": false, "data": 'Bad request!' });
    }
}
module.exports.GetDepartmentProfessors = async(req, res, next) => {

    try {
        const Professors = await DepartmentModel.GetDepartmentProfessors(req.body)

        res.status(200).json({ "status": true, "data": Professors });

    } catch (e) {
        res.status(200).json({ "status": false, "data": 'Bad request!' });
    }
}