import React from "react"
import { Card, CardBody } from "reactstrap";

function Header({name,title}) {
    return(
      <div>
        <Card className="my-2">

          <CardBody>
          <h1 className="text-center">Welcome to Courses Applications</h1>   
          </CardBody>
        </Card>
      
      </div>
    );
}
export default Header