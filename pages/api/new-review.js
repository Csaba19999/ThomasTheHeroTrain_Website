import { MongoClient } from 'mongodb';

async function handelr(req, res) {
  if(req.method === 'POST'){
    const data = req.body;

    const client = await MongoClient.connect('mongodb+srv://Csaba1999:Xls50h..@thomasdcdatabase.64vbjp7.mongodb.net/?retryWrites=true&w=majority');
    const db = client.db();
    const meetupsCollection = db.collection('reviews');

    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close();
    res.status(201).json({messege: 'Reviews Inserted'});
}
}

export default handelr;