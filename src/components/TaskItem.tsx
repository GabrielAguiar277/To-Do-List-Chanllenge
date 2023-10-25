import { Checkbox } from "./Checkbox";
import styles from "./TaskItem.module.css";
import { Trash } from "@phosphor-icons/react";

export function TaskItem({ task, toggleTask, deleteTask }: any) {

    function handleToggle() {
        toggleTask(task);
    }

    function handleDelete (event: React.MouseEvent<HTMLDivElement, MouseEvent>) {

        event.stopPropagation();

        deleteTask(task);
    }

    return(
        <div className={`${styles.taskItem} ${task.hasCompleted && styles.hasCompleted}`}>
            <div onClick={handleToggle}>
                <Checkbox checked={task.hasCompleted} />
            </div>

            <div className={styles.text}>
                {task.description}
            </div>

            <div className={styles.delete} onClick={handleDelete}>
              <Trash size={20}/>  
            </div>
        </div>
    )
}