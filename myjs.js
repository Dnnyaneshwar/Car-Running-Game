var x;
var m=0;
function start()
{
 x=setInterval(anim,100);
 
  function anim()
  {
      
      console.log(m);
        if(m==1200)
        {
            clearInterval(x);           
            m=0;
        }
        
        else
        {
            m=m+5;
            document.getElementById("img").style.visibility="visible";
            var target=document.getElementById("img");
            target.style.marginLeft=m+'px';
        }
  }
}
		var timer;
var ele=document.getElementById('timer');

(function (){
	var sec=0;
	timer=setInterval(()=>{
		ele.innerHTML='00:'+sec;
		sec++;
	},1000)//each 1 second
})()
   



function stop()
{
	clearInterval(x);
	clearInterval(timer);
}