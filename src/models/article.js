const fetch = require('node-fetch');

module.exports = class Article {
  constructor(params = {}) {
    this.id = params.id;
    this.title = params.title;
    this.body = params.body;
    this.userId = params.userId;
  }

  static async all() {
    // real fake articles from an internet Database
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const json = await response.json();
    return json.map((article) => new Article(article));
  }
};