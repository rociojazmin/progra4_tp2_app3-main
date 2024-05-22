import express from 'express';
import bodyParser from 'body-parser';
import router from './vista';

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use('/api', router);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
