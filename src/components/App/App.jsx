import userData from "../../data/userInfo.json";
import friendsData from "../../data/dataFriends.json";
import transactions from "../../data/transactions.json";

import FriendsList from "../FriendsList/FriendsList";
import Profile from "../Profile/Profile";
import TransactionHistory from "../TransactionHistory/TransactionHistory";

import css from "./App.module.css";

const App = () => {
  return (
    <div className={css.container}>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendsList friends={friendsData} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
};

export default App;
