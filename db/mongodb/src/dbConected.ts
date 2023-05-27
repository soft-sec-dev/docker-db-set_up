import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.ME_CONFIG_MONGODB_URL as string

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true
    }
})

export default async function run() {
    try {
        client.connect()
        await client.db("admin").command({ ping: 1 })
        console.log("Pinged your deployment. You successfully connected to MongoDB!")
    } finally {
        await client.close()
    }
}

//run().catch(console.dir)