import React ,{Fragment}from 'react'
improt {HashRouter,link,Switch,Router,withRouter,Redirect}from 'react-router-dom'
import Login from './pages/login/login'
import Admin from './pages/admin/admin'
import Home from './pages/home/home'
import User from 'pages/user/user'
class RootRouter extends React.Component{
  render(){
    renturn(
      <HashRouter>
        <Switch>
          <Redirect exact from='/' to='/login'></Redirect>     
          <Route path='/login' component={login}></Route>
          <Route path='/admin' component={()={
            return(
              <Admin>
                <Router path='/admin/home' component=
                {Home}></Router>
                <Router path='/admin/user' component={User}></Router>
              </Admin>
            )
          }}></Route>
        </Switch>
      </HashRouter>
    )
  }
}
export default RootRouter