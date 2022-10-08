let wordEl = document.getElementById("word-el")
let guessBtn = document.getElementById("enter-btn")
let inputBtn = document.getElementById("input-el")
let StartBtn = document.getElementById("star-btn")
let attempsEl = document.getElementById("attempts")
let textEl = document.getElementById("text")
let textEl2 = document.getElementById("text2")
let content = document.getElementById("content")
let lettersUsedEl = document.getElementById("lettersUsed")
let secretWordEl = document.getElementById("secretWord")
let StartBtnBox = document.getElementById("startBtnBox")


let userinput = ""


inputBtn.disabled = true;




let deleteBtn = document.getElementById("delete-btn")
deleteBtn.addEventListener('click', function() {
    inputBtn.textContent = inputBtn.textContent.slice(0, -1)
    userinput = userinput.slice(0, -1)
})



StartBtn.addEventListener('click', function() {

    StartBtn.remove("start-btn")


    let userGuesses = []
    let userGuessList = []
    let lettesUsedList = []


    words = ['apple', 'bannana', 'rock', 'spate', 'odium', 'vapid', 'stint','augur','banal','assay','pique','berth','canon','prate','plumb','taper',
    'blase','fusty','preen','antic','beget','harry','clout', 'blind',
    'sheet',  'crush',  'relax',  'drain',   'label',  'expel',  'thump',   'quake',  'agree',   'event',  'limit',  'argue',  'sharp',  'guide',  'march',  'image',  'worry','curse', 'grain',
    'occur',   'faint',   'waste',  'empty',  'blame',  'creep',  'shift',  'abuse',  'harsh',  'quest',  'vocal', 'taunt', 'drool', 'carry',
    'unite','final',  'worth',  'scene',  'proud', 'false', 'route', 'crash','clown', 'shaky','vegan', 'power', 'trust','enjoy','brain','adopt','tower','shade','delay',
    'twist','alert','choke','split','rhyme','muddy','plant','cheer','pause','legal','plate','error','smash','trade','burst','flash','shame','float','sting','boost','alien','blend','party','store','shine','match','track','dream','guard','flood','adult','sight','alarm','force','wound','brave','cable','panic','study','faith','equal','grade','award','bully','voice','drive','title','adieu','odium','shade','resin','alert','haunt','orate','media','blind','route','audio','pause','alien','canoe','plane','rouse','fraud','atone','raise','minor']


    function randomWord(wordList) {
        return wordList[(Math.floor(Math.random() * wordList.length))]
    }

    keyWord = randomWord(words)
    let attemps = keyWord.length + 2
    console.log(keyWord)


    function printGuessedLetter() {
        wordEl.textContent = userGuessList
    }

    for (let i = 0; i < keyWord.length; i++) {
        userGuessList.push("_ ")
    }printGuessedLetter()

    attempsEl.textContent = "Number of guesses you have: " + attemps

    secretWordList = keyWord.split('')
    console.log(secretWordList)




    function getLetter(){
        letter = ""

        let q = document.getElementById("Q")
        q.addEventListener('click', function() {
            inputBtn.textContent += "q"
            userinput += "q"
            
        })
        let w = document.getElementById("W")
        w.addEventListener('click', function() {
            inputBtn.textContent += "w"
            userinput += "w"
        })
        let e = document.getElementById("E")
        e.addEventListener('click', function() {
            inputBtn.textContent += "e"
            userinput += "e"
        })
        let r = document.getElementById("R")
        r.addEventListener('click', function() {
            inputBtn.textContent += "r"
            userinput += "r"
        })
        let t = document.getElementById("T")
        t.addEventListener('click', function() {
            inputBtn.textContent += "t"
            userinput += "t"
        })
        let y = document.getElementById("Y")
        y.addEventListener('click', function() {
            inputBtn.textContent += "y"
            userinput += "y"
        })
        let u = document.getElementById("U")
        u.addEventListener('click', function() {
            inputBtn.textContent += "u"
            userinput += "u"
        })
        let i = document.getElementById("I")
        i.addEventListener('click', function() {
            inputBtn.textContent += "i"
            userinput += "i"
        })
        let o = document.getElementById("O")
        o.addEventListener('click', function() {
            inputBtn.textContent += "o"
            userinput += "o"
        })
        let p = document.getElementById("P")
        p.addEventListener('click', function() {
            inputBtn.textContent += "p"
            userinput += "p"
        })
        let a = document.getElementById("A")
        a.addEventListener('click', function() {
            inputBtn.textContent += "a"
            userinput += "a"
        })
        let s = document.getElementById("S")
        s.addEventListener('click', function() {
            inputBtn.textContent += "s"
            userinput += "s"
        })
        let d = document.getElementById("D")
        d.addEventListener('click', function() {
            inputBtn.textContent += "d"
            userinput += "d"
        })
        let f = document.getElementById("F")
        f.addEventListener('click', function() {
            inputBtn.textContent += "f"
            userinput += "f"
        })
        let g = document.getElementById("G")
        g.addEventListener('click', function() {
            inputBtn.textContent += "g"
            userinput += "g"
        })
        let h = document.getElementById("H")
        h.addEventListener('click', function() {
            inputBtn.textContent += "h"
            userinput += "h"
        })
        let j = document.getElementById("J")
        j.addEventListener('click', function() {
            inputBtn.textContent += "j"
            userinput += "j"
        })
        let k = document.getElementById("K")
        k.addEventListener('click', function() {
            inputBtn.textContent += "k"
            userinput += "k"
        })
        let l = document.getElementById("L")
        l.addEventListener('click', function() {
            inputBtn.textContent += "l"
            userinput += "l"
        })
        let z = document.getElementById("Z")
        z.addEventListener('click', function() {
            inputBtn.textContent += "z"
            userinput += "z"
        })
        let x = document.getElementById("X")
        x.addEventListener('click', function() {
            inputBtn.textContent += "x"
            userinput += "x"
        })
        let c = document.getElementById("C")
        c.addEventListener('click', function() {
            inputBtn.textContent += "c"
            userinput += "c"
        })
        let v = document.getElementById("V")
        v.addEventListener('click', function() {
            inputBtn.textContent += "v"
            userinput += "v"
        })
        let b = document.getElementById("B")
        b.addEventListener('click', function() {
            inputBtn.textContent += "b"
            userinput += "b"
        })
        let n = document.getElementById("N")
        n.addEventListener('click', function() {
            inputBtn.textContent += "n"
            userinput += "n"
        })
        let m = document.getElementById("M")
        m.addEventListener('click', function() {
            inputBtn.textContent += "m"
            userinput += "m"
        })



    }

    getLetter()



    guessBtn.addEventListener('click', function() {
        
        guessedLetter = secretWordList.includes(userinput)
        userGuessesTrue = userGuesses.includes(userinput)
            if (userGuessesTrue) {
                textEl.textContent = "You already guessed this letter, try something else"
            } else {
                attemps = attemps - 1
                userGuesses.push(userinput)
                lettesUsedList.push(userinput)
                console.log(userGuesses)
                if (userinput == keyWord) {
                    attempsEl.textContent = " "
                    textEl2.textContent = keyWord
                    textEl2.className = "keyword"
                    textEl.textContent = "YAY! You won!!!"
                    textEl.className = "guessed"
                    attempsEl.remove("attemps-el")
    
                    let newGame = document.createElement('button')
                    newGame.className = "NewGameBtn"
                    newGame.innerHTML = "New Game"
                    StartBtnBox.appendChild(newGame)
                    newGame.addEventListener("click", function() {
                        location.reload()
                    })
                    
                } else if (userinput != keyWord) {
                    if(userinput.length == 1) {
                        let key = userinput.toUpperCase()
                        let keyboardKey = document.getElementById(key)
                        keyboardKey.classList.add("used")
                    }     
                    textEl.textContent = "Try again!"
                    textEl.className = "Wrong"
                    
                } 
                if (guessedLetter == true) {
                    textEl.textContent = "Nice GUESS!"
                    textEl.className = "niceGuess"
                    let key = userinput.toUpperCase()
                    let keyboardKey = document.getElementById(key)
                    keyboardKey.classList.add("right")
                } if (attemps > 0) {
                    attempsEl.textContent = "Guesses Left: "+ attemps
                    for (let i = 0; i < secretWordList.length; i++) {
                        if (userinput == secretWordList[i]) {
                            let letterIndex = i
                            userGuessList[letterIndex] = userinput.toUpperCase()
                        }printGuessedLetter()
                        
                    }
                    
                } else {
                    textEl.textContent = "Oops! Try Again!"

                    if ( attemps > 0) {
                        attempsEl.textContent = "Guesses Left: "+ attemps
                    }printGuessedLetter()
                   
                }   
    
                let userGuess = userGuessList.toString()
                let fullkeyword = secretWordList.toString()
                console.log(userGuess)
                console.log(fullkeyword)
                if (userGuess.toUpperCase() == fullkeyword.toUpperCase()) {
                    attempsEl.textContent = ""
                    textEl.textContent = "Yay! YOU WON!"
                    textEl.className = "guessed"
                    textEl2.textContent = keyWord
                    textEl2.className = "keyword"
                    attempsEl.remove("attemps-el")
                    lettersUsedEl.remove("lettersUsed")
                    let newGame = document.createElement('button')
                    newGame.className = "NewGameBtn"
                    newGame.innerHTML = "New Game"
                    content.appendChild(newGame)
                    newGame.addEventListener("click", function() {
                        location.reload()
                    })
                    inputBtn.value = " "
                } else if (attemps == 0) {
                    textEl.textContent = "Too many Guesses! Game Over"
                    textEl.className = "not-guessed"
                    secretWordEl.textContent = "Secret Word Was:"
                    textEl2.textContent = keyWord
                    textEl2.className = "keyword"
                    attempsEl.remove("attemps-el")
                    lettersUsedEl.remove("lettersUsed")
                    let newGame = document.createElement('button')
                    newGame.className = "NewGameBtn"
                    newGame.innerHTML = "New Game"
                    content.appendChild(newGame)
                    newGame.addEventListener("click", function() {
                        location.reload()
                    })
                    
                    inputBtn.value = " "
                }   
            }
    
    })
        
    
})





