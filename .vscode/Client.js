    var ClientsList =[{name:"Client",password:"1",address:"staakener",phone:"010",email:"3moor@omarInc.com",gender:"male",date:"21/03/1999",owncard:false,IBAN:121312123,choosenvouchers:[],boughtvouchers:[],loan_request:0},{name:"Banker",password:"1"},{name:"IT",password:"1"}];//i will insert his info in this array in this format (name,password,address,phone,email,gender,birthdate)
    var currentUser;
    //rename all the IDs
    function Register(){
        var gender = document.getElementsByName('reggender');
        var chosenGender;
        for (var i = 0; i < gender.length; i++) {
            if (gender[i].checked) {
                chosenGender = gender[i].value;
            }
        }
        var client = {};
        if(document.getElementById("regname").value!="" &&
            document.getElementById("regpassword").value!="" &&
            document.getElementById("regaddress").value!="" &&
            document.getElementById("regphone").value!="" &&
            document.getElementById("regemail").value!="" &&
            chosenGender!=null &&
            document.getElementById("regdate").value!=null ){
                client.name = document.getElementById("regname").value;
                client.password = document.getElementById("regpassword").value;
                client.address = document.getElementById("regaddress").value;
                client.phone = document.getElementById("regphone").value;
                client.email = document.getElementById("regemail").value;
                client.gender = chosenGender;
                client.date = document.getElementById("regdate").value;
                client.owncard=false;
                var nameUsed = false;
                if(client.password.length>=8){
                for ( i = 0; i < ClientsList.length; i++) {
                    if (ClientsList[i].name === client.name) {
                        nameUsed = true;
                    }
                }
                capital=0;
                small=0;
                num=0;
                char=false;
                const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
                if(specialChars.test(client.password)){
                    char=true;
                    console.log(" found ")
                }
                for(i=0;i<client.password.length;i++){
                    if(!isNaN(client.password[i])){
                            num++;
                            console.log(client.password[i] +" num ")
                    }else{
                        if(client.password[i].toUpperCase() === client.password[i]&&!specialChars.test(client.password[i])){
                            capital++;
                            console.log(client.password[i] +" cap ")
                    }
                    else{
                        if(client.password[i].toLowerCase() === client.password[i]&&!specialChars.test(client.password[i])){
                            small++;
                            console.log(client.password[i] +" small ")
                    }
                    }
                    }
                }
                if ((!nameUsed)) {
                    if(num>0&&capital>0&&small>0&&char==true){
                    ClientsList.push(client);
                    window.location.href='SignIn.html';
                }else{
                    alert("contain at least one capital letter, one small letter, one number, and one special character.");
                }
            }
                else{
                    alert("this username exists")
                }}
                else{
                    alert("this password is too short");
                    window.location.href='Registeration.html';
                }
                //stores the information on the arrays 
            } else
                alert("fill all the requirements")
    }

    function SignedIn(){
    if(document.getElementById("signedname").value!="" &&
        document.getElementById("signedpassword").value!="" ){
            var userexist= false;
            loggedin = false;
            var client = {};
            client.name = document.getElementById("signedname").value;
            client.password = document.getElementById("signedpassword").value;
                //i will loop to check if the name and password exists in the list
                var i = 0;
                for (i = 0; i < ClientsList.length; i++) {
                    if (ClientsList[i].name === client.name) {
                        if(ClientsList[i].password !== client.password) 
                            alert("Wrong Username or Password");
                        else
                            loggedin = true;
                        userexist = true;
                        break;
                    }
                }
                if (loggedin) {
                    if(ClientsList[i].name =='Banker'){
                        window.location.href='file:///C:/Users/dell/OneDrive/Desktop/SE%20Project%20Test/.vscode/Banker%20Pages/HomePage(Banker).html';

                    }else{
                        if(ClientsList[i].name =='Client' ){
                            window.location.href='file:///C:/Users/dell/OneDrive/Desktop/SE%20Project%20Test/.vscode/Client%20Pages/HomePage(Client).html';
                            currentUser = ClientsList[i];
                        }
                        else{
                            window.location.href='file:///C:/Users/dell/OneDrive/Desktop/SE%20Project%20Test/.vscode/Admin%20Pages/HomePage(Admin).html';

                        }
                    }
                }
                if (!userexist){
                    alert("this username doesn't exists")
                }
                
            }else{
                alert("fill all the requirements")
            }
        }

    function printClients(){    
        for (var i = 0; i < ClientsList.length; i++) {
            console.log(ClientsList[i]);
        }
    }
    function DeleteCard_AddCard(){
        if(ClientsList[0].owncard){
            ClientsList[0].owncard=false;
            document.getElementById("img0").style.display="none";
            document.getElementById("addcredit_deletecredit").innerHTML="ADD Card";

        }
            else{ 
                ClientsList[0].owncard=true;
                document.getElementById("img0").style.display="initial";
                document.getElementById("addcredit_deletecredit").innerHTML="Delete Card";
                
            }
    }

    function LoanApplication(){
        if(document.getElementById("loan_amount").value!="" &&document.getElementById("Loan_Request").value!="" ){
        var loan_amount=document.getElementById("loan_amount").value;
        ClientsList[0].loan_request=loan_amount;
        var reasonofrequest=document.getElementById("Loan_Request").value;
        localStorage.setItem("reasonofrequest",reasonofrequest);
        localStorage.setItem("loan_amount",loan_amount);
        document.getElementById("statuss").innerText='Sent';
        }
        else{
            alert("fill all the requirements");
        }

    }

    function transferMoney(){
    if(document.getElementById("name").value!="" &&
    document.getElementById("yourIBAN").value!="" &&
    document.getElementById("amount").value!="" &&
    document.getElementById("accountName").value!="" &&
    document.getElementById("IBAN").value!=""){
        alert("Done");
        window.location.href='TransferMoney.html';
        // var currentmoney = document.getElementById("money").value;
        // var amounttospend= document.getElementById("amount").value;
        // if(amounttospend<currentmoney){
        //     var newmoney=(parseInt(currentmoney)-parseInt(amounttospend)).toString();
        //     document.getElementById("money").value=newmoney;
        //     document.getElementById("brand1").innerHTML+=`<div id="brand">
        //     <header class="logo"><img src="Store.png" alt="store logo" width="40" id="img1">  </header>
        //     <h2>€-${amounttospend}</h2>
        //     <br>
        //     </div>`;
        // }
        // else{    
        //         alert("you dont have enough money");

        //     }
        }
    else{
            alert("fill all the requirement");
        }
    }



    function CustomerMoney(){
        if(
        document.getElementById("amount").value!="" &&
        document.getElementById("accountName").value!="" &&
        document.getElementById("IBAN").value!=""){
            alert("Done");
            window.location.href='CustomerAccount.html';
            }
        else{
                alert("fill all the requirement");
            }
        }

        function record(ID) { //<-------------------------new from internet---------------------------------
            var recognition = new webkitSpeechRecognition();
            recognition.lang = "en-GB";

            recognition.onresult = function(event) {
                // console.log(event);
                document.getElementById(`${ID}`).value = event.results[0][0].transcript;
            }
            recognition.start();

        }    
        function speak(text) {//<---------------------------new from internet--------------------------------
            if ('speechSynthesis' in window && window.speechSynthesis) {
              speechSynthesis.speak(new SpeechSynthesisUtterance(text));
              console.log(text)
            } else {
              console.log('shit')
              console.error('Speech Synthesis API is not supported.');
            }
          }

    function opencredit(){
        window.location.href='CreditCard.html';
        // if(ClientsList[0].owncard){
        //     document.getElementById("img0").style.display="block";
        //     document.getElementById('addcredit_deletecredit').innerText="Delete Card";
        // }
        // else{ 
        //         console.log(document.getElementById("img0"));
        //         document.getElementById("img0").style.display="none";
        //         document.getElementById('addcredit_deletecredit').innerText="Add Card";
            
        //     }
    }
    function BuyWithPoints(){
        var totalpoints=0;
        if(ClientsList[0].choosenvouchers.length==0){
            alert("you dont have any vouchers");
        }else{
        for(i=0;i<ClientsList[0].choosenvouchers.length;i++){
        if(ClientsList[0].choosenvouchers[i]===1){   
            totalpoints+=5000;
        }else{
        if(ClientsList[0].choosenvouchers[i]===2){   
            totalpoints+=10000;
        }else{
        if(ClientsList[0].choosenvouchers[i]===3){   
            totalpoints+=15000;
        }
        else{   
            totalpoints+=30000;
        }}}
    }
    var currentpoints=parseInt(document.getElementById("points").innerText);
    if(currentpoints>=totalpoints){
    var newpoints=totalpoints-currentpoints;
    document.getElementById("points").innerText=newpoints;
    totalpoints=0;
    for(i=0;i<ClientsList[0].choosenvouchers.length;i++){
    ClientsList[0].boughtvouchers.push(ClientsList[0].choosenvouchers[i]);}
    ClientsList[0].choosenvouchers=[];
    document.getElementById('bt1').style.boxShadow='5px 5px 5px grey';
    document.getElementById('bt2').style.boxShadow='5px 5px 5px grey';
    document.getElementById('bt3').style.boxShadow='5px 5px 5px grey';
    document.getElementById('bt4').style.boxShadow='5px 5px 5px grey';
    }
    else{
        console.log(ClientsList[0].choosenvouchers);
        console.log(totalpoints);
        console.log(document.getElementById("points").innerText)
        alert("you dont have enough points");
        totalpoints=0;
        ClientsList[0].choosenvouchers=[];
        document.getElementById('bt1').style.boxShadow='5px 5px 5px grey';
        document.getElementById('bt2').style.boxShadow='5px 5px 5px grey';
        document.getElementById('bt3').style.boxShadow='5px 5px 5px grey';
        document.getElementById('bt4').style.boxShadow='5px 5px 5px grey';
    }}

    }
    function ChoosedVouchers(number){
        if(number===1){   
            ClientsList[0].choosenvouchers.push(1);
            document.getElementById('bt1').style.boxShadow='none'
        }else{
        if(number===2){   
            ClientsList[0].choosenvouchers.push(2);
            document.getElementById('bt2').style.boxShadow='none'
        }else{
        if(number===3){   
            ClientsList[0].choosenvouchers.push(3);
            document.getElementById('bt3').style.boxShadow='none'
        }
        else{   
            ClientsList[0].choosenvouchers.push(4);
            document.getElementById('bt4').style.boxShadow='none'
        }}}

    }
    function UseVouchers(num){ 
         if(num==1){
            document.getElementById('content1').style.display="none";
         }else{
            if(num==2){
                document.getElementById('content2').style.display="none";

            }else{
                if(num==3){
                    document.getElementById('content3').style.display="none";

                }else{
                    document.getElementById('content4').style.display="none";
                }
            }
         }

    }
    function requestacc(num){ 
        if(num==1){
           document.getElementById('request1').style.display="none";
           alert("thanks for helping me :)");
        }else{
           if(num==2){
               document.getElementById('request2').style.display="none";
               alert("thanks for helping me :)");

           }else{
               if(num==3){
                   document.getElementById('request3').style.display="none";
                   alert("thanks for helping me :)");

               }else{
                   document.getElementById('request4').style.display="none";
                   alert("thanks for helping me :)");

               }
           }
        }

   }
   function reply(num){ 
    if(num==1){
        if(document.getElementById('responce_to_Customer1').value!=""){
       document.getElementById('request1').style.display="none";
       alert("thanks for helping me :)");}
       else{
        alert("please write something");
       }
    }else{
       if(num==2){
        if(document.getElementById('responce_to_Customer2').value!=""){
            document.getElementById('request2').style.display="none";
            alert("thanks for helping me :)");}
            else{
             alert("please write something");
            }
       }else{
           if(num==3){
            if(document.getElementById('responce_to_Customer3').value!=""){
                document.getElementById('request3').style.display="none";
                alert("thanks for helping me :)");}
                else{
                 alert("please write something");
                }

           }else{
            if(document.getElementById('responce_to_Customer4').value!=""){
                document.getElementById('request4').style.display="none";
                alert("thanks for helping me :)");}
                else{
                 alert("please write something");
                }

           }
       }
    }

}
   function requestrej(num){ 
    if(num==1){
       document.getElementById('request1').style.display="none";

    }else{
       if(num==2){
           document.getElementById('request2').style.display="none";

       }else{
           if(num==3){
               document.getElementById('request3').style.display="none";

           }else{
               document.getElementById('request4').style.display="none";
           }
       }
    }

}
    function AddReminder(){
        if(document.getElementById("Reminder").value!="" && document.getElementById("Reason").value!="")
        {    var reminder=document.getElementById("Reminder").value;
        var reason=document.getElementById("Reason").value;
        document.getElementById("remind").innerHTML+= `<li onmouseover='speak(this.textContent)'>${reminder} -----> ${reason} </li> <br>`
        }
        else{
            alert("please enter the reminder");
            }
    }
    function Report(){
        if(!(document.getElementById("Report_Request1").value===" "))
    {    var report=document.getElementById("Report_Request1").value;
       //localStorage.setItem("reported",report);
       alert('Sent');
        window.location.href="Report.html";
        
    }
        else{
            alert("please enter the reason for the report");
        }
    }
    function LogOut(){
        currentUser = null;
        window.location.href='SignIn.html';
    }
    function DeleteAccount(){
        if(!(document.getElementsByName("Report_Request2").value==" "))
        {
            ClientsList = ClientsList.filter((client) => client != currentUser);
            currentUser = null;
            alert('Account Deleted')
            window.location.href='file:///C:/Users/dell/OneDrive/Desktop/SE%20Project%20Test/.vscode/SignIn.html';
    }
    else{
        alert("please enter the reason for deleting the account");
    }
    }