import styles from "./NoTasks.module.css";

import { Clipboard } from "@phosphor-icons/react";

export function NoTasks({ description }: any) {

    return(
        <div className={styles.noTask}>
            <Clipboard size={56}/>

            <div>
                <p>
                    Você ainda não tem tarefas cadastradas
                </p>
                <p>
                    Crie tarefas e organize seus itens a fazer
                </p>
            </div>
        </div>
    )
}