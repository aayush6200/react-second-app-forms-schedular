import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';

const Home=(props)=>{

    return(
        <Card>
            <h1>Hello {props.data} </h1>
        </Card>
    )
}
export default Home;