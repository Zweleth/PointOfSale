
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
                    <td><button><i class="fa-solid fa-pen-to-square"></i></button></td>
                    <td><button><i class="fa-solid fa-trash"></i></button></td>
                </tr>
            `;
    }
  });
  document.querySelector("#admin").innerHTML += `
        <button class="btnAdd" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal16"><i class="fa-solid fa-plus"></i>Add new item</button>
    `;
}

populateTable();


function addPerfume() {
  let newPerfume = {};
  perfumes.push(newPerfume);
}

let btnAddPerfume = document.querySelector(".btnAdd");
btnAddPerfume.addEventListener("click", addPerfume);



function showProducts() {
    
    
    // perfumes.forEach((i) => {
    //     // console.log(`${i}: ${perfumes[i]}`);
    //     display.innerHTML += `
    //     <h5>Product name</h5>
    //           `;
    //   }
    // );
  }