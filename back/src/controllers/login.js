






const users = require('../utils/users')

module.exports = (req, res) => { 
  // req.query = { email: '', password: ''}
  // host/rickandmorty/login?email=&password=123
  const { email, password } = req.query;
  let access = false;

  users.forEach(user => {
    if (
      user.email === email && user.password === password
    ) access = true;
  })

  return res.json({ access });
}

