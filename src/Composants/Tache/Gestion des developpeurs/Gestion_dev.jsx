import React, { useState } from 'react';
import {
  FiMail, 
  FiX,
  FiSend,
  FiUser,
  FiMessageSquare
} from 'react-icons/fi';

function Gestion_dev() {
  const [activeDrawer, setActiveDrawer] = useState(null);
  const [selectedDeveloper, setSelectedDeveloper] = useState(null);
  const [notificationForm, setNotificationForm] = useState({
    subject: '',
    message: '',
    priority: 'normal'
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'Terminé':
        return 'text-green-600 border-green-200';
      case 'En cours':
        return 'text-blue-600 border-blue-200';
      case 'Échoué':
        return 'text-red-600 border-red-200';
      case 'Actif':
        return 'text-green-800';
      case 'Suspendu':
        return 'text-red-800';
      default:
        return 'text-gray-600 border-gray-200 rounde';
    }
  };

  const openApplicationsDrawer = (developer) => {
    setSelectedDeveloper(developer);
    setActiveDrawer('applications');
  };

  const openNotificationDrawer = (developer) => {
    setSelectedDeveloper(developer);
    setActiveDrawer('notification');
    setNotificationForm({ subject: '', message: '', priority: 'normal' });
  };

  const closeDrawer = () => {
    setActiveDrawer(null);
    setSelectedDeveloper(null);
  };

  const handleNotificationSubmit = (e) => {
    e.preventDefault();
    // Logique d'envoi de notification
    console.log('Notification envoyée:', {
      developer: selectedDeveloper,
      ...notificationForm
    });
    alert('Notification envoyée avec succès!');
    closeDrawer();
  };
  
  const getActionButton = (status, type, developer) => {
      if (type === 'app') {
        return status === 'En attente' ? (
          <div className="flex gap-2">
            <button className="px-3 py-1 text-[14px] bg-yellow-100 text-yellow-700 rounded hover:bg-yellow-200">
              Analyser
            </button>
            <button className="px-3 py-1 text-[14px] bg-green-100 text-green-700 rounded hover:bg-green-200">
              Valider
            </button>
            <button className="px-3 py-1 text-[14px] bg-red-100 text-red-700 rounded hover:bg-red-200">
              Rejeter
            </button>
          </div>
        ) : (
          <div className="flex gap-2">
            <button className="px-3 py-1 text-[14px] bg-yellow-100 text-yellow-700 rounded hover:bg-yellow-200">
              Analyser
            </button>
            <button className="px-3 py-1 text-[14px] bg-green-100 text-green-700 rounded hover:bg-green-200">
              Valider
            </button>
            <button className="px-3 py-1 text-[14px] bg-red-100 text-red-700 rounded hover:bg-red-200">
              Rejeter
            </button>
          </div>
        );
      }
      return (
        <div className="flex gap-2">
          <button 
            onClick={() => openApplicationsDrawer(developer)}
            className="px-3 py-1 text-[13px] bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors duration-200"
          >
            Liste ses applications
          </button>
          <button 
            onClick={() => openNotificationDrawer(developer)}
            className="px-3 py-1 text-[13px] bg-yellow-100 text-yellow-700 rounded hover:bg-yellow-200 flex items-center gap-1 transition-colors duration-200"
          >
            <FiMail size={14} />
            Env. Notif
          </button>
        </div>
      );
  };

  // Données d'exemple pour les applications
  const getApplications = (developerId) => {
    const allApps = {
      1: [
        { id: 1, name: 'TaskManager Pro', version: '2.1.0', status: 'Validé', description: 'Application de gestion de tâches avec interface moderne' },
        { id: 2, name: 'Weather App', version: '1.0.3', status: 'En attente', description: 'Application météo avec géolocalisation' },
        { id: 3, name: 'Chat Bot', version: '3.2.1', status: 'Rejeté', description: 'Bot de conversation automatisé' }
      ],
      2: [
        { id: 4, name: 'E-Commerce App', version: '1.5.0', status: 'Validé', description: 'Application de commerce électronique' },
        { id: 5, name: 'Social Media', version: '2.0.0', status: 'En attente', description: 'Plateforme de médias sociaux' }
      ],
      3: [
        { id: 6, name: 'Budget Tracker', version: '1.2.0', status: 'Validé', description: 'Suivi des dépenses personnelles' }
      ],
      4: [
        { id: 7, name: 'Fitness App', version: '1.0.0', status: 'En attente', description: 'Application de suivi fitness' },
        { id: 8, name: 'Recipe Book', version: '2.3.0', status: 'Rejeté', description: 'Livre de recettes numérique' }
      ]
    };
    return allApps[developerId] || [];
  };
  
  const developers = [
      {
        id: 1,
        name: 'REDIDA Léo carlos',
        team: 'Aucune',
        email: 'carlosredida557@gmail.com',
        status: 'Actif'
      },
      {
        id: 2,
        name: 'BG Riccard',
        team: 'Aucune',
        email: 'carlosredida557@gmail.com',
        status: 'Suspendu'
      },
      {
        id: 3,
        name: 'DIBA Sahine',
        team: 'Aucune',
        email: 'carlosredida557@gmail.com',
        status: 'Actif'
      },
      {
        id: 4,
        name: 'REDIDA Aryane',
        team: 'Aucune',
        email: 'carlosredida557@gmail.com',
        status: 'Suspendu'
      }
  ];

  return (
    <div className='p-4 relative'>
      <h2 className="text-xl font-semibold text-orange-500 mb-3">Listes des développeurs</h2>
      
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <table className="w-full text-[14px]">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left py-2 px-4 font-semibold text-gray-700">Profil</th>
              <th className="text-left py-2 px-6 font-semibold text-gray-700">Nom&Prénom</th>
              <th className="text-left py-2 px-6 font-semibold text-gray-700">Team</th>
              <th className="text-left py-2 px-6 font-semibold text-gray-700">E-mail</th>
              <th className="text-left py-2 px-6 font-semibold text-gray-700">États</th>
              <th className="text-left py-2 px-6 font-semibold text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {developers.map((dev) => (
              <tr key={dev.id} className="border-t border-gray-100 hover:bg-gray-50 text-[13px]">
                <td className="py-4 px-6">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                    {dev.name.charAt(0)}
                  </div>
                </td>
                <td className="py-4 px-6">
                  <div className="font-semibold text-gray-800">{dev.name}</div>
                </td>
                <td className="py-4 px-6">
                  <span className="text-gray-600">{dev.team}</span>
                </td>
                <td className="py-4 px-6">
                  <a href={`mailto:${dev.email}`} className="text-blue-600 hover:underline">
                    {dev.email}
                  </a>
                </td>
                <td className="py-4 px-6">
                  <span className={`font-semibold ${getStatusColor(dev.status)}`}>
                    {dev.status}
                  </span>
                </td>
                <td className="py-2 px-4">
                  {getActionButton(dev.status, 'dev', dev)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Overlay */}
      {activeDrawer && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ease-out"
          onClick={closeDrawer}
        />
      )}

      {/* Tiroir des Applications */}
      <div className={`fixed top-0 right-0 h-full w-96 bg-white shadow-2xl z-50 transform transition-transform duration-500 ease-out ${
        activeDrawer === 'applications' ? 'translate-x-0' : 'translate-x-full'
      }`}>
        {activeDrawer === 'applications' && selectedDeveloper && (
          <div className="h-full flex flex-col">
            <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-bold">Applications</h3>
                  <p className="text-orange-100 text-sm">{selectedDeveloper.name}</p>
                </div>
                <button 
                  onClick={closeDrawer}
                  className="p-2 hover:bg-orange-600 rounded-full transition-colors duration-200"
                >
                  <FiX size={20} />
                </button>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto p-6">
              <div className="space-y-4">
                {getApplications(selectedDeveloper.id).map((app) => (
                  <div key={app.id} className="bg-gray-50 rounded-lg p-4 border border-gray-200 hover:shadow-md transition-shadow duration-200">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="font-semibold text-gray-800">{app.name}</h4>
                      <span className={`px-6 py-1 rounded-full text-xs font-medium border ${getStatusColor(app.status)}`}>
                        {app.status}
                      </span>
                    </div>
                    <div className="text-sm text-gray-600 mb-2">
                      <span className="font-medium">Version:</span> {app.version}
                    </div>
                    <p className="text-sm text-gray-700">{app.description}</p>
                  </div>
                ))}
                {getApplications(selectedDeveloper.id).length === 0 && (
                  <div className="text-center py-8 text-gray-500">
                    <p>Aucune application trouvée</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Tiroir de Notification */}
      <div className={`fixed top-0 right-0 h-full w-96 bg-white shadow-2xl z-50 transform transition-transform duration-500 ease-out ${
        activeDrawer === 'notification' ? 'translate-x-0' : 'translate-x-full'
      }`}>
        {activeDrawer === 'notification' && selectedDeveloper && (
          <div className="h-full flex flex-col">
            <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-bold flex items-center gap-2">
                    <FiMail size={20} />
                    Envoyer une notification
                  </h3>
                  <p className="text-yellow-100 text-sm flex items-center gap-2 mt-1">
                    <FiUser size={14} />
                    {selectedDeveloper.name}
                  </p>
                </div>
                <button 
                  onClick={closeDrawer}
                  className="p-2 hover:bg-yellow-600 rounded-full transition-colors duration-200"
                >
                  <FiX size={20} />
                </button>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto p-6">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Destinataire
                  </label>
                  <div className="p-3 bg-gray-50 rounded-lg border">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {selectedDeveloper.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">{selectedDeveloper.name}</p>
                        <p className="text-sm text-gray-600">{selectedDeveloper.email}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Priorité
                  </label>
                  <select 
                    value={notificationForm.priority}
                    onChange={(e) => setNotificationForm({...notificationForm, priority: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="low">Faible</option>
                    <option value="normal">Normale</option>
                    <option value="high">Élevée</option>
                    <option value="urgent">Urgente</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Sujet
                  </label>
                  <input
                    type="text"
                    value={notificationForm.subject}
                    onChange={(e) => setNotificationForm({...notificationForm, subject: e.target.value})}
                    placeholder="Entrez le sujet de la notification..."
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <FiMessageSquare className="inline mr-2" size={16} />
                    Message
                  </label>
                  <textarea
                    value={notificationForm.message}
                    onChange={(e) => setNotificationForm({...notificationForm, message: e.target.value})}
                    placeholder="Rédigez votre message ici..."
                    rows={6}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200 resize-none"
                    required
                  />
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    onClick={handleNotificationSubmit}
                    className="flex-1 bg-yellow-500 text-white py-3 px-4 rounded-lg hover:bg-yellow-600 transition-colors duration-200 flex items-center justify-center gap-2 font-medium"
                  >
                    <FiSend size={16} />
                    Envoyer la notification
                  </button>
                  <button
                    type="button"
                    onClick={closeDrawer}
                    className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                  >
                    Annuler
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Gestion_dev