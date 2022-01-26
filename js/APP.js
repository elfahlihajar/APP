/*---------------------------------operation supp-------------------------*/
var icons_dell=document.getElementsByClassName("fa-trash")
for(var i=0;i<icons_dell.length ;i++){
    icons_dell[i].addEventListener("click",supprimer);
}

function supprimer(){
    var c=confirm("Are you sur you would like to delete??");
   if(c){ this.parentElement.parentElement.remove();}
}
/*--------------------------------------------opération ajout-------------------*/
document.getElementById("add-task").addEventListener("click",ajout);
function ajout(){
    var task=document.getElementById("add").textContent.trim();
    if(task!=""){
        document.getElementById("ul").innerHTML+='<li class="list-group-item"><span contenteditable>'+task+'</span><div class="icon"><i class="fas fa-trash"></i><i class="fas fa-user-edit"></i> </div></li>'
        document.getElementById("add").textContent=" "
    }
    else{
        alert("task")
    }
    }
/*---------------------------operation chercher---------------------------------------*/
    document.getElementById("app").addEventListener("keyup",chercher)
    function chercher(){
        var cle = this.value.trim().toLowerCase();
        var tasks=document.getElementsByTagName("span")
       for (let i = 0; i < tasks.length; i++) {
        
       if(!tasks[i].textContent.toLocaleLowerCase().includes(cle))
           {
               tasks[i].parentElement.style.display="none"
           }
           else{
            tasks[i].parentElement.style.display="block"
           }
       }
    }