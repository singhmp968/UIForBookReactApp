import React from 'react';
import axios from "axios";
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    CardFooter,
    Button,
    Container
} from 'reactstrap';
//import base_url from '../api/bootapi';
import { toast } from 'react-toastify';
const Courses=({course})=>{

    return(
        <Card className="text-center" >
            <CardBody>
                <CardSubtitle>{ course.title }</CardSubtitle>
                <CardText>{ course.description }</CardText>
                <Container className="text-center">
                    <Button color="danger">Delete</Button>
                    <Button color="warning ml-3" >Update</Button>
                </Container>
            </CardBody>
    
        </Card>
    
    )

}
export default Courses;