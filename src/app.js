const app = require('express')();
const consign = require('consign');
const knex = require('knex');
const knexfile = require('../knexfile');

//TODO criar chaveamento dinamic
app.db = knex(knexfile.test);

consign({ cwd: 'src', verbose: false})
  .include ('./config/middlewares.js')
  .then('./routes')
  .then('./config/routes.js')
  .into(app);

app.get('/', (req, res) => {
    res.status(200).send();
});


// eslint-disable-next-line no-undef
module.exports = app;