import React, { useEffect, useState } from 'react';

function UsersTable() {
    const [users, setUsers] = useState([]);

    async function getListUsers() {
        try {
            const response = await fetch('http://localhost:3001/api/usuarios', {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            });
            const data = await response.json();
            setUsers(data);
        } catch (error) {
            setUsers([]);
        }
    }

    useEffect(() => {
        getListUsers();
    }, []);

    return (
        <div className="min-h-screen flex items-start justify-center bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 p-8">
            <div className="w-full max-w-4xl bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/50 p-6">
                <h2 className="text-2xl font-bold mb-6 text-slate-800">Usuários Cadastrados</h2>
                <div className="overflow-x-auto rounded-lg">
                    <table className="min-w-full bg-transparent">
                        <thead>
                            <tr className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
                                <th className="py-3 px-6 text-left">Nome</th>
                                <th className="py-3 px-6 text-left">Idade</th>
                                <th className="py-3 px-6 text-left">Turma</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.length === 0 ? (
                                <tr>
                                    <td colSpan="3" className="py-4 px-6 text-center text-slate-500">
                                        Nenhum usuário cadastrado.
                                    </td>
                                </tr>
                            ) : (
                                users.map((user, idx) => (
                                    <tr key={idx} className="border-b last:border-b-0 hover:bg-blue-50 transition-colors">
                                        <td className="py-3 px-6 text-slate-700">{user.nome}</td>
                                        <td className="py-3 px-6 text-slate-700">{user.idade}</td>
                                        <td className="py-3 px-6 text-slate-700">{user.turma}</td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default UsersTable;