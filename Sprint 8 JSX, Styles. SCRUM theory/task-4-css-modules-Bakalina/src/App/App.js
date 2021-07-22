import logo from '../logo.svg';
import  './App.css';
import Button from '../Button/Button';
import Input from '../Input/Input';

function App() {
    return (
        <div className='App' >
            <img src={logo} className='App-logo' alt="logo" /> 
      <br />    
        <Input  />
        <Button />
    </div>
  );
}

export default App;
