import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';

function App() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className='flex'>
            <Sidebar className={`transition-all duration-300 ${isSidebarOpen ? 'w-64' : 'w-16'}`} />
            <div className='flex-1'>
                <Navbar onToggleSidebar={toggleSidebar} />
                <Dashboard />
            </div>
        </div>
    );
}

export default App;
