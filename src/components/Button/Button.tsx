import * as React from 'react';
import './Button.css'

interface ButtonProps {
    label: string, 
    class: string,
    onClick: () => void;
}
 
const Button = (props: ButtonProps) => {
    return <button className={props.class} onClick={props.onClick}>{props.label}</button>
}
 
export default Button;