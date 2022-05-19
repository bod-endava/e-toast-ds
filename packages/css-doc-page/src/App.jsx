import React from 'react';

// Base structure
import Home from './views/home';
import Footer from './tostaditas-components/footer';
import Sidebar from './containers/sidebar';
import ScrollToTop from './tostaditas-components/ScrollToTop';

import GettingStarted from './views/gettingStarted';
import ComponentOverview from './views/componentOverview';
import TokenPrinciples from './views/tokenPrinciples';
import AccessibilitySpecifications from './views/accessibilitySpecifications';

// Guidelines
import ColorGuidelines from './views/guidelines/colorGuidelines';
import TypographyGuidelines from './views/guidelines/typhographyGuidelines'
import DesignGuidelines from './views/guidelines/designGuidelines';
import ShapeGuidelines from './views/guidelines/shapeGuidelines';
import IconGuidelines from './views/guidelines/iconGuidelines';

// Component Docs
import ButtonDocs from './views/docs/buttonDocs';
import CheckboxDocs from './views/docs/checkboxDocs';
import InputDocs from './views/docs/inputDocs';
import NavbarDocs from './views/docs/navbarDocs';
import PaginationDocs from './views/docs/paginationDocs';
import SelectDocs from './views/docs/selectDocs';

// Tutorial Docs
import CssTutorial from './views/tutorials/cssTutorial';
import SandboxTutorial from './views/tutorials/sandboxTutorial';
import TostaditasTutorial from './views/tutorials/tostaditasTutorial';
import ToastyTutorial from './views/tutorials/toastyTutorial';

import './App.scss';
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

  // Components
  //---------------------------
  {
    path: '/Buttons',
    component: ButtonDocs
  },
  {
    path: '/Checkbox',
    component: CheckboxDocs
  },
  {
    path: '/Inputs',
    component: InputDocs
  },
  {
    path: '/Navbar',
    component: NavbarDocs
  },
  {
    path: '/Pagination',
    component: PaginationDocs
  },
  {
    path: '/Selects',
    component: SelectDocs
  },

  // Tutorials
  //---------------------------
  {
    path: '/Css',
    component: CssTutorial
  },
  {
    path: '/Sandbox',
    component: SandboxTutorial
  },
  {
    path: '/Tostaditas',
    component: TostaditasTutorial
  },
  {
    path: '/Toasty',
    component: ToastyTutorial
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
