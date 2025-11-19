import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, Home, Trophy, BookOpen } from 'lucide-react';

function ThankYou() {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 min-h-screen flex items-center justify-center p-4">
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/50 p-8 md:p-12 max-w-2xl w-full">
        <div className="text-center">
          <div className="mb-6 flex justify-center">
            <div className="bg-gradient-to-r from-green-400 to-green-600 rounded-full p-6 shadow-lg">
              <CheckCircle className="w-16 h-16 text-white" />
            </div>
          </div>

          <h1 className="text-4xl font-bold text-slate-800 mb-4">
            Parabéns! 🎉
          </h1>

          <p className="text-xl text-slate-700 mb-6">
            Você concluiu o Quiz de Segurança Online!
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-lg mb-8">
            <p className="text-slate-700 text-left">
              <strong>Obrigado por participar!</strong> Esperamos que este quiz tenha ajudado você a 
              aprender mais sobre como se proteger contra golpes online. Lembre-se: a informação é 
              sua melhor defesa contra fraudes digitais.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200">
              <Trophy className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <h3 className="font-semibold text-slate-800 mb-1">Conhecimento</h3>
              <p className="text-sm text-slate-600">Adquirido</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg border border-green-200">
              <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <h3 className="font-semibold text-slate-800 mb-1">Segurança</h3>
              <p className="text-sm text-slate-600">Fortalecida</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg border border-purple-200">
              <BookOpen className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <h3 className="font-semibold text-slate-800 mb-1">Aprendizado</h3>
              <p className="text-sm text-slate-600">Contínuo</p>
            </div>
          </div>

          <div className="space-y-4">
            <button
              onClick={() => navigate('/')}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white font-bold px-8 py-4 rounded-lg hover:scale-105 transition-transform shadow-lg flex items-center justify-center gap-2"
            >
              <Home className="w-5 h-5" />
              Voltar para Página Inicial
            </button>

            <button
              onClick={() => navigate('/quiz')}
              className="w-full bg-gradient-to-r from-gray-600 to-gray-800 text-white font-bold px-8 py-4 rounded-lg hover:scale-105 transition-transform shadow-lg"
            >
              Refazer o Quiz
            </button>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-slate-600">
              Continue praticando e compartilhe este conhecimento com amigos e familiares!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThankYou;