const express = require("express");
const morgan = require('morgan')
const app = express();
const cors = require('cors');
const port = 5000;
const episodes = './data/episodes.json'
const crowd = './data/playlists.json'

let posts = require(episodes)
let playlist = require(crowd)
let notifications = require("./data/notifications.json")
let settings = require("./data/settings.json")


app.use(cors());
// Body parser
app.use(express.urlencoded({ extended: false }));

// Morgan
app.use(morgan('tiny'))

var html = "<!DOCTYPE html>\n<html>\n    <head>\n    </head>\n <body>\n      <h1>TKMSHOW EXPRESS REST API</h1>\n  \n <h3>API ENDPOINTS</h3> <script src='https://gist.github.com/bmnidhin/2b6b06974246a2a8254061383b0ba726.js'></script></body>\n</html>";
// Home route
app.get("/", (req, res) => {
    res.send(html);
  });

/* All posts */
app.get("/listen", function(req, res, next) {

    res.json(posts);
  });
/* A post by id */
app.get('/listen/:slug',  function (req, res) {
    const slug = req.params.slug
    const row = posts.find(r => r.slug == slug)  
    
    res.json(row)
    
})

app.get("/playlist", function(req, res, next) {

    res.json(playlist);
  });
/* A post by id */
app.get('/playlist/:slug',  function (req, res) {
    const slug = req.params.slug
    const row = playlist.find(r => r.slug == slug)  
    
    res.json(row)
    
})

app.get("/settings", function(req, res, next) {

    res.json(settings);
  });

  app.get("/notifications", function(req, res, next) {

    res.json(notifications);
  });
 

// Listen on port 5000
app.listen(port, () => {
  console.log(`Server is booming on port 5000
Visit http://localhost:5000`);
});
