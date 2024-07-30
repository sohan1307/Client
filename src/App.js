import { Route, Routes, Navigate } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Landing/home';
import Dashboard from './components/Main/Dashboard';
import FormBuilder from './components/Main/FormBuilder';
import FormExecution from './components/Main/FormExecution';

function App() {
    const user = localStorage.getItem('token');

    return (
        <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            
            {/* Protect the Dashboard route */}
            <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate replace to="/home" />} />
            
            <Route path="/create-form" element={<FormBuilder />} />
            <Route path="/form/:formJson" element={<FormExecution />} />
            
            {/* Redirect from root to /home */}
            <Route path="/" element={<Navigate replace to="/home" />} />
        </Routes>
    );
}

export default App;
