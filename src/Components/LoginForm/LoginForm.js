import BasicExample from '../RegisterForm/Form';
import { useState,useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';



const Login=(props)=>{
    const [username,setUserName]=useState('')
    const[password,setPassword]=useState('')
    const[back,setBack]=useState('')
    const[login,setLogin]=useState('')
    const[val,setVal]=useState(0)
    const [bool,setBool]=useState(false)

    const userHandler=(event)=>{
        setUserName(event.target.value)
        setVal(1)
        if (username.trim().length===0){
            setPassword('')
        }
    }
    const passwordHandler=(event)=>{
        setPassword(event.target.value)

    }
    const backHandler=(event)=>{
        setBack(event.target.value)
    }
    const loginHandler=(event)=>{
        setLogin(event.target.value)
    }
    const submitFormHandler=(event)=>{
        event.preventDefault();
        const myData={
            user:username,
            pass:password
        }
        props.myDataSave(myData)


    }
   

    return(
        <Form className='form-control bg-secondary' onSubmit={submitFormHandler} style={{width:"445px",height:'max-content',padding:"30px"}} >
            {((!password && !login) || val===1) && <Form.Group as={Col}>
                <Row sm={1}>
                <Form.Control className=' text-dark' type='text' placeholder='Username should be at least 6 characters' onChange={userHandler} value={username}>
                </Form.Control>
                </Row>
            </Form.Group>
            }
            {(username.trim().length>=6 && !login) &&
            <Form.Group as={Col}>
                <Row sm={1}>
                <Form.Control className=' text-dark' type='password' placeholder='Enter Password' onChange={passwordHandler} value={password}>
                </Form.Control>
                </Row>
            </Form.Group>
            }
            {username && password.trim().length>=6 &&
            <Form.Group as={Col}>
                <Button type='submit'  className='form-controls-button bg-primary text-dark' style={{marginTop:'5px'}} onClick={loginHandler}>Login</Button>
            </Form.Group>}
            
            <Form.Group as={Col}>
            <Button type='submit' className='form-controls-button bg-primary text-dark' style={{marginTop:'5px'}} onClick={()=>{window.open('/src\Components\RegisterForm\Form.js')}}>Register</Button>
            </Form.Group>
        

        </Form>
        
        
    )


}
export default Login;