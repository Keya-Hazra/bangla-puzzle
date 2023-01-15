import {
    Modal,
    ModalLayout,
    ModalCloseButton,
    ModalContent,
    ModalTitle
  } from "./index.styled";
  import { useRef } from "react";
  import useOnClickOutside from "../hooks/use-on-click-outside";
  
  const CustomModalLayout = ({
    handleModalClose,
    title,
    children,
    isModalOpen
  }) => {
    const ref = useRef();
    useOnClickOutside(ref, handleModalClose);
  
    return (
      <ModalLayout active={isModalOpen}>
        <Modal ref={ref}>
          <ModalCloseButton onClick={handleModalClose}>&times;</ModalCloseButton>
          {title && <ModalTitle>{title}</ModalTitle>}
          <ModalContent>{children}</ModalContent>
        </Modal>
      </ModalLayout>
    );
  };
  export default CustomModalLayout;
  