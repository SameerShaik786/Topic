import HomePage from './Pages/home-page/home-page';
import AddTopic from './Pages/add-topic/add-topic';
import Login from './Pages/Login-page/login-page';
import Register from './Pages/register-page/register-page';
import {Routes,Route,Navigate} from "react-router-dom";

import TopicPage from "./Pages/Topic-page.jsx";


const App = () => 
{
  return (
    <Routes>
      <Route exact path="/" element={<Navigate to="/login" replace={true} />}/>
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/home" element={<HomePage />} />
      <Route exact path="/register" element={<Register />} />
      <Route exact path="/topic-page" element={<TopicPage/>}/>
    </Routes>
  )
}

export default App;