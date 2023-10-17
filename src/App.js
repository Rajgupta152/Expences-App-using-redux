import './App.css';
import { RegistrationForm } from './components/RegistrationForm';
import { Provider } from 'react-redux';
import { store } from './components/store';
import { ExpencesData } from './components/ExpencesData';
import { Routes, Route } from 'react-router';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path = "/" element = {<ExpencesData />}/>
          <Route path='/RegistrationForm' element = {<RegistrationForm />} />
        </Routes>
      </header>
    </div>
    </Provider>
  );
}

export default App;
