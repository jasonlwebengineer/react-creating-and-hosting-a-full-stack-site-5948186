import express from 'express';
import { MongoClient, ReturnDocument } from 'mongodb'


const app = express();

app.use(express.json());

let db;

async function connetToDB() {
  const url = `mongodb+srv://jasonlwebengineer:ZHEGxd7ojBviuADv@cluster0.xzus52o.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
  const client = new MongoClient(url);
  await client.connect();
  db = client.db('full-stack-react-db');
}

app.get('/api/articles/:name', async function(req, res) {
  const { name } = req.params;
  const article = await db.collection('articles').findOne({ name })
  res.json(article);
});

app.post('/api/articles/:name/upvote', async (req, res) => {
  const { name } = req.params;
  const updatedArticle = await db.collection('articles').findOneAndUpdate(
    { name }, 
    { $inc: { upvotes: 1 }},
    { returnDocument: "after" });

  res.json(updatedArticle)
});

app.post('/api/articles/:name/comments', async (req, res) => {
  const { name } = req.params;
  const { postedBy, text } = req.body;
  const newComment = { postedBy, text }

  const updatedArticle = await db.collection('articles').findOneAndUpdate({ name }, 
    { $push: { comments: newComment }},
    { returnDocument: "after" });

  res.json(updatedArticle);   
});

async function start() {
  await connetToDB();
  app.listen(8000, function() {
    console.log('server up');
  });
}

start();