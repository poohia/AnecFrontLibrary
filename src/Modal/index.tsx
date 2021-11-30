import React, { useEffect, useRef } from "react";

declare const M: any;

type LabelInfoProps = JSX.IntrinsicElements["div"] & {
  headerTxt?: string;
  onClose?: () => void;
};

const Modal = ({
  children,
  className = "",
  headerTxt,
  onClose,
  ...rest
}: LabelInfoProps) => {
  const modalRef = useRef(null);

  const close = () => {
    if (modalRef.current) {
      const { current } = modalRef;
      const instance = M.Modal.init(current, {});
      instance.close();
    }
    if (onClose) {
      onClose();
    }
  };

  useEffect(() => {
    setTimeout(() => {
      if (modalRef.current) {
        const { current } = modalRef;
        const instance = M.Modal.init(current, {});
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
