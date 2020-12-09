// this - context , Self 
// this
//   Objects: 
//     arrays hashes, functions, classess
//   window object 
//   primary object of your browser

// hierarchy
//   window 
//     global 
//       function call
//         functions called in other functions





// Variable Scopes

// var foo = 'bar';  //Global
// function someFunction(param1, param2) { //param1, param2 are local
//   var foo = 'baz';  // local
//   console.log(foo);
// }

// function myFunction() {
//   console.log(foo);  // referencing global foo
// }

// function whatIsThis() {
//   baz = 'What kind of var is this?';  //global 
// }
// //console.log(baz) this is an error baz has not been defined yet.

// whatIsThis();  // baz gets defined at this point
// console.log(baz);






// var foo = 'bar';  //Global
// var baz
// var foo
// function someFunction(param1, param2) { //param1, param2 are local
//   var foo = 'baz';  // local
//   console.log(foo);
// }

// function myFunction() {
//   console.log(foo);  // referencing global foo
// }

// function whatIsThis() {
//   baz = 'What kind of var is this?';  //global 
// }

// console.log(baz) this is an error baz has not been defined yet.


// whatIsThis();  // baz gets defined at this point

// console.log(baz);



// var x = true
// var xIsTrue;
// var xIsALie;

// if (x)
//   var xIsTrue = true
// else
//   var xIsALie = true

// no longer using var for variables

// Let 
// let first_name = 'bob'
  // scoped to the nearest code block
// first_name = 'mike'

// const
  // short constant, these values shouldn't be change
  // read only 
  // const MAX_USERS = 400
  // MAX_USERS = 200

  // Functions 
  // function countColors(colors) {
  //   return colors.length
  // }
  
  // countColors();

  // default params
  // function countColors(colors = []) {
  //   return colors.length
  // }
  
  // console.log(countColors())
  // console.log(countColors(["red", "white", "blue"]))

  // function showUserInfo(name, options = {}) {
  //   let likes = options.likes 
  //   let followers = options.followers 
  //   let following = options.following 
  // }

  // function showUserInfo(name, { likes, followers, following }) {
  //   likes 
  //   followers 
  //   following 
  // }

  // showUserInfo("Spencer", { likes: 4, followers: 10, following: 13 });

  // Rest Params 
    // accept an infinite number or arguments,  ... name of reference of the rest of the params

    // function showTrendingTags(...hashTags) {
    //   for(let i in hashTags) {
    //     displayTopic(hashTags[i]);
    //   }
    // }

    // function logColors(...colors) {
    //   for(let i in colors) {
    //     console.log(colors[i])
    //   }
    // }
    
    // logColors()
    // logColors('red', 'green')
    // logColors('red', 'green', 'blue')
    // logColors('red', 'green', 'blue', 'black', 'pink')


    // function logColors(firstColor, ...colors) {
    //   console.log(firstColor)
    //   for(let i in colors) {
    //     console.log(colors[i])
    //   }
    // }
    
    // logColors()
    // logColors('red', 'green')
    // logColors('red', 'green', 'blue')
    // logColors('red', 'green', 'blue', 'black', 'pink')


    // Spread Operators 
    //   ... 
    //     spread everything the object has 

    // function getMovies("/movies", function(data) {
    //   let movies = data.movies;
    //   displayMovies(...movies);
    // });

    // jiggle all the way, santa claus, nightmare before christmas

    // this.state = { name: 'bob', age: 23, email: 'adfasf@email.com' }
    // this.state.name
    // this.state.age
    // this.state.email
    // {...this.state}

    // Functions 
    // function hello(name) {

    // }

    // const hello => {

    // }

    // const hello => 

    // const hello = (name) => {

    // }

    // hello = () => {

    // }

    // () => this.props.deleteContact


    // Object Destructuring
    // let officer = officerInfo("Clive", "Savacool", "Chief", "clive@fakeemail.com");

    // let first = officer.first;
    // let last = officer.last;
    // let fullName = officer.fullName;
    // let email = officer.email;
    // let rank = officer.rank;

    // let { first, last, fullName, email, rank } = officer

    // this.state = { name: 'bob', age: 23, email: 'adfasf@email.com' }
    // this.state.name
    // this.state.age
    // this.state.email
    // let { name, age, email } = this.state

    // Strings 
    // "hello" + planet + '!'

    // `hello ${planet}!`

    // `
    //   hello
    //   world
    // `

    // let friends = ["Jake", "Brad", "Brandon", "Ethan", "Ryan"];
    // for(index in friends) {
    //   console.log(friends[index]);
    // }

    // let friends = ["Jake", "Brad", "Brandon", "Ethan", "Ryan"];
    // for(name of friends) {
    //   console.log(name);
    // }

    // 2 ** 3 
    // to the power of 

    // let users = [
    //   { name: 'Dave', role: 'Instructor' },
    //   { name: 'Brad', role: 'TA' },
    //   { name: 'Parker', role: 'TA' },
    //   { name: 'Sara', role: 'Student'},
    //   { name: 'Jill', role: 'Student'},
    //   { name: 'Greg', role: 'Student'}
    // ];
    
    // let student = users.find( (user) => {
    //   return user.role == "Student";
    // });

    // ??

    // check null or undefined


    // Promises
    // new Promise resolved 

    // .then( authStatus => { return getUser(authStatus.auth, 1); })
    // .catch( err => console.log(err) )
    // .done( )
    // .finally( )

    // async wait 

    const PER_PAGE = 10;
    const MAX_USERS = 25;
    const DEFAULT_COLOR = 'red';

    const printName = (name) => {
      console.log(name)
    }

    export { PER_PAGE, MAX_USERS, DEFAULT_COLOR };
    export default printName;