const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect(
    "mongodb://goweek:goweek123@ds017584.mlab.com:17584/omnistack-backend-rocketseat",
    {
        useNewUrlParser: true
    }
);

app.use(require("./routes"));

app.listen(3000, () => {
    console.log('Server started on port 3000');
});