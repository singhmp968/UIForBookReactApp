import Axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import { Form, FormGroup, Input, Container, Button } from 'reactstrap';
import  axios from 'axios';
import base_url from './../api/bootapi';
const AddCourse=()=>{
useEffect(()=> {
    document.title = "Add Course || Learn code with rahul"
},[]) 
 
const [course,setCourse]=useState({});
// fom handle function
const handleForm = (e) => {
    console.log(course);
    postDataToServer(course)  
    e.preventDefault();
};


// creating function to post on server

const postDataToServer=(data)=>{
axios.post(`${base_url}/courses`,data).then(
    (response)=>{
            console.log(response)
            console.log("success")
    },(error)=>{
            console.log(error)
    }
)
}


return (
        <Fragment>
        <h1 className="text-center my-3" >Fill Course details</h1>
            <Form onSubmit={handleForm}>
                <FormGroup>
                    <label htmlFor="userID" >Cours Id</label>
                    <Input type="text"
                     placeholder="Enter here"
                     name="id"
                     id = "userID" 
                     onChange={(e)=>{
                         setCourse({...course, id: e.target.value})
                     }}
                   
                    
                    />
                </FormGroup>

                <FormGroup> 

                    <label htmlFor="title">Course title</label>
                    <Input type="text"
                    placeholder="Enter title here"
                    id="title"
                    onChange={(e)=>{
                    setCourse({...course, title: e.target.value})
                    }} 
                    />
                </FormGroup>
                <FormGroup>
                    <label htmlFor="description">Course Description</label>
                    <Input type="textarea" 
                    placeholder="Enter description here" 
                    id="description" 
                    onChange={(e)=>{
                        setCourse({...course,description: e.target.value})
                    }}
                    style={{height:150}}
                    
                    />
                </FormGroup>
                <Container className="text-center">
                    <Button type="submit" color="success">Add Course</Button>
                    <Button type="reset"color="warning ml-2">Clear</Button>
                </Container>
            </Form>

        </Fragment>


    )
        
    
    
};
export default AddCourse