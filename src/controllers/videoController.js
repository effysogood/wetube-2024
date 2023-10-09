const videos = [
  {
    title: 'First Video',
    rating: 5,
    commemts: 2,
    createdAt: '2 minutes ago',
    views: 1,
    id: 1,
  },
  {
    title: 'Second Video',
    rating: 4,
    commemts: 2,
    createdAt: '20 minutes ago',
    views: 40,
    id: 2,
  },
  {
    title: 'Third Video',
    rating: 3,
    commemts: 2,
    createdAt: '1 hour ago',
    views: 555,
    id: 3,
  },
];
const trending = (req, res) => {
  return res.render('home', { pageTitle: 'Home', videos });
};
const watch = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  return res.render('watch', { pageTitle: `Watching ${video.title}`, video });
};
const getEdit = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  return res.render('edit', { pageTitle: `Editing: ${video.title}`, video });
};
const postEdit = (req, res) => {};

export { trending, watch, getEdit, postEdit };
