let words = document.getElementById("wordsContent");
let note = document.getElementById("boxNote");
words.addEventListener("keyup", () => {
  note.innerHTML = words.value;
});

const showNotes = () => {
  let localS = localStorage.getItem("user");
  let getLS = JSON.parse(localS);
  
  getLS.notes.forEach(note => {
      let cardNote = document.createElement("div");
      cardNote.innerHTML = `
            <div class="m-2 card">
                <div class="card-body">     
                    <h5 class="d-flex justify-content-between card-title">Card title <a href="deleteNote()"><i class="bg-danger text-white btnDelete p-1 fas fa-trash-alt"></i></a></h5>
                    <hr>
                    <p class="card-text">${note}</p>
                </div>
            </div> 
        `;
        cardNote.className = "col col-sm-12 col-md-12 col-lg-6 ";
        let noteBoard = document.getElementById('noteBoard')
        noteBoard.appendChild(cardNote);
  });
};

showNotes();

const addNote = async (e) => {
  e.preventDefault();

  let localS = localStorage.getItem("user");
  let getLS = JSON.parse(localS);
  let dataNote = document.getElementById('wordsContent')
  getLS.notes.append(dataNote.value)
  await fetch("http://localhost:3000/users" + getLS.id, {
    method: "PUT",
    headers: {
      "Content-Type":"application/json",
    },
    body: JSON.stringify(getLS),
  });
};

const deleteNote = () => {};

const updateNote = () => {};
