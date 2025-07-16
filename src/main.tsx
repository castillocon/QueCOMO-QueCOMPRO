import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./globals.css";
import { SessionProvider } from "./context/SessionContext.tsx"; // Importar SessionProvider
import { BrowserRouter } from "react-router-dom"; // Importar BrowserRouter

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter> {/* BrowserRouter debe envolver SessionProvider si SessionProvider usa useNavigate */}
      <SessionProvider>
        <App />
      </SessionProvider>
    </BrowserRouter>
  </React.StrictMode>
);