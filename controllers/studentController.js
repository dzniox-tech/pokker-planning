const StudentModel = require('../models/studentModel');

module.exports.GetStudentWithId = async(req, res, next) => {

    try {
        const Institution = await StudentModel.GetStudentWithId(req.body)

        res.status(200).json({ "status": true, "data": Institution });

    } catch (e) {
        res.status(200).json({ "status": false, "data": 'Bad request!' });
    }
}

module.exports.InsertStudent = async(req, res, next) => {

    try {
        const Institution = await StudentModel.InsertStudent(req.body)

        res.status(200).json({ "status": true, "data": Institution });

    } catch (e) {
        res.status(200).json({ "status": false, "data": 'Bad request!' });
    }
}
module.exports.UpdateStudent = async(req, res, next) => {

    try {
        const Institution = await StudentModel.UpdateStudent(req.body)

        res.status(200).json({ "status": true, "data": Institution });

    } catch (e) {
        res.status(200).json({ "status": false, "data": 'Bad request!' });
    }
}