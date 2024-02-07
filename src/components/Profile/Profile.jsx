import { FiMapPin, FiThumbsUp, FiEye, FiUsers } from "react-icons/fi";

const Profile = ({ username, tag, location, image, stats }) => {
  return (
    <div>
      <div>
        <img src={image} alt="User avatar" width={100} />
        <p>{username}</p>
        <p>@{tag}</p>
        <p>
          <FiMapPin />
          {location}
        </p>
      </div>
      <ul>
        <li>
          <FiUsers />
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li>
          <FiEye />
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li>
          <FiThumbsUp />
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
