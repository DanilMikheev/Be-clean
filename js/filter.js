const filterbox = document.querySelectorAll('.gallery__body');


document.querySelector('.gallery__nav').addEventListener('click', event => {
  if (event.target.tagName !== 'LI') return false;

  let filterClass = event.target.dataset['f'];


  filterbox.forEach(elem => {
    elem.classList.remove('hide');
    if (!elem.classList.contains(filterClass) && filterClass !== 'all') {
      elem.classList.add('hide');

    }
  });




});


