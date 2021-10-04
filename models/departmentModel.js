const { range } = require('lodash');
const {MongoClient} = require('mongodb');
const {ObjectID} = require('mongodb');

async function main() {
    const client = new MongoClient("mongodb+srv://DznioxPa55306d:DznioxPa55306d@studz.ke7fh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
    
    module.exports = class details {
        

        static async GetAllDepartmentWithInstitution(Body) {
            try {
                await client.connect();
                const DepartmentCollection = client.db("studz_db").collection("departments");

                const InstitutionId = new ObjectID(Body.institution_id);
                const result = await DepartmentCollection.find({ "institution_id": InstitutionId}).toArray();

                return result;

            } catch (e) {
                console.error(e);
                return "error";
            }   
        }

        static async GetDepartmentWithID(Body) {
            try {
                await client.connect();
                const DepartmentCollection = client.db("studz_db").collection("departments");

                const DepartmentId = new ObjectID(Body.department_id);
                const result = await DepartmentCollection.find({ "_id": DepartmentId}).toArray();

                return result;

            } catch (e) {
                console.error(e);
                return "error";
            }   
        }
        static async GetDepartmentProfessors(Body) {
            try {
                await client.connect();
                const ProfessorsCollection = client.db("studz_db").collection("professors");

                const DepartmentId = new ObjectID(Body.department_id);
                const result = await ProfessorsCollection.find({ "department.department_id": DepartmentId}).toArray();

                return result;

            } catch (e) {
                console.error(e);
                return "error";
            }   
        }
        
    }
}
main().catch(console.error);