import './App.css';
import logoImg from './assets/logo.png';
import { Signup } from './components/Signup';


function App() {
  return (
    <div className="container mt-3">
     <div className="row">
       <div className="col-md-5">
       <Signup/>
      </div>
      <div className="col-md-7 my-auto ">
        <img className="img-fluid w-100" src={logoImg} alt="" />
        </div>
     </div>
    </div>
  );
}

export default App;
