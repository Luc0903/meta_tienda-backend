const sendErrorDev = (err, res) => {
    res.status(err.statusCode).json({
      status: err.status,
      error: err,
      name: err.name,
      message: err.message,
      stack: err.stack,
    });
  };
  
  export default (err, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';
  
    sendErrorDev(err, res);
  };