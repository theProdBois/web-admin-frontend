import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Login from './Composants/Login/Login'
import Tableaudebord from './Composants/Tache/Tableau de bord/Tableaudebord'
import Tache from './Composants/Tache/Tache'
import Gestion_app from './Composants/Tache/Gestion des applications/Gestion_app'
import Gestion_dev from './Composants/Tache/Gestion des developpeurs/Gestion_dev'
import Gestion_user from './Composants/Tache/Gestion des utilisateurs/Gestion_user'
import PaiementsTrans from './Composants/Tache/Paiements & Transactions/PaiementsTrans'
import Parametres from './Composants/Tache/Parametres/Parametres'

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path="/tache" element={<Tache/>}>
                <Route path='' element={<Tableaudebord/>}/>
                <Route path='gestionapp' element={<Gestion_app/>}/>
                <Route path='gestiondev' element={<Gestion_dev/>}/>  
                <Route path='gestionuser' element={<Gestion_user/>}/> 
                <Route path='paiementtransactions' element={<PaiementsTrans/>}/>               
                <Route path='parametres' element={<Parametres/>}/>               
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App