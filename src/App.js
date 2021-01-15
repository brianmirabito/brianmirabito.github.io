import Container from "react-bootstrap/Container";
import "./App.css";

// components
import Nav from "./components/Nav/Nav";
import NackerBack from "./components/NakerBack";
import Picture from "./components/Picture/Picture";
import typeText from "./components/TypeText/typeText";

import createNakerOptions from "./nakerOptions";

const App = () => {
  const nakerOptions = createNakerOptions();

  return (
    <>
      <NackerBack className="background" options={nakerOptions} />
      <Nav />
      <Container className="main-container">
        <Picture></Picture>
        <h1 className="title-content">Brian Mirabito</h1>
        <p className="sub-content">
          3rd Year Software Engineering Student at RIT
        </p>
        <typeText className="title-content"></typeText>
      </Container>
    </>
  );
};

export default App;
