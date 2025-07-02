import express, { text } from 'express';

const articleInfo = [
  {
    name: 'learn-react',
    upvotes: 0,
    comments: [
      {
        postedBy: "Dark Helmet",
        text: "Evil will always win because good is dumb."
      }
    ]
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
  const article = articleInfo.find(a => a.name === req.params.name);
  res.json(article);
});

app.post('/api/articles/:name/upvote', (req, res) => {
  const article = articleInfo.find(a => a.name === req.params.name);
  article.upvotes += 1;
  res.send(article);
});

app.post('/api/articles/:name/comments', (req, res) => {
  const { name } = req.params;
  const { postedBy, text } = req.body;
  const newComment = { postedBy, text }
  const article = articleInfo.find(a => a.name === name);

  article.comments.push(newComment);

  res.json(article.comments);
});

app.listen(8000, function() {
  console.log('server up');
});