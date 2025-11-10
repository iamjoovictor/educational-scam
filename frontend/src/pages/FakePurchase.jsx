import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { Star, MapPin, ShoppingCart, Lock } from 'lucide-react';
import RedFlag from './RedFlag';

const product = {
  name: "iPhone 16 Pro Max",
  rating: 4.8,
  reviews: 312,
  originalPrice: "12.999,00",
  promoPrice: "3.499,90",
  installments: "em até 12x de R$ 515,90 com juros",
  colors: [
    {
      name: 'Preto-sideral',
      img: 'https://carrefourbr.vtexassets.com/arquivos/ids/182538541/image-0.jpg?v=638724823034400000'
    },
    {
      name: 'Titânio Natural',
      img: 'https://carrefourbr.vtexassets.com/arquivos/ids/186421728/image-0.jpg?v=638767050224830000'
    },
    {
      name: 'Azul-profundo',
      img: 'https://http2.mlstatic.com/D_NQ_NP_2X_857610-MLA79138888985_092024-F.webp'
    },
    {
      name: 'Branco-estelar',
      img: 'https://carrefourbr.vtexassets.com/arquivos/ids/186422240/image-0.jpg?v=638767056163130000'
    },
  ],
  storageOptions: ['256 GB', '512 GB', '1 TB'],
  description: "O novo iPhone 16 Pro Max redefine a velocidade e a inteligência. Com o revolucionário chip A19 Bionic Pro, suas tarefas e jogos voam. A tela Super Retina XDR ProMotion de 6.9 polegadas oferece cores mais vivas e brilho sem precedentes.",
  features: [
    "Câmera Pro-Logic de 200MP: Capture detalhes que você nunca imaginou.",
    "Bateria de Longa Duração: A melhor bateria já vista em um iPhone.",
    "Design em Titânio Aeroespacial: Mais leve, mais resistente.",
    "Conexão 6G Ultrarrápida: Downloads e streaming na velocidade da luz.",
  ],
};

function FakePurchase() {
  const navigate = useNavigate();

  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedStorage, setSelectedStorage] = useState(product.storageOptions[0]);

  const handleOptionClick = (setter, value) => {
    setter(value);
  };

  const handleClick = async () => {
    toast.error("⚠️ Isso foi um golpe simulado! Nunca insira dados em sites suspeitos.");
    await fetch('http://localhost:3001/api/logs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ tipo: 'compra' })
    });
    navigate('/tips/purchase')
  };

  return (
    <div className="bg-white min-h-screen">
      <header className="bg-[#131921] text-white">
        <div className="bg-transparent text-white rounded-xl pt-8 flex justify-center">
          <h1 className="text-2xl text-white font-bold text-slate-800">
            Golpe - Falso Pagamento
          </h1>
        </div>

        <div className="container mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="120" height="60" fill-rule="evenodd">
                <path d="M72.038 40.703c-5.8 4.283-14.234 6.57-21.486 6.57-10.168 0-19.323-3.76-26.248-10.016-.544-.492-.057-1.162.596-.78 7.474 4.35 16.715 6.965 26.26 6.965 6.438 0 13.52-1.332 20.032-4.096.984-.418 1.806.644.844 1.358m2.418-2.764c-.74-.95-4.9-.448-6.782-.226-.57.07-.657-.427-.144-.784 3.32-2.338 8.77-1.663 9.407-.88s-.165 6.25-3.286 8.858c-.48.4-.936.187-.723-.344.7-1.75 2.272-5.672 1.528-6.625" fill="#f90" />
                <path d="M67.803 20.427v-2.272a.56.56 0 0 1 .575-.575H78.55c.326 0 .588.235.588.575V20.1c-.004.326-.28.753-.766 1.428l-5.27 7.526c1.96-.048 4.026.244 5.802 1.245.4.226.5.557.54.884v2.425c0 .33-.366.718-.75.518-3.13-1.64-7.287-1.82-10.747.017-.353.192-.723-.192-.723-.522v-2.303c0-.37.004-1 .374-1.563l6.107-8.758H68.4c-.326 0-.588-.23-.588-.57M30.694 34.605H27.6c-.296-.022-.53-.244-.553-.527V18.194c0-.318.266-.57.596-.57h2.886c.3.013.54.244.562.53v2.076h.057c.753-2.007 2.168-2.943 4.074-2.943 1.937 0 3.147.936 4.018 2.943.75-2.007 2.45-2.943 4.275-2.943 1.297 0 2.716.535 3.582 1.737.98 1.336.78 3.278.78 4.98L47.87 34.03c0 .318-.266.575-.596.575h-3.1c-.3-.022-.557-.27-.557-.575V25.6c0-.67.06-2.342-.087-2.977-.23-1.066-.923-1.367-1.82-1.367-.75 0-1.532.5-1.85 1.302s-.287 2.142-.287 3.043v8.42c0 .318-.266.575-.596.575h-3.1c-.313-.022-.557-.27-.557-.575l-.004-8.42c0-1.772.292-4.38-1.907-4.38-2.224 0-2.137 2.542-2.137 4.38v8.42c0 .318-.266.575-.596.575M87.896 17.3c4.592 0 7.078 3.944 7.078 8.958 0 4.845-2.747 8.688-7.078 8.688-4.5 0-6.965-3.944-6.965-8.858 0-4.945 2.486-8.8 6.965-8.8m.026 3.243c-2.28 0-2.425 3.108-2.425 5.045s-.03 6.085 2.398 6.085c2.398 0 2.512-3.343 2.512-5.38 0-1.34-.057-2.943-.46-4.214-.348-1.106-1.04-1.537-2.024-1.537m13.007 14.075h-3.082c-.3-.022-.557-.27-.557-.575l-.004-15.888c.026-.292.283-.518.596-.518h2.87c.27.013.492.196.553.444v2.43h.057c.866-2.172 2.08-3.208 4.218-3.208 1.4 0 2.742.5 3.613 1.872.8 1.27.8 3.408.8 4.945v10c-.035.28-.292.5-.596.5H106.3c-.283-.022-.518-.23-.548-.5V25.48c0-1.737.2-4.28-1.937-4.28-.753 0-1.445.505-1.8 1.27-.435.97-.492 1.937-.492 3.008v8.554c-.004.318-.274.575-.605.575m-41.225-7.6c0 1.206.03 2.2-.58 3.282-.492.87-1.275 1.406-2.142 1.406-1.188 0-1.885-.905-1.885-2.242 0-2.638 2.364-3.117 4.605-3.117v.67m3.12 7.544c-.205.183-.5.196-.73.074-1.027-.853-1.214-1.25-1.776-2.063-1.698 1.732-2.903 2.25-5.102 2.25-2.607 0-4.632-1.606-4.632-4.823 0-2.512 1.358-4.222 3.3-5.058 1.68-.74 4.026-.87 5.82-1.075v-.4c0-.736.057-1.606-.38-2.242-.374-.57-1.097-.805-1.737-.805-1.18 0-2.23.605-2.486 1.86-.052.28-.257.553-.54.566l-3-.322c-.252-.057-.535-.26-.46-.65.688-3.64 3.98-4.736 6.92-4.736 1.506 0 3.474.4 4.662 1.54 1.506 1.406 1.362 3.282 1.362 5.324v4.823c0 1.45.6 2.085 1.167 2.87.196.28.24.614-.013.823L62.82 34.57l-.004-.01M19.12 27.017c0 1.206.03 2.2-.58 3.282-.492.87-1.27 1.406-2.142 1.406-1.188 0-1.88-.905-1.88-2.242 0-2.638 2.364-3.117 4.6-3.117v.67m3.12 7.544c-.205.183-.5.196-.73.074-1.027-.853-1.2-1.25-1.776-2.063-1.698 1.732-2.9 2.25-5.102 2.25C12.028 34.822 10 33.216 10 30c0-2.512 1.362-4.222 3.3-5.058 1.68-.74 4.026-.87 5.82-1.075v-.4c0-.736.057-1.606-.374-2.242-.38-.57-1.1-.805-1.737-.805-1.18 0-2.233.605-2.5 1.86-.052.28-.257.553-.535.566l-3.004-.322c-.252-.057-.53-.26-.46-.65.692-3.64 3.98-4.736 6.92-4.736 1.506 0 3.474.4 4.662 1.54 1.506 1.406 1.362 3.282 1.362 5.324v4.823c0 1.45.6 2.085 1.167 2.87.2.28.244.614-.01.823l-2.36 2.052-.01-.01" fill="#ffffff" />
              </svg>
              <RedFlag
                number="1"
                description="Evite sites desconhecidos ou sem reputação. Note que este logo é similar ao da Amazon, mas não é o site oficial.">
              </RedFlag>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm">
              <MapPin size={16} />
              <div>
                <div className="text-xs text-gray-300">Entregar em</div>
                <div className="font-bold">Brasil 12345-678</div>
              </div>
            </div>
            <ShoppingCart size={28} />
          </div>
        </div>
        <div className="bg-[#232f3e] py-2">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="text-sm text-gray-300">
              Eletrônicos › Celulares › Smartphones › Apple
            </div>
          </div>
        </div>
      </header>

      <div className="bg-red-600 text-white py-2 text-center font-bold">
        🔥 OFERTA RELÂMPAGO - Termina em 2h 34min
      </div>

      <main className="container mx-auto max-w-7xl p-4">
        <div className="grid md:grid-cols-12 gap-6 mt-6">
          <div className="md:col-span-5">
            <div className="sticky top-4">
              <div className="border rounded-lg p-4 bg-white">
                <img
                  id="mainProductImage"
                  src={selectedColor.img}
                  alt={`iPhone 16 Pro Max na cor ${selectedColor.name}`}
                  className="w-full h-auto object-contain max-h-[500px]"
                />
              </div>
              <div className="flex justify-center gap-2 mt-4">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => handleOptionClick(setSelectedColor, color)}
                    className={`w-14 h-14 rounded border-2 transition-all ${selectedColor.name === color.name ? 'border-[#C7511F] shadow-md' : 'border-gray-300'
                      }`}
                  >
                    <img src={color.img.replace('600x600', '100x100')} alt={`Miniatura ${color.name}`} className="w-full h-full object-cover rounded" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="md:col-span-4">
            <h1 className="text-2xl font-normal text-[#0F1111] mb-2">{product.name}</h1>

            <div className="flex items-center gap-2 mb-4">
              <div className="flex text-[#FFA41C]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill={i < 4 ? "currentColor" : "none"} />
                ))}
              </div>
              <span className="text-sm text-[#007185]">{product.reviews} avaliações</span>
            </div>

            <div className="border-t border-b border-gray-300 py-3 mb-4">
              <div className="flex items-baseline gap-2">
                <span className="text-xs text-[#565959]">De: </span>
                <span className="text-sm text-[#565959] line-through">R$ {product.originalPrice}</span>
              </div>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-xs text-[#CC0C39]">-73%</span>
                <span className="text-3xl text-[#B12704]">R$ {product.promoPrice}</span>
                <RedFlag
                  number="2"
                  description="Desconfie de preços muito abaixo do mercado.">
                </RedFlag>
              </div>
              <p className="text-sm text-[#565959] mt-1">
                ou {product.installments}
              </p>
            </div>

            <div className="mb-6">
              <div className="flex items-center gap-2 text-sm text-[#007600] mb-2">
                <div className="w-2 h-2 bg-[#007600] rounded-full"></div>
                Em estoque
              </div>
              <div className="text-sm text-[#565959]">
                <div>📦 Frete GRÁTIS</div>
                <div>🚚 Entrega: amanhã</div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-sm font-bold text-[#0F1111] mb-2">
                Cor: <span className="font-normal">{selectedColor.name}</span>
              </h3>
              <div className="flex gap-2 flex-wrap">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => handleOptionClick(setSelectedColor, color)}
                    className={`px-3 py-1.5 border rounded text-xs transition-all ${selectedColor.name === color.name
                      ? 'border-[#C7511F] bg-[#FFF7F0] shadow-sm'
                      : 'border-gray-300 hover:bg-gray-50'
                      }`}
                  >
                    {color.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-sm font-bold text-[#0F1111] mb-2">
                Armazenamento: <span className="font-normal">{selectedStorage}</span>
              </h3>
              <div className="flex gap-2 flex-wrap">
                {product.storageOptions.map((storage) => (
                  <button
                    key={storage}
                    onClick={() => handleOptionClick(setSelectedStorage, storage)}
                    className={`px-3 py-1.5 border rounded text-xs transition-all ${selectedStorage === storage
                      ? 'border-[#C7511F] bg-[#FFF7F0] shadow-sm'
                      : 'border-gray-300 hover:bg-gray-50'
                      }`}
                  >
                    {storage}
                  </button>
                ))}
              </div>
            </div>

            <div className="border-t border-gray-300 pt-4">
              <h3 className="font-bold text-[#0F1111] mb-3">Sobre este item</h3>
              <ul className="space-y-2 text-sm text-[#0F1111]">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex gap-2">
                    <span>•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="border border-gray-300 rounded-lg p-4 bg-white sticky top-4">
              <div className="mb-4">
                <div className="text-3xl text-[#B12704] font-normal">R$ {product.promoPrice}</div>
                <div className="text-xs text-[#565959] mt-1">ou {product.installments}</div>
              </div>

              <div className="text-sm mb-4">
                <div className="flex items-center gap-2 text-[#007600] font-bold mb-1">
                  <div className="w-2 h-2 bg-[#007600] rounded-full"></div>
                  Em estoque
                </div>
                <div className="text-[#565959]">
                  <div>Frete GRÁTIS</div>
                  <div className="flex items-center gap-1">
                    <MapPin size={14} />
                    Entregar para Brasil 12345-678
                  </div>
                </div>
              </div>

              <button
                onClick={handleClick}
                className="w-full bg-[#FFD814] hover:bg-[#F7CA00] text-[#0F1111] font-normal py-2 rounded-full text-sm mb-2 transition-colors"
              >
                Adicionar ao carrinho
              </button>

              <button
                onClick={handleClick}
                className="w-full bg-[#FFA41C] hover:bg-[#FA8900] text-[#0F1111] font-normal py-2 rounded-full text-sm mb-4 transition-colors"
              >
                Comprar agora
              </button>

              <div className="flex items-center gap-2 text-xs text-[#565959] mb-4">
                <Lock size={14} />
                <span>Transação segura</span>
              </div>

              <div className="border-t border-gray-300 pt-4 text-xs text-[#565959]">
                <div className="mb-2">
                  <span className="font-bold text-[#0F1111]">Enviado por:</span> Amazon
                </div>
                <div>
                  <span className="font-bold text-[#0F1111]">Vendido por:</span> Amazon
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-end">
          <a
            href='/tips/purchase'
            className="bg-[#FFD814] hover:bg-[#F7CA00] text-[#0F1111] font-normal text-sm px-6 py-2 rounded-lg transition-colors"
          >
            Próximo
          </a>
        </div>
      </main>
    </div>
  );
}

export default FakePurchase;