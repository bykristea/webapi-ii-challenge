const express = require('express');

const PostsRouter = require('./data/posts-router.js')

const server = express();

server.use(express.json());
// server.use('/api/posts', PostsRouter);

server.get('/', (req, res) => {
    res.send(`
    <h2>Welcome to the world of Lord of the Rings</h2>
    <p>"One Ring to rule them all, One Ring to find them,
    One Ring to bring them all and in the darkness bind them.
    In the Land of Mordor where the Shadows lie.”</p>
    `);
});


module.exports = server;