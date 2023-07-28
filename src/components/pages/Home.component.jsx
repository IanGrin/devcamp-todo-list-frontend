import { useState, useEffect } from "react";
import axios from "axios";

import ListHeader from "../list-header/ListHeader.component";
import ListItem from "../list-item/ListItem.component";

const Home = () => {
  const [tasks, setTasks] = useState(null);
  const getData = async () => {
    axios.get("https://devcamp-todo-list-backend-2b818c6fac87.herokuapp.com/todos").then((result) => {
      setTasks(result.data);
    });
  };

  useEffect(() => {
    getData();
  }, []);


  //Sort by date
  const sortedTasks = tasks?.sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  return (
    <div>
      <ListHeader getData={getData} />
      {sortedTasks?.map((task) => (
        <ListItem key={task.id} task={task} getData={getData} />
      ))}
    </div>
  );
};

export default Home;
