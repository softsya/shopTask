const submitOrder = 'Your order:';

const items = [
  {
    id: '01',
    name: 'Radiohead - A Moon Shaped Pool',
    description: `A Moon Shaped Pool is the ninth studio album by English rock band Radiohead. It was released digitally on 8 May 2016 and was named one of the best albums of the year and decade by many publications.`,
    price: 39,
    image: 'https://e7.pngegg.com/pngimages/352/588/png-clipart-a-moon-shaped-pool-compact-disc-radiohead-ok-computer-xl-recordings-radiohead-television-album.png',
  },
  {
    id: '02',
    name: 'Boombox - Terminal B',
    description: 'Terminal B is the fifth studio album of the Ukrainian band Boombox, released in late September 2013.',
    price: 29,
    image: 'https://vinyla.com/files/products/boombox-terminal-b.1280x1280.jpg?f6bdbac86413c3d1a942aaf22d7e908a',
  },
  {
    id: '03',
    name: 'Stepan Giga - Gold Collection',
    description: `Golden songs collection of the Ukrainian pop singer (tenor), composer, National Artist of Ukraine, member of the National League of Ukrainian Composers Stepan Giga`,
    price: 49,
    image: 'https://promoter-production-images.s3.amazonaws.com/uploads/event/new_promo_image/4550/450x450.jpg',
  },
  {
    id: '04',
    name: 'MØL - Diorama',
    description: `MØL perfectly and expertly blend black metal and shoegaze with utter ease, so much so they give icons like Deafheaven and Alcest a run for their money.`,
    price: 25,
    image: 'https://imagescdn.juno.co.uk/full/CS846110-01A-BIG.jpg',
  }
];

let container = document.getElementById('container');

const createCounter = (el) => {
  let min = 1;
  let max = 9;
  let counterBox = document.createElement('div');
  counterBox.setAttribute('class', 'counterBox');
  let minus = document.createElement('button');
  minus.setAttribute('class', 'counterButton');
  minus.innerHTML = '-';

  minus.addEventListener('click', () => {
    const value = Number(currentValue.innerHTML) - 1;
    if (value >= min) {
      currentValue.innerHTML = value;
      const newPriceValue = el.price * value;
      const itemPriceNode = document.getElementById(el.id);
      itemPriceNode.innerHTML = newPriceValue;

      const totalPrice = document.getElementById('totalPrice');
      totalPrice.innerHTML = Number(totalPrice.innerHTML) - el.price; 
    }
  });

  let currentValue = document.createElement('span');
  currentValue.setAttribute('class', 'counterValue');
  currentValue.innerHTML = 1;
  let plus = document.createElement('button');
  plus.setAttribute('class', 'counterButton');
  plus.innerHTML = '+';

  plus.addEventListener('click', () => {
    const value = Number(currentValue.innerHTML) + 1;
    if (value <= max) {
      currentValue.innerHTML = value;
      const newPriceValue = el.price * value;
      const itemPriceNode = document.getElementById(el.id);
      itemPriceNode.innerHTML = newPriceValue;

      const totalPrice = document.getElementById('totalPrice');
      totalPrice.innerHTML = Number(totalPrice.innerHTML) + el.price; 
    }
  });

  counterBox.append(minus, currentValue, plus);

  return counterBox;
};

const submitOrderNode = document.createElement('h3');
submitOrderNode.setAttribute('id', 'submitOrder');
submitOrderNode.innerHTML = submitOrder;
container.appendChild(submitOrderNode);

items.forEach((el) => {
  let itemBoxNode = document.createElement('div');
  itemBoxNode.setAttribute('class', 'itemBox');

  let itemNameNode = document.createElement('h3');
  itemNameNode.setAttribute('class', 'itemName');
  itemNameNode.innerHTML = el.name;
  itemBoxNode.appendChild(itemNameNode);

  let itemDescriptionNode = document.createElement('p');
  itemDescriptionNode.setAttribute('class', 'itemDescription');
  itemDescriptionNode.innerHTML = el.description;
  itemBoxNode.appendChild(itemDescriptionNode);

  let itemPicNode = document.createElement('div');
  itemPicNode.setAttribute('class', 'itemPic');
  itemPicNode.style.backgroundImage = `url(${el.image})`;
  itemPicNode.style.height = '200px';
  itemPicNode.style.width = '200px';
  itemPicNode.style.backgroundRepeat = 'no-repeat';
  itemPicNode.style.backgroundSize = 'cover';
  itemPicNode.style.borderRadius = '50%';
  itemBoxNode.appendChild(itemPicNode);

  let itemPriceNode = document.createElement('div');
  itemPriceNode.setAttribute('id', el.id);
  itemPriceNode.setAttribute('class', 'itemPrice');
  itemPriceNode.innerHTML = (`${el.price}`);
  itemBoxNode.appendChild(itemPriceNode);

  const counter = createCounter(el);
  itemBoxNode.appendChild(counter);

  container.appendChild(itemBoxNode);
})

let sum = 'In total:';
let totalPrice = 0;

const itemBoxesNodes = document.querySelectorAll('.itemBox');
itemBoxesNodes.forEach((node) => {
  totalPrice += Number(node.getElementsByClassName('itemPrice')[0].innerHTML);
})

const bottomWrapperNode = document.createElement('div');
bottomWrapperNode.setAttribute('id', 'bottomWrapper');
container.appendChild(bottomWrapperNode);

const sumNode = document.createElement('h3');
sumNode.setAttribute('id', 'sumText');
sumNode.innerHTML = sum;
bottomWrapperNode.appendChild(sumNode);

const totalPriceNode = document.createElement('h3');
totalPriceNode.setAttribute('id', 'totalPrice');
totalPriceNode.innerHTML = totalPrice;
bottomWrapperNode.appendChild(totalPriceNode);

const submitButtonNode = document.createElement('button');
submitButtonNode.setAttribute('class', 'buy');
submitButtonNode.innerHTML = 'Buy';
bottomWrapperNode.appendChild(submitButtonNode);

console.log(container);