const express = require('express');
const bodyParser = require('body-parser');
const uuid = require('uuid');

const app = express();

app.use(bodyParser.json());

let users = [
  {
    id: 1,
    name: "Kim",
    favoritemMovies: []
  },
  {
    id: 2,
    name: "Joe",
    favoritemMovies: ["The Fountain"]
  },

]

let movies = [
  {
    "Title":"The Fountain",
    "Description":"As a modern-day scientist, Tommy is strugling with normalitty, espretely searching for the medical breakthrough that will save the life of his cancer-sriken wifr, Izzi",
     "Genre":{
      "Name":"Drama",
      "Description":"In film and television, drama is a catagory of narative fiction for semi-fiction intended to be more serious than humourous in tone",
     },
    "Director":{
      "Name":"Darren Aronofsky",
      "Bio":"Is an American film director, producer, and screenwriter. His films are noted for their surreal, melodramatic, and often disturbing elements, frequently in the form of psychological fiction. Furthermore, he is well and healthy in 2023!",
      "Birth":"February 12, 1969",
    },
    "ImageURL":"https://en.wikipedia.org/wiki/The_Fountain",
  },

  {
    "Title":"Lord of the Rings",
    "Description":"The Lord of the Rings is the saga of a group of sometimes reluctant heroes who set forth to save their world from consummate evil. Its many worlds and creatures were drawn from Tolkien's extensive knowledge of philology and folklore.",
     "Genre":{
      "Name":"Drama",
      "Description":"In film and television, drama is a catagory of narative fiction for semi-fiction intended to be more serious than humourous in tone",
     },
    "Director":{
      "Name":"J.R.R. Tolkien",
      "Bio":"John Ronald Reuel Tolkien was a major scholar of the English language, specialising in Old and Middle English. Twice Professor of Anglo-Saxon (Old English) at the University of Oxford, he also wrote a number of stories, including most famously The Hobbit (1937) and The Lord of the Rings (1954–1955), which are set in a pre-historic era in an invented version of our world which he called by the Middle English name of Middle-earth. He later died on September 2, 1973",
      "Birth":"January 3, 1892",
    },
    "ImageURL":"https://www.goodfreephotos.com/albums/other-photos/lord-of-the-rings-the-one-ring.jpg",
  },

  {
    
      "Title":"Twilight",
      "Description":"The film stars Kristen Stewart and Robert Pattinson as Bella Swan, a teenage girl, and Edward Cullen, a vampire, respectively, and focuses on the development of Bella and Edward's relationship and the subsequent efforts of Edward and his family to keep Bella safe from another coven of vampires.",
       "Genre":{
        "Name":"Romantic",
        "Description":"In film and television, Romantic is a romance novel or romantic novel generally refers to a type of genre fiction novel which places its primary focus on the relationship and romantic love between two people.",
       },
      "Director":{
        "Name":"Chris Weitz",
        "Bio":"Christopher John Weitz is an American film director, screenwriter, and producer. Further, He is very well and health in 2023.",
        "Birth":"1969",
      },
      "ImageURL":"https://wallpaper-house.com/data/out/5/wallpaper2you_75612.jpg",
    },
    
  {
    
    "Title":"Encanto",
    "Description":"Encanto follows a multigenerational Colombian family, the Madrigals, led by a matriarch (Botero) whose children and grandchildren—except for Mirabel Madrigal (Beatriz)—receive magical gifts from a miracle that helps them serve the people in their rural community called the Encanto.",
     "Genre":{
      "Name":"Family Film",
      "Description":"In film and television, Family Film is a genre that is contains appropriate content for younger viewers. Family film aims to appeal not only to children, but to a wide range of ages.",
     },
    "Director":{
      "Name":"Clark Spencer",
      "Bio":"is an American film producer, businessman and studio executive best known for his work at Walt Disney Animation Studios, and for winning the Oscars for Best Animated Feature for his work on Zootopia and Encanto. He is very well and healthy in 2023.",
      "Birth":"April 6, 1963",
    },
    "ImageURL":"https://www.alamy.com/encanto-image503284772.html?imageid=FE4B1656-AD84-47B7-AE35-60DFDE7F7C3D&p=1947612&pn=1&searchId=a733c17ba7882ed931dd1addff6d703d&searchtype=0",
  },

  {
    "Title":"Scaface",
    "Description":"Scarface tells the story of Cuban refugee Tony Montana (Al Pacino), who arrives penniless in Miami during the Mariel boatlift and becomes a powerful and extremely homicidal drug lord. ",
     "Genre":{
      "Name":"violent",
      "Description":"In film and television, Extreme cinema is a subgenre used for films distinguished by its use of excessive sex and violence, and such various extreme nature as mutilation and torture.",
     },
    "Director":{
      "Name":"Brian De Palma",
      "Bio":"is an American film director and screenwriter. With a career spanning over 50 years, he is best known for his work in the suspense, crime and psychological thriller genres. Furthermore, He is lving helthy and strong.",
      "Birth":"September 11, 1940",
    },
    "ImageURL":"",
  },

  {
    "Title":"Titanic",
    "Description":" Titanic is based on accounts of the sinking of the RMS Titanic and stars Kate Winslet and Leonardo DiCaprio as members of different social classes who fall in love aboard the ship during its ill-fated maiden voyage. ",
     "Genre":{
      "Name":"Drama",
      "Description":"In film and television, drama is a catagory of narative fiction for semi-fiction intended to be more serious than humourous in tone",
     },
    "Director":{
      "Name":"James Cameron",
      "Bio":" is a Canadian filmmaker. A major figure in the post-New Hollywood era, he is considered one of the industry's most innovative filmmakers, regularly pushing the boundaries of cinematic capability with his use of novel technologies.Further, James is well and healthy in 2023",
      "Birth":"August 16, 1954",
    },
    "ImageURL":"https://www.nicepng.com/maxp/u2y3w7q8a9a9o0e6/",
  },

  {
    "Title":"Pearl Harbor",
    "Description":" The film features a heavily fictionalized version of the attack on Pearl Harbor by Japanese forces on December 7, 1941, focusing on a love story set amidst the lead up to the attack, its aftermath, and the Doolittle Raid. ",
     "Genre":{
      "Name":"War",
      "Description":"In film and television,  War film is a film genre concerned with warfare, typically about naval, air, or land battles, with combat scenes central to the drama.",
     },
    "Director":{
      "Name":"Michael Bay",
      "Bio":" is an American film director and producer. He is best known for making big-budget, high-concept action films characterized by fast cutting, stylistic cinematography and visuals, and extensive use of special effects, including frequent depictions of explosions.Further, Michael Bay is well and healthy in 2023",
      "Birth":"February 17, 1965",
    },
    "ImageURL":"https://www.nicepng.com/png/detail/19-198559_pearl-harbor-the-movie-logo-png-transparent-pearl.png",
  },

  {
    "Title":"Lord of the Rings-The Hobbit",
    "Description":"The Lord of the Rings is the saga of a group of sometimes reluctant heroes who set forth to save their world from consummate evil. Its many worlds and creatures were drawn from Tolkien's extensive knowledge of philology and folklore.",
     "Genre":{
      "Name":"Drama",
      "Description":"In film and television, drama is a catagory of narative fiction for semi-fiction intended to be more serious than humourous in tone",
     },
    "Director":{
      "Name":"J.R.R. Tolkien",
      "Bio":"John Ronald Reuel Tolkien was a major scholar of the English language, specialising in Old and Middle English. Twice Professor of Anglo-Saxon (Old English) at the University of Oxford, he also wrote a number of stories, including most famously The Hobbit (1937) and The Lord of the Rings (1954 thru1955), which are set in a pre-historic era in an invented version of our world which he called by the Middle English name of Middle-earth. He later died on September 2, 1973",
      "Birth":"January 3, 1892",
    },
    "ImageURL":"https://www.kindpng.com/picc/m/83-831218_transparent-the-hobbit-logo-png-hobbit-logo-png.png",
  },

  {
   "Title":"Toy Story 1",
    "Description":"Taking place in a world where toys come to life when humans are not present, the plot of Toy Story focuses on the relationship between an old-fashioned pull-string cowboy doll named Woody and a modern space cadet action figure, Buzz Lightyear, as Woody develops jealousy towards Buzz when he becomes their owner Andy's favorite toy.",
     "Genre":{
      "Name":"Family Film",
      "Description":"In film and television, Family Film is a genre that is contains appropriate content for younger viewers. Family film aims to appeal not only to children, but to a wide range of ages.",
     },
    "Director":{
      "Name":"John Lasseter",
      "Bio":" is an American film director, producer, screenwriter, animator, voice actor, and the head of animation at Skydance Animation. Heis very well and healthy in 2023.",
      "Birth":"January 12, 1957",
    },
    "ImageURL":"https://en.wikipedia.org/wiki/Toy_Story_%28franchise%29#/media/File:Toy_Story_logo.svg", 
  },
  {
    "Title":"Flubber",
    "Description":"Professor Philip Brainard (Robin Williams) is experimenting with new kinds of energy, and he thinks this project will save struggling Medfield College, where his girlfriend, Sara (Marcia Gay Harden), is president. But when he discovers a lively, rubber-like substance dubbed flubber, he gets so excited, he absent-mindedly misses his own wedding.",
     "Genre":{
      "Name":"Family Film",
      "Description":"In film and television, Family Film is a genre that is contains appropriate content for younger viewers. Family film aims to appeal not only to children, but to a wide range of ages.",
     },
    "Director":{
      "Name":"Les Mayfield",
      "Bio":" Shortly after graduating the USC School of Cinematic Arts, Les Mayfield formed the ZM Productions with schoolmate George Zaloom. Until its closure in 1998, the company had produced films and television programs such as Hearts of Darkness: A Filmmaker's Apocalypse, The Computer Wore Tennis Shoes, and The Cape in 16 years. He is very well and healthy in 2023.",
      "Birth":"November 30, 1959",
    },
    "ImageURL":"http://www.impawards.com/1997/flubber_ver8_xlg.html", 
  },
];

// Allow new users to register(CREAT a new user)
app.post('/users', (req, res) => {
  const newUser = req.body;

  if (newUser.name) {
    newUser.id = uuid.v4();
    users.push(newUser);
    res.status(201).json(newUser)
  } else {
    res.status(400).send('users need names');
  }
})

// Allow users to UPDATE their user info (username)
app.put('/users/:id', (req, res) => {
  const { id } = req.params;
  const updatedUser = req.body;

  let users = users.find( user => user.id == id );

  if (user) {
    user.name = updatedUser.name;
    res.status(200).json(user);
  } else {
    res.status(400).send('no such user')
  }
})

 // (CREATE)Allow users to add a movie to their list of favorites
app.post('/users/:id/movieTitle', (req, res) => {
  const { id, movieTitle } = req.params;

  let user = users.find( user => user.id == id );

  if (user) {
    user.favoritemMovies.push(movieTitle);
    res.status(200).send('${movieTitle} has been added to user ${id} array');
  } else {
    res.status(400).send('no such user')
  }
})

// (DELETE)Allow users to remove a movie from their list of favorites (showing only a text that a movie has been removed
app.delete('/users/:id/movieTitle', (req, res) => {
  const { id, movieTitle } = req.params;

  let user = users.find( user => user.id == id );

  if (user) {
    user.favoritemMovies = user.favoritemMovies.filter( title => title !== movieTitle );
    res.status(200).send('${movieTitle} has been removed from the  user ${id} array');
  } else {
    res.status(400).send('no such user')
  }
})

// (DELETE)Allow existing users to deregister (showing only a text that a user email has been removed
app.delete('/users/:id', (req, res) => {
  const { id } = req.params;

  let user = users.find( user => user.id == id );

  if (user) {
    users = user.filter( user => user.id != id );
    res.status(200).send('user  ${id} has been deleted');
  } else {
    res.status(400).send('no such user')
  }
})

// GET/Read requests(RETURN LIST of all movies to user) in JSON format
app.get('/movies', (req, res) => {
  res.status(200).json(movies);
});

// GET/Read requests(RETURN DATA (description, genre, director, image URL, whether it’s featured or not) about a single movie by title to the user) in JSON format
app.get('/movies/:title', (req, res) => {
  const { title } = req.params;
  const movie = movies.find( movie => movie.Title === title );
 
 if (movie) {
  res.status(200).json(movie);
 } else{
  res.status(400).send('no such movie')
 }
})

// GET/Read requests and Return data about a genre (description) by name/title in JSON format
app.get('/movies/genre/:genreName', (req, res) => {
  const { genreName } = req.params;
  const genre = movies.find( movie => movie.Genre.Name === genreName ).Genre;
 
 if (genre) {
  res.status(200).json(genre);
 } else{
  res.status(400).send('no such genre')
 }
})

// GET/Read requests and Return data about a director (bio, birth year, death year) by name in JSON format
app.get('/movies/directors/:directorName', (req, res) => {
  const { directorName } = req.params;
  const director = movies.find( movie => movie.Director.Name === directorName ).Director;
 
 if (director) {
  res.status(200).json(director);
 } else{
  res.status(400).send('no such director')
 }
})

// listen for requests
app.listen(8080, () => {
  console.log('Your app is listening on port 8080.');
});








  