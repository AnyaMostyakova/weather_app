import { FC, ButtonHTMLAttributes } from 'react';
import styles from './Button.module.sass';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary';
}

const Button: FC<ButtonProps> = ({ children, variant = 'primary', ...props }) => {
    return (
        <button
            className={`${styles.button} ${styles[`button--${variant}`]}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
