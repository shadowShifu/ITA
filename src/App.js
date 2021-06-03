import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './pages/login'
import Admin from './pages/admin'
import AddAcademicDirector from './pages/addAcademicDirector'
import AddClassroom from './pages/addClassroom'
import AddSecretary from './pages/addSecretary'
import AddStudent from './pages/addStudent'
import AddTeacher from './pages/addTeacher'
import NotFound from './pages/notFound'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/login/admin" component={Admin}/>
        <Route exact path="/login/admin/addAcademicDirector" component={AddAcademicDirector}/>
        <Route exact path="/login/admin/addClassroom" component={AddClassroom}/>
        <Route exact path="/login/admin/addSecretary" component={AddSecretary}/>
        <Route exact path="/login/admin/addStudent" component={AddStudent}/>
        <Route exact path="/login/admin/addTeacher" component={AddTeacher}/>
        <Route component={NotFound}/>
      </Switch>
    </Router>
  )
}

export default App
