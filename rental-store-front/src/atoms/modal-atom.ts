import { atom } from "jotai";

// สร้าง state สำหรับเปิด/ปิด Modal
export const modalAtom = atom<{ type: "success" | "failure" | null ,open: true|false}>({ type: null ,open: false});