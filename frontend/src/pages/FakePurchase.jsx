// src/pages/CompraFalsa.jsx
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { Star } from 'lucide-react';
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
    <div className="bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 min-h-screen">
      <main className="container mx-auto max-w-6xl p-4 sm:p-6 lg:p-8">
        <div className="bg-transparent rounded-xl mt-8 mb-8 flex justify-center">
          <h1 className="text-2xl font-bold text-slate-800">
            Golpe - Compra Falsa
          </h1>
        </div>

        <header className="bg-white/80 backdrop-blur-sm py-3 border-b text-center rounded-t-xl shadow-md">
          <h1 className="text-2xl font-semibold text-slate-800">
            Tech Ofertas Brasil
            <RedFlag
              number="1"
              description="Evite sites desconhecidos ou sem reputação.">
            </RedFlag>
          </h1>
        </header>

        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-2xl border border-white/50 overflow-hidden md:flex">
          <div className="md:w-1/2 p-6">
            <img
              id="mainProductImage"
              src={selectedColor.img}
              alt={`iPhone 16 Pro Max na cor ${selectedColor.name}`}
              className="w-full h-auto rounded-lg object-contain max-h-[450px]"
            />
            <div className="flex justify-center gap-3 mt-4">
              {product.colors.map((color) => (
                <button
                  key={color.name}
                  onClick={() => handleOptionClick(setSelectedColor, color)}
                  className={`w-16 h-16 rounded-md border-2 transition-all ${selectedColor.name === color.name ? 'border-blue-500 scale-110' : 'border-gray-200'
                    }`}
                >
                  <img src={color.img.replace('600x600', '100x100')} alt={`Miniatura ${color.name}`} className="w-full h-full object-cover rounded" />
                </button>
              ))}
            </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-2xl border border-white/50 p-6 md:p-10 mt-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{product.name}</h2>

            <div className="flex items-center gap-2 mt-2 text-gray-600">
              <div className="flex text-yellow-500">
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" className="text-gray-300" />
              </div>
              <span className="font-medium">{product.rating}</span>
              <span>({product.reviews} avaliações)</span>
            </div>

            <div className="mt-6">
              <span className="text-lg text-gray-500 line-through">
                De R$ {product.originalPrice}
              </span>
              <p className="text-4xl font-bold text-green-600">
                R$ {product.promoPrice}
                <RedFlag
                  number="2"
                  description="Desconfie de preços muito abaixo do mercado.">
                </RedFlag>
              </p>
              <p className="text-base text-gray-600 mt-1">
                {product.installments}
              </p>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-800">
                Cor:
                <span className="font-normal">
                  {selectedColor.name}
                </span>
              </h3>
              <div className="flex gap-3 mt-2 flex-wrap">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => handleOptionClick(setSelectedColor, color)}
                    className={`px-4 py-2 border rounded-lg text-sm transition-all ${selectedColor.name === color.name ? 'border-blue-500 bg-blue-50 font-semibold' : 'border-gray-300 bg-white'
                      }`}
                  >
                    {color.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-800">
                Armazenamento:
                <span className="font-normal">{selectedStorage}</span>
              </h3>
              <div className="flex gap-3 mt-2 flex-wrap">
                {product.storageOptions.map((storage) => (
                  <button
                    key={storage}
                    onClick={() => handleOptionClick(setSelectedStorage, storage)}
                    className={`px-4 py-2 border rounded-lg text-sm transition-all ${selectedStorage === storage ? 'border-blue-500 bg-blue-50 font-semibold' : 'border-gray-300 bg-white'
                      }`}
                  >
                    {storage}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-4">
              <button
                onClick={handleClick}
                className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition-colors text-lg">
                Comprar Agora
              </button>
              <button
                onClick={() => toast.success('Produto adicionado ao carrinho!')}
                className="w-full bg-gray-100 text-blue-600 font-bold py-4 rounded-xl border border-gray-300 hover:bg-gray-200 transition-colors text-lg">
                Adicionar ao Carrinho
              </button>
            </div>
          </div>
        </div>

        <div className="bg-transparent rounded-xl mt-8 flex justify-end">
          <a
            href='/tips/purchase'
            className="bg-gradient-to-r from-blue-600 to-blue-800 text-white font-bold text-lg px-4 py-2 rounded-lg hover:scale-105 transition-transform shadow-lg"
          >
            Próximo
          </a>
        </div>
      </main>
    </div>
  );
}

export default FakePurchase;
