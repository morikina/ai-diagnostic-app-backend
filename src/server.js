import app from './app.js'; // app.jsからインポート
import dotenv from 'dotenv';
const PORT = process.env.PORT || 5000;

// サーバーを起動
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
