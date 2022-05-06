
var emai=/^([a-z0-9]{1,20})@([a-z0-9]{3,5})\.([a-z]{3,5})$/;
var paswd=/^([A-Za-z0-9]{5,10})$/;

// var r_em=/^([a-z0-9._]{1,20})@([a-z0-9]{1,6})\.([a-z.]{1,5})$/;

var r_fn=/^([A-Z]{1})([a-z]{3,9})$/;
var r_sn=/^([a-z]{1,10})$/;


var anlo=()=>{
    var x=document.getElementById("em").value;
    var y=document.getElementById("pwd").value;


    if(!x.match(emai))
    {
        location.href="./facebook login.html";
    }
    if(!y.match(paswd))
    {
        location.href="./facebook login.html";
    }
    if(x.match(emai) && y.match(paswd) )
    {
        swal("Good job!", "You LOGGED in Successfully!", "success");
    }
}

const onp=()=>{
    document.getElementById("flem").setAttribute("class","em1")
    document.getElementById("flpwd").setAttribute("class","pwd1")
}

const vali=()=>{
    var fle=document.getElementById("flem").value;
    var flp=document.getElementById("flpwd").value;

    
    if(!fle.match(emai))
    {   
       document.getElementById("flem").setAttribute("class","emdup");
    }
    if(!flp.match(paswd))
    {
        document.getElementById("flpwd").setAttribute("class","pwddup");
    }
    if(fle.match(emai) && flp.match(paswd) )
    {
        swal({
            title: "Good job!",
            text: "You LOGGED in Successfully!",
            icon: "success",
            button: "Aww yess!",
          });
    }
}


const fnvali=()=>{

    var a=document.getElementById("botem").value;
    var b=document.getElementById("botpwd").value;
    var c=document.getElementById("botfname").value;
    var d=document.getElementById("botsname").value;
    var e=document.getElementById("dt1");
    var e1=e.options[e.selectedIndex];
    var f=document.getElementById("dt2");
    var f1=f.options[f.selectedIndex];
    var g=document.getElementById("dt3");
    var g1=g.options[g.selectedIndex];
    var h=document.getElementById("male-outlined").checked;
    var i=document.getElementById("female-outlined").checked;
    var j=document.getElementById("custom-outlined").checked;
    var foc=0;

    if(!a.match(emai))
    {   
       
        document.getElementsByClassName("botemC")[0].setAttribute("class","botemdup");
       foc=1;
    }
    if(!b.match(paswd))
    {   
       
       document.getElementById("botpwd").setAttribute("id","botpwdd");
       foc=1;
    }
    if(!c.match(r_fn))
    {   
       
       document.getElementById("botfname").setAttribute("id","botfnamedup");
       foc=1;
    }
    if(!d.match(r_sn))
    {   
       
       document.getElementById("botsname").setAttribute("id","botsnamedup");
       foc=1;
       
    }
    if( e1.value=='' && f1.value=='' && g1.value=='')
    {   
        document.getElementById("dt1").setAttribute("id","dt1dup");
        document.getElementById("dt2").setAttribute("id","dt2dup");
        document.getElementById("dt3").setAttribute("id","dt3dup");
        foc=1;
    }

    if(h==false && i==false && j==false)
    {
        document.getElementById("g1").classList.add("btn", "btn-outline-primary", "gd1","gd11");
        document.getElementById("g2").classList.add("btn", "btn-outline-primary", "gd1","gd22");
        document.getElementById("g3").classList.add("btn", "btn-outline-primary", "gd1","gd33");
        foc=1;
    }
    if(h==true || i==true || j==true)
    {
        document.getElementById("g1").classList.add("btn", "btn-outline-primary", "gd1");
        document.getElementById("g2").classList.add("btn", "btn-outline-primary", "gd2");
        document.getElementById("g3").classList.add("btn", "btn-outline-primary", "gd3");
        foc=1;
    }

    if(a.match(emai) && b.match(paswd) && c.match(r_fn) && d.match(r_sn)  )
    {
        swal("Good job!", "You LOGGED in Successfully!", "success");
    }

    // if(foc=false)
    // {
    //     document.getElementById("botfname").focus;
    // }

}


const bubclk=(usethis)=>{

var id_value=document.getElementById(usethis).value;
//var usethat=document.getElementById(usethis).checked;

    if(id_value=="")
    {
        //document.getElementById("bb1").style.display="inline";
        document.getElementById(usethis).style.border="1px solid rgb(24,119,242)";
        document.getElementById(usethis).style.background="none";

    }

    else if(usethis="botsname")
    {
           document.getElementById("bb2").style.display="none";
    //     document.getElementById("bb1").style.left="875px";
    //     document.getElementById("bb1").style.transform="scaleX(-1)";
    //     document.getElementById(usethis).style.border="1px solid #DDDFE2";
    //     document.getElementById(usethis).style.background="none";
    }
   else if(usethis="botem")
    {
       // document.getElementById("bb3").style.display="inline-block";
        // document.getElementById("bb3").style.top="145px";
        // document.getElementById(usethis).style.border="1px solid #DDDFE2";
        // document.getElementById(usethis).style.background="none";
    }
    else if(usethis="botfname")
    {
        document.getElementById("bb1").style.display="none";
    }
    else if(usethis="botpwd")
    {
        //document.getElementById("bb4").style.display="inline-block";
    }
    else if(usethis="dt3" || usethis=="dt2" || usethis=="dt1" )
    {
        //document.getElementById("bb5").style.display="inline-block";
    }
//     if(usethat="custom-outlined" || usethat=="male-outlined" || usethat=="female-outlined"  )
//     {
//         document.getElementById("bb4").style.display="inline-block";
//     }
}


const blrclk=(usethis)=>{

var id_value=document.getElementById(usethis).value;

var a=document.getElementById("botem").value;
var b=document.getElementById("botpwd").value;
var c=document.getElementById("botfname").value;
var d=document.getElementById("botsname").value;
var e=document.getElementById("dt1");
var e1=e.options[e.selectedIndex];
var f=document.getElementById("dt2");
var f1=f.options[f.selectedIndex];
var g=document.getElementById("dt3");
var g1=g.options[g.selectedIndex];

    if(id_value=="")
    {
        document.getElementById(usethis).style.border="1px solid red";
        // document.getElementById(usethis).style.backgroundImage="url(./pic/exclmation.png)";
        // document.getElementById(usethis).style.backgroundRepeat="no-repeat";
        // document.getElementById(usethis).style.backgroundSize="20px";    
        // document.getElementById(usethis).style.backgroundPositionY="center";
        // document.getElementById(usethis).style.backgroundPositionX="160px";   
    }

    if(usethis=="botfname")
    {
        if(!c.match(r_fn))
        {   
           
            document.getElementById(usethis).style.border="1px solid red";
            document.getElementById(usethis).style.backgroundImage="url(./pic/exclmation.png)";
            document.getElementById(usethis).style.backgroundRepeat="no-repeat";
            document.getElementById(usethis).style.backgroundSize="20px";    
            document.getElementById(usethis).style.backgroundSize="20px";
            document.getElementById(usethis).style.backgroundPositionY="center";       
            document.getElementById(usethis).style.backgroundPositionX="160px";
            document.getElementById("bb1").style.display="inline";  
        }
     
    }
    if(usethis=="botsname")
    {
        if(!d.match(r_sn))
        {   
           
            document.getElementById(usethis).style.border="1px solid red";
            document.getElementById(usethis).style.backgroundImage="url(./pic/exclmation.png)";
            document.getElementById(usethis).style.backgroundRepeat="no-repeat";
            document.getElementById(usethis).style.backgroundSize="20px";    
            document.getElementById(usethis).style.backgroundSize="20px";
            document.getElementById(usethis).style.backgroundPositionY="center";       
            document.getElementById(usethis).style.backgroundPositionX="165px";
            document.getElementById("bb2").style.display="inline"; 
           
        }
      
    }
    if(usethis=="botem")
    {
        if(!a.match(emai))
        {   
           
            document.getElementById(usethis).style.border="1px solid red";
            document.getElementById(usethis).style.backgroundImage="url(./pic/exclmation.png)";
            document.getElementById(usethis).style.backgroundRepeat="no-repeat";
            document.getElementById(usethis).style.backgroundSize="20px";    
            document.getElementById(usethis).style.backgroundSize="20px";
            document.getElementById(usethis).style.backgroundPositionY="center";       
            document.getElementById(usethis).style.backgroundPositionX="380px";
            document.getElementById("bb3").style.display="inline";  
        }
            
    }
    if(usethis=="botpwd")
    {
            if(!b.match(paswd))
        {   
        
            document.getElementById(usethis).style.border="1px solid red";
            document.getElementById(usethis).style.backgroundImage="url(./pic/exclmation.png)";
            document.getElementById(usethis).style.backgroundRepeat="no-repeat";
            document.getElementById(usethis).style.backgroundSize="20px";    
            document.getElementById(usethis).style.backgroundSize="20px";
            document.getElementById(usethis).style.backgroundPositionY="center";       
            document.getElementById(usethis).style.backgroundPositionX="380px";
            document.getElementById("bb4").style.display="inline";
        }
       
    }
}


// const rl=()=>{
//     location.reload(true);
// 

const clr1=()=>{ 

    document.getElementById("bb1").style.display="none";

    }
const clr2=()=>{ 

    document.getElementById("bb1").style.display="none";

    }
const clr3=()=>{ 

    document.getElementById("bb1").style.display="none";

    }
const clr4=()=>{ 

    document.getElementById("bb1").style.display="none";

    }
const clr5=()=>{ 

    document.getElementById("bb1").style.display="none";

    }
