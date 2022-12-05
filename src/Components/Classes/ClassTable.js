import { useState } from 'react'
import { Card } from 'react-bootstrap'
import './classtable.css'




const Table=(props)=>{
    return(  
            <Card className='card-control-items bg-secondary h-50vh mb-4 px-4'style={{ paddingLeft:"100px" ,width:"600px"}}>
                <h1>{props.sub}</h1>  
            </Card>
        
            
    )
}
export default Table;