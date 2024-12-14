import "./App.css";
import { useLoaderData } from "react-router-dom";
import CoffeeCard from "./components/coffeeCard";
import { useState } from "react";
// import coffeeCard from "./components/CoffeeCard";

function App() {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);
  return (
    <div className="m-20">
      <h1 className="text-6xl text-purple-600 my-20">
        Hot cold coffee: {coffees.length}
      </h1>
      <div className="grid md:grid-cols-2 gap-4">
        {coffees.map((coffee) => (
          <CoffeeCard
            coffees={coffees}
            setCoffees={setCoffees}
            key={coffee._id}
            coffee={coffee}
          ></CoffeeCard>
        ))}
      </div>
    </div>
  );
}

export default App;
