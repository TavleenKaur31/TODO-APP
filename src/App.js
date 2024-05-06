import logo from './logo.svg';
import './App.css';
import AllTodo from './Component/AllTodo';
import Heder from './Component/Heder';
import { Col, Container, Row } from 'reactstrap';
import Menuss from './Component/Menuss';
import MainDrawer from './Component/MainDrawer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddTodo from './Component/AddTodo';
import UpdateFile from './Component/UpdateFile';



function App() {
  return (
   <>
   <BrowserRouter>
   <Container>
      <Row>
         <Col md={4}>
         
   <MainDrawer/>
         </Col>
         <Col md={8}>
         
         

   <Routes>
<Route  path="/" element={<Heder/>}  />
<Route  path="/add" element={<AddTodo/>}  />
<Route  path="/all" element={<AllTodo/>}  />
<Route  path="/update/:id" element={<UpdateFile/>}  />





   </Routes>
   </Col>
      </Row>

   </Container>
   </BrowserRouter>
   
   
   
   
   
   </>




      );
}

export default App;
