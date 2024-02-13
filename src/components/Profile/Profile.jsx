import { FiMapPin, FiThumbsUp, FiEye, FiUsers } from "react-icons/fi";

import css from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.container}>
      <div className={css.userContainer}>
        <img src={image} alt="User avatar" width={100} className={css.avatar} />
        <h2>{name}</h2>
        <p>@{tag}</p>
        <p>
          <FiMapPin />
          {location}
        </p>
      </div>
      <ul className={css.list}>
        <li className={css.item}>
          <span className={css.itemSpan}>
            {" "}
            <FiUsers />
            Followers
          </span>
          <span>
            <b>{stats.followers}</b>
          </span>
        </li>
        <li className={css.item}>
          <span className={css.itemSpan}>
            {" "}
            <FiEye /> Views
          </span>
          <span>
            <b>{stats.views}</b>
          </span>
        </li>
        <li className={css.item}>
          <span className={css.itemSpan}>
            {" "}
            <FiThumbsUp />
            Likes
          </span>
          <span>
            <b>{stats.likes}</b>
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
