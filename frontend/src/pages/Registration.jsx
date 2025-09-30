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
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">
        Registro do Estudante
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={e => setName(e.target.value)}
          required
          className="w-full p-2 border rounded" />
        <input
          type="number"
          placeholder="Idade"
          value={age}
          onChange={e => setAge(e.target.value)}
          required
          className="w-full p-2 border rounded" />
        <input
          type="text"
          placeholder="Turma"
          value={course}
          onChange={e => setCourse(e.target.value)}
          required
          className="w-full p-2 border rounded" />
        <div className="bg-transparent rounded-xl flex justify-end">
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded right-0">
            Continuar
          </button>
        </div>
      </form>
    </div>
  );
}

export default Registration;
