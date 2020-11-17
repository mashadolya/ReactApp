import React from "react";
import BlueButton from "../../../../../blueButton";
import "./index.css";

const ModalHeader = (props) => {
    const { close, save } = props;


    const handleClose = (e) => {
        close(e);
    };


    const handleSave = (e) => {
        save(e);
    }

    return (
        <div className="modal-header">
            <h2 className="modal-title">
                <button onClick={handleClose}>Close</button>
    Изменить профиль
            </h2>
            <div className="button-save">
                <BlueButton btnText={"Save"} onClick={handleSave} />
            </div>

        </div>
    )

}

export default ModalHeader;