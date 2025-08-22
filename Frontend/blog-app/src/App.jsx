import HomePage from './components/home-page/home-page';
import AddTopic from './components/add-topic/add-topic';
import Login from './components/Login-page/login-page';
import Register from './components/register-page/register-page';
import {Routes,Route} from "react-router-dom";

const App = () => 
{
  return (
    <Routes>
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/" element={<HomePage />} />
      <Route exact path="/register" element={<Register />} />
    </Routes>
  )
}

export default App;