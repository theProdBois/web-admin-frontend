import React from 'react'
import Navigation_R from './Navigations Right/Navigation_R'
import { Outlet } from 'react-router-dom'
import Navigation_T from './Navigations Top/Navigation_T'

function Tache() {
  return (
    <div className='h-screen bg-gradient-to-br from-orange-600 to-red-600 p-2 overflow-hidden'>
        <div className="flex h-full min-h-screen">
            <div className="w-[260px] p-2">    
                <Navigation_R/>
            </div>
            <div className="flex-1 flex flex-col ml-2">

                <Navigation_T />
                <div className="flex-1 mb-6 bg-gray-50 rounded-xl p-4 overflow-auto">
                    <Outlet />
                </div>

            </div>           
        </div>
    </div>
  )
}

export default Tache