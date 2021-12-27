import React from 'react'
import {Card,Button} from 'react-bootstrap';
import './footer.css';
function footer() {
    return (
        <div classeName="Pied">
            <Card>
  <Card.Header>Featured</Card.Header>
  <Card.Body>
    <Card.Title classeName="tittre">Special title treatment</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
        </div>
    
    )
}

export default footer;
