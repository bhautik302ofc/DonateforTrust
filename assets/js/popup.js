
function openForm() {
    document.getElementById("myForm").style.display = "block";
    document.getElementById("donatebtn").style.display = "none";
    document.getElementById("donateform").style.display = "none";
    document.getElementById("name").style.display = "none";
    document.getElementById("emails").style.display = "none";
    document.getElementById("amot").style.display = "none";
    document.getElementById("msg").style.display = "none";
    // loderend()    
  }
  function closeForm(event) {
    event.preventDefault()
    document.getElementById("myForm").style.display = "block";
  
  }
  
  
  // function openForm() {
  //     var pay = "form.html";
  //      document.getElementById("myForm").style.display = "block";
  //      // window.location = pay;
  //    }
     
  //    function closeForm(event) {
  //      event.preventDefault().style.display = "block";
  //    }
  