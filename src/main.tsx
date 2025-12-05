import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Static head tags are defined in index.html and assets are served from /public

createRoot(document.getElementById("root")!).render(<App />);
