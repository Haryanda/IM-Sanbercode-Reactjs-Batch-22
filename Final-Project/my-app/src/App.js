import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import LayoutDefault from './layouts/LayoutDefault';
import { UserProvider } from './helper/UserContext';
import {
  Home,
  Login,
  Register,
  Password,
  Games,
  Movies,
  DetailGame,
  DetailMovie,
  DataGames,
  DataMovies,
  FormGame,
  FormMovie,
} from './views';
import 'antd/dist/antd.css';
import './App.css';

function App() {
  return (
    <UserProvider>
      <Router>
        <LayoutDefault>
          <Switch>
            <Route path="/game/edit/:id">
              <FormGame type="game" edit={true} />
            </Route>
            <Route path="/movie/edit/:id">
              <FormMovie type="movie" edit={true} />
            </Route>

            <Route path="/game/create">
              <FormGame type="game" edit={false} />
            </Route>
            <Route path="/movie/create">
              <FormMovie type="movie" edit={false} />
            </Route>

            <Route path="/data/games" component={DataGames} />
            <Route path="/data/movies" component={DataMovies} />

            <Route path="/game/:id" component={DetailGame} />
            <Route path="/movie/:id" component={DetailMovie} />

            <Route path="/games" component={Games} />
            <Route path="/movies" component={Movies} />

            <Route path="/password" component={Password} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />

            <Route path="/" exact component={Home} />
          </Switch>
        </LayoutDefault>
      </Router>
    </UserProvider>
  );
}

export default App;
