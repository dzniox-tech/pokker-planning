const { range } = require('lodash');
const { MongoClient } = require('mongodb');
const { ObjectID } = require('mongodb');

async function main() {
    const client = new MongoClient("mongodb+srv://DznioxPa55306d:DznioxPa55306d@studz.ke7fh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");

    module.exports = class details {

        static async InstitutionLoginCheck(Body) {
            try {
                await client.connect();

                const InstitutionCollection = client.db("studz_db").collection("institution");

                const result = await InstitutionCollection.findOne({ "username": Body.username, "credentials.pass": Body.password });

                return result;

            } catch (e) {
                console.error(e);
                return "error";
            }
        }

        static async DepartmentLoginCheck(Body) {
            try {
                await client.connect();

                const DepartmentCollection = client.db("studz_db").collection("departments");

                const result = await DepartmentCollection.findOne({ "credentials.username": Body.username, "credentials.pass": Body.password });

                return result;

            } catch (e) {
                console.error(e);
                return "error";
            }
        }
    }
}
main().catch(console.error);
main().catch(console.error);