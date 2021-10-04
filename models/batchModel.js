const { range } = require('lodash');
const { MongoClient } = require('mongodb');
const { ObjectID } = require('mongodb');

async function main() {
    const client = new MongoClient("mongodb+srv://DznioxPa55306d:DznioxPa55306d@studz.ke7fh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");

    module.exports = class details {

        static async GetAllBatchDepartment(Body) {
            try {
                await client.connect();
                const InstitutionCollection = client.db("studz_db").collection("batch");

                const DepartmentId = new ObjectID(Body.department_id);
                const result = await InstitutionCollection.find({ "dep_id": DepartmentId }).toArray();

                return result;

            } catch (e) {
                console.error(e);
                return "error";
            }
        }
        static async GetAllActiveBatchDepartment(Body) {
            try {
                await client.connect();
                const InstitutionCollection = client.db("studz_db").collection("batch");

                const DepartmentId = new ObjectID(Body.department_id);
                const result = await InstitutionCollection.find({ "dep_id": DepartmentId, active: true }).toArray();

                return result;

            } catch (e) {
                console.error(e);
                return "error";
            }
        }
        static async GetAllPassoutBatchDepartment(Body) {
            try {
                await client.connect();
                const InstitutionCollection = client.db("studz_db").collection("batch");

                const DepartmentId = new ObjectID(Body.department_id);
                const result = await InstitutionCollection.find({ "dep_id": DepartmentId, active: false }).toArray();

                return result;

            } catch (e) {
                console.error(e);
                return "error";
            }
        }
        static async GetBatchInfoId(Body) {
            try {
                await client.connect();
                const BatchCollection = client.db("studz_db").collection("batch");

                const BatchId = new ObjectID(Body.batch_id);
                const result = await BatchCollection.findOne({ "_id": BatchId });

                return result;
            } catch (e) {
                console.error(e);
                return "error";
            }
        }

        static async GetBatchStudnets(Body) {
            try {
                await client.connect();
                const BatchCollection = client.db("studz_db").collection("batch");
                const StudentCollection = client.db("studz_db").collection("students");

                var Response = [];
                const BatchId = new ObjectID(Body.batch_id);
                const Result = await BatchCollection.findOne({ "_id": BatchId });

                for (let index = 0; index < Result.students.length; index++) {
                    const User = await StudentCollection.findOne({ "_id": Result.students[index] });

                    Response[index] = User
                }

                return Response;
            } catch (e) {
                console.error(e);
                return "error";
            }
        }
        static async GetBatchCourses(Body) {
            try {
                await client.connect();
                const CourseCollection = client.db("studz_db").collection("Courses");
                const ProfessorCollection = client.db("studz_db").collection("professors");

                const BatchId = new ObjectID(Body.batch_id);
                const Result = await CourseCollection.find({ "batch_id": BatchId }).toArray();


                for (let index = 0; index < Result.length; index++) {

                    const Faculty = await ProfessorCollection.findOne({ "_id": Result[index].faculty_incharge });
                    Result[index].faculty = Faculty;

                }

                return Result;
            } catch (e) {
                console.error(e);
                return "error";
            }
        }
    }
}
main().catch(console.error);