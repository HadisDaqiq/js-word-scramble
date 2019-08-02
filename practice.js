const greeting = 'Hello World';

const words = greeting.split(' ');

const word2 = words.join(',');

console.log(word2);



function randomitem(items) {

  const num1 = Math.floor(Math.random() * items.length);

  const num2 = Math.floor(Math.random() * items.length);

  console.log(num1);
  console.log(num2);

  console.log([items[num1], items[num2]] = [items[num2], items[num1]]);
}

randomitem(['apple', 'banana', 'cherry']);

const candy = new Map([['purple', 'grape'],['yellow', 'Banana'],['red', 'red strawberry']]);

for (const i of candy) {

  console.log(`The ${i[1]} flavor is colored ${i[0]}`);
}

function pickColor(color, candy) {

    if (candy.get(color)) {
      console.log(candy.get(color));
    }else{
      console.log('Sorry, that color doesn\'t have a flavor.');
    }
}

pickColor('white', candy);


function flavor(colors) {
  for(const color of colors) {
    if(candy.get(color)) {
      console.log(candy.get(color));
    }
  }
}

flavor(['red', 'yellow']);