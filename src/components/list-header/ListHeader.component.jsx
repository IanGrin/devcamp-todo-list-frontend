import { useState } from "react";
import moment from "moment/moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import Modal from "../modal/Modal.component";
import "./ListHeader.styles.scss";

const ListHeader = ({ getData }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="list-header">
      <h4 className="moment-container">
        {moment().format("MMMM Do YYYY, h:mm:ss a")}
      </h4>
      <div className="button-container">
        <button className="create" onClick={() => setShowModal(true)}>
          ADD NEW
          <FontAwesomeIcon className="faIcon" icon={faPlus} />
        </button>
      </div>
      {showModal && (
        <Modal mode={"Create"} setShowModal={setShowModal} getData={getData} />
      )}
    </div>
  );
};

export default ListHeader;
