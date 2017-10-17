import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Resume from './Resume'
import Portfolio from './Portfolio'
import Contact from './Contact'

class Main extends Component {
render(){
  return(
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/portfolio' component={Portfolio} />
      <Route exact path='/resume' component={Resume} />
    </Switch>
  </main>
  )
}
}

export default Main
