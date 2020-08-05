var tryLeft=3;

function Init()
{
    tryLeft=3;
    document.getElementById("lblTry").innerText=tryLeft+'  try left';
    document.getElementById('notify-failed').style.display="none";
    document.getElementById('notify-success').style.display="none";
    document.getElementById("padScreen").value=ActionClear();
}


function generatePin(){
    let x=Math.floor(1000 + Math.random()* 9000);
    document.getElementById("pin").value = x;
    Init();
}

function buttonAction(key){
    if(key!='bckSp' && key!='C')
    {
        document.getElementById("padScreen").value=ActionDigit(key);
    }
    else
    {
        if(key=='bckSp')
        {
            document.getElementById("padScreen").value=ActionBackSpace();
        }
        else
        {
            document.getElementById("padScreen").value=ActionClear();
        }
    }

}

function ActionDigit(key){
    let val=document.getElementById("padScreen").value;
      return  val += key;
        //return val;
}

function ActionBackSpace(key){
    let val=document.getElementById("padScreen").value;
       return val=val.substr(0,val.length-1);
        //return val;
}

function ActionClear(key){
    let val="";
        return val;
}



function onSubmitButtonClick(){
   
   
   if(tryLeft>0)
   {
    const x = document.getElementById("pin").value ;
     const y = document.getElementById("padScreen").value;
    if( x == y){
        document.getElementById("pin").value = "";
        document.getElementById("padScreen").value = "";
        document.getElementById('notify-failed').style.display="none";
        document.getElementById('notify-success').style.display="block";
    }
    else
    {
        document.getElementById('notify-success').style.display="none";
        document.getElementById('notify-failed').style.display="block";
         
    }

    tryLeft=tryLeft-1;
    document.getElementById("lblTry").innerText=tryLeft+'  try left';

   }



}
