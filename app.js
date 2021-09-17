const express = require('express');
const app = express();
const port = 8080;

bash: q: команду не знайдено
app.get('/', (req, res) => res.send('Hey my dear friend'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
