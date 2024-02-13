import FriendListItem from "../FriendListItem/FriendListItem";
import css from "./FriendsList.module.css";
const FriendsList = ({ friends }) => {
  return (
    <ul className={css.list}>
      {friends.map(({ id, avatar, name, isOnline }) => {
        return (
          <FriendListItem
            key={id}
            image={avatar}
            name={name}
            online={isOnline}
          />
        );
      })}
    </ul>
  );
};

export default FriendsList;
