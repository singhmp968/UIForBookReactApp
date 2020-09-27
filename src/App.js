import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Container ,Row,Col} from "reactstrap"
import { ToastContainer , toast} from 'react-toastify'
import Home from './component/Home';
import Courses from './component/Courses';
import AllCourses from './component/AllCourses'
import Header from "./component/Header"
import Menus from './component/Menus';
import {BrowserRouter as Router,Route} from "react-router-dom"
import AddCourse from './component/AddCourse';
function App() {
  const btnHandle = () => {
    toast.success("done",{
      position:"top-center"
    })
  };
  return (
   <div>
      <Router>
      <ToastContainer />
         <Container>
         <Header />
           <Row>
             <Col md={4} >
                <h1>1st side</h1>
                <Menus />
             </Col>
             <Col md={8}>
              <h1>2nd side</h1>
            <Route path="/" component={Home} exact />
            <Route path="/add-course" component={AddCourse} exact />
            <Route path="/view-courses" component={AllCourses} exact />
             </Col>
           </Row>
         </Container>

      </Router>
      
                </div>
  );
}

export default App;
