import kate from './assets/images/member-1.png';
import nykyta from './assets/images/member-2.png';
import roman from './assets/images/member-3.png';
import mariana from './assets/images/member-4.png';
import alex from './assets/images/member-5.png';

export const team = [
    {
        id: '2', 
        name: 'Nykyta', 
        surname: 'Hlukhov', 
        page: false, 
        role: 'role', 
        character: 'Naruto Uzumaki', 
        image: nykyta, 
        info: 'IMSF’s geochemist and hydrologist who supervises all water operations at Olympus Town',
        details: {
            height: 174, 
            weight: 132, 
            hair: 'Brown', 
            eyes: 'Brown', 
            other: 'Additional info not available', 
            indent: 'P 108574.LU.00.104', 
            linkedin: 'link', 
            github: 'https://github.com/marianasvirzhevska'
        }
    },
    {
        id: '1', 
        name: 'Kateryna', 
        surname: 'Boiko', 
        page: false, 
        role: 'role', 
        character: 'Ashley Greene', 
        image: kate,
        info: '20 year old student from Zhytomberd, novice writer, dreams of writing a book about this mission',
        details: {
            height: 168, 
            weight: 128, 
            hair: 'Light brown', 
            eyes: 'Green', 
            other: 'Always with book in her hands', 
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
        role: 'role', 
        character: '', 
        image: roman,
        info: 'Lenar Hoyt was a Jesuit priest, famous for his role in the final Shrike pilgrimage',
        customBackground: true,
        details: {
            height: 174, 
            weight: 132, 
            hair: 'Brown', 
            eyes: 'Brown', 
            other: 'Additional info not available', 
            indent: 'P 108574.LU.00.104', 
            linkedin: 'link', 
            github: 'https://github.com/marianasvirzhevska'
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
        info: 'A scholar and professor from Barnard\'s World',
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
