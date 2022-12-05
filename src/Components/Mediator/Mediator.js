import { useEffect, useState } from "react";
import { useContext } from "react";
import Table from "../Classes/ClassTable";

const Mediator=(props)=>{
    console.log(5)
   return (
        <>
              {props.values.map(datas=>(
                <Table 
                sub={datas.subject}
                />
                ))
                }
           
        </>
    )
}
export default Mediator;