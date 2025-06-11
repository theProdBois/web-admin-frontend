import React, { useState } from 'react';
import { 
  FaCalendar,
} from 'react-icons/fa';


function PaiementsTrans() {

  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  
  const transactions = [
    {
      id: '#E007K001',
      app: 'PhotoShop v 4.2.1',
      buyer: 'REDIDA Léo',
      developer: 'Craft',
      paymentMethod: 'D17',
      amount: '780,2 DNT',
      dateTime: '01/06/2025 à 05:14min',
      status: 'Succès'
    },
    {
      id: '#E007K001',
      app: 'PhotoShop v 4.2.1',
      buyer: 'REDIDA Léo',
      developer: 'Craft',
      paymentMethod: 'Flouci',
      amount: '380,2 DNT',
      dateTime: '01/06/2025 à 05:14min',
      status: 'Succès'
    },
    {
      id: '#E007K001',
      app: 'PhotoShop v 4.2.1',
      buyer: 'REDIDA Léo',
      developer: 'Craft',
      paymentMethod: 'Flouci',
      amount: '910,2 DNT',
      dateTime: '01/06/2025 à 05:14min',
      status: 'Succès'
    },
    {
      id: '#E007K001',
      app: 'PhotoShop v 4.2.1',
      buyer: 'REDIDA Léo',
      developer: 'Craft',
      paymentMethod: 'D17',
      amount: '780,2 DNT',
      dateTime: '01/06/2025 à 05:14min',
      status: 'Succès'
    },
    {
      id: '#E007K001',
      app: 'PhotoShop v 4.2.1',
      buyer: 'REDIDA Léo',
      developer: 'Craft',
      paymentMethod: 'Flouci',
      amount: '580,2 DNT',
      dateTime: '01/06/2025 à 05:14min',
      status: 'Succès'
    }
  ];

  return (
    <div className="p-4 bg-gray-50">
      <h2 className="text-xl font-semibold text-orange-500">Paiement et Achat</h2>
      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-6 border-b border-gray-200">   
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

            {/* Date de début */}
            <div className="relative">
              <FaCalendar className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
              <input
                type="date"
                placeholder="Date de début"
                className="w-full pl-10 pr-4 py-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                value={dateFrom}
                onChange={(e) => setDateFrom(e.target.value)}
              />
              <label className="absolute -top-2 left-2 bg-white px-1 text-xs text-gray-500">
                Date de début
              </label>
            </div>

            {/* Date de fin */}
            <div className="relative">
              <FaCalendar className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
              <input
                type="date"
                placeholder="Date de fin"
                className="w-full pl-10 pr-4 py-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                value={dateTo}
                onChange={(e) => setDateTo(e.target.value)}
              />
              <label className="absolute -top-2 left-2 bg-white px-1 text-xs text-gray-500">
                Date de fin
              </label>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto text-[5px] ">
          <table className="w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">AchatID</th>
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Application</th>
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acheteur</th>
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Développeur</th>
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mode de paiement</th>
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Montant</th>
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date et heurs</th>
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {transactions.map((transaction, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-900">
                    {transaction.id}
                  </td>
                  <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-900">
                    {transaction.app}
                  </td>
                  <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-900">
                    {transaction.buyer}
                  </td>
                  <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-900">
                    {transaction.developer}
                  </td>
                  <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-900">
                    {transaction.paymentMethod}
                  </td>
                  <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-900">
                    {transaction.amount}
                  </td>
                  <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-900">
                    {transaction.dateTime}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                      {transaction.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default PaiementsTrans