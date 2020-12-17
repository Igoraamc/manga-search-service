const jikan = require('jikan-node');

const j = new jikan();

const list = async (req, res) => {
  const { title = '', page = 1, order_by = 'score' } = req.query;
  const params = {
    page,
    order_by,
  }

  const search = await j.search('manga', title, params);
  return res.json(search);
}

const listTopMangas = async (req, res) => {
  const { page = 1, subtype = 'manga' } = req.query;
  const search = await j.findTop('manga', page, subtype);
  return res.json(search);
}

module.exports = { list, listTopMangas }