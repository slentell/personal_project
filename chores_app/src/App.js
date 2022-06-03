import AppNav from './components/AppNav/AppNav';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ParentLoginPage from './pages/ParentLoginPage'
import ChildLoginPage from './pages/ChildLoginPage';
import ParentDashboard from './pages/ParentDashboard';
import ChildDashboard from './pages/ChildDashboard';
import SignUp from './pages/SignUp';
import AddChore from './pages/AddChore';
import AddChild from './pages/AddChild'
function App() {
  return (
    <div>
      <BrowserRouter>
          <AppNav />
          <Routes>
            <Route exact path="/homepage" element = { < HomePage />} />   
            <Route exact path="/signup" element = { <SignUp /> } />      
            <Route exact path="/parent_login" element= { <ParentLoginPage /> } />
            <Route exact path="/child_login" element= { <ChildLoginPage /> } />
            <Route exact path="/parent_dashboard" element= { <ParentDashboard /> } />
            <Route exact path="/childdashboard" element= { <ChildDashboard /> } />
            <Route exact path="/addchore" element = {<AddChore /> } />
            <Route exact path="/addchild" element = {<AddChild /> } />
          </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
