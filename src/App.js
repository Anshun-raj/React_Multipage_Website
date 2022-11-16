import './App.css';
import "./index.css";
import Home from './routes/Home';
import Service from './routes/Service';
import Recipe from './routes/Recipe';
import Feedback from './routes/Feedback';
import { Routes,Route } from 'react-router-dom';


function App() {
  return (
    <div>
         <Routes>
             <Route path="/" element={<Home/>}/>
             <Route path="/service" element={<Service/>}/>
             <Route path="/recipe" element={<Recipe/>}/>
             <Route path="/feedback" element={<Feedback/>}/>
         </Routes>
    </div>
  );
}

export default App;
