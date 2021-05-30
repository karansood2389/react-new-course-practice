import Card from "../UI/Card";
import styles from "./Users.module.sass";

const Users = (props) => {
  const userData = props.users.map((user) => {
    return (
      <div key={user.id} className={styles.Users}>
        {user.value}
      </div>
    );
  });

  return (
    <Card>
      <div className={styles.UsersContainer}>{userData}</div>
    </Card>
  );
};

export default Users;
