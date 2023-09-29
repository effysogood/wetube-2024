const trending = (req, res) => res.send('Trending Videos');
const see = (req, res) => {
  return res.send(`Watch Video #${req.params.id}`);
};
const search = (req, res) => res.send('Search Videos');
const edit = (req, res) => {
  console.log(req.params);
  return res.send('Edit Video');
};
const upload = (req, res) => res.send('Upload Video');
const remove = (req, res) => {
  return res.send('Remove Video');
};

export { trending, upload, search, see, edit, remove };
