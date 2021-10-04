const BatchModel = require('../models/batchModel');

module.exports.GetAllBatchDepartment = async(req, res, next) => {

    try {
        const Batch = await BatchModel.GetAllBatchDepartment(req.body)

        res.status(200).json({ "status": true, "data": Batch });

    } catch (e) {
        res.status(200).json({ "status": false, "data": 'Bad request!' });
    }
}

module.exports.GetAllActiveBatchDepartment = async(req, res, next) => {

    try {
        const Batch = await BatchModel.GetAllActiveBatchDepartment(req.body)

        res.status(200).json({ "status": true, "data": Batch });

    } catch (e) {
        res.status(200).json({ "status": false, "data": 'Bad request!' });
    }
}

module.exports.GetAllPassoutBatchDepartment = async(req, res, next) => {

    try {
        const Batch = await BatchModel.GetAllPassoutBatchDepartment(req.body)

        res.status(200).json({ "status": true, "data": Batch });

    } catch (e) {
        res.status(200).json({ "status": false, "data": 'Bad request!' });
    }
}
module.exports.GetBatchInfoId = async(req, res, next) => {
    try {
        const Batch = await BatchModel.GetBatchInfoId(req.body)

        res.status(200).json({ "status": true, "data": Batch });

    } catch (e) {
        res.status(200).json({ "status": false, "data": 'Bad request!' });
    }
}
module.exports.GetBatchStudnets = async(req, res, next) => {
    try {
        const Batch = await BatchModel.GetBatchStudnets(req.body)

        res.status(200).json({ "status": true, "data": Batch });

    } catch (e) {
        res.status(200).json({ "status": false, "data": 'Bad request!' });
    }
}
module.exports.GetBatchCourses = async(req, res, next) => {
    try {
        const Batch = await BatchModel.GetBatchCourses(req.body)

        res.status(200).json({ "status": true, "data": Batch });

    } catch (e) {
        res.status(200).json({ "status": false, "data": 'Bad request!' });
    }
}