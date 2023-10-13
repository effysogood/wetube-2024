import Video from "../models/Video";

const home = async (req, res) => {
  try {
    const videos = await Video.find({});
    return res.render("home", { pageTitle: "Home", videos });
  } catch {
    return res.render("server-error");
  }
};
const watch = (req, res) => {
  const { id } = req.params;
  return res.render("watch", { pageTitle: `Watching Video` });
};
const getEdit = (req, res) => {
  const { id } = req.params;
  return res.render("edit", { pageTitle: `Editing Video` });
};
const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  return res.redirect(`/videos/${id}`);
};
const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: `Upload Video` });
};
const postUpload = (req, res) => {
  const { title } = req.body;
  return res.redirect("/");
};

export { home, watch, getEdit, postEdit, getUpload, postUpload };
