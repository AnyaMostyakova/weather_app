import { FC, InputHTMLAttributes, useState } from 'react';
import styles from './Input.module.sass';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

const Input: FC<InputProps> = ({ label, ...props }) => {
    const [value, setValue] = useState('');

    const handleInputClick = () => {
        setValue('');
    };

    return (
        <div className={styles.inputWrapper}>
            {label && <label className={styles.label}>{label}</label>}
            <input
                className={styles.input}
                value={value}
                onClick={handleInputClick}
                onChange={(e) => setValue(e.target.value)}
                {...props}
            />
        </div>
    );
};

export default Input;
