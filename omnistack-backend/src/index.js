const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect(
    "mongodb://gustavolimam:Teste@ds221405.mlab.com:21405/omni-backend",
    {
        useNewUrlParser: true
    }
);

app.use(require("./routes"));

app.listen(3000, () => {
    console.log('Server started on port 3000');
});