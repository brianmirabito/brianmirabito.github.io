import Container from "react-bootstrap/Container";
import "./App.css";

// components
import Nav from "./components/Nav/Nav";
import NackerBack from "./components/NakerBack";
import Picture from "./components/Picture/Picture";
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
          4th Year Software Engineering Student at RIT
        </p>
        <p className="blurb-content">
          Seeking a challenging co-op or internship focusing on software
          engineering for Spring and/or Summer 2022.
        </p>
      </Container>
    </>
  );
};

export default App;
