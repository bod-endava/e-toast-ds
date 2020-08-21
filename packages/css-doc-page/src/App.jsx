import React from 'react';
import './App.scss';
import Sidebar from './containers/sidebar/Sidebar'
import Footer from './components/footer/Footer';
import Home from './views/home/Home';
import DesignGuidelines from './views/designGuidelines/DesignGuidelines'
import ShapeGuidelines from './views/shapeGuidelines/ShapeGuidelines'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

const routes = [
  {
      path: '/',
      component: Home
  },
  {
      path: '/DesignGuidelines',
      component: DesignGuidelines
  },
  {
      path: '/ShapeGuidelines',
      component: ShapeGuidelines
  }
];

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="Content">
        <Router>
          <Switch>
              {routes.map(route => (
                  <Route
                      key={'001'}
                      path={route.path}
                      exact={true}
                      component={route.component}
                  />
              ))}
              <Redirect to='/' />
          </Switch>
        </Router>
        <Footer />
      </div>
    </div>
  );
}

export default App;
