import userData from "../../data/userInfo.json";
import friendsData from "../../data/dataFriends.json";
import transactions from "../../data/transactions.json";
import FriendsList from "../FriendsList/FriendsList";
import Profile from "../Profile/Profile";
import TransactionHistory from "../TransactionHistory/TransactionHistory";

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendsList friends={friendsData} />
      <TransactionHistory transactions={transactions} />
    </>
  );
};

export default App;
