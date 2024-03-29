import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Jumbotron from '../components/ui/jumbotron/Jumbotron';
import MediaCardList from '../components/media/MediaCardList';
import Navbar from '../components/ui/navbar/Navbar';
import { rampage } from '../data/MediaListData';
import AnimatedPage from '../components/animations/AnimatedPage';

function Rampage_Page() {
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

  const jumboImg = rampage[0].imgSrc;
  const jumboTitle = rampage[0].title;
  const jumboDescription = rampage[0].description;
  return (
    <>
      <Navbar />
      <AnimatedPage>
        <Jumbotron
          src={jumboImg}
          title={jumboTitle}
          description={jumboDescription}
        />
        <section className='container mx-auto'>
          <h1 className='text-center'>AEW Rampage</h1>
          <p className='text-xl'>
            Cap your week off with some exciting wrestling every Friday night.
          </p>
        </section>
        <MediaCardList shows={rampage} showName='2022' />
      </AnimatedPage>
    </>
  );
}

export default Rampage_Page;
