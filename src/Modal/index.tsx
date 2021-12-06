import React, { useEffect, useRef } from "react";

declare const M: any;

type LabelInfoProps = {
  children: JSX.IntrinsicElements["div"]["children"];
  className?: JSX.IntrinsicElements["div"]["className"];
  headerTxt?: string;
  onClose?: () => void;
};

let instance: any = null;

const Modal = ({
  children,
  className = "",
  headerTxt,
  onClose,
  ...rest
}: LabelInfoProps) => {
  const modalRef = useRef(null);

  const close = () => {
    if (instance) {
      instance.close();
    }
    setTimeout(() => {
      if (onClose) {
        onClose();
      }
    }, 100);
  };

  useEffect(() => {
    setTimeout(() => {
      if (modalRef.current) {
        const { current } = modalRef;
        instance = M.Modal.init(current, {
          dismissible: false,
        });
        instance.open();
      }
    }, 200);
  }, [modalRef]);

  return (
    <div ref={modalRef} className="modal" {...rest}>
      <div className="modal-content">
        {headerTxt && <h4>{headerTxt}</h4>}
        {children}
      </div>
      <div className="modal-footer">
        <button className="waves-effect waves-green btn-flat" onClick={close}>
          Ok
        </button>
      </div>
    </div>
  );
};

export default Modal;
