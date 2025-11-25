import React from "react";
import Card from "react-bootstrap/Card";

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
  const cardStyle = {
    width: '18rem',
    margin: '1rem',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
  };

  return (
    <Card style={cardStyle}>
      <Card.Img variant="top" src={imageUrl} alt={name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>Team: {team}</Card.Text>
        <Card.Text>Nationality: {nationality}</Card.Text>
        <Card.Text>Jersey Number: {jerseyNumber}</Card.Text>
        <Card.Text>Age: {age}</Card.Text>
      </Card.Body>
    </Card>
  );
};

Player.defaultProps = {
  name: "Unknown Player",
  team: "Unknown Team",
  nationality: "Unknown Nationality",
  jerseyNumber: 0,
  age: "N/A",
  imageUrl: "https://via.placeholder.com/150"
};

export default Player;
