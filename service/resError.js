const resErrorProd = function (err, res) {
  if (err.isOperational) {
    res.status(err.statusCode).json({
      message: err.message,
    });
  } else {
    console.error('error', err);
    res.status(500).json({
      code: 500,
      message: 'Server Error',
    });
  }
};
const resErrorDev = function (err, res) {
  res.status(err.statusCode).json({
    message: err.message,
    error: err,
    code: err.StatusCode,
  });
};

module.exports = {
  resErrorProd,
  resErrorDev,
};
