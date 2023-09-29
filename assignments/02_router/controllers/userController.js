const home = (req, res) => res.send(`Home!`);
const join = (req, res) => res.send(`Join!`);
const login = (req, res) => res.send(`Login!`);
const profile = (req, res) => res.send(`My Profile!`);
const edit = (req, res) => res.send(`Edit Profile!`);
const see = (req, res) => res.send(`See Users!`);

export { home, join, login, profile, edit, see };
