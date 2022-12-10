
let perfumes = JSON.parse(localStorage.getItem("data"))


closeEditModal()

function populateTable() {
  let tableContent = document.querySelector(".tblbody");
  
  tableContent.innerHTML = '';
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
  document.querySelector("#admin").innerHTML += ``;
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
  fixIDs();
  localStorage.setItem('data', JSON.stringify(perfumes));
  document.location.reload();
}

function fixIDs() {
  for(i=0; i< perfumes.length; i++) {
    perfumes[i].id = eval(`${[i]} + 1`);
  }
}
function addNewPerfume() {
  let newPerfume = {
  id: perfumes.length+1,
  name: document.querySelector('.perfName').value,
  gender: document.querySelector('.perfGender').value,
  price: parseInt(document.querySelector('.perfPrice').value),
  image_link: document.querySelector('.perfImageLink').value,
  description:
    document.querySelector('.perfDescr').value,
}

  perfumes.push(newPerfume);
  localStorage.setItem('data', JSON.stringify(perfumes));
  document.location.reload();

  
}

function addItemClicked() {
  hideModal();
  addNewPerfume();
  populateTable()
  
  
}

let updateIndex = 0;

let AddItemEdit = document.querySelector(".addItemEdit");
AddItemEdit.addEventListener("click", () => {
  editPerfume(updateIndex);
  closeEditModal();
  
  
});

let closeModalEdit = document.querySelector(".cancelEdit");
closeModalEdit.addEventListener("click", () => {
  closeEditModal();
});


let btnEditPerfume = document.querySelectorAll('.edit')
btnEditPerfume.forEach(btn => {
  btn.addEventListener('click', () => {
    populateModal(btn.id);
    showEditModal();
   
    updateIndex = parseInt(btn.id);
    
  })
})

function editPerfume(index) {
  perfumes[index].name = document.querySelector('.perfNameEdit').value;
  perfumes[index].gender = document.querySelector('.perfGenderEdit').value;
  perfumes[index].price = parseFloat(document.querySelector('.perfPriceEdit').value);
  perfumes[index].image_link = document.querySelector('.perfImageLinkEdit').value;
  perfumes[index].description = document.querySelector('.perfDescrEdit').value; 
  localStorage.setItem('data', JSON.stringify(perfumes));
  document.location.reload();
}

function populateModal(index) {

  document.querySelector('.perfNameEdit').value= perfumes[index].name
  document.querySelector('.perfGenderEdit').value= perfumes[index].gender
  document.querySelector('.perfPriceEdit').value= perfumes[index].price
  document.querySelector('.perfImageLinkEdit').value= perfumes[index].image_link
  document.querySelector('.perfDescrEdit').value= perfumes[index].description

}

function showEditModal() {
  document.querySelector('.pop-upEdit').id= 'showModal';
}

function closeEditModal() {
  document.querySelector('.pop-upEdit').id= 'hideModal';
}

let btnSortName = document.querySelector('.sortName');
btnSortName.addEventListener('click', () => {
  sortByName();
})

let btnSortPrice = document.querySelector('.sortPrice');
btnSortPrice.addEventListener('click', () => {
  sortByPrice();
})

function sortByName() {
    perfumes.sort(function(a, b) {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    })
  fixIDs();
  localStorage.setItem('data', JSON.stringify(perfumes));
  document.location.reload();
}

function sortByPrice() {
  perfumes.sort(function(a, b) {
    if (a.price < b.price) return -1;
    if (a.price > b.price) return 1;
    return 0;
  })
fixIDs();
localStorage.setItem('data', JSON.stringify(perfumes));
document.location.reload();
}

// function startSlide() {
//   switch
// }