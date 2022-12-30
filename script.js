function submitform(){
    let FirstName=document.getElementById("firstname").value;
    let LastName=document.getElementById("lastname").value;
    let Email=document.getElementById("email").value;
    console.log(FirstName,LastName,Email);

     if(FirstName && LastName && Email)
     {
        alert("Form Submitted Successfully");
    }
    else{
        alert("All fields need to be filled");
    }
}