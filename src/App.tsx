import "@mantine/core/styles.css";
import './App.css';
import HomePage from './Components/HomePage';
import { MantineProvider, createTheme } from '@mantine/core';
import { pdfjs } from 'react-pdf';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter from react-router-dom

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

function App() {
  useEffect(()=>{
    AOS.init();
    AOS.refresh();
  }, []);

  const theme = createTheme({
    breakpoints: {
      'xs': '320px',
      'sm': '476px',
      'md': '640px',
      'bs': '768px',
      'lg': '900px',
      'xl': '1024',
      '2xl': '1280',
    },
  });

  return (
    <BrowserRouter basename="/MyPortfolioDeploy"> 
      <Routes>
      <MantineProvider theme={theme}>
       <Route exact path = "/MyportfolioDeploy" element ={<HomePage/>}> </Route> 
      </MantineProvider>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
