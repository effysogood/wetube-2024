const join = (req, res) => res.send('Join');
const login = (req, res) => res.send('Login');
const logout = (req, res) => res.send('Log Out');
const edit = (req, res) => res.send('Edit User');
const remove = (req, res) => res.send('Remobe User');
const see = (req, res) => res.send('See User');

export { join, login, logout, edit, remove, see };
