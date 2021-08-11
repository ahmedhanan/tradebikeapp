import { Route, Switch } from 'react-router-dom';


import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import { ROUTE } from './routes';
import style from './styles.module.scss'
function App() {
  return (
    <div className={style}>
      <Header />
      <Switch>
        <Route exact path={ROUTE.HOME} component={Home} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
