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
import JobApplier from './components/Job/JobApplier/JobApplier';
import Candidate from './components/Admin/Candidate/Candidate';
import PendingJob from './components/Admin/PendingJob/PendingJob';


export const UserContext = createContext();
export const SearchContext = createContext();

function App() {
  const [loggedInUser, setloggedInUser] = useState({});
  const [searchValue, setSearchValue] = useState([]);

  return (
    <UserContext.Provider value={[loggedInUser, setloggedInUser]}>
      <SearchContext.Provider value={[searchValue, setSearchValue]}>
        <Router>
          <UserIsAdmin></UserIsAdmin>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path='/login'>
              <Login></Login>
            </Route>
            {/* Admin route */}
            <PrivateRoute exact path='/admin_maker'>
              <AdminMaker></AdminMaker>
            </PrivateRoute>

            <PrivateRoute exact path='/candidator'>
              <Candidate></Candidate>
            </PrivateRoute>
            <PrivateRoute exact path='/pendingajob'>
              <PendingJob></PendingJob>
            </PrivateRoute>

            {/* Admin Route */}
            <PrivateRoute exact path='/postajob'>
              <EmployerAccount></EmployerAccount>
            </PrivateRoute>
            <Route exact path='/user'>
              <UserSidebar></UserSidebar>
            </Route>
            <PrivateRoute exact path='/jobApplier'>
              <JobApplier></JobApplier>
            </PrivateRoute>
          </Switch>
        </Router>
      </SearchContext.Provider>
    </UserContext.Provider>
  )
}
export default App;