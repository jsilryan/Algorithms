/*
If the number of towers is even, then the second player can simply copy all of the moves of the first player. This will inevitably result in a win for player two, since they will always have a move available to them with that strategy.
If the number of towers is odd (and the height m != 1), then player one can win by first setting a single tower to height 1, then following the strategy above with the roles reversed.
It seems that the redundant case (m=1) is considered a win for player 2.
*/

function towerBreakers(n, m) {
    if (n % 2 === 0) {
        return 2
    }
    else {
        if (m != 1) {
            return 1
        }
        else {
            return 2
        }
    }
}

let n = 2;
let m = 6;
console.log(towerBreakers(n, m));

function caesarCipher(s, k) {
    // Write your code here
    let alph = 'abcdefghijklmnopqrstuvwxyz'
    let newAlph = []
    let pos = []
    let capital = []
    for (let i = 0; i < alph.length; i++) {
        let num = (i + k) % alph.length;
        newAlph.push(alph[num]);
    }
    for (let i = 0; i < s.length; i++) {
        let pushed = 0
        let char = s[i];
        if (char === char.toUpperCase()) {
            char = char.toLowerCase();
            capital.push(i);
        }
        for (let j = 0; j < alph.length; j++) {
            if (char === alph[j]) {
                pos.push(j)
                pushed = 1
            }
        }
        if (pushed === 0) {
            pos.push(-1)
        }
    }
    let newWord = []
    for (let i = 0; i < pos.length; i++){
        if (pos[i] >= 0) {
            let newLetterPos = pos[i]
            newWord.push(newAlph[newLetterPos])
        }
        else {
            newWord.push(s[i])
        }
    }

    for (let i = 0; i < capital.length; i++){ 
        newWord[capital[i]] = newWord[capital[i]].toUpperCase()
    }

    let word = newWord.join('')
    return word
}

let newWord = '159357lcfd'
let new2 = '6DWV95HzxTCHP85dvv3NY2crzt1aO8j6g2zSDvFUiJj6XWDlZvNNr'
let r = 98
console.log(caesarCipher(newWord, r))