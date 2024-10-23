import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './AuthContext.jsx';

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <Toaster />
    <App />
  </AuthProvider>
)
