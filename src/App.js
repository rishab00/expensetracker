import './App.css';
import { Provider } from 'react-redux';
import store from "./stores/store";
import Expensetracker from './expensetracker';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
       <Expensetracker />
      </Provider>
    </div>
  );
}

export default App;
