import { useEffect, useState } from "react";
import ParticlesBg from "particles-bg";
import axios from "axios";

import ListHeader from "./components/list-header/ListHeader.component";
import ListItem from "./components/list-item/ListItem.component";

const App = () => {
  const [tasks, setTasks] = useState(null);
  const getData = async () => {
    axios.get("http://localhost:5000/todos").then((result) => {
      setTasks(result.data);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(tasks);

  //Sort by date
  const sortedTasks = tasks?.sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  return (
    <div className="app">
      <ParticlesBg type="cobweb" bg={true} num={200} range={400} />
      <ListHeader listName={"My To Do List"} getData={getData} />
      {sortedTasks?.map((task) => (
        <ListItem key={task.id} task={task} getData={getData} />
      ))}
    </div>
  );
};

export default App;
