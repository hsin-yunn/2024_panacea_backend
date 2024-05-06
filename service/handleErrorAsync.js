const handleErrorAsync = (fun) => {
  return function (req, res, next) {
    return fun(req, res, next).catch((err) => next(err));
  };
};

module.exports = handleErrorAsync;
