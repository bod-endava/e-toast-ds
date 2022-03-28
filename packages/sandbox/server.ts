import express from "express";
import * as path from "path";
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res): void {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT: number = 3000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
