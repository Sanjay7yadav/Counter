import Counter1 from './Counter1.jsx';
import Counter2 from './Counter2.jsx';
import {Route,Switch} from 'react-router-dom';
import Menu from './Menu.jsx';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <>
      <Menu/>
    <Switch>
      <Route  exact path='/' component={Counter1}/>
      <Route  exact path='/class' component={Counter2}/>
    </Switch>
    </>
  );
}

export default App;
