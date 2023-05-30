import express, { Request, Response } from 'express';

const app = express();

function handleRequest(req: Request, res: Response) {
  res.json('Hello World');
}

app.get('/', handleRequest);

app.get('/api/message', (req, res) => {
  res.json('Hello from the API!');
});

app.listen(3000, () => console.log('Server running on port 3000'));
