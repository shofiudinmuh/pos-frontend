import logo from './logo.svg';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';

function App() {
    return (
        <div className='flex'>
            <Sidebar />
            <div className='flex-1'>
                <Navbar />
                <Dashboard />
            </div>
        </div>
    );
}

export default App;
