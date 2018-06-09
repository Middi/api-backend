const express = require('express'),
app = express(),
port = process.env.PORT || 3000,
bodyParser = require('body-parser'),
todoRoutes = require('./routes/todos');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send('Hey there from root');
});

app.use('/api/todos', todoRoutes)

app.listen(port, () => {
    console.log(`App is running on port ${port}`);
});