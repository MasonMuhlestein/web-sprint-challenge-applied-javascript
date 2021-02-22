import axios from "axios"




  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //

const Header = (title, date, temp) => {
//creating tags
  const header = document.createElement('div');
  const cDate = document.createElement('span');
  const hTitle = document.createElement('h1');
  const cTemp = document.createElement('span');
//data
  cDate.textContent = date;
  hTitle.textContent = title;
  cTemp.textContent = temp;
//adding classes
  header.classList.add('header');
  cDate.classList.add('date');
  cTemp.classList.add('temp');
//heirarchy
  header.appendChild(cDate);
  header.appendChild(hTitle);
  header.appendChild(cTemp);
//return header
  return(header);
}



//-----------------------------------------------------------------------------------------------------------------------------------------------//

// window.onload = () => {
//   const headerContainer = document.querySelector('.header-container')
//   headerContainer.appendChild(Header("Lambda Times", "January 6, 2021", "26 Degrees"))
// }

// TASK 2
// ---------------------
// Implement this function taking a css selector as its only argument.
// It should create a header using the Header component above, passing arguments of your choosing.
// It should append the header to the element in the DOM that matches the given selector.
//
const headerAppender = (selector) => {
  const headerContainer = document.querySelector('.header-container')
  headerContainer.appendChild(Header(selector))
  Header()
}

export { Header, headerAppender }
