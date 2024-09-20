import React from "react";
import Modal from "../components/Modal/Modal";
import { useModal } from "../hooks/useModal";

const PageHome = () => {

    const [isOpenModal, openModal, closeModal] = useModal(false);

    return (
        <div className="flex-grow">
            PageHome
            <br />
            <br />
            <br />
            <button onClick={openModal}>Modal Prueba</button>
            <Modal isOpen={isOpenModal} closeModal={closeModal}>
                <div className="flex justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-16 text-red-600">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                    </svg>
                </div>
                <h3>Atención</h3>
                <p>Ya anda el modal</p>
                <button onClick={closeModal}>Aceptar</button>
            </Modal>
        </div>
    )
}

export default PageHome;