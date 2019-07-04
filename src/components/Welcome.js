import React from "react";
import Image from "react-bootstrap/Image";
import Nav from "react-bootstrap/Nav";

export default function Welcome() {
  return (
    <div>
      <Nav.Link href="/recipes">
        <Image
          width="300px"
          src="https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg"
          roundedCircle
        />
      </Nav.Link>
    </div>
  );
}
