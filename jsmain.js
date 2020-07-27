function myFunct() {

    var z = document.getElementById("first-name").value;
    if (z == "")
    {
      alert("First-Name cannot be empty");
      return false;
    }
    var z = document.getElementById("last-name").value;
    if (z == "")
    {
      alert("Last-Name cannot be empty");
      return false;
    }
    var zz = document.getElementById("mobileno").value;
    if (zz == "")
    {
      alert("Phone Numbecannot be empty");
      return false;
    }
    y = parseInt(zz);
    if(y>10000000000 || y <1000000000 || isNaN(zz))
    {
      alert("Enter a valid phone number");
      return false;
    }
    var z = document.getElementById("email").value;
    if (z == "")
    {
      alert("EMAIL cannot be empty");
      return false;
    }
    var n = z.includes("@");
    if(n==false)
    {
      alert("Enter a valid Email address")
      return false
    }
   var z = document.getElementById("street").value;
    if (z == "")
    {
      alert("Street cannot be empty");
      return false;
    }
   var z = document.getElementById("city").value;
    if (z == "")
    {
      alert("city cannot be empty");
      return false;
    }
   var z = document.getElementById("state").value;
    if (z == "")
    {
      alert("State cannot be empty");
      return false;
    }
    
    var bname = document.getElementById("bookname").value;
  if (bname == "")
  {
    alert("Book Name cannot be empty");
    return false;
  }
var quan = document.getElementById("quantity").value;
  if (quan <=0 )
  {
    alert("Please place a atleast 1 quantity");
    return false;
  }

  



  
    let newdate=new Date(2020,8,7,5,15,15,0);
    console.log(newdate);

    let yr =newdate.getFullYear();
    console.log("The Year is:"+ yr );


    let dt =newdate.getDate();
    console.log("The Date is:"+ dt );
    
    let a=5;
    let b=20;
    let rd=a+(b-a)*Math.random();
    let r=Math.round(rd);
    console.log("random Date is:" + r);


    let mn =newdate.getMonth();
    console.log("The Month is:"+ mn );
    
    
    let hr =newdate.getHours();
    console.log("The Date is:"+ hr );
    
    





    var select=document.getElementById("bookname");
    if(select.value=='Select')
    {
      alert("Please select any one of the Book Name");
      return false;
    }

    if(select.value=='Poor Dad And Rich Dad')
    {
      var p = 'Rs.199' ;}
    if(select.value=='Zero To One')
    {
      var p = 'Rs.149' ;}
    if(select.value=='Think And Grow Rich')
    {
      var p = 'Rs.399' ;}
    if(select.value=='The 7 Habits Of Highly Effective People')
    {
      var p = 'Rs.499' ;}
    if(select.value=='The Power Of Subconscious Mind')
    {
      var p = 'Rs.299' ;
    }




    let fname= document.getElementById("first-name").value;
    let lname= document.getElementById("last-name").value;


    
    var table = document.getElementById("myTable");
    
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    
    cell1.innerHTML = fname + lname;
    cell2.innerHTML = document.getElementById("email").value;
    cell3.innerHTML = document.getElementById("mobileno").value;
    cell4.innerHTML = select.value;
    cell5.innerHTML = document.getElementById("quantity").value;
    cell6.innerHTML = yr+"/"+mn+"/"+r+"____before__"+hr+"pm"; 
    cell7.innerHTML = p;

alert("Successfully Added!!!  Please visit my Orders");
return false; 
    
}

//Content display

function myhome() {
  document.getElementById("cont1").style.display = "block";
  document.getElementById("c1").style.color = "white";
  document.getElementById("c2").style.color = "rgb(9, 136, 136)";
  document.getElementById("c3").style.color = "rgb(9, 136, 136)";
  document.getElementById("cont2").style.display = "none";
  document.getElementById("cont3").style.display = "none";
}
function myreg() {
  document.getElementById("cont2").style.display = "block";
  document.getElementById("c2").style.color = "white";
  document.getElementById("c1").style.color = "rgb(9, 136, 136)";
  document.getElementById("c3").style.color = "rgb(9, 136, 136)";
  document.getElementById("cont1").style.display = "none";
  document.getElementById("cont3").style.display = "none";
}
function mydisp() {
  document.getElementById("c3").style.color = "white";
  document.getElementById("c1").style.color = "rgb(9, 136, 136)";
  document.getElementById("c2").style.color = "rgb(9, 136, 136)";
  document.getElementById("cont1").style.display = "none";
  document.getElementById("cont2").style.display = "none";
  document.getElementById("cont3").style.display = "block";
}






