const button=document.querySelector('button');
const pass=document.querySelector('#pass');
const confpass=document.querySelector('#confpass');
const passworderror=document.querySelector('span');
console.log(pass.value);
confpass.addEventListener('keydown',()=>{
    if(pass.value!=confpass.value){
     
        passworderror.style.visibility='visible';
        };
        if(pass.value==confpass.value){
     
            passworderror.style.visibility='hidden';
            };
});
    