import FriendListItem from "../FriendListItem/FriendListItem";

const FriendsList = ({ friends }) => {
  return (
    <ul>
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
