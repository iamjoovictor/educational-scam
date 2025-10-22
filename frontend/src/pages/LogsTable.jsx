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
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 p-8 flex items-start justify-center">
            <div className="w-full max-w-4xl bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/50 p-6">
                <h2 className="text-2xl font-bold mb-6 text-slate-800">Logs Registrados</h2>
                <div className="overflow-x-auto rounded-lg">
                    <table className="min-w-full bg-transparent">
                        <thead>
                            <tr className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
                                <th className="py-3 px-6 text-left">Tipo</th>
                                <th className="py-3 px-6 text-left">Data de Registro</th>
                            </tr>
                        </thead>
                        <tbody>
                            {logs.length === 0 ? (
                                <tr>
                                    <td colSpan="2" className="py-4 px-6 text-center text-slate-500">
                                        Nenhum registro de logs.
                                    </td>
                                </tr>
                            ) : (
                                logs.map((log, idx) => (
                                    <tr key={idx} className="border-b last:border-b-0 hover:bg-blue-50 transition-colors">
                                        <td className="py-3 px-6 text-slate-700">{log.type}</td>
                                        <td className="py-3 px-6 text-slate-700">{log.timestamp}</td>
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

export default LogsTable;