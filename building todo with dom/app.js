let btn= document.querySelector('button');
let ul= document.querySelector("ul");
let inp= document.querySelector('input');

btn.addEventListener("click",function(){    
    let task= document.createElement("li");
    
    task.innerText=inp.value;
    let dltbtn= document.createElement("button");
    dltbtn.innerText="delete";
    dltbtn.classList.add("del");
    ul.appendChild(task);
    task.append(dltbtn);
    inp.value="";
})


// let deleteTask= document.querySelectorAll(".del");
// for(task of deleteTask){
// task.addEventListener("click",function(){   // no event deligation which is wrong because it wont work for new elements
//      let par=this.parentElement;
//      console.log(par);
//      par.remove();
     
    
// })
// }


// event deligation aka event bubbling

ul.addEventListener("click",function(event){
    // console.log(event.target)
    // console.dir(event.target)
    // console.log(event.target.nodeName);
    
      if( event.target.nodeName == "BUTTON"){
        let listItem= event.target.parentElement;
        listItem.remove();
        
      }
    
})