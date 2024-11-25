
import { OpenAI } from 'openai';
import dotenv from 'dotenv';

dotenv.config();

// OpenAIの設定
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const getDiagnosis = async (req, res, next) => {
  try {
    const { experience, purpose, environment, learningStyle } = req.body;

    const prompt = `
    以下の情報を基に、最適なプログラミング言語を一つだけ推薦してください。

    経験レベル: ${experience}
    目的: ${purpose.join(', ')}
    開発環境: ${environment}
    学習スタイル: ${learningStyle}
    `;

    console.log('Sending OpenAI API request with prompt:', prompt);

    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 400,
    });

    console.log('Received OpenAI API response:', response);

    const recommendation = response.choices[0].message.content.trim();

    res.json({
      recommendedLanguage: recommendation,
      message: ` ${recommendation}`,
    });
  } catch (error) {
    console.error('OpenAI APIエラー:', error);
    res.status(500).json({ message: '診断に失敗しました。' });
  }
};

