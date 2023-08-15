'use-strict';

const express = require('express'); //importing express library
//Constants
const port = 8080;
const host = '0.0.0.0';

const path = require('path'); //importing path library

const app = express(); //creating app variable with express

app.use("/frontend", express.static(path.resolve(__dirname, "frontend")));

app.get("/*", (req, res) => {
    res.sendFile(path.resolve("frontend", "index.html")); //any route or path, we go back to the root and fetch the files to output to html

});

/*app.listen(process.env.PORT || 5060, () => console.log("server running..."));*/
app.listen(port, host, () => {
    console.log(`Running on http://${host}:${port}`);
  });