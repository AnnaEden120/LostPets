//var form=documet.getElementById('form-box');

//form-box.addEventListener('submit', function(event){
	//event.preventDefault()//prevents the form from autosubmitting
//});

const repbtn = document.getElementById('repbtn');

repbtn.addEventListener('click', () => {
  const form = document.getElementById('container');

  if (form.style.visibility === 'hidden') {
    form.style.visibility = 'visible';
  } else {
    form.style.visibility = 'hidden';
  }
});