import React from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import RedFlag from './RedFlag';

const emailData = {
  bankName: "Banco Mais Seguro",
  bankOfficialEmail: "contato@bancoisseguro.com.br",
  phishingSenderName: "Segurança Banco Mais Seguro",
  phishingSenderEmail: "alerta.seguranca@bancoseguro.info",
  recipientName: "Caros clientes",
  recipientEmail: "seuemail@exemplo.com",
  subject: "Alerta Urgente: Tentativa de Acesso Não Autorizado em Sua Conta",
  date: new Date().toLocaleDateString('pt-BR', { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' }),
  ipAddress: "192.168.1.100",
  location: "São Paulo, Brasil (IP desconhecido)",
  phishingLink: "http://seguranca-bancoseguro.xyz/login/validar-dados-urgente"
};

function FakeEmail() {
  const navigate = useNavigate();

  const handleClick = async () => {
    toast.error("⚠️ Isso foi um golpe simulado! Nunca envie dados por e-mail suspeito.");
    await fetch('http://localhost:3001/api/logs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ tipo: 'email' })
    });
    navigate('/tips/email');
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4 font-sans">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-xl">
        <div className="bg-transparent rounded-xl mt-8 mb-8 flex justify-center">
          <h1 className="text-2xl font-bold text-gray-800">
            Golpe - E-mail Falso
          </h1>
        </div>

        <div className="bg-gray-50 p-4 border-b">
          <p className="text-sm text-gray-700">
            <strong>De:</strong> {emailData.phishingSenderName} &lt;
            {emailData.phishingSenderEmail}
            <RedFlag
              number="1"
              description="O domínio do e-mail (bancoseguro.info) não é o oficial do banco (bancoisseguro.com.br). Sempre verifique o domínio.">
            </RedFlag>
          </p>
          <p className="text-sm text-gray-700 mt-1">
            <strong>Para:</strong>
            {emailData.recipientEmail}
          </p>
          <p className="text-sm text-gray-700 mt-1">
            <strong>Assunto:</strong>
            {emailData.subject}
            <RedFlag
              number="2"
              description="Títulos com palavras como 'Urgente', 'Alerta', 'Ação Necessária' tentam criar pânico e forçar um clique.">
            </RedFlag>
          </p>
        </div>

        <div className="p-6 md:p-8">
          <div className="flex items-center justify-start mb-6">
            <span className="text-3xl font-extrabold text-blue-800">
              Banco
            </span>
            <span className="text-3xl font-light text-gray-700">
              MaisSeguro
            </span>
          </div>

          <h1 className="text-2xl md:text-3xl font-bold text-black-700 mb-6">
            Ação Urgente Necessária: Tentativa de Acesso Suspeito à Sua Conta!
            <RedFlag
              number="3"
              description="E-mails legítimos de bancos raramente usam uma linguagem tão alarmante e vermelha para alertas de segurança.">
            </RedFlag>
          </h1>

          <p className="mt-4 text-gray-800 text-base leading-relaxed">
            Prezado(a) {emailData.recipientName},
            <RedFlag
              number="4"
              description="Bancos legítimos geralmente se dirigem a você pelo seu nome completo ou parcial para maior segurança. 'Caros clientes' é uma saudação genérica.">
            </RedFlag>
          </p>

          <p className="mt-4 text-gray-800 text-base leading-relaxed">
            Detectamos uma atividade incomum e não autorizada em sua conta corrente. Por segurança, suas credenciais de acesso foram temporariamente suspensas para evitar fraudes.
          </p>

          <div className="my-6 p-4 bg-red-50 border border-red-200 rounded-md">
            <p className="font-semibold text-red-800 mb-2">Detalhes da Atividade Suspeita:</p>
            <ul className="list-disc list-inside text-sm text-red-700 space-y-1">
              <li>
                <strong>
                  Data/Hora:
                </strong>
                {emailData.date}
              </li>
              <li>
                <strong>
                  IP Suspeito:
                </strong>
                {emailData.ipAddress}
              </li>
              <li>
                <strong>
                  Localização:
                </strong>
                {emailData.location}
              </li>
              <li>
                <strong>
                  Tipo:
                </strong>
                Tentativa de login a partir de dispositivo não reconhecido.
              </li>
            </ul>
          </div>

          <p className="text-gray-800 text-base leading-relaxed mt-4">
            Para a sua segurança e para evitar o bloqueio permanente de sua conta, é imprescindível que você verifique sua identidade IMEDIATAMENTE.
          </p>
          <p className="text-gray-800 text-base leading-relaxed mt-2">
            Sua conta será permanentemente bloqueada e o acesso negado se a verificação não for concluída nas próximas 12 horas.
            <RedFlag
              number="5"
              description="A ameaça de 'bloqueio permanente' ou 'perda de fundos' é uma tática comum para forçar a vítima a agir sem pensar.">
            </RedFlag>
          </p>

          <div className="text-center my-8">
            <a
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleClick}
              className="inline-block bg-gray-700 text-white font-bold text-lg px-8 py-4 rounded-full hover:bg-gray-800 transition-colors shadow-lg"
            >
              Verifique sua Identidade Agora
              <RedFlag
                number="6"
                description="Passe o mouse sobre o botão (ou inspecione o elemento) para ver que o link real (seguranca-bancoseguro.xyz) não pertence ao banco oficial (bancoisseguro.com.br). Sempre verifique o link antes de clicar!">
              </RedFlag>
            </a>
          </div>

          <p className="text-gray-600 text-sm italic mt-8">
            Se você não realizou essa atividade, por favor, clique no botão acima para proteger sua conta. Caso contrário, ignore este e-mail.
          </p>
        </div>

        <div className="bg-gray-50 p-6 text-center text-xs text-gray-500 border-t">
          <p>
            Este é um e-mail de segurança automático. Por favor, não responda a esta mensagem.
          </p>
          <p className="mt-2">
            Para sua segurança, nunca compartilhe suas senhas ou dados bancários por e-mail ou telefone.
          </p>
          <p className="mt-2">
            &copy; {new Date().getFullYear()} {emailData.bankName} S.A. Todos os direitos reservados.
          </p>
          <p className="mt-1">
            Central de Atendimento: 0800-123-4567
          </p>
        </div>

        <div className="bg-transparent rounded-xl mt-8 mb-8 mr-8 flex justify-end">
          <a
            href='/tips/email'
            className="bg-blue-600 text-white font-bold text-lg px-4 py-2 rounded-lg hover:bg-blue-700 transition-transform transform hover:scale-105 shadow-lg"
          >
            Próximo
          </a>
        </div>
      </div>
    </div>
  );
}

export default FakeEmail;
