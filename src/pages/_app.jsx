import "../styles/globals.css";
import Navbar from "../components/Navbar";
import { Toaster } from "react-hot-toast";
import { AppContextProvider } from '../lib/store';

export default function App({ Component, pageProps }) {
  return(
    <AppContextProvider>
      <Navbar />
      <Component {...pageProps} />
      <Toaster />
    </AppContextProvider>
  ) 
}
