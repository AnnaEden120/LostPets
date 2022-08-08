
const repbtn = document.getElementById('repbtn');
const form = document.getElementById('container');

function seeForm(){
  if (form.style.visibility==='hidden'){
    form.style.visibility='visible';
  }else{
    form.style.visibility='hidden';
  }
};

repbtn.addEventListener('click', seeForm);
 
const srcbtn = document.getElementById('srcbtn');
const tableDisplay=document.getElementById('table-pets');

function seeTable(){
  if (tableDisplay.style.visibility==='hidden'){
    tableDisplay.style.visibility='visible';
  }else{
    tableDisplay.style.visibility='hidden';
  }
};

srcbtn.addEventListener('click', seeTable);

const submit=document.getElementsByClassName('editRowBtn')[0];
function messege(){
  alert('Thank you for your report!');
};
submit.addEventListener('click', messege);



var table= document.getElementById('table1'), rIndex;

for(var i = 1; i < table.rows.length; i++){
  table.rows[i].onclick = function(){
      rIndex = this.rowIndex;
      console.log(rIndex);

      document.getElementById("name").value = this.cells[1].innerHTML;
      document.getElementById("city").value = this.cells[2].innerHTML;
      document.getElementById("description").value = this.cells[3].innerHTML;
      document.getElementById("picture").src = this.cells[4].innerHTML;
      document.getElementById("contact").value = this.cells[5].innerHTML;
  };
}
          
          
// edit the row
function editRow(){
  table.rows[rIndex].cells[1].innerHTML = document.getElementById("name").value;
  table.rows[rIndex].cells[2].innerHTML = document.getElementById("city").value;
  table.rows[rIndex].cells[3].innerHTML = document.getElementById("description").value;
  table.rows[rIndex].cells[4].innerHTML = document.getElementById("picutre").src;
  table.rows[rIndex].cells[5].innerHTML = document.getElementById("contact").value;
}


// Data Update Table Here
//function editTableDisplay(){
 //table.setAttribute('style', 'visibility: visible');
//};


//fetch("table.json")
//.then(function(response){
   //return response.json();
//})
//.then(function(table){
  // let placeholder = document.querySelector("data-output");
  // let out = "";
  // for(let pet of table){
   //   out += `
   //      <tr>
    //     <td>${pet.name}</td>
    //     <td>${pet.city}</td>
     //    <td>${pet.description}</td>
     //    <td>${pet.contact}</td>
     //    </tr>
  //    `;
 //  }
 
 //  placeholder.innerHTML = out;
//});

