import AppNav from './components/AppNav/AppNav';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ParentLoginPage from './pages/ParentLoginPage'
import ParentDashboard from './pages/ParentDashboard';
import ChildDashboard from './pages/ChildDashboard';
import SignUp from './pages/SignUp';
import AddChild from './pages/AddChild';
import { AuthProvider } from './provider/AuthProvider';
import { ChildProvider } from './provider/ChildProvider';
import { ChoreProvider } from './provider/ChoreProvider';




function App() {
  return (
    <div>
      <AuthProvider>
      <ChildProvider>
        <ChoreProvider>



        <BrowserRouter>
          <AppNav />
          <Routes>
            <Route exact path="/homepage" element = { < HomePage />} />   
            <Route exact path="/signup" element = { <SignUp /> } />      
            <Route exact path="/parent_login" element= { <ParentLoginPage /> } />
            <Route exact path="/parent_dashboard" element= { <ParentDashboard /> } />
            <Route exact path="/childdashboard" element= { <ChildDashboard /> } />
            <Route exact path="/addchild" element = {<AddChild /> } />
          </Routes>
       </BrowserRouter>
       </ChoreProvider>


       </ChildProvider>

       </AuthProvider>
    </div>
  );
}

export default App;
