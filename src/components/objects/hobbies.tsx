import { ReactElement } from 'react';
import besiktas from '../../assets/images/besiktas.jpg';
import realmadrid from '../../assets/images/realmadrid.jpg';
import goku from '../../assets/images/goku.jpg';
import apple from '../../assets/images/apple.png';

interface Hobby {
    image: ReactElement;
    title: string;
    description: string;
}

const hobbyBesiktas: Hobby = {
    image: <img src={besiktas} alt="Besiktas" style={{width: '100%'}}/>,
    title: "Besiktas JK",
    description: "Besiktas is currently the best soccer club in turkey. I'm a huge fan of this club since 2000. I was 7 when i watched my first match"
    + " of this club. This was merely the summary of the match against one of the best soccer clubs in the world, namely FC Barcelona."
    + " We won with 3-0, but more impressive was the mood and atmosphere in the former Inönü stadium. It was like in a hell. Our supporters were incredibly loud"
    + " and they supported our squad till the last second. This game was the main reason why i became a fan of this great club."
    + " Today Besiktas has an indispensable role in my life. It's even more than a supporter - club relationship. It became a passion ... "
}

const hobbyRealMadrid: Hobby = {
    image: <img src={realmadrid} alt="Real Madrid" style={{width: '100%'}}/>,
    title: "Real Madrid CF",
    description: "Real Madrid is also my favourite club. I like their game philosophy a traditional 4-3-3 with 2 wingers and a striker. Offeensive pressing, fast counter attacks,"
    + " ball possession and a huge willingness to run are Reals key factors for their success. Therefore it's a joy to watch them playing"
}

const hobbyDragonball: Hobby = {
    image: <img src={goku} alt="Dragon Ball Z" style={{width: '100%'}}/>,
    title: "Dragon Ball Z", 
    description: "Dragon Ball Z is a master piece created by Akira Toriyama. I can recommend to watch this anime to everyone. It's full of exciting fights between the heros and villains of"
    + " the series. I'm still involved in the Dragon ball universum by playing Dragonball legends for Android/IOS"
}

const hobbyApple: Hobby = {
    image: <img src={apple} alt="Apple" style={{width: '100%'}}/>,
    title: "Apple",
    description: "i like apple products especially macs. In my free time i try to repair & restore some old macs that i bought from ebay. Somtimes i need to solder something"
    + " and sometimes it's sufficient to swap the hard drive"
}

export const hobbies = [hobbyBesiktas, hobbyRealMadrid, hobbyDragonball, hobbyApple];