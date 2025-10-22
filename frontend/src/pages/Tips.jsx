import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const TipsMap = {
  purchase: {
    title: 'Compra',
    value: [
      "Desconfie de preços muito abaixo do mercado.",
      "Verifique se o site tem cadeado de segurança.",
      "Evite sites desconhecidos ou sem reputação."
    ],
    next: '/simulations/email',
    nextButton: 'Próximo'
  },
  email: {
    title: 'E-mail',
    value: [
      "Bancos nunca pedem dados por e-mail.",
      "Verifique o remetente e erros de português.",
      "Passe o mouse sobre links antes de clicar."
    ],
    next: '/simulations/payment',
    nextButton: 'Próximo'
  },
  payment: {
    title: 'Pagamentos',
    value: [
      "Compare o código do pagamneto com o site oficial.",
      "Evite pagar pix ou boletos enviados por e-mail sem verificação.",
      "Use apps oficiais para escanear QR Codes."
    ],
    next: '/',
    nextButton: 'Finalizar'
  }
};

function Tips() {
  const navigate = useNavigate();

  const { type } = useParams();
  const tips = TipsMap[type] || [];

  function handleClick() {
    if (type == 'payment') {
      toast.success('Nossas simulações chegaram ao fim, obrigado por utilizar nossa plataforma.');

      navigate(tips.next)
    }

    else {
      navigate(tips.next);
    }
  }

  return (
    <>
      <div className="bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 min-h-screen">
        <main className="container mx-auto max-w-4xl p-4 sm:p-6 lg:p-8">
          <div className="bg-transparent rounded-xl mt-8 mb-8 flex justify-center">
            <h1 className="text-2xl font-bold text-slate-800">
              Dicas de Segurança - Golpes de {tips.title}
            </h1>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-2xl border border-white/50 p-6 md:p-8">
            <div className="space-y-6">
              {tips.value.map((tip, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg border border-blue-100 bg-blue-50/50 backdrop-blur-sm hover:shadow-md transition-all"
                >
                  <h3 className="text-lg font-semibold text-slate-800 mb-2 flex items-center gap-2">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-r from-blue-600 to-blue-800 text-white text-sm">
                      {index + 1}
                    </span>
                    {tip}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-transparent rounded-xl mt-8 flex justify-end">
            <button
              onClick={handleClick}
              className={`${type == 'payment' ? "bg-green-600 hover:bg-green-700" : "bg-blue-600 hover:bg-blue-700"} text-white font-bold text-lg px-4 py-2 rounded-lg transition-transform transform hover:scale-105 shadow-lg`}
            >
              {tips.nextButton}
            </button>
          </div>
        </main>
      </div>
    </>
  );
}

export default Tips;