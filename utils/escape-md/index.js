let fs = require('fs');
let qs = require('querystring')

fs.readFile('./data/article-en.md', 'utf-8', (err, data) => {
  if (err) throw err;
  console.log(data);
  fs.writeFile('./data/escape-article-en.md', qs.escape(data), (err, data) => {
    if (err) throw err;
    console.log(data);
  })
})
