import React from 'react';
import ButtonDocs from './views/ButtonDocs';
import AccessibilitySpecifications from './views/AccessibilitySpecifications';
import Sidebar from './containers/Sidebar'
import Footer from './components/Footer';
import Home from './views/Home';
import GettingStarted from './views/GettingStarted';
import DesignGuidelines from './views/DesignGuidelines';
import ShapeGuidelines from './views/ShapeGuidelines';
import TokenPrinciples from './views/TokenPrinciples';
import ComponentOverview from './views/ComponentOverview';
import ColorGuidelines from './views/ColorGuidelines';
import TypographyGuidelines from './views/TyphographyGuidelines'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import './App.scss';

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/GettingStarted',
    component: GettingStarted
  },
  {
    path: '/DesignGuidelines',
    component: DesignGuidelines
  },
  {
    path: '/ShapeGuidelines',
    component: ShapeGuidelines
  },
  {
    path: '/TokenPrinciples',
    component: TokenPrinciples
  },
  {
    path: '/ComponentOverview',
    component: ComponentOverview
  },
  {
    path: '/ColorGuidelines',
    component: ColorGuidelines
  },
  {
    path: '/TypographyGuidelines',
    component: TypographyGuidelines,
  },
  {
    path: '/Buttons',
    component: ButtonDocs
  },
  {
    path: '/ShapeGuidelines',
    component: ShapeGuidelines
  },
  {
    path: '/TokenPrinciples',
    component: TokenPrinciples
  },
  {
    path: '/ComponentOverview',
    component: ComponentOverview
  },
  {
    path: '/AccessibilitySpecifications',
    component: AccessibilitySpecifications
  }
];

function App() {
  return (
    <div className="App">
      <Router>
        {/* All views have a sidebar*/}
        <Sidebar />
        <div className="Content">
          <Switch>
            {routes.map((route, key) => (
              <Route
                key={key}
                path={route.path}
                exact={true}
                component={route.component}
              />
            ))}
            <Redirect to='/' />
          </Switch>
          {/* All views have a footer even if designs don't show it*/}
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
