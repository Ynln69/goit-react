import { clsx } from "clsx";
import css from "./FriendListItem.module.css";

const FriendListItem = ({ name, image, online }) => {
  const isOnline = online ? css.online : css.offline;
  return (
    <li className={css.item}>
      <img src={image} alt="Avatar" width="48" />
      <h3>{name}</h3>
      <p className={isOnline}>{online ? "Online" : "Offline"}</p>
    </li>
  );
};

export default FriendListItem;
