const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ error: 'サーバーでエラーが発生しました。' });
};

export default errorHandler;