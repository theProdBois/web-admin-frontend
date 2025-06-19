import React, { useState, useRef } from 'react';
import { 
  FaChevronDown,
  FaChevronUp,
  FaUpload,
  FaSave,
  FaStore,
  FaGlobe,
  FaHeadset,
  FaCommentDots
} from 'react-icons/fa';
import Logo from '../../../Logo/Logo.png'

function Parametres() {
  const [expandedSection, setExpandedSection] = useState(null);
  const [storeData, setStoreData] = useState({
    logo: null,
    logoPreview: null,
    storeName: 'Tunisi Store',
    slogan: 'Votre Store de confiance',
    privacyUrl: 'https://example.com/privacy',
    termsUrl: 'https://example.com/terms',
    supportEmail: 'support@tunisiestore.com',
    supportPhone: '+216 XX XXX XXX',
    welcomeMessage: 'Bienvenue sur Tunisi Store ! Découvrez nos produits de qualité.'
  });
  
  const fileInputRef = useRef(null);

  const handleLogoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setStoreData(prev => ({
          ...prev,
          logo: file,
          logoPreview: e.target.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (field, value) => {
    setStoreData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const toggleSection = (index) => {
    setExpandedSection(expandedSection === index ? null : index);
  };

  const settingsSections = [
    { 
      title: 'Logo & Slogan', 
      icon: FaStore,
      content: (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Logo du magasin
            </label>
            <div className="flex items-center space-x-4">
              <div className="w-20 h-20 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center bg-gray-50">
                {storeData.logoPreview ? (
                  <img 
                    src={storeData.logoPreview} 
                    alt="Logo preview" 
                    className="w-full h-full object-cover rounded-lg"
                  />
                ) : (
                  <FaUpload className="text-gray-400 text-xl" />
                )}
              </div>
              <button
                onClick={() => fileInputRef.current?.click()}
                className="px-2 py-1 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-all duration-300 transform hover:scale-105"
              >
                Changer le logo
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleLogoUpload}
                className="hidden"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nom du magasin
            </label>
            <input
              type="text"
              value={storeData.storeName}
              onChange={(e) => handleInputChange('storeName', e.target.value)}
              className="w-full px-3 py-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
              placeholder="Nom de votre magasin"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Slogan
            </label>
            <input
              type="text"
              value={storeData.slogan}
              onChange={(e) => handleInputChange('slogan', e.target.value)}
              className="w-full px-3 py-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
              placeholder="Slogan de votre magasin"
            />
          </div>
        </div>
      )
    },
    { 
      title: 'URL de politique de confidentialité / CGU', 
      icon: FaGlobe,
      content: (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              URL Politique de confidentialité
            </label>
            <input
              type="url"
              value={storeData.privacyUrl}
              onChange={(e) => handleInputChange('privacyUrl', e.target.value)}
              className="w-full px-3 py-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
              placeholder="https://example.com/privacy"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              URL Conditions générales d'utilisation
            </label>
            <input
              type="url"
              value={storeData.termsUrl}
              onChange={(e) => handleInputChange('termsUrl', e.target.value)}
              className="w-full px-3 py-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
              placeholder="https://example.com/terms"
            />
          </div>
        </div>
      )
    },
    { 
      title: 'Contact Support', 
      icon: FaHeadset,
      content: (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email de support
            </label>
            <input
              type="email"
              value={storeData.supportEmail}
              onChange={(e) => handleInputChange('supportEmail', e.target.value)}
              className="w-full px-3 py-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
              placeholder="support@example.com"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Téléphone de support
            </label>
            <input
              type="tel"
              value={storeData.supportPhone}
              onChange={(e) => handleInputChange('supportPhone', e.target.value)}
              className="w-full px-3 py-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
              placeholder="+216 XX XXX XXX"
            />
          </div>
        </div>
      )
    },
    { 
      title: 'Gérer le texte d\'accueil d\'utilisateur', 
      icon: FaCommentDots,
      content: (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Message d'accueil
            </label>
            <textarea
              value={storeData.welcomeMessage}
              onChange={(e) => handleInputChange('welcomeMessage', e.target.value)}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 resize-none"
              placeholder="Rédigez votre message d'accueil pour les utilisateurs..."
            />
          </div>
        </div>
      )
    }
  ];

  const handleSave = () => {
    // Ici vous pouvez ajouter la logique pour sauvegarder les données
    console.log('Données sauvegardées:', storeData);
    // Animation de succès
    const saveButton = document.getElementById('save-button');
    saveButton.classList.add('animate-pulse');
    setTimeout(() => {
      saveButton.classList.remove('animate-pulse');
    }, 1000);
  };

  return (
    <div className="p-4 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-4xl transform transition-all duration-500 hover:shadow-xl">
        {/* En-tête avec logo et nom du magasin */}
        <div className="text-center mb-6 transform transition-all duration-700 hover:scale-95">
          <div className="w-16 h-16 p-2 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl shadow-lg mx-auto mb-4 flex items-center justify-center transform transition-all duration-500 hover:rotate-3">
            {storeData.logoPreview ? (
              <img 
                src={storeData.logoPreview} 
                alt="Logo" 
                className="w-full h-full object-cover rounded-lg"
              />
            ) : (
              <img src={Logo} className='p-2 bg-gray-50 rounded-md '/>
            )}
          </div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
            {storeData.storeName}
          </h2>
          <p className="text-gray-600 mt-1">{storeData.slogan}</p>
        </div>

        {/* Sections de paramètres */}
        <div className="space-y-3">
          {settingsSections.map((section, index) => {
            const Icon = section.icon;
            const isExpanded = expandedSection === index;
            
            return (
              <div
                key={index}
                className="border border-gray-200 rounded-xl overflow-hidden transform transition-all duration-500 hover:shadow-lg"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: 'slideInUp 0.6s ease-out forwards'
                }}
              >
                <div
                  onClick={() => toggleSection(index)}
                  className="flex items-center justify-between p-2 bg-gradient-to-r from-gray-50 to-gray-100 hover:from-orange-50 hover:to-orange-100 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-7 h-7 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center transform transition-all duration-300 hover:scale-110">
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-medium text-gray-700">{section.title}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    {isExpanded ? (
                      <FaChevronUp className="w-4 h-4 text-gray-400 transform transition-transform duration-300" />
                    ) : (
                      <FaChevronDown className="w-4 h-4 text-gray-400 transform transition-transform duration-300" />
                    )}
                  </div>
                </div>
                
                {/* Contenu expandable avec animation */}
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-6 bg-white border-t border-gray-100">
                    {section.content}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bouton de sauvegarde */}
        <div className="mt-8 text-center">
          <button
            id="save-button"
            onClick={handleSave}
            className="w-full py-1 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-medium rounded-[8px] shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-100 hover:from-orange-600 hover:to-orange-200 focus:outline-none focus:ring-4 focus:ring-orange-200"
          >
            <FaSave className="inline-block mr-2" />
            Sauvegarder les modifications
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

export default Parametres;