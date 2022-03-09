import './App.css';
import { Routes, Route } from "react-router-dom";
import MyHome from './contents/home/home';
import About from './contents/about/about';
import Contact from './contents/contact/contact';
import Service from './contents/service/service';
import MyNav from './contents/navbar/nav-bar';
import Project from './contents/projects/project';

function App() {
  return (
    <div className="App">
        <MyNav/>
        {/* <MyHome/>
        <About/>
        <Contact/>
        <Service/>
        <Project/> */}
      <Routes>
          <Route index element={<MyHome/>} /> 
          <Route path="About" element={<About/>} />
          <Route path="contact" element={<Contact/>} />
          <Route path="project" element={<Project/>} />
          <Route path="Service" element={<Service/>} />
      </Routes>
    </div>
  )
}

export default App;
