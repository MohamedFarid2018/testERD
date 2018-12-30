var fs = require('fs');
const express = require('express');
const Router = require('express').Router;
const router = new Router();

const test = require('./routes/test');


router.route('/').get((req, res) => {
    res.json({ message: 'Welcome to full-app-restapi API!' });
});


router.use('/test', test);


// catch 404 and forward to error handler
router.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
router.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});




module.exports = router;