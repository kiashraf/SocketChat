'use strict';

module.exports = function(_, passport, user) {
    return {

        SetRouting: function(router) {
            router.get('/', this.indexPage);
            router.post('/', user.LoginValidation, this.postLogin);
            router.get('/signup', this.getSignup);
            router.post('/signup', user.SignupValidation, this.postSignup);

            router.get('/home', this.getHomePage);

        },

        indexPage: function(req, res) {

            const errors = req.flash('error');
            return res.render('index', {
                signup: 'this is the signup',
                title: 'Football | Login',
                messages: errors,
                hasErrors: errors.length > 0
            });
        },

        postLogin: passport.authenticate('local.login', {
            successRedirect: '/home',
            failureRedirect: '/',
            failureFlash: true

        }),

        getSignup: (req, res) => {

            const errors = req.flash('error');
            return res.render('signup', {
                signup: 'this is the signup',
                title: 'Football | Login',
                messages: errors,
                hasErrors: errors.length > 0
            });
        },
        postSignup: passport.authenticate('local.signup', {
            successRedirect: '/home',
            failureRedirect: '/signup',
            failureFlash: true

        }),
        getHomePage: (req, res) => {
            return res.render('home');
        }
    }
}