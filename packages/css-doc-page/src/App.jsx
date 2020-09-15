import React from 'react';
import Sidebar from './containers/sidebar/Sidebar'
import Footer from './components/footer/Footer';
import Home from './views/home/Home';
import GettingStarted from './views/gettingStarted/GettingStarted';
import DesignGuidelines from './views/designGuidelines/DesignGuidelines';
import ShapeGuidelines from './views/shapeGuidelines/ShapeGuidelines';
import TokenPrinciples from './views/tokenPrinciples/TokenPrinciples';
import ComponentOverview from './views/componentOverview/ComponentOverview';
import ColorGuidelines from './views/colorGuidelines/ColorGuidelines';
import TypographyGuidelines from './views/typhographyGuidelines/TypographyGuidelines';
import ButtonDocs from './views/buttonDocs/ButtonDocs';
import AccessibilitySpecifications from './views/accessibilitySpecifications/AccessibilitySpecifications';
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
