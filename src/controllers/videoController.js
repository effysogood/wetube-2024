const trending = (req, res) => res.send('Trending Videos');
const watch = (req, res) => res.send('Watch Video');
const edit = (req, res) => res.send('Edit Video');

export { trending, watch, edit };
