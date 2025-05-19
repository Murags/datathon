import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'
import toast from 'react-hot-toast';

const StatCard = ({ title, value, icon, trend }) => (
  <div className="bg-gray-800/50 border border-gray-700 p-6 rounded-lg shadow-lg hover:shadow-emerald-500/20 transition-shadow duration-300">
    <div className="flex items-center justify-between mb-3">
      <h3 className="text-lg font-semibold text-gray-300">{title}</h3>
      {icon && <span className="text-2xl text-emerald-400">{icon}</span>}
    </div>
    <p className="text-4xl font-bold text-emerald-400 mb-1">{value}</p>
    {trend && <p className={`text-sm ${trend.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>{trend}</p>}
  </div>
);

const WelcomePage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('User');

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      toast.error('Access denied. Please login.');
      navigate('/login');
    }
    const storedUser = localStorage.getItem('username');
    if (storedUser) {
      setUsername(storedUser);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('username');
    toast.success('Logged out successfully!');
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white font-mono flex flex-col">
      {/* Header */}
      <header className="bg-gray-900/80 shadow-lg sticky top-0 z-50 backdrop-blur-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center max-w-7xl">
          <Link to="/welcome" className="text-2xl font-bold text-emerald-400 hover:text-emerald-300 transition-colors">
            &lt;DatathonDash /&gt;
          </Link>
          <div className="flex items-center space-x-4">
            <span className="text-gray-300">Welcome, {username}!</span>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-md shadow-md transition-colors duration-200 text-sm"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-6 py-8 max-w-7xl">
        <h1 className=" text-2xl md:text-4xl font-bold text-emerald-400 mb-8">
          // Dashboard_Overview
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <StatCard title="Active Projects" value="12" icon="📂" trend="+2 this week" />
          <StatCard title="Datasets Analyzed" value="157" icon="📊" trend="+10 this week" />
          <StatCard title="Team Members" value="42" icon="👥" trend="+5 joined" />
          <StatCard title="Model Accuracy" value="92.5%" icon="🎯" trend="-0.5%" />
        </div>

        {/* Placeholder for other dashboard sections */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-gray-800/50 border border-gray-700 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-gray-300 mb-4">// Recent_Activity_Stream</h2>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><span className="text-cyan-400">[LOG]</span> User 'dev_null' deployed new model 'ProjectX_v3'.</li>
              <li><span className="text-yellow-400">[WARN]</span> Dataset 'OldData' nearing archival date.</li>
              <li><span className="text-emerald-400">[INFO]</span> Team 'Alpha' reached milestone 2.</li>
              <li><span className="text-cyan-400">[LOG]</span> New dataset 'SensorData_2024Q3' uploaded.</li>
            </ul>
          </div>
          <div className="bg-gray-800/50 border border-gray-700 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-gray-300 mb-4">// Quick_Actions</h2>
            <div className="space-y-3">
              <button className="w-full px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-md shadow-md transition-colors duration-200 text-sm">
                Initialize New Project
              </button>
              <button className="w-full px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-md shadow-md transition-colors duration-200 text-sm">
                Browse Datasets
              </button>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-900/80 py-4 mt-auto">
        <p className="text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Datathon Platform. Runtime stable.
        </p>
      </footer>
    </div>
  );
};

export default WelcomePage;
