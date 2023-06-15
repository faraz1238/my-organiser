import { atom } from "recoil";
import { getContacts, getTasks } from "../utils/services";

export const atomContacts = atom({
    key: 'atomContacts',
    default:getContacts()
})
export const atomTasks = atom({
    key: 'atomTasks',
    default:getTasks()
})
