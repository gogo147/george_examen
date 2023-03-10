import Hero from '../Hero/Hero';
import { SliderData } from '../data/SliderData';
import Info from '../Info/Info';
import { InfoData } from '../data/InfoData';
import Explore from '../Explore/Explore';
import { ExploreData } from '../data/ExploreData';
import Footer from '../Footer/Footer';


const Main = () => {

	return (
		<>
			<Hero slides={SliderData} />
			<Info {...InfoData} />
			<Explore {...ExploreData} />
			<Footer />	
		</>
	);
};

export default Main;
