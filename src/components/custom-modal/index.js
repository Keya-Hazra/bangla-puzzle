import { useEffect } from "react";
import CustomModalLayout from "./index.layout";

const CustomModal = ({ title, isModalOpen, handleModalClose, children }) => {
  const closeModalByEsc = (e) => {
    if (e.keyCode === 27) handleModalClose();
  };

  useEffect(() => {
    window.addEventListener("keydown", closeModalByEsc);

    return () => {
      window.removeEventListener("keydown", closeModalByEsc);
    };
  }, [isModalOpen]);

  return (
    <CustomModalLayout
      isModalOpen={isModalOpen}
      title={title}
      handleModalClose={handleModalClose}
    >
      {children}
    </CustomModalLayout>
  );
};

export default CustomModal;
