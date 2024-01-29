//ESSENTIAL:
//3)
let makeBook = (Title, Author, MSRP, Genre, Numberofpages, Description) => {
    let obj = {}

    obj.Title = Title
    obj.Author = Author
    obj.MSRP = MSRP
    obj.Genre = Genre
    obj.Numberofpages = Numberofpages
    obj.Description = Description
    return obj
}

let Harrypotter = makeBook("Harry Potter and the Sorcerer's Stone", "J.K Rowling", $15000, fiction, 306, "The book is about 11 year old Harry Potter, who receives a letter saying that he is invited to attend Hogwarts, school of witchcraft and wizardry. He then learns that a powerful wizard and his minions are after the sorcerer's stone that will make this evil wizard immortal and undefeatable")
let Romeoandjuliet = makeBook(" Romeo and Juliet ", "William Shakespeare", $7000, romance, 123, "Romeo and Juliet Summary. An age-old vendetta between two powerful families erupts into bloodshed. A group of masked Montagues risk further conflict by gatecrashing a Capulet party. A young lovesick Romeo Montague falls instantly in love with Juliet Capulet, who is due to marry her father's choice, the County Paris")
let SIOCP = makeBook(" Structure and Interpretation of Computer Programs", "Gerald Jay Sussman Hal Abelson", $49000, science, 657, "It is known as the Wizard Book in hacker culture. It teaches fundamental principles of computer programming, including recursion, abstraction, modularity, and programming language design and implementation.")

//4)
let displayBook = (book) => {
    return (book.Title + "," + book.Author + "," + book.Genre + "," + book.Description + "," + book.MSRP)
}
//5)
let books = [Harrypotter, Romeoandjuliet, SIOCP];
//6)
let displayBooks = (books) => {

    let arraybooks = books.map((book) => displayBook(book))
    return (arraybooks.join("\n"))
}
//7)
let searchBooks = (query, array) => {

}
//8)8. Write a function removeBook that, given a book's title and an array of books, returns a new array of books that does not contain the book with the provided title.

let removeBook = (Removedtitle, array) => {
    let arrbooks = []
    for (let i = 0; i < array.length; i++) {
        if (array[i].Title != Removedtitle) {
            arrbooks.push(array[i])
        }
    } return arrbooks
}

//EXTENTED:
//2. Make five more movie objects using the same format you decided upon:
const movie1 = {
    Title: "Frozen",
    Director: "J.lee & C.Buck",
    Duration: 102,
    ReleaseDate: 27 / 11 / 2013,
    Actors: "K.Bell & I.Menzel & J.Gad & J.Groff & J.lee",
    Rating: 7.4
}
const movie2 = {
    Title: "Divergente",
    Director: "N.Burger",
    Duration: 139,
    ReleaseDate: 21 / 3 / 2014,
    Actors: "S.Woodley & T.James & M.Teller & A.Elgort & K.Winslet",
    Rating: 6.6
}
const movie3 = {
    Title: "The Hunger Games",
    Director: "Gray Ross",
    Duration: 142,
    ReleaseDate: 23 / 3 / 2012,
    Actors: "J.Lawrence & J.Hutcherson & E.Banks & L.Hemsworth & W.Harrelson",
    Rating: 7.2
}
const movie4 = {
    Title: "Enola Holmes",
    Director: "Harry Bradbeer",
    Duration: 123,
    ReleaseDate: 23 / 9 / 2020,
    Actors: "L.Partridge & M.Brow & H.Cavill & S.Claflin & H.Bonham",
    Rating: 6.6
}
const movie5 = {
    Title: "Moana",
    Director: "R.Clements & J.Musker",
    Duration: 113,
    ReleaseDate: 23 / 11 / 2016,
    Actors: "A.Cravalho & D.Johnson & A.Tudyk & J.Clement &T.Morrison ",
    Rating: 7.6
}
//3. Write a factory function for movies. HINT: What is a factory function? We explained it above!

let makeMovie = (Title, Director, Duration, ReleaseDate, Actors, Rating) => {
    let obj = {}
    obj.Title = Title
    obj.Director = Director
    obj.Duration = Duration
    obj.ReleaseDate = ReleaseDate
    obj.Actors = Actors
    obj.Rating = Rating
    return obj
}
let Frozen = makeMovie("frozen", "J.lee & C.Buck", 102, 27 / 11 / 2013, "K.Bell & I.Menzel & J.Gad & J.Groff & J.lee", 7.4)
let Divergente = makeMovie("Divergente", "N.Burger", 139, 21 / 3 / 2014, "S.Woodley & T.James & M.Teller & A.Elgort & K.Winslet", 6.6)
let HungerGames = makeMovie("The Hunger Games", "Gray Ross", 142, 23 / 3 / 2012, "J.Lawrence & J.Hutcherson & E.Banks & L.Hemsworth & W.Harrelson", 7.2)
let EnolaHolmes = makeMovie("Enola Holmes", "Harry Bradbeer", 123, 23 / 9 / 2020, "L.Partridge & M.Brow & H.Cavill & S.Claflin & H.Bonham", 6.6)
let Moana = makeMovie("Moana", "R.Clements & J.Musker", 113, 23 / 11 / 2016, "A.Cravalho & D.Johnson & A.Tudyk & J.Clement &T.Morrison ", 7.6)

//4. Write a function displayMovie that works like displayBook, but for movies:

let displayMovie = (movie) => {
    return movie.Title + " " + movie.Director + " " + movie.Duration + " " + movie.ReleaseDate + " " + movie.Actors + " " + movie.Rating
}
//5. Write a function displayCast that displays the cast of a movie, including: Role , Actor/Actress name:

let displayCast = (movie) => {
    return movie.Actors
}
//6. Create an array to hold the movies that you created called movies, and add your movies to it.

let movies = [Frozen, Divergente, HungerGames, EnolaHolmes, Moana]

//7. As before, write a displayMovies function that works just like displayBooks.

let displayMovies = (movies) => {
    let arrmovies = movies.map((movie) => displayMovie(movie))
    return (arrmovies.join("\n"))
}

//8. Calculate the average length of your movies by writing a function called averageLength that will accept an array of movies as a parameter and output the average length. The difficulty of this problem is dependent on how you have chosen to store the duration.

let averageLength = (array) => {

}

//9. How about searching your movies array? Write a function that works like searchBooks, but for movies:

let searchMovies = () => {

}

//OTHER EXERCICE:
//1. Using the customerProducts array of objects, write a function productList that returns an array of all product names in the array.

let productList = (array) => {
    let arrproduct = []
    for (let i = 0; i < array.length; i++) {
        arrproduct.push(array[i].productName)
    } return arrproduct
}

//2. Using the customerProducts array of objects, write a function electronicProducts that list all the product names of the category Electronics inside an array.
let electronicProducts = (array) => {
    let arrcategory = []
    for (let i = 0; i < array.length; i++) {
        arrcategory.push(array[i].productCategory)
    } return arrcategory
}

//3. Using the customerProducts array of objects, write a function totalToPay that calculates the total amount to pay for all the products.
let totalToPay = (array) => {
    let total = 0
    for (let i = 0; i < array.length; i++) {
        total += (array[i].productQuantity) * (array[i].productPrice)
    } return total
}


//4. Using the customerProducts array of objects, write a function productYouCanbuy that takes in a minimum price as an argument and returns an array of all products in the array that cost at least that amount:
let productYouCanbuy = (amount, array) => {
    let arrprice = []
    for (let i = 0; i < array.length; i++) {
        if (array[i].productPrice >= amount) {
            arrprice.push(array[i].productPrice)
        }
    } return arrprice
}

//5. Using the customerProducts array of objects, write a function productsQuantity that returns an object with the total quantity of products purchased in each category. The keys of the object should be the category names, and the values should be the total quantity of products purchased in that category.

let productsQuantity = (array) => {
    let obj = {}
    array.forEach(product => {
        
    }); 

    return obj
}

//6. Using the customerProducts array of objects, write a function totalPriceByCategory that takes in a category name and returns an object with the total quantity and cost of products purchased in that category. The object should have two keys, totalQuantity and totalCost, and the values should be the corresponding total quantity and cost of products purchased in the specified category:
let totalPriceByCategory=(category,array)=>{
    let obj={}
   


    return obj
}