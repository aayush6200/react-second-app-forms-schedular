import { useEffect, useState } from 'react';
import './ClassForm.css'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';



const ClassForm=(props)=>{
    const [val, setVal]=useState(false);
    const [prof,setProf]=useState('');
    const [date,setDate]=useState('');
    const [course,setCourse]=useState('');
    const classnameHandler=(event)=>{
       
        setCourse(event.target.value)
        
        
    }
    const professorHandler=(event)=>{
        
        setProf(event.target.value)

    }
    const dateHandler=(event)=>{ 
        setDate(event.target.value)
    }
    
    const eventhandleData=(event)=>{
        event.preventDefault();
        const collections={
            subject:course,
            teacher:prof,
            Date: new Date(date)
        };

        props.onSave(collections)
        setDate('')
        setProf('')
        setCourse('')
        setVal(false)
    }
    
    
    

    return(
        <Form className='form-control bg-secondary text-dark mt-4' onSubmit={eventhandleData} style={{width:"max-content",height:'max-content',padding:"30px"}}>
            <Form.Group as={Row} >
                <Form.Control type='text' className='bg-secondary text-white mb-3' placeholder='enter your work' onChange={classnameHandler} value={course}></Form.Control>

            </Form.Group>
            <Form.Group as={Row}>
                <Form.Control type='date' placeholder='choose the date' onChange={dateHandler} value={date}></Form.Control>
            </Form.Group>
            <Form.Group>
            <Button type='submit'>Add</Button>
            </Form.Group>
        </Form>
        
        
       
    );
}
export default ClassForm;