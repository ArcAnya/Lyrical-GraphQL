const app = require('./server/server');
const PORT = 4000

app.listen(PORT, () => {
  console.log('Listening on port: ', PORT);
});