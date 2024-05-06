import { blue, grey } from '@mui/material/colors';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import base_url from '../api/bootapi';

const AddTodo = () => {

  const [todo, settodo] = useState({});


  useEffect(()=>{
    document.title="Add-Todos";
  },[]);

  const handleform=(e)=>{
    e.preventDefault();
    console.log(todo);
    addData(todo);
    alert("Added!!");

  }

  // adding data

  const addData=(data)=>{
    axios.post(`${base_url}/todo/add`,data).then((response)=>{
      console.log("Added todo" + response);
    }, (error)=>{
      console.log("Something error!!" + error);
    })
  }
  

  return (

    <div classNameName='add'>

      <div style={{ textAlign: 'center',  height: 700 }}>
        <h1 style={{ color: 'grey', fontFamily: 'fantasy', fontSize: 70, paddingTop: 80 }}>Add TODO</h1>

        <div style={{marginLeft : 160 , marginRight : 15 ,height: 450, backgroundColor : '#318CE7', width : 400 , border : '3px solid rgba(0, 0, 0, 0.10)'}}>
        <form onSubmit={handleform}>
        <div class="mb-2 ">
            <label for="id" className="form-label my-2"><h5 style={{fontFamily: 'revert-layer'}}>ID</h5></label>
            <input type="text" className="form-control mz-3" id="id" name='id'  onChange={(e)=>{
             settodo({...todo, id :e.target.value} )
            }}/>
          
          </div>

          <div class="mb-3">
            <label for="title" className="form-label"><h4>Title</h4></label>
            <input type="text" className="form-control" id="title" name='title' onChange={(e)=>{
             settodo({...todo, title :e.target.value} )
            }}/>
          
          </div>
          <div class="mb-3">
            <label for="description" className="form-label"><h4>Description</h4></label>
            <input type="text" className="form-control" id="description" name='description' style={{height : 120 }}   onChange={(e)=>{
             settodo({...todo, description :e.target.value} )
            }}/>
          </div>
          
          <button type="submit" className="btn btn-success">Submit</button>
        </form>


        </div>



      </div>

    </div>
  );
}

export default AddTodo;
