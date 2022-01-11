class Note{
    constructor(id, description){
        this.id = id;
        this.description = description;
    }
};

let words = document.getElementById("wordsContent")
let note = document.getElementById("boxNote")
words.addEventListener('keyup', ()=>{
    note.innerHTML = words.value;
});

const addNote = () =>{

}

const deleteNote = () =>{

}

const updateNote = () =>{

}

