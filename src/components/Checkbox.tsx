import styles from "./Checkbox.module.css";
import { Check } from "@phosphor-icons/react";

export function Checkbox ({ checked }: { checked: boolean }) {
    return (
        <div className={`${styles.checkbox} ${checked && styles.checked}`}>
            { checked &&  <Check size={16} fontWeight={700} color="#fff"/>}
        </div>
    )
}