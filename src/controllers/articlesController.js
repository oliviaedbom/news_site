/*
Hapi allows you to use promises!
This file does 2 important things:

since the index function is written as async index we are dealing with a function that is a promise.
we are reply.view()-ing. So we’re not just rendering json or text, but we’re going to actually make html views in a bit. 
*/

const Article = require('../models/article');

module.exports = {
  async index(_request, reply) {
    const articles = await Article.all();

    return reply.view('articles/index', { articles });
  },
};