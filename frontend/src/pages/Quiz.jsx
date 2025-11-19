import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, XCircle, Award, AlertCircle } from 'lucide-react';

const quizQuestions = [
  {
    id: 1,
    question: "Qual é o principal sinal de um e-mail de phishing?",
    options: [
      "E-mail vindo de um domínio oficial",
      "Solicitação urgente de informações pessoais",
      "Mensagem bem escrita sem erros",
      "Link para o site oficial da empresa"
    ],
    correctAnswer: 1,
    explanation: "E-mails de phishing geralmente criam senso de urgência para que você forneça informações pessoais rapidamente, sem pensar."
  },
  {
    id: 2,
    question: "Ao receber uma oferta com desconto muito alto em um site desconhecido, você deve:",
    options: [
      "Comprar imediatamente antes que acabe",
      "Verificar a reputação do site e comparar preços",
      "Compartilhar com amigos",
      "Confiar se o site aceitar cartão de crédito"
    ],
    correctAnswer: 1,
    explanation: "Sempre verifique a reputação do site, leia avaliações e compare preços antes de comprar, especialmente com descontos muito altos."
  },
  {
    id: 3,
    question: "O que você deve verificar antes de inserir dados pessoais em um site?",
    options: [
      "Se o site tem muitas cores",
      "Se a URL começa com HTTPS e tem cadeado",
      "Se o site tem muitas propagandas",
      "Se o site carrega rápido"
    ],
    correctAnswer: 1,
    explanation: "O HTTPS (com cadeado) indica que a conexão é criptografada e mais segura para transmitir dados sensíveis."
  },
  {
    id: 4,
    question: "Qual é uma característica comum de sites fraudulentos?",
    options: [
      "Design profissional e moderno",
      "URLs com erros ortográficos ou domínios estranhos",
      "Presença nas redes sociais",
      "Política de privacidade detalhada"
    ],
    correctAnswer: 1,
    explanation: "Sites fraudulentos frequentemente usam URLs similares às originais, mas com pequenos erros ou domínios suspeitos."
  },
  {
    id: 5,
    question: "Ao fazer pagamentos online, qual método é mais seguro?",
    options: [
      "Transferência bancária direta",
      "PIX para pessoa física desconhecida",
      "Cartão de crédito em sites confiáveis",
      "Enviar dinheiro em espécie"
    ],
    correctAnswer: 2,
    explanation: "Cartão de crédito oferece proteção ao consumidor e possibilidade de contestação, enquanto PIX e transferências são irreversíveis."
  },
  {
    id: 6,
    question: "O que você deve fazer se receber um e-mail suspeito do seu banco?",
    options: [
      "Clicar nos links e verificar",
      "Responder o e-mail imediatamente",
      "Entrar em contato com o banco pelos canais oficiais",
      "Ignorar completamente"
    ],
    correctAnswer: 2,
    explanation: "Sempre entre em contato com instituições financeiras através de canais oficiais, nunca por links em e-mails."
  },
  {
    id: 7,
    question: "Qual informação NÃO deve ser compartilhada em redes sociais?",
    options: [
      "Fotos de viagens após retornar",
      "Localização em tempo real e rotina diária",
      "Hobbies e interesses",
      "Opiniões sobre filmes"
    ],
    correctAnswer: 1,
    explanation: "Compartilhar localização e rotina em tempo real pode expor você a riscos de segurança física e digital."
  },
  {
    id: 8,
    question: "Como identificar um site de compras confiável?",
    options: [
      "Apenas pelo design bonito",
      "Por ter muitos anúncios",
      "Avaliações de clientes, CNPJ, políticas claras",
      "Por oferecer os preços mais baixos"
    ],
    correctAnswer: 2,
    explanation: "Sites confiáveis têm informações claras sobre a empresa (CNPJ), avaliações verificadas e políticas de troca/devolução."
  },
  {
    id: 9,
    question: "O que fazer se você suspeitar que caiu em um golpe?",
    options: [
      "Esperar para ver o que acontece",
      "Deletar todas as evidências",
      "Contactar banco, registrar boletim e mudar senhas",
      "Tentar resolver sozinho com o golpista"
    ],
    correctAnswer: 2,
    explanation: "Aja rapidamente: contate seu banco, mude senhas, registre um boletim de ocorrência e guarde todas as evidências."
  },
  {
    id: 10,
    question: "Qual é a melhor forma de criar senhas seguras?",
    options: [
      "Usar a mesma senha em todos os sites",
      "Usar datas de nascimento",
      "Combinação de letras, números e símbolos únicos",
      "Usar palavras do dicionário"
    ],
    correctAnswer: 2,
    explanation: "Senhas fortes combinam letras maiúsculas e minúsculas, números e símbolos, sendo únicas para cada serviço."
  }
];

const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const shuffleOptions = (question) => {
  const optionsWithIndex = question.options.map((option, index) => ({
    text: option,
    originalIndex: index
  }));
  
  const shuffledOptions = shuffleArray(optionsWithIndex);
  
  return {
    ...question,
    options: shuffledOptions.map(opt => opt.text),
    correctAnswer: shuffledOptions.findIndex(opt => opt.originalIndex === question.correctAnswer)
  };
};

function Quiz() {
  const navigate = useNavigate();
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  useEffect(() => {
    const shuffled = shuffleArray(quizQuestions).map(question => shuffleOptions(question));
    setShuffledQuestions(shuffled);
  }, []);

  const handleAnswerSelect = (optionIndex) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestion]: optionIndex
    });
    setShowExplanation(true);
  };

  const handleNext = () => {
    setShowExplanation(false);
    if (currentQuestion < shuffledQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    setShowExplanation(false);
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateScore = () => {
    let correct = 0;
    shuffledQuestions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correctAnswer) {
        correct++;
      }
    });
    return correct;
  };

  const getScoreMessage = (score) => {
    const percentage = (score / shuffledQuestions.length) * 100;
    if (percentage >= 90) return "Excelente! Você está muito bem preparado!";
    if (percentage >= 70) return "Muito bom! Continue aprendendo sobre segurança.";
    if (percentage >= 50) return "Bom trabalho! Há espaço para melhorar.";
    return "Continue estudando! A prática leva à perfeição.";
  };

  const handleRestart = () => {
    const shuffled = shuffleArray(quizQuestions).map(question => shuffleOptions(question));
    setShuffledQuestions(shuffled);
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setShowResults(false);
    setShowExplanation(false);
  };

  if (shuffledQuestions.length === 0) {
    return (
      <div className="bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600 mx-auto mb-4"></div>
          <p className="text-slate-600 font-semibold">Preparando o quiz...</p>
        </div>
      </div>
    );
  }

  if (showResults) {
    const score = calculateScore();
    const percentage = (score / shuffledQuestions.length) * 100;

    return (
      <div className="bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 min-h-screen">
        <main className="container mx-auto max-w-4xl p-4 sm:p-6 lg:p-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-2xl border border-white/50 p-8 mt-8">
            <div className="text-center mb-8">
              <Award className="w-20 h-20 mx-auto text-blue-600 mb-4" />
              <h1 className="text-3xl font-bold text-slate-800 mb-2">Quiz Concluído!</h1>
              <p className="text-xl text-slate-600">
                Você acertou <span className="font-bold text-blue-600">{score}</span> de{' '}
                <span className="font-bold">{shuffledQuestions.length}</span> questões
              </p>
              <p className="text-lg text-slate-600 mt-2">({percentage.toFixed(0)}%)</p>
              <p className="text-lg text-slate-700 mt-4 font-semibold">{getScoreMessage(score)}</p>
            </div>

            <div className="space-y-4 mb-8">
              {shuffledQuestions.map((question, index) => {
                const userAnswer = selectedAnswers[index];
                const isCorrect = userAnswer === question.correctAnswer;

                return (
                  <div
                    key={question.id}
                    className={`p-4 rounded-lg border-2 ${
                      isCorrect
                        ? 'bg-green-50 border-green-300'
                        : 'bg-red-50 border-red-300'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      {isCorrect ? (
                        <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                      ) : (
                        <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                      )}
                      <div className="flex-1">
                        <p className="font-semibold text-slate-800 mb-2">
                          {index + 1}. {question.question}
                        </p>
                        <p className="text-sm text-slate-600">
                          <span className="font-semibold">Sua resposta:</span>{' '}
                          {question.options[userAnswer]}
                        </p>
                        {!isCorrect && (
                          <p className="text-sm text-slate-600 mt-1">
                            <span className="font-semibold">Resposta correta:</span>{' '}
                            {question.options[question.correctAnswer]}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex gap-4 justify-center">
              <button
                onClick={handleRestart}
                className="bg-gradient-to-r from-blue-600 to-blue-800 text-white font-bold px-6 py-3 rounded-lg hover:scale-105 transition-transform shadow-lg"
              >
                Refazer Quiz
              </button>
              <button
                onClick={() => navigate('/thankyou')}
                className="bg-gradient-to-r from-green-600 to-green-800 text-white font-bold px-6 py-3 rounded-lg hover:scale-105 transition-transform shadow-lg"
              >
                Finalizar
              </button>
            </div>
          </div>
        </main>
      </div>
    );
  }

  const question = shuffledQuestions[currentQuestion];
  const selectedAnswer = selectedAnswers[currentQuestion];
  const isAnswered = selectedAnswer !== undefined;

  return (
    <div className="bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 min-h-screen">
      <main className="container mx-auto max-w-4xl p-4 sm:p-6 lg:p-8">
        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-2xl border border-white/50 p-8 mt-8">
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-2xl font-bold text-slate-800">Quiz de Segurança Online</h1>
              <span className="text-sm font-semibold text-slate-600 bg-blue-100 px-3 py-1 rounded-full">
                Questão {currentQuestion + 1} de {shuffledQuestions.length}
              </span>
            </div>
            <div className="w-full bg-blue-100 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-blue-600 to-blue-800 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / shuffledQuestions.length) * 100}%` }}
              />
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-slate-800 mb-6">{question.question}</h2>

            <div className="space-y-3">
              {question.options.map((option, index) => {
                const isSelected = selectedAnswer === index;
                const isCorrect = index === question.correctAnswer;
                const showCorrectAnswer = isAnswered && isCorrect;
                const showWrongAnswer = isAnswered && isSelected && !isCorrect;

                return (
                  <button
                    key={index}
                    onClick={() => !isAnswered && handleAnswerSelect(index)}
                    disabled={isAnswered}
                    className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                      showCorrectAnswer
                        ? 'bg-green-50 border-green-500 cursor-not-allowed'
                        : showWrongAnswer
                        ? 'bg-red-50 border-red-500 cursor-not-allowed'
                        : isSelected
                        ? 'bg-blue-50 border-blue-500'
                        : 'bg-white border-gray-300 hover:border-blue-400 hover:bg-blue-50'
                    } ${isAnswered ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-slate-800">{option}</span>
                      {showCorrectAnswer && (
                        <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                      )}
                      {showWrongAnswer && (
                        <XCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {showExplanation && (
            <div className="mb-6 p-4 bg-blue-50 border-l-4 border-blue-600 rounded-r-lg">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-slate-800 mb-1">Explicação:</h3>
                  <p className="text-slate-700">{question.explanation}</p>
                </div>
              </div>
            </div>
          )}

          <div className="flex justify-between items-center">
            <button
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className={`px-6 py-3 rounded-lg font-bold transition-all ${
                currentQuestion === 0
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-gradient-to-r from-gray-600 to-gray-800 text-white hover:scale-105 shadow-lg'
              }`}
            >
              Anterior
            </button>

            <button
              onClick={handleNext}
              disabled={!isAnswered}
              className={`px-6 py-3 rounded-lg font-bold transition-all ${
                !isAnswered
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-gradient-to-r from-blue-600 to-blue-800 text-white hover:scale-105 shadow-lg'
              }`}
            >
              {currentQuestion === shuffledQuestions.length - 1 ? 'Ver Resultados' : 'Próxima'}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Quiz;