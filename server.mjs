import express from 'express';
import path from 'path';
const __dirname = path.resolve();

const app = express();

app.get('/compSci', (req, res) => {
    let compSciQuizData = [

        {


            question: 'On which computer hardware device is the BIOS chip located?',
            correctAnswer: 3,
            incorrectAnswers: [
                'Hard Disk Drive',
                'Central Processing Unit',
                'Graphics Processing Unit',
                'Motherboard'
            ]
        },
        {


            question: 'Which of the following languages is used as a scripting language in the Unity 3D game engine?',
            correctAnswer: 2,
            incorrectAnswers: ['Java', 'C++', 'C#', 'Objective-C']
        },
        {


            question: 'All of the following programs are classified as raster graphics editors EXCEPT:',
            correctAnswer: 0,
            incorrectAnswers: ['Inkscape', 'Paint.NET', 'GIMP', 'Adobe Photoshop']
        },
        {


            question: 'Nvidia&#039;s headquarters are based in which Silicon Valley city?',
            correctAnswer: 2,
            incorrectAnswers: ['Palo Alto', 'Santa Clara', 'Cupertino', 'Mountain View']
        },
        {


            question: 'What was the first commerically available computer processor?',
            correctAnswer: 2,
            incorrectAnswers: ['Intel 486SX', 'TMS 1000', 'Intel 4004', 'AMD AM386']
        },
        {


            question: 'On which day did the World Wide Web go online?',
            correctAnswer: 3,
            incorrectAnswers: ['December 17, 1996', 'November 12, 1990', 'November 24, 1995', 'December 20, 1990']
        },
        {


            question: 'While Apple was formed in California, in which western state was Microsoft founded?',
            correctAnswer: 1,
            incorrectAnswers: ['Washington', 'New Mexico', 'Colorado', 'Arizona']
        },
        {


            question: 'What does the acronym CDN stand for in terms of networking?',
            correctAnswer: 2,
            incorrectAnswers: [
                'Content Distribution Network',
                'Computational Data Network',
                'Content Delivery Network',
                'Compressed Data Network'
            ]
        },
        {


            question: 'Which one of these is not an official development name for a Ubuntu release?',
            correctAnswer: 2,
            incorrectAnswers: ['Trusty Tahr', 'Utopic Unicorn', 'Mystic Mansion', 'Wily Werewolf']
        },
        {


            question: 'Which coding language was the #1 programming language in terms of usage on GitHub in 2015?',
            correctAnswer: 0,
            incorrectAnswers: ['JavaScript', 'C#', 'Python', 'PHP']
        },
    ]
    res.send(compSciQuizData);
})

app.get('/movies', (req, res) => {
    let moviesData = [
        {

            question: 'Which retired American football quarterback played himself in &#039;Ace Ventura: Pet Detective&#039; and &#039;Little Nicky&#039;?',
            correctAnswer: 1,
            incorrectAnswers: ['John Elway', 'Dan Marino', 'Tom Brady', 'Joe Montana']
        },
        {

            question: 'What is the name of James Dean&#039;s character in the 1955 movie &quot;Rebel Without a Cause&quot;?',
            correctAnswer: 0,
            incorrectAnswers: ['Jim Stark', 'Ned Stark', 'Jim Kane', 'Frank Stark']
        },
        {

            question: 'What is the name of the dog that played Toto in the 1939 film &quot;The Wizard of Oz&quot;?',
            correctAnswer: 2,
            incorrectAnswers: ['Tommy', 'Teddy', 'Terry', 'Toto']
        },
        {

            question: 'Who was the director of &quot;Scott Pilgrim vs. the World (2010)&quot;?',
            correctAnswer: 0,
            incorrectAnswers: ['Edgar Wright', 'Phil Lord', 'Chris Miller', 'Seth Rogan']
        },
        {

            question: 'What Queen song plays during the final fight scene of the film &quot;Hardcore Henry&quot;?',
            correctAnswer: 1,
            incorrectAnswers: ['Brighton Rock', 'Don&#039;t Stop Me Now', 'Another Bites the Dust', 'We Will Rock You']
        },
        {

            question: 'In Finding Nemo, what was the name of Nemo&#039;s mom?',
            correctAnswer: 1,
            incorrectAnswers: ['Sandy', 'Coral', 'Pearl', 'Shelly']
        },
        {

            question: 'Which director directed the movie &quot;Pan&#039;s Labyrinth&quot;?',
            correctAnswer: 1,
            incorrectAnswers: [
                'Alfonso Cuar&oacute;n',
                'Guillermo Del Toro',
                'Alejandro Gonz&aacute;lez I&ntilde;&aacute;rritu',
                ' Alejandro Jodorowsky'
            ]
        },
        {

            question: 'Which star actor was in &quot;Top Gun&quot;, &quot;Jerry Maguire&quot; and &quot;Born on the Fourth of July&quot;?',
            correctAnswer: 3,
            incorrectAnswers: ['Kelly McGillis', 'John Travolta', 'George Clooney', 'Tom Cruise']
        },
        {

            question: 'In the film &quot;Requiem for a Dream&quot;, what drug does Jared Leto&#039;s character get addicted to?',
            correctAnswer: 0,
            incorrectAnswers: ['Heroin', 'Cocaine', 'Marijuana', 'Oxycodone']
        },
        {

            question: 'After India, which country produces the second most movies per year?',
            correctAnswer: 2,
            incorrectAnswers: ['United States', 'China', 'Nigeria', 'France']
        }
    ]

    res.send(moviesData);

})
app.get('/games', (req, res) => {
    let gamesData = [
        {

            question: 'In which series of games do you collect souls to empower you and buy weaponry and armor with?',
            correctAnswer: 1,
            incorrectAnswers: ['Final Fantasy ', 'Souls ', 'Monster Hunter', 'The Legend of Zelda']
        },
        {

            question: 'In the Nintendo DS game &#039;Ghost Trick: Phantom Detective&#039;, what is the name of the hitman seen at the start of the game?',
            correctAnswer: 0,
            incorrectAnswers: ['Nearsighted Jeego', 'One Step Ahead Tengo', 'Missile', 'Cabanela']
        },
        {

            question: 'Which of these is NOT a team available in the game Pok&eacute;mon Go?',
            correctAnswer: 2,
            incorrectAnswers: ['Team Instinct', 'Team Valor', 'Team Rocket', 'Team Mystic']
        },
        {

            question: 'In Grand Theft Auto V, what was Michael De Santa&#039;s former surname?',
            correctAnswer: 0,
            incorrectAnswers: ['Townley', 'De Santos', 'Watson', 'Simpson']
        },
        {

            question: 'What does IWHBYD stand for on the skull in the Halo series?',
            correctAnswer: 3,
            incorrectAnswers: [
                'I Wanna Have Babies You Down',
                'I Would Hate Being Your Driver',
                'I Would Have Bought Your Dog',
                'I Would Have Been Your Daddy'
            ]
        },
        {

            question: 'In Danganronpa: Trigger Happy Havoc, what is the protagonist&#039;s name?',
            correctAnswer: 2,
            incorrectAnswers: ['Hajime Hinata', 'Nagito Komaeda', 'Makoto Naegi', 'Komaru Naegi']
        },
        {

            question: 'What is the name of the game developer who created &quot;Call Of Duty: Zombies&quot;?',
            correctAnswer: 0,
            incorrectAnswers: ['Treyarch', 'Sledgehammer Games', 'Infinity Ward', 'Naughty Dog']
        },
        {

            question: 'In which mall does &quot;Dead Rising&quot; take place?',
            correctAnswer: 2,
            incorrectAnswers: [
                'Liberty Mall',
                'Twin Pines Mall',
                'Willamette Parkview Mall',
                'Central Square Shopping Center'
            ]
        },
        {

            question: 'Which of the following games has the largest map size?',
            correctAnswer: 1,
            incorrectAnswers: [
                'Grand Theft Auto 5',
                'Just Cause 2',
                'The Elder Scrolls 4:  Oblivion',
                'The Witcher 3:  Wild Hunt'
            ]
        },
        {

            question: 'What Ultimate does Makoto Naegi, protagonist of Danganronpa: Trigger Happy Havoc, have? ',
            correctAnswer: 0,
            incorrectAnswers: [
                'Ultimate Lucky Student',
                'Ultimate Unlucky Student',
                'Ultimate Detective',
                'Ultimate Runner'
            ]
        }
    ]
    res.send(gamesData);

})

app.get('/vehicles', (req, res) => {
    let vehiclesData = [
        {

            question: 'Where are the cars of the brand &quot;Ferrari&quot; manufactured?',
            correctAnswer: 1,
            incorrectAnswers: ['Romania', 'Italy', 'Germany', 'Russia']
        },
        {

            question: 'Which Italian city is home of the car manufacturer &#039;Fiat&#039;?',
            correctAnswer: 2,
            incorrectAnswers: ['Maranello', 'Modena', 'Turin', 'Rome']
        },
        {

            question: 'Jaguar Cars was previously owned by which car manfacturer?',
            correctAnswer: 0,
            incorrectAnswers: ['Ford', 'Chrysler', 'General Motors', 'Fiat']
        },
        {

            question: 'What UK Train does NOT go over 125MPH?',
            correctAnswer: 3,
            incorrectAnswers: ['Class 43', 'Javelin', 'Pendolino', 'Sprinter']
        },
        {

            question: 'Which of the following collision avoidance systems helps airplanes avoid colliding with each other?',
            correctAnswer: 1,
            incorrectAnswers: ['GPWS', 'TCAS', 'OCAS', 'TAWS']
        },
        {

            question: 'Which of these companies does NOT manufacture motorcycles?',
            correctAnswer: 0,
            incorrectAnswers: ['Toyota', 'Honda', 'Kawasaki', 'Yamaha']
        },
        {

            question: 'Which car tire manufacturer is famous for its &quot;Eagle&quot; brand of tires, and is the official tire supplier of NASCAR?',
            correctAnswer: 1,
            incorrectAnswers: ['Pirelli', 'Goodyear', 'Bridgestone', 'Michelin']
        },
        {

            question: 'Which car tire manufacturer is famous for its &quot;P Zero&quot; line?',
            correctAnswer: 0,
            incorrectAnswers: ['Pirelli', 'Goodyear', 'Bridgestone', 'Michelin']
        },
        {

            question: 'What are the cylinder-like parts that pump up and down within the engine?',
            correctAnswer: 1,
            incorrectAnswers: ['Leaf Springs', 'Pistons', 'Radiators', 'ABS']
        },
        {

            question: 'What country was the Trabant 601 manufactured in?',
            correctAnswer: 1,
            incorrectAnswers: ['Soviet Union', 'East Germany', 'Hungary', 'France']
        }
    ]

    res.send(vehiclesData);
})


app.get('/profile', (req, res) => {
    console.log('Hello World')
    res.send('Hello mnbzxc')

})

app.use(express.static(path.join(__dirname, 'public')))
const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
    console.log(`Example app listening on Arsalan ${PORT}`)
})













// const apiUrl = 'https://opentdb.com/api.php?amount=10&category=28&difficulty=easy&type=multiple';

// fetch(apiUrl)
//     .then(response => response.json())
//     .then(data => {
//         if (data.response_code === 0) {
//             let questions = data.results;
//             console.log(questions);
//         } else {
//             console.log("error unavle to fetch data");
//         }
//     })
//     .catch(error => {

//         console.log('error:', error)

//     })
