import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Nav from './components/Nav';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Nav/>
      <Switch>
        <Route exact path="/" component={Home}/>
        {/* <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>  */}
      </Switch>
      {/* <Footer/> */}
    </Router>
  );
}

export default App;
