import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ProductListPage from '../Components/ProductListPage/ProductListPage'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={ProductListPage} />
      </Switch>
    </Router>
  )
}

export default Routes
