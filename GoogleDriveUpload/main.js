//client id of web client - 611544725409-klj67os36p9le1ab1bnsp9bugtvti3lq.apps.googleusercontent.com  
//client secret of web client - QeTSwrg0iC2UK2C2sOzYY7fk 


 $(document).ready(function(){
     
    // client id in the project of Google API console

    var clientId = "611544725409-klj67os36p9le1ab1bnsp9bugtvti3lq.apps.googleusercontent.com";

    // redirect_uri of the created project

    var redirect_uri = "http://localhost:8012/GoogleDriveUpload/upload.html";

    // scope of the created project

    var scope = "https://www.googleapis.com/auth/drive";

    var url = "";


    // Event Click Listener for the button in the index.html page

    $("#login").click(function(){

       // method for invoking with four parameters

       signIn(clientId,redirect_uri,scope,url);

    });

    function signIn(clientId,redirect_uri,scope,url){
     
       // redirecting actual url after logging with the Google Account  

       url = "https://accounts.google.com/o/oauth2/v2/auth?redirect_uri="+redirect_uri
       +"&prompt=consent&response_type=code&client_id="+clientId+"&scope="+scope
       +"&access_type=offline";

       // user redirected to the url

       window.location = url;




    }



});