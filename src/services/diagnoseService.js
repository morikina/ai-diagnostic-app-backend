exports.getRecommendation = ({ experience, purpose, environment, learningStyle }) => {
    if (experience === '初心者' && purpose.includes('Web開発')) {
      return {
        language: 'JavaScript',
        message: 'JavaScriptは初心者におすすめです！',
        imageUrl: '/images/javascript.png',
      };
    }
    // 他の診断ロジックもここに追加
    return {
      language: 'C++',
      message: 'C++は汎用性の高いプログラミング言語です。',
      imageUrl: '/images/cpp.png',
    };
  };
  