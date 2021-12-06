import React, { useState } from "react";

import { Meta } from "@storybook/react";

import "../index.css";
import Modal from ".";
import { Button } from "..";

export default {
  title: "Game/Modal",
  component: Modal,
} as Meta;

export const ModalComponent = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <React.Fragment>
      <Button onClick={() => setShowModal(true)} preset="secondary">
        Afficher modal
      </Button>
      {showModal && (
        <Modal
          key="test"
          headerTxt="Header Modal"
          onClose={() => setShowModal(false)}
        >
          <p>Container</p>
        </Modal>
      )}
    </React.Fragment>
  );
};
