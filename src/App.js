import { BrowserRouter } from "react-router-dom";
import RoutesApp from "./routes";
import Header from "./component/Header";
import AuthProvider from "./contexts/auth";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    
    <BrowserRouter>
      <AuthProvider>
        <Header/>
        <ToastContainer autoClose={3000} />
        <RoutesApp/>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
