
  //1
  let menuElem = document.querySelector('div');
  let titleElem = document.querySelector('span');
  
  titleElem.onclick = function() {
    menuElem.removeAttribute('class', 'd-none');
    menuElem.setAttribute('class', 'show');
  };
  
  //2 
  let menuElem2 = document.getElementsByTagName('div')[1];
  let titleElem2 = document.getElementsByTagName('span')[2];
  
  titleElem2.onclick = function() {
    menuElem2.removeAttribute('class', 'd-none');
    menuElem2.setAttribute('class', 'show');
  };
  
