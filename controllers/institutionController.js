const InstitutionModel = require('../models/institutionModel');

module.exports.GetAllInstitutionType = async(req, res, next) => {

    try {
        const Institution = await InstitutionModel.GetAllInstitutionType(req.query)

        res.status(200).json({ "status": true, "data": Institution });

    } catch (e) {
        res.status(200).json({ "status": false, "data": 'Bad request!' });
    }
}

module.exports.GetAllInstitution = async(req, res, next) => {

    try {
        const Institution = await InstitutionModel.GetAllInstitution(req.query)

        res.status(200).json({ "status": true, "data": Institution });

    } catch (e) {
        res.status(200).json({ "status": false, "data": 'Bad request!' });
    }
}
module.exports.GetInstitutionWithId = async(req, res, next) => {

    try {
        const Institution = await InstitutionModel.GetInstitutionWithId(req.query)

        res.status(200).json({ "status": true, "data": Institution });

    } catch (e) {
        res.status(200).json({ "status": false, "data": 'Bad request!' });
    }
}
module.exports.InsertInstitution = async(req, res, next) => {

    try {
        const Institution = await InstitutionModel.InsertInstitution(req.query)

        res.status(200).json({ "status": true, "data": Institution });

    } catch (e) {
        res.status(200).json({ "status": false, "data": 'Bad request!' });
    }
}
module.exports.UpdateInstitution = async(req, res, next) => {

    try {
        const Institution = await InstitutionModel.UpdateInstitution(req.body)

        res.status(200).json({ "status": true, "data": Institution });

    } catch (e) {
        res.status(200).json({ "status": false, "data": 'Bad request!' });
    }
}