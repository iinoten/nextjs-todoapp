import { NextPage } from "next"
import { ReactNode } from "react"
import { useRecoilState, useRecoilValue } from "recoil";
import { todoTaskState } from "../pages";
import styles from "../styles/CheckboxItem.module.css"

type Props = {
    children?: ReactNode;
    id: number;
}

const removeItemFromArray = ( arr: string[], removeIndex: number ): any[] => {
    return [...arr.slice(0,removeIndex), ...arr.slice(removeIndex+1)]
}

const CheckboxItem = ({children, id}: Props) => {
    const [task, setTask] = useRecoilState(todoTaskState)
    console.log(task);
    let taskList = task
    const removeTodoTaskItem = () => {
        console.log(`${id}番のアイテムを操作`)
        const newList: string[] = removeItemFromArray(task, id)
        setTask(newList)
    }
    return (
        <li className={styles.CheckBoxRootBox}>
            <input type={"checkbox"} onChange={()=>removeTodoTaskItem()}></input>
            <h4 className={styles.CheckBoxTitle}>{children}</h4>
        </li>
    )
}

export default CheckboxItem