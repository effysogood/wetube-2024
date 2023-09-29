const trending = (req, res) => res.send(`Trending!`);
const upload = (req, res) => res.send(`New Contents!`);
const see = (req, res) => {
  return res.send(`Watch Contents #${req.params.id}!`);
};
const edit = (req, res) => res.send(`Edit Contents!`);
const remove = (req, res) => res.send(`Remove Contents!`);

export { trending, upload, see, edit, remove };
