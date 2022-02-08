import './App.scss';
import Navbar from './pages/Navbar';
import ShowCase from './pages/ShowCase';
import NewLetter from './pages/NewLetter';
import Boxes from './pages/Boxes';
import LearnSection from './components/LearnSection';
import Question from './pages/Question';
import Instructors from './pages/Instructors';
import Concact from './pages/Concact';
import Footer from './pages/Footer';

//images
import reactSvg from './logo.svg';
import front from './asset/images/frond.png';

const data = [
    {
        title: '如何成為前端',
        sectext: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis nihil obcaecati',
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum dolorem voluptatibus nihil delectus, illo qui animi aliquid facere ut, sequi quo reprehenderit quis beatae labore? Nobis nulla exercitationem laudantium soluta!`,
        img: front,
        isTransformPosition: false,
        styles: {
            bg: '',
            textColor: 'text-secondary',
        },
    },
    {
        title: '如何成為後端',
        sectext: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis nihil obcaecati',
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum dolorem voluptatibus nihil delectus, illo qui animi aliquid facere ut, sequi quo reprehenderit quis beatae labore? Nobis nulla exercitationem laudantium soluta!`,
        img: reactSvg,
        isTransformPosition: true,
        styles: {
            bg: 'bg-dark',
            textColor: 'text-light',
        },
    },
];

function App() {
    return (
        <div className="App ">
            <Navbar />
            <ShowCase />
            <NewLetter />
            <Boxes />
            <div id="knowledge">
                {data.map((item) => {
                    return <LearnSection key={item.title} {...item} />;
                })}
            </div>
            <Question />
            <Instructors />
            <Concact />
            <Footer />
        </div>
    );
}

export default App;
