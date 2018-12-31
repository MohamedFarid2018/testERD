var fs = require('fs');
const express = require('express');
const Router = require('express').Router;
const router = new Router();
const testEjabi = require('./routes/testEjabi');
const testNeed = require('./routes//testNeed');


router.route('/').get((req, res) => {
    res.json({ message: 'Welcome to our ERD Testing API!' });
});


router.use('/testEjabi', testEjabi);
router.use('/testNeed', testNeed);


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