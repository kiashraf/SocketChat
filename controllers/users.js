'use strict';

module.exports = function(_) {
    return {

        SetRouting: function(router) {
            router.get('/', this.indexPage);
            router.get('/signup', this.getSignup);

        },

        indexPage: function(req, res) {

            return res.render('index', { test: 'this is a test page' });

        },
        getSignup: (req, res) => {

            return res.render('signup', { signup: 'this is the signup' });
        }
    }
}