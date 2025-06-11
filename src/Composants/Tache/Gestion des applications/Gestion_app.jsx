import React, { useState } from 'react';
import { 
  FiMail, 
  FiChevronDown,
  FiChevronUp,
  FiUser,
  FiCode,
  FiGlobe,
  FiImage,
  FiExternalLink,
  FiCalendar,
  FiDownload
} from 'react-icons/fi';

function Gestion_app() {
  const [expandedApps, setExpandedApps] = useState(new Set());
  
  const getStatusColor = (status) => {
      switch (status) {
        case 'En attente':
          return 'bg-orange-100 text-orange-600 border-orange-200';
        case 'Validé':
          return 'bg-green-100 text-green-600 border-green-200';
        case 'Actif':
          return 'text-green-600';
        case 'Suspendu':
          return 'text-gray-400';
        default:
          return 'bg-gray-100 text-gray-600 border-gray-200';
      }
  };
  
  const getActionButton = (status, type) => {
      if (type === 'app') {
        return status === 'En attente' ? (
          <div className="flex gap-2">
            <button className="px-3 py-1 text-xs bg-yellow-100 text-yellow-700 rounded hover:bg-yellow-200 transition-colors">
              Analyser
            </button>
            <button className="px-3 py-1 text-xs bg-green-100 text-green-700 rounded hover:bg-green-200 transition-colors">
              Valider
            </button>
            <button className="px-3 py-1 text-xs bg-red-100 text-red-700 rounded hover:bg-red-200 transition-colors">
              Rejeter
            </button>
          </div>
        ) : (
          <div className="flex gap-2">
            <button 
              disabled 
              className="px-3 py-1 text-xs bg-gray-100 text-gray-400 rounded cursor-not-allowed"
            >
              Analyser
            </button>
            <button 
              disabled 
              className="px-3 py-1 text-xs bg-gray-100 text-gray-400 rounded cursor-not-allowed"
            >
              Valider
            </button>
            <button className="px-3 py-1 text-xs bg-red-100 text-red-700 rounded hover:bg-red-200 transition-colors">
              Rejeter
            </button>
          </div>
        );
      }
      return (
        <div className="flex gap-2">
          <button className="px-4 py-2 text-sm bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors">
            Liste ses applications
          </button>
          <button className="px-4 py-2 text-sm bg-yellow-100 text-yellow-700 rounded hover:bg-yellow-200 flex items-center gap-1 transition-colors">
            <FiMail size={14} />
            Env. Notif
          </button>
        </div>
      );
  };
  
  const applications = [
      {
        id: 1,
        name: 'PhotoShop',
        version: '1.4.2',
        date: '1 Juin 2025 à 22h 05min',
        status: 'En attente',
        details: {
          developer: 'Adobe Systems',
          language: 'C++, JavaScript',
          availableLanguages: ['Français', 'Anglais', 'Espagnol', 'Allemand'],
          description: 'Application de retouche photo professionnelle avec des outils avancés de manipulation d\'images, de création graphique et de design.',
          screenshots: [
            '',
            ''
          ],
          policyLink: '',
          downloadLink: '',
          releaseDate: '15 Mai 2025',
          size: '2.1 GB',
          rating: 4.5,
          category: 'Design graphique'
        }
      },
      {
        id: 2,
        name: 'PhotoShop',
        version: '1.4.2',
        date: '1 Juin 2025 à 22h 05min',
        status: 'Validé',
        details: {
          developer: 'Adobe Systems',
          language: 'C++, JavaScript',
          availableLanguages: ['Français', 'Anglais', 'Espagnol'],
          description: 'Version validée de l\'application de retouche photo avec toutes les fonctionnalités approuvées.',
          screenshots: [
            '',
            ''
          ],
          policyLink: '',
          downloadLink: '',
          releaseDate: '10 Mai 2025',
          size: '2.0 GB',
          rating: 4.7,
          category: 'Design graphique'
        }
      },
      {
        id: 3,
        name: 'PhotoShop',
        version: '1.4.2',
        date: '1 Juin 2025 à 22h 05min',
        status: 'Validé',
        details: {
          developer: 'Adobe Systems',
          language: 'C++, JavaScript',
          availableLanguages: ['Français', 'Anglais'],
          description: 'Application de retouche photo optimisée pour les appareils mobiles avec interface intuitive.',
          screenshots: [
            '',
            ''
          ],
          policyLink: 'https://adobe.com/privacy-policy',
          downloadLink: 'https://adobe.com/photoshop/download',
          releaseDate: '5 Mai 2025',
          size: '1.8 GB',
          rating: 4.3,
          category: 'Design graphique'
        }
      },
      {
        id: 4,
        name: 'PhotoShop',
        version: '1.4.2',
        date: '1 Juin 2025 à 22h 05min',
        status: 'Validé',
        details: {
          developer: 'Adobe Systems',
          language: 'C++, JavaScript',
          availableLanguages: ['Français', 'Anglais', 'Japonais'],
          description: 'Version enterprise de PhotoShop avec fonctionnalités avancées pour les équipes de design.',
          screenshots: [
            '',
            ''
          ],
          policyLink: '',
          downloadLink: '',
          releaseDate: '1 Mai 2025',
          size: '2.5 GB',
          rating: 4.8,
          category: 'Design graphique'
        }
      }
  ];

  const toggleDetails = (appId) => {
    setExpandedApps(prev => {
      const newSet = new Set(prev);
      if (newSet.has(appId)) {
        newSet.delete(appId);
      } else {
        newSet.add(appId);
      }
      return newSet;
    });
  };

  const renderAppDetails = (app) => {
    const isExpanded = expandedApps.has(app.id);
    
    return (
      <tr key={`details-${app.id}`}>
        <td colSpan="4" className="px-0 py-0">
          <div 
            className={`border-t border-gray-200 overflow-hidden transition-all duration-500 ease-in-out ${
              isExpanded 
                ? 'max-h-screen opacity-100' 
                : 'max-h-0 opacity-0'
            }`}
          >
            <div 
              className={`bg-gray-100 transform transition-all duration-500 ease-in-out ${
                isExpanded 
                  ? 'translate-y-0 scale-100' 
                  : '-translate-y-4 scale-95'
              }`}
            >
              <div className="px-6 py-2">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Informations générales */}
                  <div className="space-y-3">
                    <h3 className="text-[16px] font-semibold text-gray-800 mb-2">Informations générales</h3>
                    
                    <div className="flex items-center gap-3 transform transition-all duration-300 delay-100">
                      <FiUser className="text-blue-500" size={16} />
                      <div>
                        <span className="text-sm font-medium text-gray-600">Développeur:</span>
                        <span className="ml-2 text-sm text-gray-800">{app.details.developer}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 transform transition-all duration-300 delay-150">
                      <FiCode className="text-green-500" size={16} />
                      <div>
                        <span className="text-sm font-medium text-gray-600">Langage:</span>
                        <span className="ml-2 text-sm text-gray-800">{app.details.language}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 transform transition-all duration-300 delay-200">
                      <FiGlobe className="text-purple-500" size={16} />
                      <div>
                        <span className="text-sm font-medium text-gray-600">Langues disponibles:</span>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {app.details.availableLanguages.map((lang, index) => (
                            <span 
                              key={index} 
                              className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs transform transition-all duration-300 hover:scale-105"
                              style={{ animationDelay: `${(index * 100) + 250}ms` }}
                            >
                              {lang}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 transform transition-all duration-300 delay-300">
                      <FiCalendar className="text-orange-500" size={16} />
                      <div>
                        <span className="text-sm font-medium text-gray-600">Date de sortie:</span>
                        <span className="ml-2 text-sm text-gray-800">{app.details.releaseDate}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 transform transition-all duration-300 delay-350">
                      <FiDownload className="text-indigo-500" size={16} />
                      <div>
                        <span className="text-sm font-medium text-gray-600">Taille:</span>
                        <span className="ml-2 text-sm text-gray-800">{app.details.size}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 transform transition-all duration-300 delay-400">
                      <div className="flex items-center">
                        <span className="text-sm font-medium text-gray-600">Note:</span>
                        <div className="flex items-center ml-2">
                          <span className="text-yellow-500 animate-pulse">★</span>
                          <span className="ml-1 text-sm text-gray-800">{app.details.rating}/5</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Description et captures */}
                  <div className="space-y-3">
                    <h3 className="text-[16px] font-semibold text-gray-800 mb-2">Description</h3>
                    
                    <div className="flex items-start gap-3 transform transition-all duration-300 delay-450">
                      <p className="text-[13px] text-gray-700 leading-relaxed">
                        {app.details.description}
                      </p>
                    </div>
                    
                    <div className="space-y-3 transform transition-all duration-300 delay-500">
                      <div className="flex items-center gap-2">
                        <FiImage className="text-gray-500" size={16} />
                        <span className="text-sm font-medium text-gray-600">Captures d'écran:</span>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        {app.details.screenshots.map((screenshot, index) => (
                          <div 
                            key={index} 
                            className="relative group transform transition-all duration-300 hover:scale-105"
                            style={{ animationDelay: `${(index * 100) + 550}ms` }}
                          >
                            <img 
                              src={screenshot} 
                              alt={`Screenshot ${index + 1}`}
                              className="w-full h-24 object-cover rounded-lg border border-gray-200 hover:shadow-md transition-all duration-300"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 rounded-lg"></div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Liens et actions */}
                <div className="mt-3 pt-2 border-t border-gray-200 transform transition-all duration-300 delay-600">
                  <div className="flex flex-wrap gap-3">
                    <a 
                      href="" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all duration-300 hover:scale-105 text-sm"
                    >
                      <FiExternalLink size={14} />
                      Politique de confidentialité
                    </a>
                    <a 
                      href=""
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300 hover:scale-105 text-sm"
                    >
                      <FiDownload size={14} />
                      Télécharger
                    </a>
                    <span className="flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-lg text-sm transition-all duration-300 hover:scale-105">
                      <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></span>
                      {app.details.category}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </td>
      </tr>
    );
  };

  return (
    <div className='p-4'>
      <h2 className="text-xl font-semibold text-orange-500 mb-3">Listes d'applications</h2>
      
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left py-2 px-6 font-semibold text-gray-700">Application</th>
              <th className="text-left py-2 px-6 font-semibold text-gray-700">Status</th>
              <th className="text-left py-2 px-6 font-semibold text-gray-700">Actions</th>
              <th className="text-left py-2 px-6 font-semibold text-gray-700">Détails</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app) => (
              <React.Fragment key={app.id}>
                <tr className="border-t border-gray-100 hover:bg-gray-50">
                  <td className="py-2 px-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
                        Ps
                      </div>
                      <div>
                        <div className="font-semibold text-[14px] text-gray-800">{app.name}</div>
                        <div className="text-[12px] text-gray-500">Version : {app.version}</div>
                        <div className="text-[12px] text-gray-500">Date : {app.date}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-2 px-6">
                    <span className={`px-3 py-1 rounded-full text-sm border ${getStatusColor(app.status)}`}>
                      {app.status}
                    </span>
                  </td>
                  <td className="py-2 px-6">
                    {getActionButton(app.status, 'app')}
                  </td>
                  <td className="py-2 px-6">
                    <button 
                      onClick={() => toggleDetails(app.id)}
                      className="text-orange-500 text-[14px] hover:text-orange-700 flex items-center gap-1 transition-colors"
                    >
                      Détails
                      {expandedApps.has(app.id) ? (
                        <FiChevronUp size={14} className="transition-transform duration-300" />
                      ) : (
                        <FiChevronDown size={14} className="transition-transform duration-300" />
                      )}
                    </button>
                  </td>
                </tr>
                {renderAppDetails(app)}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Gestion_app