function check(){
let lengthofStoreditems=localStorage.length;
let userName=document.getElementById('UserName').value;
let checkDigit=0;
for(let i=0;i<=lengthofStoreditems;i++){
if(userName==localStorage.key(i))
{
    checkDigit=1
}

}
if(checkDigit==1)
{

    alert("Username Already Taken");
    return 1;
}
else
{

    alert("You can use This Username");
}
}

function printMessage(){
    let returnValue=check();
    if(returnValue==1)
    {
        alert("Username Already Taken");
    }
    else{
    let userName=document.getElementById('UserName').value;
    console.log(userName);
    let passWord=document.getElementById('PassWord').value;
    console.log(passWord);
   localStorage.setItem(userName,passWord);
   alert("Sign Up Successful");
}
   
}
function checkMessage(){
    let userName=document.getElementById('UserName').value;
    let passWord=document.getElementById('PassWord').value;
    let lengthofStorage=localStorage.length;
    let  signIncheck=0;
    for(let i=0;i<lengthofStorage;i++){
          let checkUsername=localStorage.key(i);
          let chekPassword=localStorage.getItem(checkUsername);
          if(userName==checkUsername&&passWord==chekPassword){
           signIncheck=1;
          }
    }
    console.log(signIncheck);
    if (signIncheck==1) {
        alert("You can login");
        
    } else {
        alert("You have entered   wrong combination");
    }
}