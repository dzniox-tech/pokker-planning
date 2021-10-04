const { range } = require('lodash');
const { MongoClient } = require('mongodb');
const { ObjectID } = require('mongodb');

async function main() {
    const client = new MongoClient("mongodb+srv://DznioxPa55306d:DznioxPa55306d@studz.ke7fh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
    module.exports = class details {

        static async GetAllInstitutionType(Body) {
            try {
                await client.connect();
                const InstitutionTypeCollection = client.db("studz_db").collection("institution_type");

                const result = await InstitutionTypeCollection.find({}).toArray();

                return result;

            } catch (e) {
                console.error(e);
                return "error";
            }
        }
        static async GetAllInstitution(Body) {
            try {
                await client.connect();
                const InstitutionCollection = client.db("studz_db").collection("institution");

                const InstitutionTypeId = new ObjectID(Body.institution_type);

                var filter = { institution_type: InstitutionTypeId };

                // const Projection = InstitutionDS.Details()
                // console.log(Projection);

                const result = await InstitutionCollection.find(filter).toArray();

                return result;

            } catch (e) {
                console.error(e);
                return "error";
            }
        }

        static async GetInstitutionWithId(Body) {
            try {
                // Connect to the MongoDB cluster
                await client.connect();
                const InstitutionCollection = client.db("studz_db").collection("institution");

                const InstitutionId = new ObjectID(Body._id);
                const result = await InstitutionCollection.findOne({ _id: InstitutionId });

                return result;

            } catch (e) {
                console.error(e);
                return "error";
            }
        }

        static async InsertInstitution(Body) {

            try {
                // Connect to the MongoDB cluster
                await client.connect();
                const InstitutionCollection = client.db("studz_db").collection("institution");

                const result = await InstitutionCollection.insertOne(Body)

                return result;

            } catch (e) {
                console.error(e);
                return "error";
            }
        }

        static async UpdateInstitution(Body) {

            try {
                // Connect to the MongoDB cluster
                await client.connect();
                const InstitutionCollection = client.db("studz_db").collection("institution");

                const InstitutionId = new ObjectID(Body.Model._id);

                var filter = { _id: InstitutionId };
                var updates = { $set: { data: Body.Model.data } };

                const result = await InstitutionCollection.updateOne(filter, updates)

                return result;

            } catch (e) {
                console.error(e);
                return "error";
            }
        }
    }
}
main().catch(console.error);