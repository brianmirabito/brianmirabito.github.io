import Container from "react-bootstrap/Container";
import "./App.css";

// components
import Nav from "./components/Nav/Nav";

const App = () => {
  return (
    <>
      <Nav />
      <Container className="main-content">
        <h1>My Portfolio</h1>
      </Container>
    </>
  );
};

export default App;
