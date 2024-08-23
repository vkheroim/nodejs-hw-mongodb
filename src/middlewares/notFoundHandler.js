// src/middlewares/notFoundHandler.js
export const handleNotFound = (req, res) => {
  res.status(404).json({
    status: 404,
    message: 'Route not found',
  });
};
