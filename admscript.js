document.getElementById('detailsForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
   
    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var dep = document.getElementById('dep').value;
    var pno = document.getElementById('pno').value;

    // Construct the HTML to display the details
    var detailsHTML = "<h2>Entered Details:</h2>" +
                      "<p><strong>Name:</strong> " + name + "</p>" +
                      "<p><strong>Email:</strong> " + email + "</p>" +                    
                
                      "<p><strong>Department:</strong> " + dep + "</p>" +
                      "<p><strong>Phone Number:</strong> " + pno + "</p>"+
					   "<p><strong>Register Number:</strong> " + course + "</p>" ;

   
    var detailsDiv = document.getElementById('details');
    detailsDiv.innerHTML = detailsHTML;
    alert('response submitted');
});