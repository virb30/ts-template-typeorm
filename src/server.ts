import app from './app';

const port = process.env.PORT || 3333;
const host = process.env.HOST || 'localhost';

app.listen(() => {
  console.log(`Server listenning to: http://${host}:${port}`);
});
