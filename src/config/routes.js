// eslint-disable-next-line no-unused-vars
const app = require("../app");

// eslint-disable-next-line no-undef
module.exports = (app) => {
    
    app.route('/users')
        .get(app.routes.users.findAll);

    app.route('/users')
        .post(app.routes.users.create);
};
