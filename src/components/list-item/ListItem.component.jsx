import { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareCheck,
  faEraser,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";

import Modal from "../modal/Modal.component";
import ProgressBar from "../progress-bar/ProgressBar.component";
import "./ListItem.styles.scss";

const ListItem = ({ task, getData }) => {
  const [showModal, setShowModal] = useState(false);

  const deleteItem = async () => {
    try {
      const response = await axios.delete(
        `https://devcamp-todo-list-backend-2b818c6fac87.herokuapp.com/todo/${task.id}`,
        {
          user_email: "",
          title: "",
          progress: "",
        }
      );
      if (response.status === 200) {
        getData();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <li className="list-item">
      <div className="info-container">
        <FontAwesomeIcon className="font-awesome" icon={faSquareCheck} />
        <p className="task-title">{task.title}</p>
        <ProgressBar progress={task.progress} />
      </div>

      <div className="button-container">
        <button className="edit" onClick={() => setShowModal(true)}>
          EDIT
          <FontAwesomeIcon className="faIcon" icon={faPenToSquare} />
        </button>
        <button className="delete" onClick={deleteItem}>
          DELETE
          <FontAwesomeIcon className="faIcon" icon={faEraser} />
        </button>
      </div>
      {showModal && (
        <Modal
          mode={"edit"}
          setShowModal={setShowModal}
          getData={getData}
          task={task}
        />
      )}
    </li>
  );
};

export default ListItem;
