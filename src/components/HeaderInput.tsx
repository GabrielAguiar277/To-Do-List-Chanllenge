import { useState } from "react";
import styles from "./HeaderInput.module.css";

import { PlusCircle } from "@phosphor-icons/react";

export function HeaderInput({ createTask }: { createTask: (description: string) => void }) {

    const [inputValue, setInputValue] = useState("");
    const blockIfEmpty = inputValue === "";

    function handleChangeInput (event: React.ChangeEvent<HTMLInputElement>) {

        setInputValue(event.target.value);

    }

    function handleFormSubmit (event: React.FormEvent<HTMLFormElement>) {

        event.preventDefault();

        createTask(inputValue);
        setInputValue("");
        
    }

    return (
        <header className={styles.header}>
            <form onSubmit={handleFormSubmit}>
                <input 
                    type="text" 
                    placeholder="Adicione uma nova tarefa"
                    onChange={handleChangeInput}
                    value={inputValue}
                />
                <button disabled={blockIfEmpty}>
                    Criar

                   <PlusCircle size={20} weight="bold"/> 
                </button>
            </form>
        </header>
    )
}