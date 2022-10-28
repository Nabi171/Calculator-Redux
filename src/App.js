import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header/Header';
import CalcualtorApp from './component/CalcualtorApp/CalcualtorApp';
import { store } from './component/redux/store';
import { Provider } from 'react-redux';

function App() {

  return (
    <div className="container">
      <Header></Header>
      <Provider store={store}>
        <CalcualtorApp></CalcualtorApp>
      </Provider>


    </div>
  );
}

export default App;
