import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import './form.css'

function BasicExample() {
    const [email,setEmail]=useState('')
    const [name,setName]=useState('')
    const [dob,setDob]=useState('')
    const [password,setPassword]=useState('')

    const emailHandler=(event)=>{
        setEmail(event.target.value)
    }

    const nameHandler=(event)=>{
        setName(event.target.value)
    }

    const dateHandler=(event)=>{
        setDob(event.target.value)
    }

    const passwordHandler=(event)=>{
        setPassword(event.target.value)

    }
    const submitHandler=(event)=>{
        event.preventDefault();
        

    }

  return (
    <Form className='form-control  bg-secondary text-dark'  style={{width:"400px",height:'300px',padding:"30px"}} onSubmit={submitHandler}>
                <Form.Group as={Row}  className=' form-control-group mb-2' >
                    <Form.Label column sm={3}>Email</Form.Label>
                    <Col sm={5} >
                    <Form.Control className= 'bg-secondary text-black' type='email' placeholder='name@example.com' onChange={emailHandler} value={email}></Form.Control>
                    </Col>
                </Form.Group>
                {!email && password && dob && name && <p>Please Enter Your Email</p>}
            <Form.Group as={Row} className='mb-3'>
                <Form.Label column sm={3}>FullName</Form.Label>
                <Col sm={5}>
                <Form.Control className= 'bg-secondary text-black' type='text' onChange={nameHandler} value={name}></Form.Control>
                </Col>
            </Form.Group>
            {email && password && dob && !name && <p>Please Enter Your Name</p>}

            <Form.Group as={Row} className='mb-3'>
                <Form.Label column sm={3}>DateOfBirth</Form.Label>
                <Col sm={5}>
            <Form.Control className= 'bg-secondary text-black' type='Date' onChange={dateHandler} value={dob}> 
            </Form.Control>
            </Col>
            </Form.Group>
            {email && password && !dob && name && <p>Please Enter DateOfBirth</p>}
            <Form.Group as={Row} className='mb-3'>
                <Form.Label column sm={3}>Password</Form.Label>
                <Col sm={5}>
                <Form.Control type='password' className= 'bg-secondary text-black' onChange={passwordHandler} value={password} ></Form.Control>
                </Col>
            </Form.Group>
            {email && password && dob && name && <Form.Group as={Row} className="mb-3">
                <Col sm={10}>
                <Button type="submit" className=''>Sign in</Button></Col>
                </Form.Group>}

        
      </Form>
     
  );
}

export  default BasicExample;