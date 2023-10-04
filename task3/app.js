'use strict'

class TextChange {
  constructor(text){
      this.text = text;
      this.originText = text;
  }

  capitalize(userWord){
      let modUserWord = userWord.split('');
      modUserWord[0] = modUserWord[0].toUpperCase();
      modUserWord = modUserWord.join('');
      return modUserWord;
  }

  changeWords(finder, changer){
      let modifiedTextArray = this.text.toLowerCase().split(' ');

      modifiedTextArray.forEach((word, index)=> {
          for (let i = 0; i <= finder.length - 1; i++){
              if(word === finder[i]){
                  modifiedTextArray[index] = this.capitalize(changer[i]);
              }
          }
      })

      this.text = modifiedTextArray.join(' ');

      let string = '';

      changer.forEach((changerWord, index) => {
          let amount = modifiedTextArray.filter(word => word.toLowerCase() === changerWord);
          string += `${this.capitalize(finder[index])}/${this.capitalize(changerWord)} - ${amount.length} `;
      })
      return console.log(string);
  }
}


// Приклад використання:
let str = new TextChange('Cat runs. Dog runs. Cat jumps');
console.log(str.originText);
str.changeWords(['cat', 'dog'], ['bird', 'fish']);
console.log(str.text);