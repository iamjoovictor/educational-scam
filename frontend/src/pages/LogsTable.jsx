import React, { useEffect, useState } from 'react';

function LogsTable() {
    const [logs, setLogs] = useState([]);

    async function getListUsers() {
        try {
            const response = await fetch('http://localhost:3001/api/logs', {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            });
            const data = await response.json();
            setLogs(data.map((value) => {
                return {
                    id: value.id,
                    type: value.tipo.substring(0, 1).toUpperCase() + value.tipo.substring(1, value.tipo.length).toLowerCase(),
                    timestamp: new Date(value.timestamp).toLocaleDateString('pt-Br', {
                        year: 'numeric',
                        month: '2-digit',
                        day: '2-digit',
                        hour: '2-digit',
                        minute: '2-digit',
                        second: '2-digit'
                    }).replace(',', '')
                }
            }));

            console.log(data)
        } catch (error) {
            setLogs([]);
        }
    }

    useEffect(() => {
        getListUsers();
    }, []);

    return (
        <div className="p-8 bg-gray-50 min-h-screen">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Logs Registrados</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white rounded-lg shadow">
                    <thead>
                        <tr className="bg-blue-600 text-white">
                            <th className="py-3 px-6 text-left">Tipo</th>
                            <th className="py-3 px-6 text-left">Data de Registro</th>
                        </tr>
                    </thead>
                    <tbody>
                        {logs.length === 0 ? (
                            <tr>
                                <td colSpan="3" className="py-4 px-6 text-center text-gray-500">
                                    Nenhum registro de logs.
                                </td>
                            </tr>
                        ) : (
                            logs.map((log, idx) => (
                                <tr key={idx} className="border-b hover:bg-blue-50">
                                    <td className="py-3 px-6">{log.type}</td>
                                    <td className="py-3 px-6">{log.timestamp}</td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default LogsTable;