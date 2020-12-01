//const buttonEl = document.getElementById('my-button');
const containerEl = document.getElementById('container');
let count=0;

const clickHandler = function(event) {
  if (event.target.matches('button')) {
    event.target.textContent = 'Clicked!';
    count++;
    document.getElementById("my-button").textContent="Clicks: "+count;
//    udCount(count);
  }
};

//function udCount(count){
//  document.getElementById("my-button").textContent="Clicks: "+count;
//}

// const clickHandler = function() {
//   let count = 0;

//   return function() {
//     count++;
//     this.textContent = `Clicks: ${count}`;
//   };
// };

//const buttons = document.getElementsByTagName('button');

// for (let i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener('click', clickHandler());
// }



containerEl.addEventListener('click', clickHandler);

// buttonEl.addEventListener('click', clickHandler());

const data = [12, 23, 38, 40, 54, 62, 71, 87, 99];

const binarySearch = (arr, num, left, right) => {
  let middle = Math.floor((left + right) / 2);

  // range overlapped, so never found number
  if (left > right) {
    return -1;
  }
  else if (num === arr[middle]) {
    return middle;
  }
  else if (num < arr[middle]) {
    // call again with a new right value
    return binarySearch(arr, num, left, middle - 1);
  }
  else {
    // call again with a new left value
    return binarySearch(arr, num, middle + 1, right);
  }
};

// set initial left and right values on first call
console.log(binarySearch(data, 12, 0, data.length - 1));
