document.addEventListener('DOMContentLoaded', () => {

    // image option
    let imgArray = [
        {
            name: "insta",
            img: "image/insta.png"
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
            name: "fb",
            img: "image/fb.png"
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
            name: "li",
            img: "image/li.png"
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
            name: "snapchat",
            img: "image/snapchat.png"
        },
        {
            name: "tick",
            img: "image/tick.png"
        },

        {
            name: "map",
            img: "image/map.png"
        }
    ]

    let duplicateImg = [...imgArray, ...imgArray];

    shuffleCard = () => {
        duplicateImg.sort(() => 0.5 - Math.random());

    }

    const grid = document.querySelector('#grid');
    let resultDisplay = document.querySelector('#result');
    let cardsChosen = [];
    let cardsChosenId = [];
    let cardsWon = [];
    // create grid

    function createGrid() {
        grid.innerHTML = "";

        for (let i = 0; i < 24; i++) {
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
        resultDisplay.innerHTML = cardsWon.length;
        if (cardsWon.length === duplicateImg.length / 2) {
            resultDisplay.innerHTML = 'Congratulations! You found them all!';
        }
    }

    //flip the card  

    function flipCard() {
        let imgId = this.getAttribute('data-id');
        cardsChosen.push(duplicateImg[imgId].name);
        cardsChosenId.push(imgId);
        this.setAttribute('src', duplicateImg[imgId].img);
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }

    function flipAllCard() {
        const imageElements = document.getElementsByClassName('frontImg');
        Array.from(imageElements).forEach((ele, index) => {
            ele.setAttribute('src', duplicateImg[index].img);
        })
        // setTimeout(() => {
        //     Array.from(imageElements).forEach((ele) => {
        //         ele.setAttribute('src', 'image/test.png');
        //     })
        // });
    }



    newGame = document.querySelector('#newGame');
    var interval;

    newGame = () => {
        createGrid();
        shuffleCard();
        resultDisplay.innerHTML = "0";
        cardsWon = [];
        const imageElements = document.getElementsByClassName('frontImg');
        Array.from(imageElements).forEach((ele) => {
            ele.addEventListener('click', flipCard);

        })


        var second = 60;
        var timer = document.querySelector("#timer");
        function startTimer() {
            clearInterval(interval);
            interval = setInterval(function () {
                timer.value = second--;
                if (second < 0) {
                    clearInterval(interval);
                    alert('Game Over');
                    const showBtn = document.querySelector('#show');
                    showBtn.addEventListener('click', () => {
                        flipAllCard();
                    })
                    createGrid();
                    timer.value = 60;
                }
            }, 1000)
        };
        startTimer()
    }

    // let refreshPage = () => {
    //     shuffleCard();
    //     resultDisplay.innerHTML=""
    // }



    //   var showBtn = document.getElementById('show');
    //   showBtn.addEventListener('click', function(){
    // document.getElementsByClassName("frontImg").classList.add("hideImg");
    //   })
    createGrid();
    // startTimer();


})

function help() {
    alert("* Click to Start New Game \n* Select The series of the Game\n* Match the Image \n* Click the Show button for showing the image\n* You have only 60 second to complete the game")
}

