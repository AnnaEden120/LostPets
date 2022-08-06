
const repbtn = document.getElementById('repbtn');

repbtn.addEventListener('click', () => {
  const form = document.getElementById('container');

  if (form.style.visibility === 'hidden') {
    form.style.visibility = 'visible';
  } else {
    form.style.visibility = 'hidden';
  }
});

const srcbtn = document.getElementById('srcbtn');

srcbtn.addEventListener('click', () => {
  const form = document.getElementById('table');

  if (table.style.visibility === 'hidden') {
    table.style.visibility = 'visible';
  } else {
    table.style.visibility = 'hidden';
  }
});