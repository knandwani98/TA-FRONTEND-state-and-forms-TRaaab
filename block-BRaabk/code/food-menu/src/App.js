import Header from "./Components/Header";
import menu from "../src/data.json";
import Items from "./Components/Items";

function App() {
  let foodCategory = menu.map((item) => {
    return item.category;
  });

  return (
    <>
      <Header categories={[...new Set(foodCategory)]} />
      <Items />
    </>
  );
}

export default App;
