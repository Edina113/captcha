function validate()
{

  var checked = 0;
  
  var tblfruits = document.getElementById("tblfruits");
  var chks = document.getElementsByClassName("checkbox");
  
 
  for(var i=0; i<=8; i++){

    if(chks[i].checked && chks[i].id == fruit[random]){
      
      checked++;
      
    }
  }
console.log(checked);
  
  if(checked < 3){
    alert("osvježi stranicu i odaberi 3 odgovarajuće slikes");
    return false;
    location.reload(true);
  }
  else{
    
    return true;
  }
}

