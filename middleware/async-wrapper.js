// Purpose: Lessen boiler plate code of try-catch block.
// This will be the wrapper for all try-catch block in controllers

const asyncWrapper = fn => {
  return async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch (error) {
      next(error);
    }
  };
};

module.exports = asyncWrapper;
