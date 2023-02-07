import Jumbotron from '../components/ui/jumbotron/Jumbotron';
import MediaCardList from '../components/media/MediaCardList';
import Navbar from '../components/ui/navbar/Navbar';
import { rampage } from '../data/MediaListData';

function RampagePage() {
  const jumboImg = rampage[0].imgSrc;
  const jumboTitle = rampage[0].title;
  const jumboDescription = rampage[0].description;
  return (
    <>
      <Navbar />
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
    </>
  );
}

export default RampagePage;
