import SideNav from "../../globalComponents/sideNav/sideNav";
import "./home.css";
import MiniSlider from "./miniSlider/miniSlider";

const Home = () => {
  return (
    <section className="home">
      <SideNav />
      <div className="home-content">
        <MiniSlider/>
      </div>
    </section>
  );
};

export default Home;
