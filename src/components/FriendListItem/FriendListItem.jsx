const FriendListItem = ({ name, image, online }) => {
  return (
    <li>
      <img src={image} alt="Avatar" width="48" />
      <p>{name}</p>
      <p>{online}</p>
    </li>
  );
};

export default FriendListItem;
