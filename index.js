let count=0;
let value=document.getElementById('save-el');
let countEl=document.getElementById('count-el');
function increment(){
  count+=1;
  countEl.innerText=count;
}
function save(){
  value.textContent+=count +" -  ";
  countEl.textContent=0;
  count=0;
}
// let message="You have three new notifications";
// console.log(message);
// let welcome=document.getElementById('welcome-el');
// let name='Rehan';
// let greeting='Welcome Back ';
// welcome.innerText=greeting + name;
// welcome.innerText+=" E"