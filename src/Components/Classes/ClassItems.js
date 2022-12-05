import { useEffect, useState } from 'react';
import ClassForm from '../ClassesForm.js/ClassForm';
import Mediator from '../Mediator/Mediator';
import { useParams } from 'react-router-dom';
import './classItems.css'
import {Card}  from 'react-bootstrap';



const ClassItems=(props)=>{
    const [value, setValue]=useState(true)
    const [data,setData]=useState([]);
    const orderId=useParams()

    const handleData=(collections)=>{
        const myObjects={
            ...collections
        }
        setData(prev=>{
            return[...prev,myObjects]
        })
        

       }
   

    return(
            <>
                {Object.keys(orderId).length===1 && <ClassForm onSave={handleData}/>}
                {Object.keys(orderId).length===2 &&  <Card className='card-control row bg-secondary py-2' style={{ marginTop: '20px', height:"max-content",width: "max-content"}}>
                    <Mediator values={data}/>
                    </Card>
                }
            </>

            
        
    )
}
export default ClassItems;




