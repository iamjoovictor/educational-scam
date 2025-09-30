import React, { useState, useEffect } from 'react';
import { QrCode, CreditCard, Barcode, ShieldCheck } from 'lucide-react';
import RedFlag from './RedFlag';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const FakePayment = () => {
    const [timeLeft, setTimeLeft] = useState(10 * 60);
    const [copied, setCopied] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        if (timeLeft === 0) return;
        const intervalId = setInterval(() => {
            setTimeLeft(timeLeft - 1);
        }, 1000);
        return () => clearInterval(intervalId);
    }, [timeLeft]);

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    const fakePixCode = "00020126580014br.gov.bcb.pix0136a2a5371c-7243-4165-8b28-56263539138d5204000053039865802BR5916MARIA J DA SILVA6009SAO PAULO62070503***6304E3A8";

    const handleCopy = () => {
        navigator.clipboard.writeText(fakePixCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleClick = async () => {
        toast.error("⚠️ Isso foi um golpe simulado! Bastante atênção para o valor e o destinatário do pagamento.");
        await fetch('http://localhost:3001/api/logs', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ tipo: 'pagamento' })
        });
        navigate('/tips/payment');
    };

    return (
        <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center p-4 font-sans">
            <div className="bg-transparent rounded-xl mt-8 mb-8 flex justify-center">
                <h1 className="text-2xl font-bold text-gray-800">
                    Golpe - Falso Pagamento
                </h1>
            </div>

            <header className="text-center mb-4">
                <h1 className="text-2xl font-bold text-gray-800">Tech Ofertas Brasil</h1>
                <p className="text-gray-500">Página de Pagamento Seguro</p>
            </header>

            <div className="w-full max-w-md bg-white rounded-xl shadow-2xl">
                <div className="bg-blue-600 text-white text-center p-4">
                    <h2 className="text-lg font-bold">Sua oferta expira em:</h2>
                    <p className="text-4xl font-mono tracking-widest">
                        {formatTime(timeLeft)}
                    </p>
                    <RedFlag
                        number="1"
                        description="Golpistas criam urgência para que você não tenha tempo de pensar ou verificar as informações.">
                    </RedFlag>
                </div>

                <div className="p-6">
                    <div className="text-center mb-6">
                        <p className="text-gray-600">Total a pagar:</p>
                        <p className="text-3xl font-bold text-gray-900">R$ 3.499,90</p>
                        <p className="text-sm text-gray-500">Referente a: iPhone 16 Pro Max</p>
                    </div>

                    <div className="flex border-b mb-6">
                        <button className="flex-1 text-blue-600 border-b-2 border-blue-600 py-3 font-semibold flex items-center justify-center gap-2">
                            <QrCode size={20} /> PIX
                        </button>
                        <button className="flex-1 text-gray-400 py-3 font-semibold flex items-center justify-center gap-2 cursor-not-allowed opacity-50">
                            <CreditCard size={20} /> Cartão de Crédito
                        </button>
                        <button className="flex-1 text-gray-400 py-3 font-semibold flex items-center justify-center gap-2 cursor-not-allowed opacity-50">
                            <Barcode size={20} /> Boleto
                        </button>
                    </div>
                    <p className="text-xs text-center text-red-500 mb-4 -mt-4">
                        Desconto aplicado! Pagamento exclusivo via PIX.
                        <RedFlag
                            number="2"
                            description="Golpistas evitam métodos de pagamento que podem ser estornados, como cartão de crédito. Eles forçam o uso de PIX ou transferência, que são irreversíveis.">
                        </RedFlag>
                    </p>

                    <div className="text-center">
                        <p className="font-semibold mb-2">Pague com PIX para aprovação imediata!</p>
                        <img src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${fakePixCode}`} alt="QR Code PIX" className="mx-auto rounded-lg border p-1" />

                        <p className="text-sm text-gray-500 my-4">Ou use o PIX Copia e Cola:</p>

                        <div className="relative">
                            <textarea readOnly value={fakePixCode} className="w-full h-24 p-2 text-xs bg-gray-100 border rounded-md resize-none text-gray-600"></textarea>
                            <button onClick={handleCopy} className="absolute bottom-2 right-2 bg-blue-600 text-white px-3 py-1 rounded-md text-sm hover:bg-blue-700">
                                {copied ? 'Copiado!' : 'Copiar'}
                            </button>
                        </div>

                        <div className="mt-6">
                            <div className="text-left bg-white p-4 rounded-lg">
                                <p className="text-sm font-bold mb-2 text-gray-800">
                                    Confira os dados antes de pagar:
                                    <RedFlag
                                        number="3"
                                        description="O beneficiário é uma pessoa física (Maria J. da Silva, com CPF). Compras em lojas devem ter como beneficiário a própria empresa (Pessoa Jurídica, com CNPJ).">
                                    </RedFlag>
                                </p>
                                <div className="text-sm space-y-1 text-gray-700">
                                    <p>
                                        <strong>Nome:</strong>
                                        Maria J. da Silva
                                    </p>
                                    <p>
                                        <strong>CPF:</strong>
                                        ***.123.456-**
                                    </p>
                                    <p>
                                        <strong>Instituição:</strong>
                                        Banco Digital Genérico S.A.
                                    </p>
                                    <p className="mt-2 pt-2 border-t">
                                        <strong>Chave:</strong>
                                        maria.silva1998@gmail.com
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <footer className="bg-gray-50 p-4 text-center border-t">
                    <div className="flex items-center justify-center gap-2 text-sm text-green-700">
                        <ShieldCheck size={20} />
                        <p>Ambiente de pagamento seguro.</p>
                    </div>
                </footer>

                <div className="bg-transparent rounded-xl mt-8 mb-8 mr-5 flex justify-end">
                    <button
                        onClick={handleClick}
                        className="bg-blue-600 text-white font-bold text-lg px-4 py-2 rounded-lg hover:bg-blue-700 transition-transform transform hover:scale-105 shadow-lg"
                    >
                        Próximo
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FakePayment;