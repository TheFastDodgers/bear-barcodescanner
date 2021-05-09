import ButtonLink from '../components/navigation/ButtonLink';
import Navbar from '../components/navigation/Navbar';

function HomePage() {
  return (
    <Navbar>
      <ButtonLink to="/scan">scan</ButtonLink>
      <ButtonLink to="/parcels">parcels</ButtonLink>
    </Navbar>
  );
}

export default HomePage;
