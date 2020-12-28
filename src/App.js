import Container from "react-bootstrap/Container";
import "./App.css";

// components
import Nav from "./components/Nav/Nav";
import NackerBack from "./components/NakerBack";

import createNakerOptions from "./nakerOptions";

const App = () => {
  const nakerOptions = createNakerOptions();

  return (
    <>
      <NackerBack className="background" options={nakerOptions} />
      <Nav />
      <Container className="main-container">
        <h1 className="main-content">My Portfolio</h1>
      </Container>
    </>
  );
};

export default App;
