import React, { useState } from 'react';
import { 
  FaEnvelope,
  FaTimes,
  FaPaperPlane,
  FaDownload,
  FaCalendarAlt,
  FaClock,
  FaUser,
  FaUserTie, 
  FaUserNurse
} from 'react-icons/fa';


function Gestion_user() {
  const [activeDrawer, setActiveDrawer] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [notificationForm, setNotificationForm] = useState({
    subject: '',
    message: '',
    priority: 'normal'
  });

  const openDownloadsDrawer = (user) => {
    setSelectedUser(user);
    setActiveDrawer('downloads');
  };

  const openNotificationDrawer = (user) => {
    setSelectedUser(user);
    setActiveDrawer('notification');
    setNotificationForm({ subject: '', message: '', priority: 'normal' });
  };

  const closeDrawer = () => {
    setActiveDrawer(null);
    setSelectedUser(null);
  };

  const handleNotificationSubmit = () => {
    // Logique d'envoi de notification
    console.log('Notification envoyée:', {
      user: selectedUser,
      ...notificationForm
    });
    alert('Notification envoyée avec succès!');
    closeDrawer();
  };

  // Données d'exemple pour les téléchargements
  const getDownloads = (userId) => {
    const allDownloads = {
      1: [
        { 
          id: 1, 
          appName: 'TaskManager Pro', 
          version: '2.1.0', 
          downloadDate: '2024-06-10', 
          downloadTime: '14:30:25',
          size: '12.5 MB',
          status: 'Terminé'
        },
        { 
          id: 2, 
          appName: 'Weather App', 
          version: '1.0.3', 
          downloadDate: '2024-06-09', 
          downloadTime: '09:15:42',
          size: '8.2 MB',
          status: 'Terminé'
        },
        { 
          id: 3, 
          appName: 'Chat Bot', 
          version: '3.2.1', 
          downloadDate: '2024-06-08', 
          downloadTime: '16:20:10',
          size: '25.1 MB',
          status: 'Terminé'
        }
      ],
      2: [
        { 
          id: 4, 
          appName: 'E-Commerce App', 
          version: '1.5.0', 
          downloadDate: '2024-06-07', 
          downloadTime: '11:45:33',
          size: '18.7 MB',
          status: 'Terminé'
        },
        { 
          id: 5, 
          appName: 'Social Media', 
          version: '2.0.0', 
          downloadDate: '2024-06-06', 
          downloadTime: '13:22:18',
          size: '22.3 MB',
          status: 'En cours'
        }
      ],
      3: [
        { 
          id: 6, 
          appName: 'Budget Tracker', 
          version: '1.2.0', 
          downloadDate: '2024-06-05', 
          downloadTime: '10:05:55',
          size: '9.8 MB',
          status: 'Terminé'
        }
      ],
      4: [
        { 
          id: 7, 
          appName: 'Fitness App', 
          version: '1.0.0', 
          downloadDate: '2024-06-04', 
          downloadTime: '15:30:12',
          size: '15.4 MB',
          status: 'Terminé'
        },
        { 
          id: 8, 
          appName: 'Recipe Book', 
          version: '2.3.0', 
          downloadDate: '2024-06-03', 
          downloadTime: '08:45:30',
          size: '31.2 MB',
          status: 'Échoué'
        }
      ]
    };
    return allDownloads[userId] || [];
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Terminé':
        return 'bg-green-100 text-green-600 border-green-200';
      case 'En cours':
        return 'bg-blue-100 text-blue-600 border-blue-200';
      case 'Échoué':
        return 'bg-red-100 text-red-600 border-red-200';
      case 'Actif':
        return 'bg-green-100 text-green-800';
      case 'Suspendu':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-600 border-gray-200';
    }
  };

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };
  
  const developers = [
    {
      id: 1,
      profileIcon: <FaUserTie className="text-xl text-gray-600" />,
      name: 'REDIDA Léo carlos',
      phone: '+204 555',
      email: 'carlosredida557@gmail.com',
      status: 'Actif'
    },
    {
      id: 2,
      profileIcon: <FaUserTie className="text-xl text-gray-600" />,
      name: 'BG Riccard',
      phone: '+204 555',
      email: 'carlosredida557@gmail.com',
      status: 'Suspendu'
    },
    {
      id: 3,
      profileIcon: <FaUserNurse className="text-xl text-gray-600" />,
      name: 'DIBA Sahine',
      phone: '+204 555',
      email: 'carlosredida557@gmail.com',
      status: 'Actif'
    },
    {
      id: 4,
      profileIcon: <FaUserNurse className="text-xl text-gray-600" />,
      name: 'REDIDA Aryane',
      phone: '+204 555',
      email: 'carlosredida557@gmail.com',
      status: 'Suspendu'
    }
  ];
  

  return (
    <div className="p-4 bg-gray-50 relative">
      <h2 className="text-xl font-semibold text-orange-500 mb-3">Listes des utilisateurs</h2>
      <div className="bg-white rounded-lg shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Profil</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nom&Prénom</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Numéro</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">E-mail</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Etats</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {developers.map((dev) => (
                <tr key={dev.id} className="hover:bg-gray-50">
                  <td className="px-6 py-2 whitespace-nowrap">
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                      <span>{dev.profileIcon}</span>
                    </div>
                  </td>
                  <td className="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                    {dev.name}
                  </td>
                  <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-500">
                    {dev.phone}
                  </td>
                  <td className="px-6 py-2 whitespace-nowrap text-sm text-blue-600 underline">
                    {dev.email}
                  </td>
                  <td className="px-6 py-2 whitespace-nowrap">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(dev.status)}`}>
                      {dev.status}
                    </span>
                  </td>
                  <td className="px-6 py-2 flex flex-row items-center whitespace-nowrap text-sm space-x-2">
                    <button 
                      onClick={() => openDownloadsDrawer(dev)}
                      className="bg-orange-500 text-white px-2 py-2 rounded text-xs hover:bg-orange-600 transition-colors duration-200"
                    >
                      Liste ses téléchargem
                    </button>
                    <button 
                      onClick={() => openNotificationDrawer(dev)}
                      className="px-3 py-1 text-[13px] bg-yellow-100 text-yellow-700 rounded hover:bg-yellow-200 flex items-center gap-1 transition-colors duration-200"
                    >
                      <FaEnvelope size={14} />
                      Env. Notif
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Overlay */}
      {activeDrawer && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ease-out"
          onClick={closeDrawer}
        />
      )}

      {/* Tiroir des Téléchargements */}
      <div className={`fixed top-0 right-0 h-full w-96 bg-white shadow-2xl z-50 transform transition-transform duration-500 ease-out ${
        activeDrawer === 'downloads' ? 'translate-x-0' : 'translate-x-full'
      }`}>
        {activeDrawer === 'downloads' && selectedUser && (
          <div className="h-full flex flex-col">
            <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-bold flex items-center gap-2">
                    <FaDownload size={20} />
                    Téléchargements
                  </h3>
                  <p className="text-orange-100 text-sm">{selectedUser.name}</p>
                </div>
                <button 
                  onClick={closeDrawer}
                  className="p-2 hover:bg-orange-600 rounded-full transition-colors duration-200"
                >
                  <FaTimes size={20} />
                </button>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto p-6">
              <div className="space-y-4">
                {getDownloads(selectedUser.id).map((download) => (
                  <div key={download.id} className="bg-gray-50 rounded-lg p-4 border border-gray-200 hover:shadow-md transition-shadow duration-200">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="font-semibold text-gray-800">{download.appName}</h4>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(download.status)}`}>
                        {download.status}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-3">
                      <div>
                        <span className="font-medium">Version:</span> {download.version}
                      </div>
                      <div>
                        <span className="font-medium">Taille:</span> {download.size}
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <FaCalendarAlt size={12} />
                        <span>{formatDate(download.downloadDate)}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaClock size={12} />
                        <span>{download.downloadTime}</span>
                      </div>
                    </div>
                  </div>
                ))}
                {getDownloads(selectedUser.id).length === 0 && (
                  <div className="text-center py-8 text-gray-500">
                    <FaDownload size={48} className="mx-auto mb-4 text-gray-300" />
                    <p>Aucun téléchargement trouvé</p>
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
        {activeDrawer === 'notification' && selectedUser && (
          <div className="h-full flex flex-col">
            <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-bold flex items-center gap-2">
                    <FaEnvelope size={20} />
                    Envoyer une notification
                  </h3>
                  <p className="text-yellow-100 text-sm flex items-center gap-2 mt-1">
                    <FaUser size={14} />
                    {selectedUser.name}
                  </p>
                </div>
                <button 
                  onClick={closeDrawer}
                  className="p-2 hover:bg-yellow-600 rounded-full transition-colors duration-200"
                >
                  <FaTimes size={20} />
                </button>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto p-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Destinataire
                  </label>
                  <div className="p-3 bg-gray-50 rounded-lg border">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                        <span className="text-lg">{selectedUser.profileIcon}</span>
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">{selectedUser.name}</p>
                        <p className="text-sm text-gray-600">{selectedUser.email}</p>
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
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    value={notificationForm.message}
                    onChange={(e) => setNotificationForm({...notificationForm, message: e.target.value})}
                    placeholder="Rédigez votre message ici..."
                    rows={6}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200 resize-none"
                  />
                </div>

                <div className="flex gap-3 pt-2">
                  <button
                    onClick={handleNotificationSubmit}
                    className="flex-1 bg-yellow-500 text-white py-1 px-4 rounded-lg hover:bg-yellow-600 transition-colors duration-200 flex items-center justify-center gap-2 font-medium"
                  >
                    <FaPaperPlane size={16} />
                    Envoyer la notification
                  </button>
                  <button
                    onClick={closeDrawer}
                    className="px-4 py-1 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
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

export default Gestion_user