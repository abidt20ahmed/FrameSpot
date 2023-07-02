import Banner from "./components/Banner";
import Mountains from "./components/Mountains";
import Sunset from "./components/Sunset";
import SeaBeach from "./components/SeaBeach";



const HomePage = () => {
  return (
    <div>
      <Banner />
      <Sunset />
      <SeaBeach />
      <Mountains />
    </div>
  );
};

export default HomePage;