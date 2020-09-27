import React, { useEffect } from 'react';
import {Jumbotron,Container,Button } from 'reactstrap';
const Home = () => {
    useEffect(()=> {
        document.title = "Home || Learn code with Rahul"
    },[]);
    
    return(
    
    <div>
              <Jumbotron className="text-center">
                    <h1>learnn code with durgesh</h1>
                    <p>
                        hvdaiugvduavudagvudkvbkjd
                        djhvjfh
                    </p>
                    <Container>

                        <Button color="primary" outline>Start using my application</Button>
                    </Container>

                </Jumbotron>

    </div>
    )
}
export default Home;