import './App.css';
import IdCard from './components/IdCard'
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import Rating from './components/Rating';
import DriverCard from './components/DriverCard';
import LikeButton from './components/LikeButton';
import ClickablePicture from './components/ClickablePicture';
import gamer from './assets/images/gamer.jpg';
import gamerGlasses from './assets/images/gamerGlass.jpg';
import Dice from './components/Dice';
import Carousel from './components/Carousel';
import NumbersTable from './components/NumbersTable.js';
import Facebook from './components/Facebook';
import SignupPage from './components/SignupPage';
import RGBColorPicker from './components/RGBColorPicker';

function App() {
  return (
    <div className="App">
      <IdCard
        lastName='Doe'
        firstName='John'
        gender='male'
        height={178}
        birth={new Date("1992-07-14")}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <IdCard
        lastName='Delores '
        firstName='Obrien'
        gender='female'
        height={172}
        birth={new Date("1988-05-11")}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
      
      <br />
      <br />
      <br />

      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
    
      <br />
      <br />
      <br />

      <Random min={1} max={6}/>
      <Random min={1} max={100}/>   
    
      <br />
      <br />
      <br />

      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />  

      <br />
      <br />
      <br />

      <div className="container">
        <CreditCard
          type="Visa"
          number="0123456789018845"
          expirationMonth={3}
          expirationYear={2021}
          bank="BNP"
          owner="Maxence Bouret"
          bgColor="#11aa99"
          color="white" 
        />
            
        <CreditCard
          type="Master Card"
          number="0123456789010995"
          expirationMonth={3}
          expirationYear={2021}
          bank="N26"
          owner="Maxence Bouret"
          bgColor="#eeeeee"
          color="#222222"
        />
            
        <CreditCard
          type="Visa"
          number="0123456789016984"
          expirationMonth={12}
          expirationYear={2019}
          bank="Name of the Bank"
          owner="Firstname Lastname"
          bgColor="#ddbb55"
          color="white" 
        />
      </div>
      
      <br />
      <br />
      <br />

      <div className="rating">
        <Rating>0</Rating>
        <Rating>1.49</Rating>
        <Rating>1.5</Rating>
        <Rating>3</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating>
      </div>

      <br />
      <br />
      <br />

      <DriverCard
        name="Travis Kalanick"
        rating={4.2}
        img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
        car={{
          model: "Toyota Corolla Altis",
          licensePlate: "CO42DE"
        }}
      />

      <DriverCard
        name="Dara Khosrowshahi"
        rating={4.9}
        img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
        car={{
          model: "Audi A3",
          licensePlate: "BE33ER"
        }}
      />

      <br />
      <br />
      <br />

      <LikeButton />

      <br />
      <br />
      <br />

      <ClickablePicture img={gamer} imgClicked={gamerGlasses} />

      <br />
      <br />
      <br />

      <Dice />
      
      <br />
      <br />
      <br />

      <Carousel
        images={[
          'https://randomuser.me/api/portraits/women/1.jpg',
          'https://randomuser.me/api/portraits/men/1.jpg',
          'https://randomuser.me/api/portraits/women/2.jpg',
          'https://randomuser.me/api/portraits/men/2.jpg',
        ]}
      />

      <br />
      <br />
      <br />

      <NumbersTable limit={12} />

      <br />
      <br />
      <br />

      <Facebook />

      <br />
      <br />
      <br />

      <SignupPage />

      <br />
      <br />
      <br />
      
      <RGBColorPicker />

    </div>
  );
}

export default App;