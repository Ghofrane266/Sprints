

let makeQuestions = (description, answer, point, coverImg, character) => {
  let obj = {}
  obj.description = description
  obj.answer = answer
  obj.point = point
  obj.coverImg = coverImg
  obj.character = character
  return obj
}

let Naruto = makeQuestions("A ninja with a dream of becoming the strongest ninja and leader of his village.", "Naruto", 5, "https://i.pinimg.com/564x/85/31/7b/85317b621555591cfdc1daebd40f399d.jpg", "https://photos.tf1.fr/780/780/perso-showpage-8efac4-fe1481-0@1x.png")
let Deathnote = makeQuestions("A high school student who gains the powers of a death god and uses them to bring justice.", "Death Note", 10, "https://m.media-amazon.com/images/M/MV5BNjRiNmNjMmMtN2U2Yi00ODgxLTk3OTMtMmI1MTI1NjYyZTEzXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg", "./assets/img/death.png")
let OnePiece = makeQuestions("A group of friends embark on an adventure to find a mysterious treasure.", "One Piece", 2, "https://www.manga-news.com/public/images/pix/dvd/690/One-piece-anime-east-blue.jpg", "./assets/img/onePiece.png")
let quiz = [Naruto, Deathnote, OnePiece]

let newquiz = 0
document.getElementById("question").innerText = quiz[newquiz].description
document.querySelector("#cover").src = quiz[newquiz].coverImg
document.querySelector("#character").src = quiz[newquiz].character

let score = 0
document.getElementById("score").innerText = score


let changeQuiz = () => {
  if (document.getElementById("answer").value.toLowerCase() === quiz[newquiz].answer.toLowerCase()) {
    score = score + quiz[newquiz].point
    document.getElementById("score").innerText = score
    document.getElementById("yes").play()
    newquiz++
    document.getElementById("question").innerText = quiz[newquiz].description
    document.querySelector("#cover").src = quiz[newquiz].coverImg
    document.querySelector("#character").src = quiz[newquiz].character
  } else {
    document.getElementById("gun").play()
    document.getElementById("youShD").play()
  }

}





