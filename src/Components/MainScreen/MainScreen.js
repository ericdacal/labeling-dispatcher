import './MainScreen.css';
import logo from '../../logo.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
//import LinkList from '../LinkList/LinkList';
import { useLocation } from "react-router-dom";
import {
    Button,
    Navbar,
    Container,
} from 'react-bootstrap';


import {useEffect, useState} from 'react';
import { API } from 'aws-amplify';


function MainScreen() {

    const location = useLocation();
    const [allValues, setAllValues] = useState({allNames : [], allLinks : []})
    const myInit = { // OPTIONAL
        headers: {}, // OPTIONAL
        response: true, // OPTIONAL (return the entire Axios response object instead of only response.data)
        queryStringParameters: {  // OPTIONAL
            mail: location.state.user,
        },
    };
    useEffect(() => {
        console.log('use Effect')
        API.get('apiLabelingDispatcher', '/items', myInit).then(result => {
            console.log('getLinks')
        })
        /*const fetchData = async () => {
            const response = await fetch("https://h821bnyaje.execute-api.us-west-1.amazonaws.com/development/scan", 
            {
                method : 'POST',
                body: JSON.stringify({mail: location.state.user})
            });
            const jq = await response.json()
            let links = await JSON.parse(jq.body).Items[0].links
            let names = await JSON.parse(jq.body).Items[0].names
            await setAllValues({allNames : names, allLinks : links})
        };
        fetchData()*/
    }, []);
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand>
                        <img
                            alt=""
                            src={logo}
                            width="140"
                            height="60"
                            className="d-inline-block align-top"
                        />
                    </Navbar.Brand>
                    <Navbar.Brand>
                        <h3>{location.state.user}</h3>
                    </Navbar.Brand>
                </Container>
            </Navbar>
            <div className='content'>
                <Button  className="finish" variant="primary">Finish</Button>
            </div>
        </div>
    );

  
    
  }

  
  export default MainScreen;
  
  