import ClassForm from '../ClassesForm.js/ClassForm';
import ClassItems from '../Classes/ClassItems';
import Mediator from '../Mediator/Mediator';
import Table from '../Classes/ClassTable';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'font-awesome/css/font-awesome.min.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faSearch} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import './navbar.css'
import { useNavigate, Routes, Route } from "react-router-dom";
import BaseComponent from 'bootstrap/js/dist/base-component';
import BasicExample from '../RegisterForm/Form';
import Login from '../LoginForm/LoginForm';


function NavBar() {
    const navigate=useNavigate();
    const [search,setSearch]=useState('');        // google search hook

    // google search hooks set ups and functions
    const copyData=(event)=>{
        setSearch(event.target.value)
    }
    const dataHandler=()=>{
        window.open('http://www.google.com/search?q=' +search)
    }

    //styling id

  return (
    <div>
    <Navbar collapseOnSelect  bg="secondary" expand="lg">
      <Container fluid>
       <Form method="get" onSubmit={dataHandler} className="d-flex">
            <Form.Control type="text" placeholder="Search" className="me-2" aria-label="Search" value={search} onChange={copyData}/>
            <Button variant="outline-success" className='bg-dark'  data-toggle="tooltip" data-placement="bottom" title="Google search" type="submit"><FontAwesomeIcon icon={faSearch}  /></Button>
        </Form>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav
            className="justify-content-center flex-grow-1 pe-3 me-auto my-2 my-lg-0"
            style={{ maxHeight: '70px'}}
            navbarScroll
            
          >
            <Nav.Link className="shadow bg-secondary rounded" onClick={()=>navigate('/home')}  >Home</Nav.Link>
            <NavDropdown className="shadow bg-secondary rounded mx-3" title="MyRoutine" id="collasible-nav-dropdown">

             <NavDropdown.Item  onClick={()=>{navigate('/add/:0')}}>Add Routine</NavDropdown.Item>
              <NavDropdown.Item onClick={()=>{navigate('/routine/:1/:2')}}>
                View Routine
              </NavDropdown.Item>

              
            </NavDropdown>
            </Nav>
            <Nav
            className=" me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px'}}
            navbarScroll
            
          >            
            <Nav.Link className="shadow bg-secondary rounded mx-3" onClick={()=>navigate('/register')}>Register</Nav.Link>
            <Nav.Link className="shadow bg-secondary rounded mx-1"  onClick={()=>navigate('/login')}>
              login
            </Nav.Link>
            
          </Nav>
          
        </Navbar.Collapse>
      </Container>

    </Navbar>
    <div style={{display:'flex',justifyContent:'center', marginTop:'10px'}}>
    <Routes>
        <Route exact path='/add/:0'  element={<ClassItems />}/>
        <Route exact path='/routine/:1/:2' element={<ClassItems/>}/>
        <Route exact path='/register' element={<BasicExample/>}/>
        <Route exact path='/login' element={<Login/>}/>
      </Routes>
      </div>
      
    </div>
  );
  }

export default NavBar;