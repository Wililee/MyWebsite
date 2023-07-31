import 'bootstrap/dist/css/bootstrap.min.css';
import {BasePage} from '../public/components/containers/BasePage'
import { TabContainer } from '../public/components/containers/TabContainer'
import { MultiItemCarosel } from '../public/components/containers/MultiItemCarosel'
import { HobbieCard } from '../public/components/containers/HobbieCard';
import { PhotoCaptionCard } from '../public/components/containers/PhotoCaptionCard';

export default function personal() {
  const items = [
    {
        id: 1,
        tabTitle: 'Hobbies',
        content: <MultiItemCarosel>
        <HobbieCard title="Climbing" description="Over the past few years i've gotten into bouldering and top rope climbing, it's an amazing activity to do with friends! " imageURL={"/images/climbing.PNG"}/>
        <HobbieCard title="Hiking" description="Hiking is a great way to see amazing views of the world." imageURL={"/images/hiking.JPG"}/>
        <HobbieCard title="Cooking" description="although it's not the healthiest, I like to create cool dishes sometimes." imageURL={"/images/goodMeal.JPG"}/>
        <HobbieCard title="Hockey" description="Being Canadian, Hockey is my go to sport. Go Canes!" imageURL={"/images/.jpg"}/>
        <HobbieCard title="Video Games" description="On Discord you can catch me playing some of my favourite games including OverWatch, TFT, DBD and Terraria." imageURL={"/images/top500.jpg"}/>
        </MultiItemCarosel>,
    },
    {
        id: 2,
        tabTitle: 'Family and Friends',
        content: <MultiItemCarosel>
        <PhotoCaptionCard description="Mom <3" imageURL={"/images/mom.jpg"}/>
        <PhotoCaptionCard description="My older brother Ben and I being normal" imageURL={"/images/ben.jpg"}/>
        <PhotoCaptionCard description="My Dad, also an amazing chef" imageURL={"/images/dad.jpg"}/>
        <PhotoCaptionCard description="Joffre Lake with some friends! " imageURL={"/images/joffree.jpg"}/>
        <PhotoCaptionCard description="Family Photo" imageURL={"/images/family.jpg"}/>
        <PhotoCaptionCard description="Space team" imageURL={"/images/spaceteam.jpg"}/>
        <PhotoCaptionCard description="Engineering Mom and son!" imageURL={"/images/momEngineer.jpg"}/>
        </MultiItemCarosel>,
    },
    {
        id: 3,
        tabTitle: 'Travels',
        content: <MultiItemCarosel>
        <PhotoCaptionCard description="London" imageURL={"/images/london.jpg"}/>
        <PhotoCaptionCard description="Amsterdam" imageURL={"/images/amsterdam.jpg"}/>
        <PhotoCaptionCard description="Munich" imageURL={"/images/munich.jpg"}/>
        <PhotoCaptionCard description="Lauterbrunnen" imageURL={"/images/lauterbrunnen.jpg"}/>
        <PhotoCaptionCard description="Brussels" imageURL={"/images/brussels.jpg"}/>
        <PhotoCaptionCard description="Sorrento" imageURL={"/images/sorrento.jpg"}/>
      </MultiItemCarosel>,
    },
];

  return (
    <BasePage title="Personal">
      <TabContainer tabs={items}/>
    </BasePage>
  )
}