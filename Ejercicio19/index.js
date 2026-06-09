/* DADO UN ARRAY DE OBJETOS DE PELICULAS (TITULO, DIRECTOR, VISTA), 
MOSTRAR TODAS LAS PELICULAS INDICANDO CUAL HAS VISTO Y CUAL NO

EJEMPLOS
misPeliculas(peliculas);

DEVUELVE
Ya has visto "Spiderman1"
Te falta por ver: "El Conjuro"

MOSTRAR TODAS LAS QUE HE VISTO Y LAS QUE NO

*/

const peliculas = [
  {
    titulo: "El Padrino",
    director: "Francis Ford Coppola",
    vista: true
  },
  {
    titulo: "Pulp Fiction",
    director: "Quentin Tarantino",
    vista: true
  },
  {
    titulo: "Interestelar",
    director: "Christopher Nolan",
    vista: false
  },
  {
    titulo: "El Señor de los Anillos: La Comunidad del Anillo",
    director: "Peter Jackson",
    vista: true
  },
  {
    titulo: "Matrix",
    director: "Lana Wachowski y Lilly Wachowski",
    vista: true
  },
  {
    titulo: "Forrest Gump",
    director: "Robert Zemeckis",
    vista: false
  },
  {
    titulo: "Gladiador",
    director: "Ridley Scott",
    vista: true
  },
  {
    titulo: "Titanic",
    director: "James Cameron",
    vista: false
  },
  {
    titulo: "El Origen",
    director: "Christopher Nolan",
    vista: true
  },
  {
    titulo: "Parásitos",
    director: "Bong Joon-ho",
    vista: false
  },
  {
    titulo: "La La Land",
    director: "Damien Chazelle",
    vista: false
  },
  {
    titulo: "Whiplash",
    director: "Damien Chazelle",
    vista: true
  },
  {
    titulo: "Joker",
    director: "Todd Phillips",
    vista: true
  },
  {
    titulo: "Avengers: Endgame",
    director: "Anthony Russo y Joe Russo",
    vista: true
  },
  {
    titulo: "Spider-Man: Into the Spider-Verse",
    director: "Bob Persichetti, Peter Ramsey y Rodney Rothman",
    vista: false
  },
  {
    titulo: "Coco",
    director: "Lee Unkrich y Adrian Molina",
    vista: true
  },
  {
    titulo: "Toy Story",
    director: "John Lasseter",
    vista: true
  },
  {
    titulo: "El Viaje de Chihiro",
    director: "Hayao Miyazaki",
    vista: false
  },
  {
    titulo: "Bastardos sin Gloria",
    director: "Quentin Tarantino",
    vista: false
  },
  {
    titulo: "Blade Runner 2049",
    director: "Denis Villeneuve",
    vista: true
  }
];

function misPeliculas(peliculas){

    let vistas = "";

    for( pelicula of peliculas ){
        if(pelicula.vista == true){
            vistas += 'Ya haz visto:' + pelicula.titulo + '\n';

        }else if(pelicula.vista == false){
             vistas += 'Te falta por ver:' + pelicula.titulo + '\n';
        }
    }

    return vistas;

}

console.log(misPeliculas(peliculas));