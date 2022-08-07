
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

srcbtn.addEventListener('click', seen);

const table=document.getElementById('table1');

function seen(){
  if (table.style.visibility==='hidden'){
    table.style.visibility='visible';
  } else{
    table.style.visibility='hidden';
  }
};

  

  



fetch("table.json")
.then(function(response){
   return response.json();
})
.then(function(table){
   let placeholder = document.querySelector("data-output");
   let out = "";
   for(let pet of table){
      out += `
         <tr>
         <td>${pet.name}</td>
         <td>${pet.city}</td>
         <td>${pet.description}</td>
         <td>${pet.contact}</td>
         </tr>
      `;
   }
 
   placeholder.innerHTML = out;
});

