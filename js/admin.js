
let perfumes = JSON.parse(localStorage.getItem("data"))



function populateTable() {
  let tableContent = document.querySelector(".tblbody");
  Object.keys(perfumes).forEach((i) => {
    if (perfumes.length) {
      // console.log(`${i}: ${perfumes[i]}`);
      tableContent.innerHTML += `
                <tr>
                    <td>${perfumes[i].id}</td>
                    <td>${perfumes[i].name}</td>
                    <td>${perfumes[i].gender}</td>
                    <td>${perfumes[i].price}</td>
                    <td><button class="edit" id="${i}"><i class="fa-solid fa-pen-to-square"></i></button></td>
                    <td><button class="delete" id="${perfumes[i].id}"><i class="fa-solid fa-trash"></i></button></td>
                    </tr>
            `;
    }
  });
  document.querySelector("#admin").innerHTML += `
        <button class="btnAdd" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal16"><i class="fa-solid fa-plus"></i>Add new item</button>
    `;
}

populateTable();

document.querySelector('.pop-up').id = 'hideModal';
function showModal() {
  if (document.querySelector('.pop-up').id != 'showModal') {
    document.querySelector('.pop-up').id = 'showModal';
  }
   
  // let newPerfume = {};
  // perfumes.push(newPerfume);
}

let btnAddItem = document.querySelector(".addItem");
btnAddItem.addEventListener("click", addItemClicked);

let btnCancel = document.querySelector(".cancel");
btnCancel.addEventListener("click", hideModal);

function hideModal() {
  document.querySelector('.pop-up').id = 'hideModal';
}

let btnAddPerfume = document.querySelector(".btnAdd");
btnAddPerfume.addEventListener("click", showModal);

let btnDelete = document.querySelectorAll('.delete')
btnDelete.forEach(btn => {
  btn.addEventListener('click', () => {
    let x = (btn.id);
    deletePerfume(x)
  
  })
})

function deletePerfume(index) {
  perfumes.splice((index-1),1)
  for(i=0; i< perfumes.length; i++) {
    perfumes[i].id = eval(`${[i]} + 1`);
  }
  localStorage.setItem('data', JSON.stringify(perfumes));
  document.location.reload();
}


function addNewPerfume() {
  let newPerfume = {
  id: perfumes.length+1,
  name: document.querySelector('.perfName').value,
  gender: document.querySelector('.perfGender').value,
  price: parseInt(document.querySelector('.perfPrice').value),
  image_link: document.querySelector('.perfImage').value,
  description:
    document.querySelector('.perfDescr').value,
}
  perfumes.push(newPerfume);
  localStorage.setItem('data', JSON.stringify(perfumes));
  document.location.reload();
  populateTable()
}

function addItemClicked() {
  hideModal();
  addNewPerfume();
  
}
