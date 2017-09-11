const passport = require('passport');

const addRoutes = (app) => {
    app.get('/', (req, res) => {
        res.send({hi: 'there'});
    });

    app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email']
    }));

    app.get('/auth/google/callback', passport.authenticate('google'));

    app.get('/other', (req, res) => {
        res.send(process.env);
    });
};

module.exports = addRoutes;
