import { MongoClient, ServerApiVersion } from "mongodb";
export default class MondoDbConections {
    private uri = process.env.URI as string || 'mongodb://db:27017'

    private async firstWayToConect() {
        const client = new MongoClient(this.uri, {
            serverApi: {
                version: ServerApiVersion.v1,
                strict: true,
                deprecationErrors: true
            }
        })
        try {
            await client.connect()
            await client.db('videos').command({ ping: 1 })
            console.log("Pinged your deploumend. You successfully conneced to MongoDb")
        } finally {
            await client.close()
        }
    }
    public main(){
        return this.firstWayToConect()
    }
}

//run().catch(console.dir)