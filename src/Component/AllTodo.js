import axios from 'axios';
import React, { useEffect, useState } from 'react';
import base_url from '../api/bootapi';
import { Link } from 'react-router-dom';

const AllTodo = () => {

  const [todo, settodo] = useState([]);

    useEffect(()=>{
      document.title="All-Todos";
      getAllTodo();
    },[]);


  //Get all todos-->

  const getAllTodo =()=>{
      axios.get(`${base_url}/todo/all`).then((response)=>{
        console.log(response);
        console.log(response.data);
        settodo(response.data);
      }, (error)=>{
        console.log(error + "Server down")
      })
  }

//delete todo-->
 const deleteTodo=(id)=>{
    axios.delete(`${base_url}/todo/delete/${id}`).then(()=>{
      alert("Deleted Successfully!!!");
      settodo(todo.filter((c)=>c.id!=id))
    }, (error)=>{
      alert("Something error" + error)
    })
 }


  return (
    <div classNameName='view'>
      

      <div style={{ textAlign: 'center', height: 700 }}>
        <h1 style={{ color: 'grey', fontFamily: 'fantasy', fontSize: 70, paddingTop: 80 }}>View TODO</h1>

 <div style={{paddingTop : 20 , marginLeft : 25 , marginRight : 25}}>
     {
        todo.map((item)=>(
          //console.log(item.title);
        

<div class="card text-center" style={{marginBottom :10}}>
  <div class="card-header">
    MY TODO
  </div>
  <div class="card-body">
    <h5 class="card-title">{item.title}</h5>
    <p class="card-text">{item.description}</p>
   <Link to={`/update/${item.id}`}> <button className='btn btn-warning'>Update</button></Link>

    <button className='btn btn-danger' style={{marginLeft :10}} onClick={()=>{
      deleteTodo(item.id);
    }}>Delete</button>
   
  </div>
  
</div>
        ))
}

</div>

   </div>


   </div>
  );
}

export default AllTodo;
