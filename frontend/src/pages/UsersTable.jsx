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
        <div className="p-8 bg-gray-50 min-h-screen">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Usuários Cadastrados</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white rounded-lg shadow">
                    <thead>
                        <tr className="bg-blue-600 text-white">
                            <th className="py-3 px-6 text-left">Nome</th>
                            <th className="py-3 px-6 text-left">Idade</th>
                            <th className="py-3 px-6 text-left">Turma</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.length === 0 ? (
                            <tr>
                                <td colSpan="3" className="py-4 px-6 text-center text-gray-500">
                                    Nenhum usuário cadastrado.
                                </td>
                            </tr>
                        ) : (
                            users.map((user, idx) => (
                                <tr key={idx} className="border-b hover:bg-blue-50">
                                    <td className="py-3 px-6">{user.nome}</td>
                                    <td className="py-3 px-6">{user.idade}</td>
                                    <td className="py-3 px-6">{user.turma}</td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default UsersTable;