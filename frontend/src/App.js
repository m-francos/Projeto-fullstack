import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {

  const [clima, setClima] = useState([]);

  useEffect(() => {
    axios.get('/api01').then(res => setClima(res.data));
  }, []);

  return clima.map((c, index) => {
    return <p key={index}>Cidade: {c.city}, Temperatura Máx: {c.avg_temp_max}°C, Temperatura Mín: {c.avg_temp_min}°C, Umidade: {c.humidity_percent}%</p>
   });

}

export default App;
