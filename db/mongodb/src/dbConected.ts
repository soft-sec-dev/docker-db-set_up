import {Collection, Db, MongoClient,ServerApiVersion } from "mongodb";
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

    private async secontWayToConectdb(){
        const client = new MongoClient(this.uri)
        try{
                const database = client.db('sample_example')
                const movies = database.collection("movies")

                //? Query
                const query = {title: 'Fist movies'}
                const movie = await movies.insertOne(query)
        }finally{
            client.close()
        }
    }

    //? Create the conection and create the dbName and return this
    private async thirdWayToConnectdb(){
        return MongoClient.connect(this.uri)
            .then(client => {
                const db = client.db('nuevos-videos')
                return db
            })
    }

    private async thirdWayToConnectdbHelper1(db:Db){
        const videos_collections = db.collection('primer-nuevo_video')
        videos_collections.insertOne({title:'Hello World'})
            .then(()=>{
                console.log('Video anadido')
            })
    }

    public main(){
        return this.thirdWayToConnectdb()
        .then((db)=>{
                return this.thirdWayToConnectdbHelper1(db)
        })
    }
}

//run().catch(console.dir)