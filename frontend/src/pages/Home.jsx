import ChatView from "../components/ChatView";
import SideBar from "../components/Sidebar";

const Home = () => {
  return (
    <div className="flex transition duration-500 ease-in-out">
      <SideBar />
      <ChatView />
    </div>
  );
};

export default Home;
