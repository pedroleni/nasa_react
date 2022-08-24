import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import logo from "./assets/NASA.png";
import NASA from "./assets/original.gif";
import Figure from "./components/Figure";

const App = () => {
  const today = new Date(Date.now()).toISOString().slice(0, 10);
  const [apod, setApod] = useState({});
  const [date, setDate] = useState(today);
  const NASA_URL = "https://api.nasa.gov/";
  const NASA_API_KEY = "HpWtslTQ6J316OVFIjPPLXx9KL99Y0f2S1BWPAjU";

  useEffect(() => {
    const getApod = async () => {
      const data = await axios.get(
        `${NASA_URL}planetary/apod?date=${date}&api_key=${NASA_API_KEY}`
      );
      setApod(data.data);
    };
    getApod();
  }, [date]);

  const handleInput = (ev) => {
    setDate(ev.target.value.toLocaleString());
  };

  return (
    <div className="App">

      <div className="div_logo"><img src={logo} className="logo" alt="NASA LOGO" /><h1 className="title_main">Astronomy Picture of the Day</h1><img src={NASA} className="logo1" alt="NASA LOGO" /></div>
   
      
      <div><input type="date" id="photo-date" onChange={handleInput} /></div>
      {date > today ? (
        <h2 className="error_date">Please choose a previous date</h2>
      ) : (
        <Figure data={apod} />
      )}
      <footer>
            <ul>
                <li>@Pedro Lerida Nieto 2022</li>
                <li className="image_footer"><a href="https://github.com/pedroleni" target="_blank"><img src="https://avatars.githubusercontent.com/u/38913098?v=4" alt="github"/></a></li>
                <li className="image_footer"><a href="https://www.linkedin.com/in/pedro-l%C3%A9rida-nieto-260501229/" target="_blank"><img src="https://media.discordapp.net/attachments/701164137081733201/1008557611647500348/linkedin_copia.png" alt="linkedin"/></a></li>
            </ul>
       
        </footer>
    </div>
  );
};

export default App;
