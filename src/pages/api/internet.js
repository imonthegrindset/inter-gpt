const cheerio = require('cheerio')
const googleIt = require('google-it')


export default async function handler(req, res) {
  const query = req.query.message;

  if (!query) {
    return res.status(400).json({ error: 'Query parameter is required' });
  }

  googleIt({ 'query': `${query}` }).then(results => {
    const links = results.map(result => result.link);
    res.json({ results: links })
  }).catch(e => {
    res.status(500).send('Error')
  })

}

