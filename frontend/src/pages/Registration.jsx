import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Registration() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [course, setCourse] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('http://localhost:3001/api/usuarios', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nome: name, idade: age, turma: course })
    });
    navigate('/simulations');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 p-6"> {/* Alterado para azul */}
      <div className="max-w-md w-full bg-white bg-opacity-80 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/50 p-8">
        <div className="flex items-center gap-4 mb-6">
          <img src='/icon.svg' alt="React Icon" className="p-2 w-14 h-14 rounded-full bg-gradient-to-tr from-blue-500 to-blue-700 flex items-center justify-center text-white text-2xl shadow-lg" /> {/* Alterado para azul */}
          <div>
            <h2 className="text-2xl font-extrabold text-slate-800">
              Registro do Estudante
            </h2>
            <p className="text-sm text-slate-600">
              Crie seu perfil para começar as simulações educativas
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block">
            <span className="sr-only">Nome</span>
            <input
              type="text"
              placeholder="Nome"
              value={name}
              onChange={e => setName(e.target.value)}
              required
              className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
            />
          </label>

          <label className="block">
            <span className="sr-only">Idade</span>
            <input
              type="number"
              placeholder="Idade"
              value={age}
              onChange={e => setAge(e.target.value)}
              required
              className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
            />
          </label>

          <label className="block">
            <span className="sr-only">Turma</span>
            <input
              type="text"
              placeholder="Turma"
              value={course}
              onChange={e => setCourse(e.target.value)}
              required
              className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
            />
          </label>

          <div className="flex justify-end">
            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white px-5 py-3 rounded-xl shadow-md hover:scale-[1.02] transform transition"
            >
              Continuar
            </button>
          </div>
        </form>

        <p className="mt-4 text-xs text-slate-500">
          Seus dados ficam apenas no dispositivo enquanto você explora as simulações.
        </p>
      </div>
    </div>
  );
}

export default Registration;
