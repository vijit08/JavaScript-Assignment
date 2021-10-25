document.addEventListener('DOMContentLoaded', () => {

    // image option
    const imgArray = [
        {
            name: "insta",
            img: "image/insta.png"
        },
        {
            name: "insta",
            img: "image/insta.png"
        },
        {
            name: "twit",
            img: "image/twit.png"
        },
        {
            name: "twit",
            img: "image/twit.png"
        },
        {
            name: "twitter",
            img: "image/twitter.png"
        },
        {
            name: "twitter",
            img: "image/twitter.png"
        },
        {
            name: "fb",
            img: "image/fb.png"
        },
        {
            name: "fb",
            img: "image/fb.png"
        },
        {
            name: "g+",
            img: "image/g+.png"
        },
        {
            name: "g+",
            img: "image/g+.png"
        },
        {
            name: "youtube",
            img: "image/youtube.png"
        },
        {
            name: "youtube",
            img: "image/youtube.png"
        },
        {
            name: "li",
            img: "image/li.png"
        },
        {
            name: "li",
            img: "image/li.png"
        },
        {
            name: "mail",
            img: "image/mail.png"
        },
        {
            name: "mail",
            img: "image/mail.png"
        },
        {
            name: "whatsapp",
            img: "image/whatsapp.png"
        },
        {
            name: "whatsapp",
            img: "image/whatsapp.png"
        },
        {
            name: "snapchat",
            img: "image/snapchat.png"
        },
        {
            name: "snapchat",
            img: "image/snapchat.png"
        },
        {
            name: "tick",
            img: "image/tick.png"
        },
        {
            name: "tick",
            img: "image/tick.png"
        },
        {
            name: "map",
            img: "image/map.png"
        },
        {
            name: "map",
            img: "image/map.png"
        }
    ]

    imgArray.sort(() => 0.5 - Math.random());

    const grid = document.querySelector('#grid');
    const resultDisplay = document.querySelector('#result');
    let cardsChosen = [];
    let cardsChosenId = [];
    let cardsWon = [];
    // create grid

    function createGrid() {
        grid.innerHTML = "";

        for (let i = 0; i < imgArray.length; i++) {
            var card = document.createElement('img');

            card.setAttribute('src', 'image/test.png');
            // card.setAttribute('class' , frontImg);
            card.className = "frontImg";
            card.setAttribute('data-id', i);
            // card.addEventListener('click', flipCard);
            grid.appendChild(card);
        }
    }

    //check matches of card
    function checkForMatch() {
        const cards = document.querySelectorAll('img');
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];

        if (optionOneId == optionTwoId) {
            cards[optionOneId].setAttribute('src', 'image/test.png');
            cards[optionTwoId].setAttribute('src', 'image/test.png');

        }
        else if (cardsChosen[0] === cardsChosen[1]) {

            //   cards[optionOneId].setAttribute('src', 'image/OIP.jpg');
            //   cards[optionTwoId].setAttribute('src', 'image/OIP.jpg');
            cards[optionOneId].removeEventListener('click', flipCard);
            cards[optionTwoId].removeEventListener('click', flipCard);
            cardsWon.push(cardsChosen);
        } else {
            cards[optionOneId].setAttribute('src', 'image/test.png');
            cards[optionTwoId].setAttribute('src', 'image/test.png');

        }
        cardsChosen = [];
        cardsChosenId = [];
        resultDisplay.textContent = cardsWon.length;
        if (cardsWon.length === imgArray.length / 2) {
            resultDisplay.textContent = 'Congratulations! You found them all!';
        }
    }

    //flip the card  

    function flipCard() {
        let imgId = this.getAttribute('data-id');
        cardsChosen.push(imgArray[imgId].name);
        cardsChosenId.push(imgId);
        this.setAttribute('src', imgArray[imgId].img);
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }


    countDown = document.querySelector('#newGame');

    countDown = () => {

        const imageElements = document.getElementsByClassName('frontImg');
        // console.log(imageElements);
        Array.from(imageElements).forEach((ele) => {
            ele.addEventListener('click', flipCard);

        })

        var second = 60;
        var timer = document.querySelector("#timer");
        var interval;
        function startTimer() {
            interval = setInterval(function () {
                timer.value = second--;
                if (second < 0) {
                    clearInterval(interval);
                    alert('Game Over');
                    createGrid();
                    timer.value = 60;
                    resultDisplay.innerHTML="";

                }
            }, 1000)
        };
        startTimer()
    }


    //   var showBtn = document.getElementById('show');
    //   showBtn.addEventListener('click', function(){
    // document.getElementsByClassName("frontImg").classList.add("hideImg");
    //   })
    createGrid();
    startTimer();


})

function help() {
    alert("Onclick of HELP button, an alert should come with the instructions of the game")
}

