

// let colors = [
//     '#ff8c7f',
//     '#4ff18e',
//     '#4f65f1',
//     '#f14fee',
//     '#67f14f',
//     '#f1754f',
// ]

// colors.map (item => {
//     let element = document.createElement('button')
//     element.innerText = item
//     element.style.padding = '20px'
//     element.style.backgroundColor = item
//     element.style.margin = '10px'
    
//     document.body.appendChild(element)
//     element.addEventListener('click', changeBody)
// })

// function changeBody(event) {
//     bodyThing.style.backgroundColor = event.target.innerText
// }


// let randomUsers = [
//     {
//         photo: "https://randomuser.me/api/portraits/men/2.jpg",
//         name: "Perry Fowler",
//         email: "perry.fowler@example.com",
//         cardColor: '#ff8c7f'
//     },
//     {
//         photo: "https://randomuser.me/api/portraits/women/9.jpg",
//         name: "Loretta Butler",
//         email: "loretta.butler@example.com",
//         cardColor: '#4ff18e'
        
//     },
//     {
//         photo: "https://randomuser.me/api/portraits/women/39.jpg",
//         name: "Charlotte Ward",
//         email: "charlotte.ward@example.com",
//         cardColor: '#4f65f1'
//     },
// ]


// randomUsers.map(item =>{
//     let element = document.createElement('div')
//     let photo = document.createElement('img')   
//     let name = document.createElement('div')     
//     let email = document.createElement('div')
//     element.style.border = ('1px solid black')
//     element.style.padding = '20px'
//     element.style.margin = '10px'
//     element.style.backgroundColor = item.cardColor

//     photo.src = item.photo

//     name.innerText = item.name
//     email.innerText = item.email

    
//     element.appendChild(photo)
//     element.appendChild(name)
//     element.appendChild(email)
//     document.body.appendChild(element)


//     element.addEventListener('click', something)
// })

// function something(event) {
//     let element = document.createElement('div')
//     let photo = document.createElement('img')   
//     let name = document.createElement('div')     
//     let email = document.createElement('div')
//     element.style.border = ('1px solid black')
//     element.style.padding = '20px'
//     element.style.margin = '10px'
//     element.style.backgroundColor = item.cardColor

//     photo.src = event.photo

//     name.innerText = event.name
//     email.innerText = event.email

    
//     element.appendChild(photo)
//     element.appendChild(name)
//     element.appendChild(email)
//     document.body.appendChild(element)
//     console.log(event);
// }


// let items = [
//     {
//         id: "prod1",
//         image: "https://i.etsystatic.com/24029103/r/il/7101d9/2582521500/il_794xN.2582521500_pgg3.jpg",
//         name: "Leather Tool Roll Up Pouch",
//         price: 30.90
//     },
//     {
//         id: "prod2",
//         image: "https://i.etsystatic.com/22401403/r/il/56d9f2/2529967961/il_794xN.2529967961_7y5w.jpg",
//         name: "Hand Forged Viking Axe",
//         price: 132.48
//     },
//     {
//         id: "prod3",
//         image: "https://i.etsystatic.com/12741331/r/il/1a6268/1267899307/il_794xN.1267899307_st8j.jpg",
//         name: "Leather Cabinet Pulls",
//         price: 5.68
//     },
//     {
//         id: "prod4",
//         image: "https://i.etsystatic.com/12815693/r/il/ece312/1085869628/il_794xN.1085869628_2z2r.jpg",
//         name: "Unicorn Papercraft, 3D Papercraft",
//         price: 14.52
//     },
//     {
//         id: "prod5",
//         image: "https://i.etsystatic.com/11318063/r/il/53df06/1126873004/il_794xN.1126873004_tg73.jpg",
//         name: "Chicken Coop Plans",
//         price: 18.11
//     }
// ]

// const pourse = document.getElementById('totalMoney')
// const shop = document.getElementById('shop')
// const basketAll = document.getElementById('basketAll')
// let money = 150
// let notEnoughMoney = false
// let basket =[]

// pourse.innerText = money

// newFunction()

// function newFunction() {

//     shop.innerHTML = ''

//     items.map( item => {
//     let element = document.createElement ('div')
//     let photo = document.createElement ('img')
//     let name = document.createElement ('div')
//     let price = document.createElement ('button')

//     element.classList.add('frame')
//     photo.classList.add('photo')
//     name.classList.add('name')
//     price.classList.add('price')
//     price.setAttribute('id', item.id)

//     photo.src = item.image
//     name.innerText = item.name
//     price.innerText = item.price

//     element.appendChild(photo)
//     element.appendChild(name)
//     element.appendChild(price)
//     shop.appendChild(element)

//     price.addEventListener ('click', doIt)

//     })
// }

// function secondFunction() {

//     basketAll.innerHTML = ''

//     basket.map( item => {
//         let element = document.createElement ('div')
//         let photo = document.createElement ('img')
//         let name = document.createElement ('div')
//         let price = document.createElement ('button')
    
//         element.classList.add('frame')
//         photo.classList.add('photo')
//         name.classList.add('name')
//         price.classList.add('price')
//         price.setAttribute('id', item.id)
    
//         photo.src = item[0].image
//         name.innerText = item[0].name
//         price.innerText = item[0].price
    
//         element.appendChild(photo)
//         element.appendChild(name)
//         element.appendChild(price)
//         basketAll.appendChild(element)

//     })
// }

// function doIt (event) {
   
//     let itemINeed = event.target.id
//     console.log(itemINeed)

//     let price = items.filter(el => el.id === itemINeed)

//     if (money - price[0].price >= 0 ) {
//         money -= price[0].price
//         pourse.innerText = money
//         basket.push(price)
//         secondFunction()
//         items = items.filter(el => el.id !== itemINeed)
//         newFunction()
    
//     } else {
//         notEnoughMoney = true
//         alert("YOU DO NOT HAVE ENOUGH MONEY")
//     }  
// }



// create simple minesweeper game
// create 100 squares
// each square should have class attribute
// make class attribute value to be random item from array
// add event listeners on on each square
// clicking square should call method, which gets that square name
// get class name trough click event target attributes
// check if class name value is empty or bomb if bomb GAME OVER
// else add one more class to element and make makes square different color
// make game over text to appear if user click square with a bomb


// let itemsArray = ['empty', 'empty', 'empty', 'bomb', 'empty', 'empty', 'empty', 'bomb','empty', 'empty', 'empty', 'bomb']


// const container = document.getElementById ('container')
// const scoreCounter = document.getElementById ('scoreCounter')
// let gameTriger = true
// let points = 0
// let gamePoints


// function minesfield () {

// container.innerHTML = ''
// points = 0
// gameTriger = true
// scoreCounter.innerHTML = ''

// gamePoints = document.createElement('div')
// gamePoints.innerText = `Points: ${points}`
// scoreCounter.appendChild(gamePoints)

//     for (let x = 0; x < 100; x++) {
//         let element = document.createElement ('div')
//         element.classList.add('item')
//         element.classList.add(itemsArray[Math.floor(Math.random()*itemsArray.length)])
//         container.appendChild(element)
//         element.addEventListener('click', play)
//     }
// }



// minesfield()

// function play (event) {
// click = event.target.classList[1]
// if(gameTriger) {    
// if (click === 'empty') {
//     event.target.classList.add('clickEmpty')
//     points++
//     gamePoints.innerText = `Points: ${points}`
//     } else {
//         event.target.classList.add('clickomb')
//         gameTriger = false
//         let gameOverSign = document.createElement ('div')
//         gameOverSign.innerText = 'Game Over'
//         gameOverSign.classList.add('gameOver')
//         container.appendChild(gameOverSign)
//         let newGameBtn = document.createElement('button')
//         newGameBtn.innerText = 'New Game'
//         newGameBtn.classList.add('newGameBtn')
//         gameOverSign.appendChild(newGameBtn)
//         newGameBtn.addEventListener('click', newGame)
//     }
// event.target.removeEventListener('click', play)
// }
// }

// function newGame () {
//     minesfield()
// }

// const addButton = document.getElementById('addButton')
// const container = document.getElementById('container')
// const cardCounter = document.getElementById('cardCounter')
// const letterCounter = document.getElementById('letterCounter')
// const input = document.getElementById('input')
// const inputBtn = document.getElementById('inputBtn')
// const valueChanger = document.getElementById('valueChanger')
// const changerSet = document.getElementById('changerSet')

// let dataArr = []


// function closeThing(event) {
//     let itemId = event.target.id
//     dataArr = dataArr.filter(el => el.id !== itemId)
//     makeCard()

// }

// function setDate() {
//     dataArr.map (item => {
//         item.created_at = input.value
//     })
//     makeCard()
    
// }

// function changeJoke (event) {
//     event.path[1].children[3].innerText = event.target.value
// }

// function letterCount() {
//     LettersSum = 0

//     dataArr.map ( item => {
//         let letters = item.value.length
        
//         LettersSum += letters
//     })
//     letterCounter.innerText = `Letters: ${LettersSum}`
// }

// function changeColor (event) {
//     event.path[1].style.backgroundColor = `rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`
//    console.log(event);
// }

// function addCard() {
//     fetch("https://api.chucknorris.io/jokes/random")
//         .then(response => response.json())
//         .then(data => {
//             dataArr.push(data)
//             makeCard()
//     })
// }


// function makeCard() {

//     container.innerHTML = ''
//     cardCounter.innerText = `Total: ${dataArr.length}`
//     dataArr.map (item => {
//         let card = document.createElement('div')
//         card.classList.add('card', 'mg-pad')

//         let icon = document.createElement('img')
//         icon.classList.add('icon', 'mg-pad')
//         icon.src = item.icon_url

//         let date = document.createElement('p')
//         date.innerText = item.created_at

//         let url = document.createElement('a')
//         url.href = item.url
//         url.innerText = 'Link to joke'

//         let joke = document.createElement('p')
//         joke.innerText = item.value

//         let closeJoke = document.createElement('button')
//         closeJoke.innerText = 'x'
//         closeJoke.setAttribute('id', item.id)
//         closeJoke.classList.add('close')

//         let colorBtn = document.createElement('button')
//         colorBtn.innerText = 'Change Color'
//         colorBtn.classList.add('colorBtn')

//         let changeValue = document.createElement('input')
//         changeValue. setAttribute('type', 'text')
//         changeValue.setAttribute('placeholder', 'got Better Joke?')
        
//         card.appendChild(icon)
//         card.appendChild(date)
//         card.appendChild(url)
//         card.appendChild(joke)
//         card.appendChild(closeJoke)
//         card.appendChild(colorBtn)
//         card.appendChild(changeValue)
//         container.appendChild(card)
//         closeJoke.addEventListener('click', closeThing)
//         colorBtn.addEventListener('click', changeColor)
//         changeValue.addEventListener('input', changeJoke)
        
// })

// letterCount()
// console.log(dataArr)
// }



// addButton.addEventListener('click', addCard)
// inputBtn.addEventListener('click', setDate)




// add input on the bottom of the card, when input value is changed it should
// change joke value

// add input and button in top of page "set date" when input value is added

// and button clicked, all cards time should change to input value






// const container = document.getElementById('container')
// const showAll = document.getElementById('showAll')
// const ageFilter = document.getElementById('ageFilter')
// const usernameFilter = document.getElementById('usernameFilter')
// const webFlter = document.getElementById('webFlter')
// const suiteFilter = document.getElementById('suiteFilter')

// const modalScreen = document.getElementById('modalScreen')
// const modalUsername = document.getElementById('modalUsername')
// const modalName = document.getElementById('modalName')
// const modalAddress = document.getElementById('modalAddress')
// const modalAge = document.getElementById('modalAge')
// const modalPhone = document.getElementById('modalPhone')
// const modalWebsite = document.getElementById('modalWebsite')
// const modalEmail = document.getElementById('modalEmail')
// const modalClose = document.getElementById('modalClose')

// let dataArr = []
// let filteredAge = []
// let filteredName = []
// let filteredWeb = []
// let filteredSuite = []
// let modalArr = []

// let lastBtn = 1

// function showInfo(event) {
//     modalScreen.style.display = 'flex'

//     let itemId = event.path[1].id
//     modalArr = dataArr.filter(el => el.id == itemId)    
//     modalUsername.innerText = modalArr[0].username
//     modalName.innerText = modalArr[0].name
//     modalAddress.innerText = `${modalArr[0].address.street} ${modalArr[0].address.suite}, ${modalArr[0].address.city}`
//     modalAge.innerText = modalArr[0].age
//     modalPhone.innerText = modalArr[0].phone
//     modalWebsite.innerText = modalArr[0].website
//     modalEmail.innerText = modalArr[0].email
// }
// function closeModal(event) {
//     event.path[2].style.display = 'none'
// }


// function addData() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//         .then(response => response.json())
//         .then(data => {
//             data.map( item => {
//                 item.age = Math.round(Math.random() * (20 - 50) + 50)
//                 item.photo = `https://picsum.photos/${Math.round(Math.random() * (200 - 300) + 300)}`
//                 dataArr.push(item)
//             })
//             createHTML(dataArr)
//     })
// }

// function createHTML (arr) {

//     container.innerHTML = ''

//     arr.map( item => {

//         let profile = document.createElement ('div')
//         profile.setAttribute('id', item.id)
//         profile.classList.add('profileCard')

//         let profilePic = document.createElement('img')
//         profilePic.src = item.photo
//         profilePic.classList.add('image')

//         let username = document.createElement('h3')
//         username.innerText = item.username

//         let phone = document.createElement('h4')
//         phone.innerText = item.phone

//         let email = document.createElement('h4')
//         email.innerText = item.email

//         let website = document.createElement('a')
//         website.href = item.website
//         website.innerText = item.website

//         let company = document.createElement('h4')
//         company.innerText = item.company.name

//         let phrase = document.createElement('h4')
//         phrase.innerText = item.company.catchPhrase

//         let allInfo = document.createElement('button')
//         allInfo.innerText = 'Show All Info'

//         let remove = document.createElement('button')
//         remove.innerText = 'Remove'

//         let nameInput = document.createElement('input')
//         nameInput.setAttribute('placeholder', 'Enter New Name')

//         let setName = document.createElement('button')
//         setName.innerText = 'Enter'

//         let itemsArr = [profilePic, username, nameInput, setName, phone, email, website, company, phrase, allInfo, remove]
        
//         itemsArr.map(item => {
//             profile.appendChild(item)
//         })
        
//         container.appendChild(profile)

//         remove.addEventListener('click', removeItem)
//         setName.addEventListener('click', newName)
//         allInfo.addEventListener('click', showInfo)
//     })
    

// }

// function lastBtnCheck() {
//     lastBtn === 1 ? allCards () : null
//     lastBtn === 2 ? filterAge() : null
//     lastBtn === 3 ? filterUsername () : null
//     lastBtn === 4 ? filterWeb() : null
//     lastBtn === 5 ? flterSuite() : null
// }

// function newName(event) {
    
//     dataArr.map( item => {
//         if(item.id == event.path[1].id) {
//             if(event.path[1].children[2].value.length > 0 ) {
//                 item.username = event.path[1].children[2].value
//             }
//         }
//     })
//     lastBtnCheck()
// }

// function removeItem(event) {
//     let itemId = event.path[1].id
//     console.log(itemId);
//     dataArr = dataArr.filter(el => el.id != itemId)
//     lastBtnCheck()
    
// }

// function allCards () {
//     createHTML(dataArr)
//     lastBtn = 1
// }

// function filterAge() {
//     filteredAge = dataArr.filter(el => el.age > 30)
//     createHTML(filteredAge)
//     lastBtn = 2
// }

// function filterUsername () {
//     filteredName = dataArr.filter(el => el.username.length < 10)
//     createHTML(filteredName)
//     lastBtn = 3
// }

// function filterWeb() {
//     filteredWeb = dataArr.filter(el => el.website.includes('.com'))
//     createHTML(filteredWeb)
//     lastBtn = 4
// }

// function flterSuite() {
//     filteredSuite = dataArr.filter(el => el.address.suite.includes('Suite'))
//     createHTML(filteredSuite)
//     lastBtn = 5
// }

// showAll.addEventListener('click', allCards)
// ageFilter.addEventListener('click', filterAge)
// usernameFilter.addEventListener('click', filterUsername)
// webFlter.addEventListener('click', filterWeb)
// suiteFilter.addEventListener('click', flterSuite)
// modalClose.addEventListener('click', closeModal)

// addData()
// make it to be possible to remove user by pressing remove button in card
// make it to be possible edit user name in card (make input for it)
// add button "Show All" in card to show all information when clicked -- it should open modal window with all user information
// you should be able to close modal

// URL - https://jsonplaceholder.typicode.com/users
// once you get all users from server, add random age to each of them (from 20 to 50)
// also add random image to each of users from https://picsum.photos/ so you will be able to show it later
//// picsum gets you random image based on size, if size differs, image will also ne different
//// for example https://picsum.photos/201 is different from https://picsum.photos/200
// when data got and updated, make it appear on web page in gallery of user profiles cards
// card should have: user name, phone, email, website, company name and catch phrase
//// on the top of gallery make button for each filter, here is what you have to filter:
//// show users with age more than 30
//// show users whose username is less than 10 letters
//// show users whose website ends with .com
//// show users who has word Suite is address and suite key




// const draw = document.getElementById('draw')
// const startBtn = document.getElementById('startBtn')
// const gameStart = document.getElementById ('gameStart')
// const newGame = document.getElementById ('newGame')
// const playerSide = document.getElementById ('playerSide')
// const cardsContainer = document.getElementById('cardsContainer')
// const countBtn = document.getElementById('enough')

// let deckId = ''

// let gameStatus = true
// let firstCard = 2
// let firstPcCard = 2


// let playerCards = []
// let computerCards = []


// function setDeck() {
//     fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
//         .then(response => response.json())
//         .then(data => {
//            deckId = data.deck_id
//            console.log(deckId);
//            addCard()

//            fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=${firstPcCard}`)
//             .then(response => response.json())
//             .then(data => {
//             data.cards.map (item => {
//                 computerCards.push(item)
//             })
//             console.log(computerCards);
//         })
           
//     })
// }

// function displayCards () {

//     cardsContainer.innerHTML = ''
//     playerCards.map ( item => {

        
        
//         let cardPic = document.createElement('img')
//         cardPic.src = item.image
//         cardPic.style.width = '50px'

//         cardsContainer.appendChild(cardPic)
        
        
//     })
// }


// if (gameStatus) {
//     function addCard() {
//         fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=${firstCard}`)
//             .then(response => response.json())
//             .then(data => {
//             data.cards.map (item => {
//                 playerCards.push(item)
//             })
//             console.log(data);
//             displayCards()
//         })
//         firstCard = 1
//         console.log(playerCards);
        
//     }
// }


// function startGame () {
//     setDeck()
//     gameStart.style.display = 'none'
// }

// // if (gameStatus){
// // } else {    
//     function resetCards () {
//         fetch(`https://deckofcardsapi.com/api/deck/${deckId}/shuffle/`)
//             .then(response => response.json())
//             .then(data => {
//                console.log(data);
//         })
//         firstCard = 2
//         playerCards = []
//         computerCards = []
//     }
// // }

// draw.addEventListener ('click', addCard)
// startBtn.addEventListener ('click', startGame)
// newGame.addEventListener ('click', resetCards)
// countBtn.addEventListener ('click', countCards)


// const btn = document.getElementById ('workingShit')

// btn.addEventListener('click', doit)

// function doit() {
//     fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST',
//   body: JSON.stringify({
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json))
// }

// const container = document.getElementById ('container')
// const btn = document.getElementById ('workingShit')
// const modalContainer = document.getElementById ('modalContainer')
// const newCard = document.getElementById ('newCard')
// const updateButton = document.getElementById ('updateButton')
// const addCard = document.getElementById ('addCard')
// const newButton = document.getElementById ('newButton')
// const newImg = document.getElementById('newImg')
// const newName = document.getElementById('newName')
// const newAge = document.getElementById('newAge')
// const newNumber = document.getElementById('newNumber')
// const newEmail = document.getElementById('newEmail')

// let dataArr = []
// let updateId = ''

// function doit() {
//     fetch("http://167.99.138.67:3300/getallusers")
//         .then(response => response.json())
//         .then(data => {
//            dataArr = data;    
//             createHtml()
//             console.log(dataArr);
//     })

// }

// function createHtml() {
//     container.innerHTML = ''
//     dataArr.map (item => {

//         let card = document.createElement ('div')
//         card.setAttribute('id', `${item._id}`)
//         card.classList.add('card')

//         let photo = document.createElement ('img')
//         photo.classList.add ('profilePic')
//         photo.src = item.photo

//         let usernName = document.createElement ('h3')
//         usernName.innerText = item.name

//         let userAge = document.createElement ('h3')
//         userAge.innerText = item.age

//         let userPhone = document.createElement ('h3')
//         userPhone.innerText = item.number

//         let userEmail = document.createElement ('h3')
//         userEmail.innerText = item.email

//         let buttons = document.createElement ('div')
//         buttons.classList.add ('cardBtn')

//         let updateBtn = document.createElement('button')
//         updateBtn.innerText = 'Update'
//         // updateBtn.addEventListener ('click', updateProfile)

//         let deleteBtn = document.createElement('button')
//         deleteBtn.innerText = 'Delete'
//         deleteBtn.addEventListener ('click', deleteProfile)


//         buttons.appendChild(updateBtn)
//         buttons.appendChild(deleteBtn)

//         let cardParts = [photo, usernName, userAge, userPhone, userEmail, buttons]

//         cardParts.map( item => {
//             card.appendChild(item)
//         })
//         container.appendChild(card)

//         updateBtn.addEventListener('click', openUpdate)
        

//     })
// }

// doit()

// // function updateProfile () {
 
// // }

// function deleteProfile (event) {

//     console.log(event);
//     fetch(`http://167.99.138.67:3300/delete/${event.path[2].id}`)
//         .then(response => response.json())
//         .then(data => {
//            doit()
// })
// }

// function openNewProfile () {
//     modalContainer.style.display = 'flex'
//     newCard.style.display = 'flex'
//     newButton.style.display = 'flex'
    
// }

// function openUpdate (event) {
//     modalContainer.style.display = 'flex'
//     newCard.style.display = 'flex'
//     newButton.style.display = 'none'
//     updateButton.style.display = 'flex'
//     console.log(event.path[2].id);
//     updateId = event.path[2].id

// }

// function newProfile () {
//     modalContainer.style.display = 'none'



//     let data = {
//         name: newName.value,
//         photo: newImg.value,
//         age: newAge.value,
//         number: newNumber.value,
//         email: newEmail.value
//     }   

//     fetch('http://167.99.138.67:3300/createuser', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify(data),
// })
// .then(response => response.json())
// .then(data => {
//   console.log('Success:', data);
//   doit()
// })

// }

// function updateProfile (event) {

//     modalContainer.style.display = 'none'
//     console.log(event);

//     let data = {
//         name: newName.value,
//         photo: newImg.value,
//         age: newAge.value,
//         number: newNumber.value,
//         email: newEmail.value,
//         id: updateId
//     } 

//     fetch('http://167.99.138.67:3300/updateuser', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify(data),
// })
// .then(response => response.json())
// .then(data => {
//   console.log('Success:', data);
//   doit()
// })
// }




// addCard.addEventListener ('click', openNewProfile)
// newButton.addEventListener ('click', newProfile)
// updateButton.addEventListener ('click', updateProfile)



// // UPDATE USER - POST REQUEST
// // should include: name, age, email, photo, number, id
// // "http://167.99.138.67:3300/updateuser"


// const question = document.getElementById('question')
// const pointsDisplay = document.getElementById('pointsDisplay')
// const answer = document.getElementById('answer')
// const answerInput = document.getElementById('answerInput')
// const submit = document.getElementById('submit')
// const timer = document.getElementById('timer');
// const background = document.getElementById ('background')
// const usernameInput = document.getElementById ('usernameInput')
// const startBtn = document.getElementById ('start')
// const username = document.getElementById ('username')
// const container = document.getElementsByClassName ('container')

// let points = 0
// let questionData 
// let userAnswer
// let user = ''
// let game = true

// let timeLeft = 30

// let timerId   

// function countdown() {
//   if (timeLeft == -1) {
//     getQuestion ();
//     points--
//     pointsDisplay.innerText = `Points: ${points}`
//     changeBG (false)
//   } else {
//     timer.innerText = `Time Left: ${timeLeft} `;
//     timeLeft--;
//   }
// }




// function getQuestion () {

//   if(game) {
//     fetch(`http://167.99.138.67:3300/quiz/question`)
//     .then(response => response.json())
//     .then(data => {
//       questionData = data
//       console.log(data);
//       timeLeft = 30
//       updateHtml()
//     })
//   }
// }

// function checkAnswer () {
//   fetch(`http://167.99.138.67:3300/quiz/${userAnswer}/${questionData.id}`)
//   .then(response => response.json())
//   .then(data => {
//     points += data.points   
//     changeBG(data.correct)
//     updateHtml () 
//     getQuestion ()
//   })  
// }

// function finish() {
//   game = false
//   container[0].style.display = 'none'
//   container[1].style.display = 'none'
//   container[2].style.display = 'flex'
//   clearInterval(timerId)
//   changeBG (answer)
//   function backToBegginning() {
//     setTimeout(function(){ 
//     container[0].style.display = 'block'
//     container[1].style.display = 'none'
//     container[2].style.display = 'none' }, 3000);
//   }
//   backToBegginning()
// }

// function updateHtml () {
//   if(points<20) {
//   username.innerText = user
//   question.innerText = questionData.question
//   pointsDisplay.innerText = `Points: ${points}`
//   answerInput.innerText = ''
//   answerInput.value = ''
//   answer.innerText = ''

//   } else {
//     finish()
//     localStorage.setItem("name", username.innerText)
//     localStorage.setItem("points", points)
//     game = false
//   }
// }



// function updateAnswer() {

//   answer.innerText = answerInput.value
//   userAnswer = answerInput.value  
// }



// function changeBG (answer) {
//   answer ? background.style.backgroundColor = 'green' : background.style.backgroundColor = 'red'

//   function myFunction() {
//     setTimeout(function(){ background.style.backgroundColor = 'white'; }, 1000);
//   }
//   myFunction()
// }


// function startQuizz() {
//   timerId = setInterval(countdown, 1000)
//   game = true
//   user = usernameInput.value
//   container[0].style.display = 'none'
//   container[1].style.display = 'flex'
//   points = 0
//   getQuestion()
// }


// answerInput.addEventListener('input', updateAnswer)
// submit.addEventListener('click', checkAnswer)
// startBtn.addEventListener('click', startQuizz)

let BGImages = [
  'https://i.pinimg.com/originals/2b/f1/05/2bf105a8d0550f4b19b2b14d1ce997fe.jpg',
  'https://i.pinimg.com/736x/45/cb/34/45cb34c0919fe76e7a4ae8ef9f28e158.jpg',
  'https://pbs.twimg.com/media/EKiFznQXsAAX9PB.jpg:large'

]
let products = [
  {
    title: "OZWEEGO SHOES",
    photos: [
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/f204ed5c024d42498e67ab9e012eb10f_9366/OZWEEGO_Shoes_White_FV9654_01_standard.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/9535beef288247efb9e4ab9e012ec028_9366/OZWEEGO_Shoes_White_FV9654_02_standard.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/dad6b877e7fd4f1eb278ab9e012ec786_9366/OZWEEGO_Shoes_White_FV9654_03_standard.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/9ced8f95abe745cd95b6ab9f001dc207_9366/OZWEEGO_Shoes_White_FV9654_04_standard.jpg"
    ],
    stock: "2",
    price: "80",
    id: "1"
  },
  {
    title: "ZX 2K BOOST SHOES",
    photos: [
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/a00e176273414e2d986babc90099fa3e_9366/ZX_2K_Boost_Shoes_White_FV9996_01_standard.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/22ca1f055a294725880aabc9009a070a_9366/ZX_2K_Boost_Shoes_White_FV9996_02_standard.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/4560338c129440d894d9abc9009a0e97_9366/ZX_2K_Boost_Shoes_White_FV9996_03_standard.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/fd11b47048434931acd9abc9009a1542_9366/ZX_2K_Boost_Shoes_White_FV9996_04_standard.jpg"
    ],
    stock: "8",
    price: "150",
    id: "2"
  },

  {
    title: "X90004D SHOES",
    photos: [
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/d6641ce0097f4b9ca22cabdd00a1c66e_9366/X90004D_Shoes_Black_FW7093_01_standard.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/9bca524f6e564ce19f7babdd00a1d334_9366/X90004D_Shoes_Black_FW7093_02_standard.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/0075d5d3a0b8418c9756abdd00a1dad2_9366/X90004D_Shoes_Black_FW7093_03_standard.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/efbfcf28ea55442e8130abdd00a1e173_9366/X90004D_Shoes_Black_FW7093_04_standard.jpg"
    ],
    stock: "5",
    price: "160",
    id: "3"
  },

  {
    title: "ULTRABOOST 20 SHOES",
    photos: [
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/c506dc4a84804ab1a907abad011ebdf0_9366/Ultraboost_20_Shoes_Black_FV8330_01_standard.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/d211447e73564a9d9d6babad011ec8fb_9366/Ultraboost_20_Shoes_Black_FV8330_02_standard.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/9b01b768b58546cebcf1abad011ecf01_9366/Ultraboost_20_Shoes_Black_FV8330_03_standard.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/fd2750a89cb74c73beb4abad011ed544_9366/Ultraboost_20_Shoes_Black_FV8330_04_standard.jpg"
    ],
    stock: "12",
    price: "180",
    id: "4"
  },

  {
    title: "OZWEEGO SHOES",
    photos: [
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/d8afb099dc9047789c63abed0072c6c1_9366/OZWEEGO_Shoes_Grey_FZ1963_01_standard.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/be589225059b44868386abed0072d488_9366/OZWEEGO_Shoes_Grey_FZ1963_02_standard.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/f897d99916184c928d19abed0072dbd1_9366/OZWEEGO_Shoes_Grey_FZ1963_03_standard.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/d197459d4fcb494380d0abed0072e33a_9366/OZWEEGO_Shoes_Grey_FZ1963_04_standard.jpg"
    ],
    stock: "25",
    price: "110",
    id: "5"
  },

  {
    title: "ZX 2K BOOST SHOES",
    photos: [
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/16216c130f5846ed8c9eabc600b3ea6f_9366/ZX_2K_Boost_Shoes_White_FX8835_01_standard.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/34f64adbe930404f9203abc600b3f7f5_9366/ZX_2K_Boost_Shoes_White_FX8835_02_standard.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/7f360335273e45cf9160abc600b3fefc_9366/ZX_2K_Boost_Shoes_White_FX8835_03_standard.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/a6105a11bb96483297c5abc600b40603_9366/ZX_2K_Boost_Shoes_White_FX8835_04_standard.jpg"
    ],
    stock: "5",
    price: "150",
    id: "6"
  }
]


const shopGrid = document.getElementById('shopGrid')
const homePage = document.getElementById('homePage')
const menuContainer = document.getElementById ('menuContainer')
const shopPage = document.getElementById ('shopPage')
const itemPage = document.getElementById('itemPage')
const cartPage = document.getElementById('cartPage')

const mainImg = document.getElementById ('mainImg')
const img1 = document.getElementById('img1')
const img2 = document.getElementById('img2')
const img3 = document.getElementById('img3')
const img4 = document.getElementById('img4')

const cartBtn = document.getElementById('cartBtn')
const totalSum = document.getElementById('totalSum')
const menuBtn = document.getElementById ('menuBtn')
const pic1 = document.getElementById('pic1')
const pic2 = document.getElementById('pic2')
const pic3 = document.getElementById('pic3')
const shopBtn = document.getElementById('shopBtn')
const logo = document.getElementById('logo')
const closeMenu = document.getElementById('closeMenu')
const menuHome = document.getElementById('menuHome')
const menuShop = document.getElementById('menuShop')
const menuAbout = document.getElementById('menuAbout')
const menuContact = document.getElementById('menuContact')
const backToList = document.getElementById('backToList')
const nameBig = document.getElementById('nameBig')
const priceBig = document.getElementById('priceBig')
const size = document.getElementById('size')
const addToCart = document.getElementById('addToCart')
const cartContainer = document.getElementById('cartContainer')
const backToShop = document.getElementById ('backToShop')
const totalPriceSpan = document.getElementById('totalPriceSpan')
const outOfStock = document.getElementById('outOfStock')
let dispalyTriger = false
let bgNumber = 1
let bgInterval = setInterval(countdown, 20000)
let filteredProduct = {}
let setSize = 0
let cartItems = []

let totalPrice = 0

function basketCount() {
  totalPrice = 0
  cartItems.map(item=>{
    totalPrice += Number(item.price * item.counter)
  })
  totalSum.innerText = `${totalPrice}.00€`
}

function countdown() {
  if (bgNumber == 3) {
    bgNumber = 1
    bgStyle()
  } else {
    bgNumber++
    bgStyle()
  }
}
function bgStyle() {
  homePage.style.backgroundImage = `url('${BGImages[bgNumber-1]}')`
  if (bgNumber == 1) {
    pic1.style.backgroundColor = '#fa5b2f'
    pic2.style.backgroundColor = 'white'
    pic3.style.backgroundColor = 'white'
  }
  if (bgNumber == 2) {
    pic2.style.backgroundColor = '#fa5b2f'
    pic1.style.backgroundColor = 'white'
    pic3.style.backgroundColor = 'white'
  }
  if (bgNumber == 3) {
    pic3.style.backgroundColor = '#fa5b2f'
    pic1.style.backgroundColor = 'white'
    pic2.style.backgroundColor = 'white'
  }
}

function bg1 () {
  bgNumber = 1
  pic1.style.backgroundColor = '#fa5b2f'
  pic2.style.backgroundColor = 'white'
  pic3.style.backgroundColor = 'white'
  bgStyle()
}
function bg2 () {
  bgNumber=2
  pic2.style.backgroundColor = '#fa5b2f'
  pic1.style.backgroundColor = 'white'
  pic3.style.backgroundColor = 'white'
  bgStyle()
}
function bg3 () {
  bgNumber = 3
  homePage.style.backgroundImage = `url('${BGImages[2]}')`
  pic3.style.backgroundColor = '#fa5b2f'
  pic1.style.backgroundColor = 'white'
  pic2.style.backgroundColor = 'white'
  bgStyle()
}

bgStyle()


products.map ( product => {
  
  let item = document.createElement('div')
  item.classList.add('item')
  item.setAttribute ('id', product.id)
  let itemWrap = document.createElement ('div')
  itemWrap.classList.add ('itemWrap')
  let picture = document.createElement ('img')
  picture.src = product.photos[0]
  let productInfo = document.createElement ('div')
  productInfo.classList.add('productInfo')
  let name = document.createElement ('div')
  name.classList.add('name')
  name.innerText = product.title
  let price = document.createElement ('div')
  price.classList.add ('price')
  price.innerText = product.price + '.00 €'
  let itemCover = document.createElement('div')
  itemCover.classList.add ('itemCover')
  
  itemWrap.appendChild(picture)
  productInfo.appendChild(name)
  productInfo.appendChild(price)
  itemWrap.appendChild(productInfo)
  item.appendChild(itemWrap)
  item.appendChild(itemCover)
  shopGrid.appendChild(item)

  itemCover.addEventListener('click', enterProduct)
  itemCover.addEventListener('mouseenter', displayInfo)
  itemCover.addEventListener('mouseleave', hideInfo)
})

function displayInfo(event) {
  event.path[1].children[0].children[1].style.display = 'block'
}
function hideInfo (event) {
  event.path[1].children[0].children[1].style.display = 'none'
}

// NAVIGATION

function displayProduct(item) {
  
  filteredProduct = products.filter(el => el.id.includes(item))[0]
  mainImg.src = filteredProduct.photos[0]
  img1.src = filteredProduct.photos[0]
  img2.src = filteredProduct.photos[1]
  img3.src = filteredProduct.photos[2]
  img4.src = filteredProduct.photos[3]
  nameBig.innerText = filteredProduct.title
  priceBig.innerText = `${filteredProduct.price}.00 €`
  console.log(filteredProduct);
}

function displayImg1() {
  mainImg.src = filteredProduct.photos[0]
}
function displayImg2() {
  mainImg.src = filteredProduct.photos[1]
}
function displayImg3() {
  mainImg.src = filteredProduct.photos[2]
}
function displayImg4() {
  mainImg.src = filteredProduct.photos[3]
}
function removeItem(event) {
  cartItems = cartItems.filter(el => el.id != event.path[2].id)
  
  basketCount()
  enterCart()
}


function enterCart() {
  cartContainer.innerHTML = ''
  homePage.style.display = 'none'
  menuContainer.style.display = 'none'
  shopPage.style.display = 'none'
  itemPage.style.display = 'none'
  cartPage.style.display = 'block'
  totalPriceSpan.innerText = `${totalPrice}.00 €`
  cartItems.map ( item => {
    let frame = document.createElement('div')
    frame.classList.add('cartItemFrame')
    let cartItem = document.createElement('div')
    cartItem.classList.add('cartItem')
    let cartImg = document.createElement('img')
    cartItem.setAttribute('id', item.id)
    cartImg.src = item.photos[0]
    let closeCartItem = document.createElement('div')
    closeCartItem.classList.add('closeCartItem')
    closeCartItem.innerHTML = `<i class="fas fa-times"></i>`
    let cartInfo = document.createElement('div')
    cartInfo.classList.add('cartInfo')
    let cartName = document.createElement('div')
    cartName.classList.add('cartName')
    cartName.innerText = item.title
    let cartPrice = document.createElement('div')
    cartPrice.classList.add('cartPrice')
    cartPrice.innerText = item.price
    let addItem = document.createElement('div')
    addItem.classList.add('addItem')
    let notAdded = document.createElement('div')
    notAdded.classList.add('added')
    notAdded.innerText = '-'
    let addCount = document.createElement('div')
    addCount.classList.add('addCount')
    addCount.innerText = item.counter
    let added = document.createElement('div')
    added.classList.add('added')
    added.innerText = '+'
    let totalItemPrice = document.createElement('div')
    totalItemPrice.classList.add ('totalItemPrice')
    totalItemPrice.innerText = item.price * item.counter

    cartContainer.appendChild(frame)
    frame.appendChild(cartItem)
    cartItem.appendChild(cartImg)
    cartItem.appendChild(closeCartItem)
    cartItem.appendChild(cartInfo)
    cartItem.appendChild(totalItemPrice)
    cartInfo.appendChild(cartName)
    cartInfo.appendChild(cartPrice)
    cartInfo.appendChild(addItem)
    addItem.appendChild(notAdded)
    addItem.appendChild(addCount)
    addItem.appendChild(added)

    closeCartItem.addEventListener('click', removeItem)
    notAdded.addEventListener('click', removeOne)
    added.addEventListener('click', addOneItem)
  })
}

function enterProduct (event) {
  shopPage.style.display = 'none'
  itemPage.style.display = 'flex'
  displayProduct(event.path[1].id)
  console.log(event);

}

function enterShop() {

  homePage.style.display = 'none'
  menuContainer.style.display = 'none'
  shopPage.style.display = 'block'
  itemPage.style.display = 'none'
  cartPage.style.display = 'none'

}

function enterHomePage() {
  bgNumber = 1
  bgStyle() 
  homePage.style.display = 'block'
  menuContainer.style.display = 'none'
  shopPage.style.display = 'none'
  itemPage.style.display = 'none'
  cartPage.style.display = 'none'
}

function displayMenu() {
  menuContainer.style.display = 'block'
}
function hideMenu() {
  menuContainer.style.display = 'none'
}

// BUY PROCESSS 
function addOneItem (event) {
  cartItems.map ( item => {
    if(item.id == event.path[3].id){
      item.counter < item.stock ? item.counter++ : null
      basketCount()
      enterCart() 
    }
  })
}

function removeOne (event) {
  cartItems.map ( item => {
    if(item.id == event.path[3].id){
      if (item.counter>1){
        item.counter--
        basketCount()
        enterCart() 
      } else {
        cartItems = cartItems.filter(el => el.id != event.path[3].id)
        basketCount()
        enterCart()

  
      }
    }
    
  })
}

function addToBasket(event) {

  
  let checkedItem = []
  checkedItem = cartItems.filter(el => el.id == filteredProduct.id)
 
  if (checkedItem.length == 0){
    filteredProduct.counter=1
    cartItems.push(filteredProduct)
    
  } else {
    cartItems.map(item=>{
      if(item.id==filteredProduct.id){
        item.counter < item.stock ? item.counter += 1 : null
      } else {

      }
    })

    // if(item.counter < item.stock){
    //   item.id==filteredProduct.id ? item.counter += 1 : null
    //   }
    // })
//comment something

  }  

  basketCount()
}

function checkSize(event) {
  setSize = event.target.previousElementSibling[event.target.previousElementSibling.selectedIndex].value
  setSize != 'none' ? addToBasket() : null


}

pic1.addEventListener('click', bg1)
pic2.addEventListener('click', bg2)
pic3.addEventListener('click', bg3)
shopBtn.addEventListener ('click', enterShop)
logo.addEventListener('click', enterHomePage)
menuBtn.addEventListener('click', displayMenu)
closeMenu.addEventListener ('click', hideMenu)
menuHome.addEventListener ('click', enterHomePage)
menuShop.addEventListener ('click', enterShop)
menuAbout.addEventListener ('click', hideMenu)
menuContact.addEventListener ('click', hideMenu)
img1.addEventListener('click', displayImg1)
img2.addEventListener('click', displayImg2)
img3.addEventListener('click', displayImg3)
img4.addEventListener('click', displayImg4)
backToList.addEventListener('click', enterShop)
addToCart.addEventListener('click', checkSize)
cartBtn.addEventListener('click', enterCart)
backToShop.addEventListener ('click', enterShop)
