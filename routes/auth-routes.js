const express = require('express')
const router = express.Router()

//********************************************** */

const Institution = require('../controllers/institutionController')
const Department = require('../controllers/departmentController')
const Student = require('../controllers/studentController')
const Login = require('../controllers/loginController')
const Batch = require('../controllers/batchController')

/** Routes start here */

/**LOGIN CHECK */
router.post('/institution-login', Login.InstitutionLoginCheck)
router.post('/department-login', Login.DepartmentLoginCheck)

/** DEPARTMENTS */
router.post('/get-departments-with-inst', Department.GetAllDepartmentWithInstitution)
router.post('/get-department-with-id', Department.GetDepartmentWithID)
router.post('/get-department-professors', Department.GetDepartmentProfessors)

/** Batch */
router.post('/get-all-batch-department', Batch.GetAllBatchDepartment)
router.post('/get-all-active-batch-department', Batch.GetAllActiveBatchDepartment)
router.post('/get-all-passout-batch-department', Batch.GetAllPassoutBatchDepartment)
router.post('/get-batch-info-id', Batch.GetBatchInfoId)
router.post('/get-batch-studnets', Batch.GetBatchStudnets)
router.post('/get-batch-courses', Batch.GetBatchCourses)

/** INSTITUTION */
router.post('/get-all-institution-type', Institution.GetAllInstitutionType)
router.post('/get-all-institution', Institution.GetAllInstitution)
router.post('/get-institution-id', Institution.GetInstitutionWithId)
router.post('/insert-institution', Institution.InsertInstitution)
router.post('/update-institution', Institution.UpdateInstitution)

/** STUDENT */
router.post('/get-student-id', Student.GetStudentWithId)
router.post('/insert-student', Student.InsertStudent)
router.post('/update-student', Student.UpdateStudent)

/** Routes exported */
module.exports = router;