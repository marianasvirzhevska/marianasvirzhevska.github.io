import kate from './assets/images/member-1.png';
import kateVideo from './assets/video/ashlee.mov';
import nykyta from './assets/images/member-2.png';
import nykytaVideo from './assets/video/nikita.mp4';
import roman from './assets/images/member-3.png';
import romanVideo from './assets/video/roma.mp4';
import mariana from './assets/images/member-4.png';
import marianaVideo from './assets/video/mariana.mp4';
import alex from './assets/images/member-5.png';
import alexVideo from './assets/video/alex.mp4';

export const team = [
    {
        id: '2', 
        name: 'Nykyta', 
        surname: 'Hlukhov', 
        page: false, 
        role: 'role', 
        character: 'Naruto Uzumaki', 
        image: nykyta, 
        video: nykytaVideo, 
        info: 'The reveler full of egoism. It is a mystery why Hyperion have chosen him.',
        details: {
            height: 178, 
            weight: 154, 
            hair: 'Black', 
            eyes: 'Blue', 
            other: 'He has come to the meeting after party and barely understands what is going on', 
            indent: 'Z 777777.77.77.777', 
            linkedin: 'linkedin.com/in/mykyta-hlukhov-6019051a4 ', 
            github: 'https://github.com/marianasvirzhevska'
        }
    },
    {
        id: '1', 
        name: 'Kateryna', 
        surname: 'Boiko', 
        page: false, 
        role: 'Novice writer', 
        character: 'Ashley Greene', 
        image: kate,
        video: kateVideo,
        info: '20 year old student from Zhytomberd, novice writer, dreams of writing a book about this mission',
        details: {
            height: 168, 
            weight: 128, 
            hair: 'Light brown', 
            eyes: 'Green', 
            other: 'Always with book in her hands or with headphones', 
            indent: 'P 108574.LU.12.435', 
            linkedin: 'https://www.linkedin.com/in/kateryna-boiko-10b2a0195/', 
            github: 'https://github.com/KaterinaBoiko'
        }
    },
    {
        id: '3', 
        name: 'Mariana', 
        surname: 'Svirzhevska', 
        page: false, 
        role: 'Private investigator', 
        character: 'Brawne Lamia', 
        image: mariana, 
        video: marianaVideo,
        info: 'A private investigator from the industrial, high-gravity planet of Lusus.',
        details: {
            height: 174, 
            weight: 132, 
            hair: 'Brown', 
            eyes: 'Brown', 
            other: 'Not available', 
            indent: 'P 108574.LU.00.104', 
            linkedin: 'https://www.linkedin.com/in/mariana-svirzhevska-09404a149/',
            github: 'https://github.com/marianasvirzhevska'
        }
    },
    {
        id: '4', 
        name: 'Roman',
        surname: 'Tsakhlo', 
        page: false,  
        role: 'Developer of syntetic heart', 
        character: 'Christoff Amoscott', 
        image: roman,
        info: 'Christoff works in staff of Developing Syntetic Cardiovascular System Department. He develops a syntetic heart.',
        customBackground: true,
        details: {
            height: 184, 
            weight: 137, 
            hair: 'Blonde', 
            eyes: 'Green', 
            other: 'Christoff develops a syntetic heart', 
            indent: 'P 108574.CA.00.104', 
            linkedin: 'https://www.linkedin.com/in/roman-tsakhlo-37a1b1167/', 
            github: 'https://github.com/roma-bjj'
        }
    },
    {
        id: '5', 
        name: 'Aleksandr', 
        surname: 'Bezdorozhev', 
        page: true, 
        role: 'Scholar and professor', 
        character: 'Alex Callisto',
        image: alex,
        video: alexVideo,
        info: 'He would cross any line to find out the truth.',
        details: {
            height: 180, 
            weight: 176, 
            hair: 'Red', 
            eyes: 'Grey', 
            other: 'Not available', 
            indent: 'P 383011.AC.00.843', 
            linkedin: 'https://www.linkedin.com/in/oleksandr-bezdorozhev-3ab9031a4/', 
            github: 'https://github.com/lightcraf'
        }
    }
];
