const { range } = require('lodash');
const {MongoClient} = require('mongodb');
const {ObjectID} = require('mongodb');

async function main() {
    const client = new MongoClient("mongodb+srv://DznioxPa55306d:DznioxPa55306d@studz.ke7fh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
    module.exports = class details {


        static async GetStudentWithId(Body) {
            try {
                // Connect to the MongoDB cluster
                await client.connect();
                const StudentCollection = client.db("studz_db").collection("students");

                const StudentId = new ObjectID(Body._id);
                const result = await StudentCollection.findOne({ _id: StudentId});

                return result;

            } catch (e) {
                console.error(e);
                return "error";
            }   
        }

        static async InsertStudent(Body) {

            try {
                // Connect to the MongoDB cluster
                await client.connect();
                const StudentCollection = client.db("studz_db").collection("students");

                const result = await StudentCollection.insertOne(Body)

                return result;

            } catch (e) {
                console.error(e);
                return "error";
            }   
        }

        static async UpdateStudent(Body) {

            try {
                // Connect to the MongoDB cluster
                await client.connect();
                const StudentCollection = client.db("studz_db").collection("students");

                const StudnetId = new ObjectID(Body._id);

                var filter = { _id: StudnetId };
                var updates = { $set: {data: Body.data}};

                const result = await StudentCollection.updateOne(filter,updates)

                return result;

            } catch (e) {
                console.error(e);
                return "error";
            }   
        }
    }
}
main().catch(console.error);