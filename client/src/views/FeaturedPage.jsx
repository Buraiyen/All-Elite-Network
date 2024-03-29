import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Jumbotron from '../components/ui/jumbotron/Jumbotron';
import MediaCardList from '../components/media/MediaCardList';
import Navbar from '../components/ui/navbar/Navbar';
import AnimatedPage from '../components/animations/AnimatedPage';
import {
  payperview,
  dynamite,
  rampage,
  dark,
  darkElevation,
} from '../data/MediaListData';

function FeaturedPage() {
  const history = useHistory();
  useEffect(() => {
    const token = localStorage.getItem('token');
    axios
      .get(`${import.meta.env.VITE_APP_BACKEND_API}/api/auth/restricted`, {
        headers: {
          Authorization: token,
        },
      })
      .then(() => {
        // TODO: set success message
      })
      .catch((err) => {
        history.push('/login');
      });
  }, []);

  const jumboImg = payperview[0].imgSrc;
  const jumboTitle = payperview[0].title;
  const jumboDescription = payperview[0].description;

  return (
    <>
      <Navbar />
      <AnimatedPage>
        <Jumbotron
          src={jumboImg}
          title={jumboTitle}
          description={jumboDescription}
        />
        <MediaCardList shows={payperview} showName='Pay Per View' />
        <MediaCardList shows={dynamite} showName='Dynamite' />
        <MediaCardList shows={rampage} showName='Rampage' />
        <MediaCardList shows={dark} showName='Dark' />
        <MediaCardList shows={darkElevation} showName='Dark Elevation' />
      </AnimatedPage>
    </>
  );
}

export default FeaturedPage;
