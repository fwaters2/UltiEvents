import React from "react";
import StateStore from "../../Assets/StateStore";
import { Container } from "@material-ui/core";
import grass from "../../Assets/Images/grassSmall.jpg";

export default function App() {
  return (
    <div>
      <div
        style={{
          backgroundImage: "url(" + grass + ")",
          backgroundRepeat: "repeat",
          position: "fixed",
          height: "100vh",
          width: "100vw",
          zIndex: -2
        }}
      />
      <Container
        maxWidth="xl"
        style={{ padding: 0, display: "flex", flexDirection: "column", height:"100vh" }}
      >
        <StateStore />
      </Container>
    </div>
  );
}
