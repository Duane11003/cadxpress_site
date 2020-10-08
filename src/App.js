import React from 'react'
import { Switch, Route } from 'react-router-dom';

import Header from '../src/components/Header'
import AboutUs from './pages/About-Us/AboutUs'
import Contact from './pages/Contact/Contact'
import Services from './pages/Services/Services'
import Landing from './pages/Landing-Page/Landing-Page'

function App() {
    return (
        <div>
            <Header />
                <Switch>
                  <Route exact path='/' component={Landing} />
                  <Route exact path='/contact' component={Contact} />
                  {/* <Route exact path='/services' component={Services} /> */}
                  <Route exact path='/about' component={AboutUs} />
                </Switch>
        </div>
    )
}

export default App;