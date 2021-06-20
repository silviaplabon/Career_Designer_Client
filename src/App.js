import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from   './components/shared/Navbar/Navbar'
import { createContext, useContext, useState } from 'react';
import Home from './components/Home/Home/Home';
import PrivateRoute from './components/shared/PrivateRoute/PrivateRoute';
import Login from './components/shared/Login/Login'
import EmployerAccount from './components/PostAJob/EmployerAccount/EmployerAccount';
import AdminMaker from './components/AdminMaker/AdminMaker';
import UserIsAdmin from './components/shared/UserIsAdmin/UserIsAdmin';

export const UserContext = createContext();
export const CartContext = createContext();
export const DeleteContext = createContext();
export const ValueContext = createContext();
function App() {
  const [loggedInUser, setloggedInUser] = useState({});
  return (
   <UserContext.Provider value={[loggedInUser, setloggedInUser]}>
      <Router>
        <Navbar></Navbar>
        <Switch> 
           <Route exact   path="/">
            <Home/>
           </Route>
           <Route exact path='/login'>
             <Login></Login>
           </Route>
           <Route exact path='/admin_maker'>
             <AdminMaker></AdminMaker>
           </Route>
           <Route exact path='/userIsAdmin'>
             <UserIsAdmin></UserIsAdmin>
           </Route>

           <Route exact path='/postajob'>
             <EmployerAccount></EmployerAccount>
           </Route>

        </Switch>
      </Router>
      </UserContext.Provider>
  )
}
export default App;