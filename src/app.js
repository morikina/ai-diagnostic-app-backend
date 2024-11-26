import express from 'express';
import cors from 'cors';
import diagnoseRoutes from './routes/diagnoseRoutes.js';
import errorHandler from './middlewares/errorHandler.js';





const app = express();

// リクエストログのミドルウェア
app.use((req, res, next) => {
  console.log(`Request received: ${req.method} ${req.url}`);
  next();
});

// ミドルウェア設定
app.use(cors({
  origin: 'https://ai-diagnostic-app-frontend.onrender.com',
  methods: ['GET', 'POST'],
  credentials: true
}));
app.use(express.json());
app.use('/api', diagnoseRoutes);
app.use(errorHandler);


// テスト用のルート
app.get('/', (req, res) => {
    res.send('バックエンドが動作しています！');
  });

  app.use((req, res, next) => {
    console.log(`Request received: ${req.method} ${req.url}`);
    next();
  });
export default app;
