import {EModalKey} from "@shared/enum";

const showModal = (id: EModalKey) => (document.getElementById(id) as  HTMLDialogElement)?.showModal()
const closeModal = (id: EModalKey) => (document.getElementById(id) as  HTMLDialogElement)?.close()

export {showModal, closeModal}