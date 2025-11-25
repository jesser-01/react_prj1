import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router';

function Product({prd}) {
    const navigate=useNavigate()
  return (
    <Card style={{ width: '300px',height:"400px"}}>
      <Card.Img variant="top" src={prd.image} height={150} />
      <Card.Body>
        <Card.Title style={{fontSize:"20px",height:"50px",overflow:"clip"}}>{prd.title}</Card.Title>
        <Card.Text style={{height:"100px", overflow:"hidden"}}>
            {prd.description}
        </Card.Text>
        <div style={{height:"36.7px"}}></div>
        <Button variant="primary" onClick={function(){navigate(`/about/${prd.id}`)}} style={{bottom:"5px",position:"absolute",marginTop:"10px"}}>Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Product;
