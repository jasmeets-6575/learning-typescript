import Counter from "./components/Counter";
import Heading from "./components/Heading";
import Section from "./components/Section";

function App() {
  return (
    <>
      <Heading title="home page" />
      <Section>This is my section</Section>
      <Counter />
    </>
  );
}

export default App;
