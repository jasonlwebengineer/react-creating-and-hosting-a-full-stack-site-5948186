import express from 'express';

const articleInfo = [
  {
    name: 'learn-react',
    upvotes: 0,
    comments: []
  },
  {
    name: 'learn-node',
    upvotes: 2,
    comments: []
  },
  {
    name: 'learn-mongo-db',
    upvotes: 0,
    comments: []
  }
]

const app = express();

app.use(express.json());

app.get('/api/articles/:name', async (req, res) => {
  const { name } = req.params;
  const article = articleInfo.find(a => a.name === req.params.name);
  res.json(article);
});

app.post('/api/articles/:name/upvote', (req, res) => {
  const article = articleInfo.find(a => a.name === req.params.name);
  article.upvotes += 1;
  res.send(`The article ${req.params.name} now has ${article.upvotes} upvotes`);
});

app.post('/api/articles/:name/comments', (req, res) => {
  const { name } = req.params;
  const { postedBy, text } = req.body;
  const article = articleInfo.find(a => a.name === name);

  article.comments.push({
    postedBy,
    text,
  });

  res.json(article.comments);
});

app.listen(8000, function() {
  console.log('server up');
});