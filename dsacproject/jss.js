const tasklist=document.querySelector(".tasklist");
const addtask=document.querySelector('.addtask');
const inputname=document.querySelector('.name');
const inputdate=document.querySelector('.date');
const completedlist=document.querySelector('.completedlist');
const intial=document.querySelector(".intial");
const final=document.querySelector(".final");
const search=document.querySelector(".find");
const right1=document.querySelector(".right1");
const create=document.querySelector(".create");
const filterarray=[];
var namee="";
var datee="";
var intialdate="";
var finaldate="";
const array=[];
var idd;

function searchhandeler(intialdate,finaldate){
right1.innerHTML="";
  array.forEach((item)=>{
    if(item.date>=intialdate && item.date<=finaldate){
       filterarray.push(item);
       const temp=document.createElement('p');
     
       temp.innerHTML=`<div class=""><div class='buchi text1'> TaskName- "${item.name}" Shedule Date- "${item.date}"</div> <button class="botton" onclick="deletehandler(${item.id})"> delete</button>
       <button class="botton" onclick="edithandler(${item.id})"> edit</button>  
       <button class="botton" onclick="complectedhandler(${item.id})"> complected</button></div>`
right1.appendChild(temp)
    }
  })
  console.log(filterarray);
}
search.addEventListener("click",()=>{
    searchhandeler(intialdate,finaldate);
})
intial.addEventListener("change",(e)=>{
    intialdate=e.target.value;
})
final.addEventListener("change",(e)=>{
finaldate=e.target.value;
//create.textContent="edit task";
})
var id=0;
const carray=[];
function deletehandler (id){
   array.splice(id,1);
   var temp=0;
   array.forEach((item)=>{
    item.id=temp;
    temp++;
   })
   arrayrender();
}
function complectedhandler(id){
    completedlist.innerHTML='';
carray.push(array[id]);
carray.forEach((item)=>{
    const temp=document.createElement('p');
     
    temp.innerHTML=`<div class='buchi text1'> TaskName- "${item.name}" Shedule Date- "${item.date}" 
     
   </div>`


   deletehandler(id);
completedlist.appendChild(temp)
})
}
function edithandler(id){
//addtask.textContent="edit task";
create.textContent="EDIT TASK";
addtask.textContent='Edit task';
idd=id;

}

function arrayrender(){
    console.log(array);
    tasklist.innerHTML='';
    array.forEach((item)=>{
       
        const temp=document.createElement('p');
     
        temp.innerHTML=`<div class=""><div class='buchi text1'> TaskName- "${item.name}" Shedule Date- "${item.date}"</div> <button class="botton" onclick="deletehandler(${item.id})"> delete</button>
        <button class="botton" onclick="edithandler(${item.id})"> edit</button>  
        <button class="botton" onclick="complectedhandler(${item.id})"> complected</button></div>`
tasklist.appendChild(temp)
    })
}
inputname.addEventListener('change',(e)=>{
   
    namee=e.target.value;
   
    
})
inputdate.addEventListener('change',(e)=>{
    datee=e.target.value;

    console.log(datee)
})
addtask.addEventListener("click",()=>{
    if(addtask.textContent=="add task"){
        
        console.log("yes");
        const element={name:namee,date:datee,id:id};
        id++;
        array.push(element);
        var temp=0;
        array.forEach((item)=>{
         item.id=temp;
         temp++;
        })
         arrayrender();
    }
    else{
        console.log("edit")
        array[idd].name=namee;
        array[idd].date=datee;
        arrayrender();
addtask.textContent="add task";
create.textContent="CREATE TASK";
    }
  
})
