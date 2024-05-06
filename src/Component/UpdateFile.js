import axios from 'axios';
import React, { useEffect, useState } from 'react';
import base_url from '../api/bootapi';
import { useParams } from 'react-router-dom';

const UpdateFile = () => {
  
  const {id}=useParams();
 const [todo, settodo] = useState({});

useEffect(()=>{

   axios.get(`${base_url}/todo/all/${id}`).then((response)=>{
    console.log(response)
    settodo(response.data)
   }, (error)=>{
    alert("Some Error Occuring" + error);
   })

},[id])


   const updateData=(e)=>{
    e.preventDefault();
    axios.put(`${base_url}/todo/update/${id}`,todo).then((response)=>{
      alert("Todo Updated!!!")
    },(error)=>{
      alert("Something error " + error);
    }
   )

   }


  return (
    <div classNameName='add'>

    <div style={{ textAlign: 'center', backgroundColor: 'pink', height: 700 }}>
      <h1 style={{ color: 'grey', fontFamily: 'fantasy', fontSize: 70, paddingTop: 80 }}>Add TODO</h1>

      <div style={{marginLeft : 160 , marginRight : 15 ,  width : 400}}>
      <form onSubmit={updateData}>

        <div class="mb-3">
          <label for="title" className="form-label"><h3>Title</h3></label>
          <input type="text" className="form-control" id="title" name='title'
          value={todo.title || ''}
          onChange={(e)=>{
           settodo({...todo, title :e.target.value} )
          }}/>
        
        </div>
        <div class="mb-3">
          <label for="description" className="form-label"><h3>Description</h3></label>
          <input type="text" className="form-control" id="description" name='description' style={{height : 120 }}   
          value={todo.description || ''}
          onChange={(e)=>{
           settodo({...todo, description :e.target.value} )
          }}/>
        </div>
        
        <button type="submit" className="btn btn-primary">UPDATE</button>
      </form>


      </div>



    </div>

  </div>
  );
}

export default UpdateFile;
