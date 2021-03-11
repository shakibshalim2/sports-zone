import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Components/Header/Header';
import TeamList from './Components/TeamList/TeamList';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import TeamDetails from './Components/TeamDetails/TeamDetails';
import Banner from './Components/Banner/Banner';

function App() {
  return (
    <Router>

      <Switch>
        <Route exact path="/">
          <Banner></Banner>
          <Header></Header>
          <TeamList></TeamList>
        </Route>
        <Route path="/team/:idLeague">
          <TeamDetails></TeamDetails>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
