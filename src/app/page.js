import Banner from "./components/Banner";
import Mountains from "./components/Mountains";
import Sunset from "./components/Sunset";
import SeaBeach from "./components/SeaBeach";
import NavBar from "./components/NavBar";
import SharedFooter from "./components/SharedFooter";



const HomePage = () => {
  return (
    <div>
      <NavBar />
      <Banner />
      <Sunset />
      <SeaBeach />
      <Mountains />
      <SharedFooter />
    </div>
  );
};

export default HomePage;