const trending = (req, res) => res.render('home', { pageTitle: 'Home' });
const see = (req, res) => res.render('watch', { pageTitle: 'Watch Video' });
const search = (req, res) => res.render('edit', { pageTitle: 'Edit Video' });
const edit = (req, res) => {
  console.log(req.params);
  return res.send('Edit Video');
};
const upload = (req, res) => res.send('Upload Video');
const remove = (req, res) => {
  return res.send('Remove Video');
};

export { trending, upload, search, see, edit, remove };
