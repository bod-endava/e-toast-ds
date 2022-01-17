import React from 'react';
import ButtonDocs from './views/buttonDocs';
import CheckboxDocs from './views/checkboxDocs';
import Sidebar from './containers/sidebar';
import Footer from './components/footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './views/home';
import GettingStarted from './views/gettingStarted';
import DesignGuidelines from './views/designGuidelines';
import ShapeGuidelines from './views/shapeGuidelines';
import IconGuidelines from './views/iconGuidelines';
import TokenPrinciples from './views/tokenPrinciples';
import ComponentOverview from './views/componentOverview';
import ColorGuidelines from './views/colorGuidelines';
import TypographyGuidelines from './views/typhographyGuidelines'
import AccessibilitySpecifications from './views/accessibilitySpecifications';
import InputDocs from './views/inputDocs';


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
    path: '/IconGuidelines',
    component: IconGuidelines
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
    path: '/Checkbox',
    component: CheckboxDocs
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
  },
  {
    path: '/Inputs',
    component: InputDocs
  }



];

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
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
