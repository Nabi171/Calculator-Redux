import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header/Header';
import CalcualtorApp from './component/CalcualtorApp/CalcualtorApp';
function App() {
  return (
    <div className="container">
      <Header></Header>
      <CalcualtorApp></CalcualtorApp>
    </div>
  );
}

export default App;
