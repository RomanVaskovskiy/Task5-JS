const arr = [
    {name: 'Vadaim'},
    {name: 'Victoria'},
    {name: 'Anatiliy'}
]

const vika = arr.find(el => el.name =='Victoria')
console.log(vika)

vika['name']='Lena'
console.log(arr)

//for(let i = 1; i <11; i++) {
    //console.log (2**i)
    //console.log (Math.pow(2,i))
//}

const pow = function(counter) {
    for(let i = 1; i <=counter; i++) {
        console.log(2**i)
    }
}
pow(10)

let result = ''
let smile = ';)'
for (let i = 1; i<6; i++) {
    console.log(result += smile)
}

for (let i = 1; i<6; i++) {
    console.log(smile.repeat(i)) 
}

function smilik(str,numberOfRows) {
    for (let i = 1; i<=numberOfRows; i++) {
        //console.log(str.repeat(i)) }
        result = result + str
        console.log(result)
    }
}

smilik(':(', 10)

function getWordStructure(word) {
    const vowels = 'aeiouy'.split('');
    const consonats = 'bcdfghjklmnpqrstvwxz'.split ('');
 
    let vowelsCount = 0;
    let consonatsCount = 0;

    for(const char of word.toLowerCase()) {
      if(vowels.includes(char)) vowelsCount++
      else if(consonats.includes(char)) consonatsCount++
    }
    console.log("в слове &{word} : ${vowelsCount} гласных и ${consonatsCount} согласных букв")
}
getWordStructure('Check-list')


function isPalindrom(word) {
    word = word.toLowerCase()
    for (let i=0, j=word.lenght-1; i<word.lenght, j>=0; i++, j--) {
        if(word[i] !==word[j]) {
            return fals
        }
    }
    return true
}

console.log(isPalindrom('Abba'))

function isPalindrom2(word) {
    return word.toLowerCase() === word.toLowerCase().split('').reverse().join('')
}

console.log(isPalindrom2('Abba'))
