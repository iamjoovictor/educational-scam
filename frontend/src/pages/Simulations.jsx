import React from 'react';
import { ShieldCheck, Search, MousePointerSquareDashed, AlertTriangle } from 'lucide-react';

function Simulations() {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 font-sans text-slate-800">
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white text-center py-20 px-6 shadow-xl">
        <div className="max-w-4xl mx-auto">
          <ShieldCheck size={64} className="mx-auto mb-4 text-white/80" />
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Navegue com Confiança na Era Digital
          </h1>
          <p className="mt-4 text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Uma plataforma de treinamento para identificar e evitar os golpes online mais comuns, em um ambiente 100% seguro e educativo.
          </p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-6 md:p-12">
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-2 text-slate-800">Nossa Missão</h2>
          <p className="text-center text-slate-600 mb-8">O conhecimento é a sua melhor defesa.</p>
          <p className="text-lg leading-relaxed text-justify text-slate-700">
            Golpes online estão cada vez mais sofisticados. E-mails de phishing, lojas falsas e páginas de pagamento fraudulentas são criados para parecerem perfeitamente legítimos, enganando até os usuários mais atentos. Nosso objetivo é simples: **capacitar você**. Através de simulações interativas e realistas, ensinamos você a identificar os sinais de alerta que os golpistas não querem que você veja.
          </p>
        </section>

        <section className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-2xl border border-white/50 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-slate-800">Como Funciona?</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-full p-4 mb-4 shadow-lg">
                <MousePointerSquareDashed size={40} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-slate-800">1. Explore as Simulações</h3>
              <p className="text-slate-600">
                Interaja com réplicas de sites, e-mails e telas de pagamento fraudulentas, criadas com base em golpes reais.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-full p-4 mb-4 shadow-lg">
                <Search size={40} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-slate-800">2. Identifique os Sinais</h3>
              <p className="text-slate-600">
                Nossas simulações destacam os "sinais de alerta" (red flags) em cada cenário, como links suspeitos e dados de pagamento incorretos.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-full p-4 mb-4 shadow-lg">
                <ShieldCheck size={40} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-slate-800">3. Aprenda a se Proteger</h3>
              <p className="text-slate-600">
                Com a prática, você desenvolve um olhar crítico para reconhecer tentativas de golpe antes que elas possam causar danos.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-slate-800">Cenários que Você Vai Aprender a Identificar</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-blue-50 text-blue-800 font-medium px-4 py-2 rounded-full flex items-center gap-2 border border-blue-200">
              <AlertTriangle size={16} className="text-blue-600" />
              Lojas Falsas (E-commerce)
            </span>
            <span className="bg-blue-50 text-blue-800 font-medium px-4 py-2 rounded-full flex items-center gap-2 border border-blue-200">
              <AlertTriangle size={16} className="text-blue-600" />
              E-mails de Phishing Bancário
            </span>
            <span className="bg-blue-50 text-blue-800 font-medium px-4 py-2 rounded-full flex items-center gap-2 border border-blue-200">
              <AlertTriangle size={16} className="text-blue-600" />
              Páginas de Pagamento PIX/Boleto
            </span>
          </div>
        </section>

        <section className="text-center bg-white/80 backdrop-blur-sm p-10 rounded-xl shadow-2xl border border-white/50">
          <h2 className="text-3xl font-bold mb-4 text-slate-800">Pronto para Começar?</h2>
          <p className="text-lg text-slate-600 mb-8 max-w-xl mx-auto">
            Invista alguns minutos no seu conhecimento e fortaleça sua segurança online. É gratuito, seguro e pode poupar você de grandes prejuízos.
          </p>
          <a
            href='/simulations/purchase'
            className="bg-gradient-to-r from-blue-600 to-blue-800 text-white font-bold text-lg px-8 py-4 rounded-lg hover:scale-105 transition-transform shadow-lg inline-block"
          >
            Explorar Simulações Agora
          </a>
        </section>
      </main>

      <footer className="text-center py-6 bg-blue-50/80 backdrop-blur-sm border-t border-blue-100">
        <p className="text-slate-600">
          &copy; {new Date().getFullYear()} Educational Scam.
        </p>
      </footer>
    </div>
  );
}

export default Simulations;
