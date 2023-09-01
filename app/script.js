let hero = window.document.querySelector('#hero');

const clickHandler = () => {
  if(hero.style.backgroundColor === 'black') {
    hero.style.backgroundColor === 'blue';
  } else {
    hero.style.backgroundColor === 'black';
  }
}

hero.onclick = clickHandler;
