import style from './User.module.css';

const User = (props) => {
    return(
        <li key={props.name} className={style.user}>
            {props.name} ({props.age} years old)
        </li>
    );
};

export default User;