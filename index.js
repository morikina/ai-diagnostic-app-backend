const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

// ミドルウェア設定
app.use(cors());
app.use(bodyParser.json());

// 簡易テスト用のエンドポイント
app.get('/', (req, res) => {
  res.send('AI診断バックエンドが動作しています！');
});

// サーバーの起動
app.listen(PORT, () => {
  console.log(`サーバーがポート ${PORT} で起動しました`);
});
