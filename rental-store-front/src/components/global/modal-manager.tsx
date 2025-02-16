"use client";
import { useAtom } from "jotai";
import { modalAtom } from "@/atoms/modal-atom";
import SuccessModal from "@/components/global/success-modal";
import FailureModal from "@/components/global/failure-modal";


export default function ModalManager() {
    const [modal, setModal] = useAtom(modalAtom);

    return (
        <>
            {modal.type === 'failure' && modal.open && <FailureModal />}
            {modal.type === 'success' && <SuccessModal />}
        </>

    )
}