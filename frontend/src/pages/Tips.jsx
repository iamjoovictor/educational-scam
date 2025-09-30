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
      <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
        <h2 className="text-xl font-bold mb-4">
          Dicas para evitar golpes de {tips.title}
        </h2>
        <ul className="list-disc pl-5 space-y-2">
          {
            tips.value.map((tip, i) =>
              <li key={i}>{tip}</li>)
          }
        </ul>

        <div className="bg-transparent rounded-xl mt-8 flex justify-end">
          <button
            onClick={handleClick}
            className={`${type == 'payment' ? "bg-green-600 hover:bg-green-700" : "bg-blue-600 hover:bg-blue-700"} text-white font-bold text-lg px-4 py-2 rounded-lg transition-transform transform hover:scale-105 shadow-lg`}
          >
            {tips.nextButton}
          </button>
        </div>
      </div>
    </>
  );
}

export default Tips;