import app from './app';

const port = process.env.PORT;

app.listen(port, () =>
  // eslint-disable-next-line no-console
  console.log(`Example app listening at http://localhost:${port}`)
);
