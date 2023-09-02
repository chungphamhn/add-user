import style from './Button.module.css';

const Button = (props) => {
    return (
        <button
            className={style.button || 'button'}
            type={props.type}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    );
};

export default Button;