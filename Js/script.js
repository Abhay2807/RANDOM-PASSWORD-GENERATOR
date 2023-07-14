// DATA SETS TO GENERATE PASSWORD

const upperCaseSet="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCaseSet="abcdefghijklmnopqrstuvwxyz";
const numberSet="1234567890";
const symbolSet="!@#$%^&*()/~|?><";


// Selectors

const  passwordDisplay=document.getElementById("pass-box");
const  passwordLength=document.getElementById("total-char");
const  upperCheck=document.getElementById("upper-case");
const  lowerCheck=document.getElementById("lower-case");
const  numberCheck=document.getElementById("numbers");
const  symbolCheck=document.getElementById("symbols");
const  btnToGenerate=document.getElementById("btn");


btnToGenerate.addEventListener('click',()=>
{
  passwordGenerator();
});





function randomDataSetGenerator (dataSet)
{
  return dataSet[ Math.floor ( Math.random() * dataSet.length ) ];
}




function passwordGenerator(password="")
{
  if(upperCheck.checked)
  {
    password+=randomDataSetGenerator(upperCaseSet);
  }
  if(lowerCheck.checked)
  {
    password+=randomDataSetGenerator(lowerCaseSet);
  }
  if(numberCheck.checked)
  {
    password+=randomDataSetGenerator(numberSet);
  }
  if(symbolCheck.checked)
  {
    password+=randomDataSetGenerator(symbolSet);
  }

  if(password.length < passwordLength.value)
  {
    return passwordGenerator(password);
  }


  //console.log(properLengthPassword(password,passwordLength.value));
  passwordDisplay.innerHTML=properLengthPassword(password,passwordLength.value);
  navigator.clipboard.writeText(password);
}


function properLengthPassword(str,num)
{
  if(str.length > num)
  {
    let stringNew=str.substring(0,num);
    return stringNew;
  }
  else
  {
    return str;
  }
}






