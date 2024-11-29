function openPopup() {
    document.getElementById("project1-popup").style.display = "block";
}

function closePopup() {
    document.getElementById("project1-popup").style.display = "none";
}
//Close modal if clicked outside of the modal-content
window.onclick = function(event){
var modal = document.getElementById("project1-popup");
if (event.target == modal) {
    modal.style.display = "none";
}
}

function openPopup2() {
document.getElementById("project2-popup").style.display = "block";
}

function closePopup2() {
document.getElementById("project2-popup").style.display = "none";
}
//Close modal if clicked outside of the modal-content
window.onclick = function(event){
var modal = document.getElementById("project2-popup");
if (event.target == modal) {
modal.style.display = "none";
}
}



document.addEventListener("DOMContentLoaded", function() {
    const submitButton = document.getElementById("HireForm");

    if (submitButton) {
        submitButton.addEventListener("submit", function(event) {
            event.preventDefault();

            // Accessing the value of each field correctly using querySelector
            var Name = document.getElementsByClassName("form-Name")[0].value;
            var Company = document.getElementsByClassName("form-Company Name")[0].value;
            var Email = document.getElementsByClassName("form-Email Address")[0].value;
            var Phone = document.getElementsByClassName("form-Phone number")[0].value;
            var Comment = document.getElementsByClassName("form-Comments")[0].value;
/*          Both are working
            const Name = document.querySelector('.form-Name')?.value || '';
            const Company = document.querySelector('.form-Company')?.value || '';
            const Email = document.querySelector('.form-Email')?.value || '';
            const Phone = document.querySelector('.form-Phone')?.value || '';
            const Comment = document.querySelector('.form-Comments')?.value || '';
*/
      /*      console.log("Name:", Name);
            console.log("Company:", Company);
            console.log("Email:", Email);
            console.log("Phone:", Phone);
            console.log("Comment:", Comment);
*/
            // Check if any required fields are empty and show alert
            if (!Name || !Company || !Email || !Phone || !Comment) {
                console.log("Some fields are empty!");
                alert("Please fill in all required fields.");
            } else {
                console.log("Form data is being processed.");
                alert("Thank you for reaching out.");
            }
        });

        // API call
        try{  
    
            const authURL = 'https://mc6353jttgq-cj00j40yqn43-7rm.auth.marketingcloudapis.com/v2/token';
            
             const authPayload = '{"grant_type":"client_credentials","client_id":"847lboq3x830xb6ad5xuzwn5","client_secret":"oQx3fZBGiYPu5joAgKiijm4e","account_id":"515009353"}';  
          
               const accessTokenResult = HTTP.Post(authURL, 'application/json', authPayload);
               const tokenResponse = JSON.parse (accessTokenResult.Response[0]);
               const access_token = 'Bearer '+tokenResponse.access_token;
          
               console.log(access_token);
              /*      
            Write(Stringify(authURL));"<br>"
              Write(Stringify(authPayload));"<br>"
                Write(Stringify(accessTokenResult));"<br>"
                  Write(Stringify(tokenResponse));"<br>"
               Write(Stringify(access_token));"<br>"
          */
              /*
          var totalclicks = Platform.Function.Lookup("Click_TrackingSB","Total_Clicks","EmailAddress",EmailAddress,"Campaign",Campaign);  
          
          
              //Lookup to retrive Total_Clicks from Click_TrackingSB (DE)
              
             if (totalclicks == null)       
               {totalclicks = 1;}//check totalclicks is empty and set value
              else      
               {totalclicks = parseInt(totalclicks + 1);}// if not empty add 1
             Platform.Variable.SetValue('Total_Clicks',totalclicks);  
             */
          /*
          var payload = {
            ContactKey: EmailAddress ,
            EventDefinitionKey: "Click_Tracking" ,
            Data: { EmailAddress: EmailAddress , Campaign: Campaign , Latest_Click: Latest_Click , Type: Type , Total_Clicks: totalclicks }}
          */
          
           var payload = '{"ContactKey": "'+Email+'",';
          payload += '"EventDefinitionKey":"Click_TrackingSB",';
          payload += '"Data": {' 
          payload += '"EmailAddress":"'+Email+'",';
          payload += '"Campaign":"'+Company+'"}}';
           
            var URL_Post = 'https://mc6353jttgq-cj00j40yqn43-7rm.rest.marketingcloudapis.com/interaction/v1/events';   
            var headerNames = ['Authorization'];
            var headerValues = [access_token];
           
            /*
           
              Write("headerValues:"+headerValues[0]+"<br>"); 
              Write("URL:"+URL_Post+"<br>");
              Write("access_token:"+access_token+"<br>");
              Write("payload:"+payload+"<br>");
           */
            var JB_Send_Response = HTTP.Post(URL_Post, 'application/json', payload, headerNames, headerValues); 
         // console.log(JB_Send_Response);
          //  Write(Stringify(JB_Send_Response));
            
            }
          catch(e){
           Write(e);
          } 


    } else {
        console.log("Error in your details please check");
    }
});

/*
// Salesforce CRM API endpoint
const apiURL = "https://rakesh-2d9-dev-ed.lightning.force.com/services/data";

// Salesforce authentication details
const consumerKey = "3MVG9pRzvMkjMb6mYOSQSfl4OSaw3Q1BrqSN1WojbMZ_DTUwIib_f74gSCSzOCYZB_6rTZjm45sxDP47puUCG";
const consumerSecret = "9CEF266A2ECE222CF92A76916B3EC2974A88F6357DEDD58DE626997A4E3D2249";

const accessToken = "6Cel800D5j00000B78EK888J4000000Kzfwe77BYPKSoagJaoKFLsQrFJCWC8d7MQvuLTBe9HvN4UzaFA1PSMCReSyUn5B127y1gdwxHGH2";

// API call ki required headers prepare chestunnam
const headers = new Headers();
headers.append("Authorization", "Bearer " + accessToken);
headers.append("Content-Type", "application/json");

// Request options create cheyyadam (method, headers, body)
const options = {
    method: "POST",
    headers: headers,
    body: JSON.stringify(leadData)
};

// Print debug messages console lo check cheyyadam ki
console.log("Starting API call...");
fetch(apiURL, options)
.then(response => {
    console.log(response);
    if (response.ok) {
        return response.json();
    } else {
        throw new Error("Server Error: " + response.status);
    }
})
.then(data => {
    console.log("Data received:", data);
    if (data.success) {
        alert("Lead created successfully!");
    } else {
        alert("Failed to create lead. Check console for errors.");
        console.error(data);
    }
})
.catch(error => {
    alert("Error in sending request. Check console for details.");
    console.error("Error details:", error);
});
*/
