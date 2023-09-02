import User from './User';
import Card from '../UI/Card';
import style from './ShowUsers.module.css';

const ShowUsers = (props) => {

    const showingUser = props.data.map((user, i) => {
        return (
            <User
                key={i}
                name={user.name}
                age={user.age}
            />
        )
    });

    return (
        <Card className={style.users}>
            <ul>
                {showingUser}
            </ul>
        </Card>

    );
}

export default ShowUsers;

