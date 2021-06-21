import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from './components/shared/Navbar/Navbar'
import { createContext, useContext, useState } from 'react';
import Home from './components/Home/Home/Home';
import PrivateRoute from './components/shared/PrivateRoute/PrivateRoute';
import Login from './components/shared/Login/Login'
import EmployerAccount from './components/PostAJob/EmployerAccount/EmployerAccount';
import AdminMaker from './components/Admin/AdminMaker/AdminMaker';
import UserIsAdmin from './components/shared/UserIsAdmin/UserIsAdmin';
import FeatureJobs from './components/Job/FeatureJobs/FeatureJobs';
import UserSidebar from './components/shared/UserSidebar/UserSidebar';


export const UserContext = createContext();
export const SearchContext = createContext();

function App() {
  const [loggedInUser, setloggedInUser] = useState({});
  const [searchValue, setSearchValue] = useState([]);

  return (
    <UserContext.Provider value={[loggedInUser, setloggedInUser]}>
      <SearchContext.Provider value={[searchValue, setSearchValue]}>
        <Router>
          <Navbar></Navbar>
          <Switch>
            <Route exact path="/">
              <Home />
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
            <Route exact path='/user'>
              <UserSidebar></UserSidebar>
            </Route>


          </Switch>
        </Router>
      </SearchContext.Provider>
    </UserContext.Provider>
  )
}
export default App;