const storage=document.querySelector('.button');

console.log(storage);
storage.addEventListener('click',store);
function store(event){
    event.preventDefault();
console.log(document.getElementById('name').value);
console.log(document.getElementById('email').value);
console.log(document.getElementById('selection1').value);
console.log(document.getElementById('selection2').value);
console.log(document.getElementById('texta').value);
}


