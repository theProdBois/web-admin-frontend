import React, { useState, useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { MdColorLens, MdSmartphone, MdDownload, MdGroup } from 'react-icons/md';
import { FaMoneyBillWave } from "react-icons/fa";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

function Tableaudebord() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [selectedCalendarDate, setSelectedCalendarDate] = useState(7);

  const revenueData = {
    labels: ['01/06', '02/06', '03/06', '04/06', '05/06', '06/06', '07/06', '08/06', '09/06', '05/06', '06/06', '07/06', '08/06', '09/06'],
    datasets: [
      {
        type: 'bar',
        label: 'Revenus journaliers',
        data: [18, 23, 19, 21, 10, 8, 26, 28, 22, 10, 8, 26, 28, 22],
        backgroundColor: '#FF4444',
        borderRadius: 4,
      },
      {
        type: 'line',
        label: 'Tendance',
        data: [20, 22, 20, 18, 12, 10, 25, 27, 24, 10, 8, 26, 28, 22],
        borderColor: '#666',
        backgroundColor: 'transparent',
        tension: 0.4,
        pointRadius: 0,
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 30,
        ticks: {
          callback: function(value) {
            return value + ' TND';
          }
        }
      }
    }
  };

  const activities = [
    {
      date: 'Lundi 7',
      app: 'PhotoShop',
      developer: 'Crafter',
      description: 'Nouvelle app Photoshop soumise',
      status: 'New',
      icon: <MdColorLens className="text-xl text-orange-500" />
    },
    {
      date: 'Dima 6',
      app: 'Scanner',
      developer: 'Crafter',
      description: 'App Scanner validée aujourd\'hui',
      status: 'Valider',
      icon: <MdSmartphone className="text-xl text-green-500" />
    },
    {
      date: 'Sam 5',
      app: 'PhotoShop',
      developer: 'Crafter',
      description: 'Nouvelle app Photoshop soumise',
      status: 'New',
      icon: <MdColorLens className="text-xl text-orange-500" />
    },
    {
      date: 'Sam 5',
      app: 'Scanner',
      developer: 'Crafter',
      description: 'App Scanner validée aujourd\'hui',
      status: 'Valider',
      icon: <MdSmartphone className="text-xl text-green-500" />
    }
  ];

  const stats = [
    {
      icon: <MdDownload />,
      bgColor: 'bg-blue-100',
      iconColor: 'text-blue-600',
      title: 'Téléchargements totaux',
      subtitle: 'Téléchargements par rapport à toutes l\'applications',
      value: '1,5 K',
      progress: 75
    },
    {
      icon: <MdSmartphone />,
      bgColor: 'bg-green-100',
      iconColor: 'text-green-600',
      title: 'Nombre total d\'application publiés',
      subtitle: 'Non publié / refusé',
      value: '60 K',
      subValue: 'Publiés',
      progress: 100
    },
    {
      icon: <MdGroup />,
      bgColor: 'bg-purple-100',
      iconColor: 'text-purple-600',
      title: 'Nombre de développeurs',
      subtitle: 'Femme',
      value: '70',
      subValue: 'Homme',
      progress: 80
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatDateTime = (date) => {
    const months = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');

    return `${month} ${year} ${hours}:${minutes}:${seconds}`;
  };

  const generateCalendar = () => {
    const today = new Date();
    const dayNames = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];
    const calendarDays = [];

    for (let i = -5; i <= 5; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);

      const dayName = dayNames[date.getDay()];
      const dayNumber = date.getDate();

      calendarDays.push({
        dayName: dayName,
        dayNumber: dayNumber,
        fullDate: date,
        isToday: i === 0
      });
    }

    return calendarDays.map((day, index) => (
      <div key={index} className="text-center flex-1">
        <div className="text-xs text-gray-500 mb-1">{day.dayName}</div>
        <div
          className={`text-xs w-8 h-6 mx-auto rounded flex items-center justify-center cursor-pointer ${
            day.dayNumber === selectedCalendarDate
              ? 'bg-red-500 text-white'
              : day.isToday
              ? 'bg-orange-200 border border-orange-400'
              : 'hover:bg-gray-100'
          }`}
          onClick={() => setSelectedCalendarDate(day.dayNumber)}
        >
          {day.dayNumber}
        </div>
      </div>
    ));
  };

  return (
    <div className="p-4 bg-gray-50 min-h-screen flex flex-col">
      {/* Section haute - Date/Calendar + Activities + Stats */}
      <div className="flex flex-col lg:flex-row gap-6 mb-6 flex-1">
        
        {/* Colonne gauche - Date et Activities */}
        <div className="flex flex-col flex-1 lg:flex-[2] space-y-4">
          {/* Date et Calendar */}
          <div className="rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <div className="px-3 py-1 w-full bg-orange-100 rounded-[6px] text-[16px] font-semibold text-orange-500">
                {formatDateTime(currentDateTime)}
              </div>
            </div>
            <div className="flex space-x-1">
              {generateCalendar()}
            </div>
          </div>
          
          {/* Activities */}
          <div className="bg-white rounded-lg shadow-sm px-4 py-2 flex-1">
            <h3 className="text-lg font-semibold text-orange-500 mb-2">Activité récente</h3>
            <div className="space-y-3 max-h-80 overflow-y-auto">
            {activities.map((activity, index) => (
                <div key={index} className="flex items-center justify-between px-3 py-1 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="text-xs text-gray-500 w-12">{activity.date}</div>
                    <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-xs">Ps</span>
                    </div>
                    <div>
                      <div className="font-medium text-sm">{activity.app}</div>
                      <div className="text-xs text-gray-600">Développeur : {activity.developer}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="text-xs text-gray-600 max-w-xs">{activity.description}</div>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      activity.status === 'Rejeter' 
                        ? 'bg-red-100 text-red-600' 
                        : activity.status === 'Valider'
                        ? 'bg-green-100 text-green-600'
                        : 'bg-orange-100 text-orange-600'
                    }`}>
                      Status: {activity.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Colonne droite - Stats */}
        <div className="flex flex-row lg:flex-col lg:w-80 gap-4 lg:gap-4 overflow-x-auto lg:overflow-x-visible">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-3 min-w-64 lg:min-w-0 flex-shrink-0">
              <div className="flex items-center space-x-2 mb-3">
                <div className={`w-10 h-10 ${stat.bgColor} rounded-lg flex items-center justify-center`}>
                  <span className={`${stat.iconColor} text-xl`}>{stat.icon}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm text-gray-600 leading-tight">{stat.title}</div>
                  <div className="text-xs text-gray-500">{stat.subtitle}</div>
                </div>
              </div>
              <div className="text-[15px] font-bold text-orange-500">{stat.value}</div>
              {stat.subValue && (
                <div className="text-xs text-gray-500 mt-1">{stat.subValue}</div>
              )}
              <div className="mt-2 bg-orange-100 rounded-full h-2">
                <div 
                  className="bg-orange-500 h-2 rounded-full transition-all duration-300" 
                  style={{ width: `${stat.progress}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section basse - Graphique des revenus (indépendant) */}
      <div className="bg-white rounded-lg shadow-sm px-4 py-2 flex-shrink-0">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 space-y-2 sm:space-y-0">
          <h3 className="text-lg font-semibold text-orange-500">Graphique des revenus</h3>
          <div className="flex space-x-2">
            <button className="px-4 py-1 bg-orange-500 text-white rounded text-sm">Jour</button>
            <button className="px-4 py-1 bg-gray-200 text-gray-600 rounded text-sm">Mois</button>
          </div>
        </div>
        <div className="mb-4">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
              <FaMoneyBillWave className="text-yellow-900 text-[16px]" />
            </div>
            <span className="text-[13px] sm:text-[16px] font-bold text-gray-800 break-all">20,785,025.54 TND</span>
          </div>
        </div>
        <div className="h-[140px] sm:h-[170px]">
          <Bar data={revenueData} options={chartOptions} />
        </div>
      </div>
    </div>
  )
}

export default Tableaudebord