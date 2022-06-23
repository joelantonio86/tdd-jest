const bodyParser = require('body-parser');
// eslint-disable-next-line no-undef
module.exports = (app) => {
    
    app.use(bodyParser.json());
}