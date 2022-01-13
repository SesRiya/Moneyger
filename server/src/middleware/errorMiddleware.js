const errorHandler = (err, req, res, next) => {
    //set error code change 200 to 500(standard error) or status code
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode);
    res.json({ 
        //custom msg
        msg: err?.message,
        //which file error occured
        stack: process.env.NODE_ENV === "production" ? null : err.stack,
    });
};

//not found error handler
const notFound = ( req, res, next) => {
    //create custom error message
    const error = new Error(`Not found -${req?.originalURL}`);
    // statusCode 404 not found
    res.status(404);
    next(error);
};

module.exports = { errorHandler, notFound };