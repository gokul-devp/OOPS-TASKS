//////////////////////Write a constructor for the class Movie,///////////////////// 
////////////which takes a String representing the title of the movie,//////////////
/////////////////////////a String representing the studio,////////////////////////
/////////////////and a String representing the rating as its arguments,///////////
//////////and sets the respective class properties to these values.///////////////

class movie {
  constructor(title, studio, rating) {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }

  getrating() {
    return "the rating is  " + this.rating;
  }
}




///////////The constructor for the class Movie /////////////
/////////will set the class property rating to "PG"/////////
/////////////as default when no rating is provided./////////
 
class movie {
    constructor(title, studio, rating){
        this.title = title;
        this.studio = studio;
        this.rating = "PG";
    }
}




/////////////////////////Write a method getPG,////////////////////////////////////////
//////////which takes an array of base type Movie as its argument,/////////////////// 
//////and returns a new array of only those movies in the input array with a rating of "PG"./////
//////////////You may assume the input array is full of Movie instances.//////////////// 
////////////////The returned array need not be full./////////////////////////////////////

const CasinoRoyale = new Movie('Casino Royale','Eon Production','PG13');
const Varisu = new Movie('Varisu','Seven Screen','PG13');
const Thunivu = new Movie('Thunivu','Shri Balaji Photos','PG13');
const Thiruchitrambalam = new Movie('Thiruchitrambalam','Sun Pictures','PG');
const Avengers = new Movie('Avengers','Marvel','PG13');
const Deadpool = new Movie('Deadpool','Marvel','R');
const SuperMan = new Movie('Super Man','DC','R');
const Avatar = new Movie('Avatar','eros','PG13');

var moviesArray = [CasionoRoyale,Varisu,Thunivu,Thiruchitrambalam,Avengers,Deadpool,SuperMan,Avatar];

console.log(CasionoRoyale.getPG(moviesArray,'PG'));
console.log(CasionoRoyale.getPG(moviesArray,'R'));
console.log(CasionoRoyale.getPG(moviesArray,'PG13'));




/////////////Write a piece of code that creates an instance of the class Movie////////////////////
///////with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”//////////

const CasinoRoyale = new movie( "Casino Royal", "Eon Productions", "PG13");







//////////////Write a “person” class to hold all the details./////////////

class person {
    constructor (name, age, height, weight, bloodgroup) {
        this.name = name;
        this.age = age;
        this.height = height;
        this.weight = weight;
        this.bloodgroup = bloodgroup;
        }
}
 
let data = new person ("Gokul_karthick", 23, "165_cm", "50_kg", "O+ve");
console.log(data.name);
console.log(data.age);
console.log(data.height);
console.log(data.weight);
console.log(data.bloodgroup);
