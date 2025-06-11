import React, { useState } from 'react';
import { 
  FiMail,
  FiLock,
} from 'react-icons/fi';
import { Link } from 'react-router-dom'
import Logo from '../../Logo/Logo.png'

function Login() {

  const [loginData, setLoginData] = useState({
    email: 'carlosredida@gmail.com',
    password: ''
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-4xl flex items-center">
        {/* Section gauche */}
        <div className="flex-1 pr-8">
          <div className="flex items-center gap-3 mb-6">
            <img src={Logo} className='w-12 h-12'/>
            <h1 className="text-3xl font-bold text-orange-500">Tounsi Store</h1>
          </div>
          
          <div className="mb-8">
            <p className="text-gray-700 leading-relaxed">
              Bienvenue sur l'espace sécurisé des administrateurs de <strong>Tunisi Store</strong>.
            </p>
            <p className="text-gray-700 text-[14px] leading-relaxed mt-1">
              Veuillez vous connecter pour accéder à votre tableau de bord et gérer les publications, paiements, 
              utilisateurs et développeurs de la plateforme.
            </p>
          </div>
        </div>
        {/* Section droite - Formulaire */}
        <div className="flex-1 my-2 pl-8 border-l border-gray-100">
          <h2 className="text-2xl font-bold text-gray-700 mb-8 text-center">
            CONNEXION ADMINISTRATEUR
          </h2>
          <div className="space-y-5">
            <div>
              <label className="block text-gray-600 text-[13px] mb-2">Adresse e-mail</label>
              <div className="relative">
                <FiMail className="absolute left-3 top-3 text-gray-400" size={20} />
                <input
                  type="email"
                  value={loginData.email}
                  onChange={(e) => setLoginData({...loginData, email: e.target.value})}
                  className="w-full pl-12 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-orange-500 bg-gray-50"
                  placeholder="votre@email.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-600 text-[13px] mb-2">Mot de passe</label>
              <div className="relative">
                <FiLock className="absolute left-3 top-3 text-gray-400" size={20} />
                <input
                  type="password"
                  value={loginData.password}
                  onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                  className="w-full pl-12 pr-12 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-orange-500 bg-gray-50"
                  placeholder="••••••••••••••••••••••••"
                />
              </div>
            </div>
            <div className="text-right">
              <a href="#" className="text-orange-500 text-sm hover:underline">
                Mot de passe oublié ?
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
            >
              <Link to="/tache" >Se connecter</Link>
            </button>
            <div className="flex items-center justify-center text-gray-400 text-sm mt-4">
              <FiLock className="mr-2" size={16} />
              Vos données sont sécurisées
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login