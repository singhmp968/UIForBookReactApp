import React, { useState,useEffect } from "react";
import Courses from "./Courses"
import base_url from "./../api/bootapi"
import axios from 'axios';
import { toast } from "react-toastify";
const AllCourses = () =>{

    useEffect(()=>{
        document.title = "All Courses";
    },[]);
// function to call server
const getAllCourseFromServer=()=>{
    axios.get(`${base_url}/courses`).then(
        (response)=>{
                console.log(response)
                console.log(response.data)
                toast.success("courses has been loaded",{
                    position:"bottom-center"
                });
                setCourse(response.data)
        },
        (error)=>{

            console.log(error)
            toast.error("server down",{
                position:"bottom-center"
            })    
        }
    )
}
//calling loading call function
useEffect(()=>
{
    getAllCourseFromServer();
},[])


    const [courses,setCourse]=useState([]);

    return(

    <div>
                    <h1>All courses</h1>
                    <p>List of curses are as follow</p>
                    { courses.length > 0
                         ? courses.map((item)=> <Courses key={item.id} course = {item}  />) : "No course"}
                </div>

    )
}
export default AllCourses