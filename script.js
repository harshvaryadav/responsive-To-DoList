function fun(){
    $("#add").click(Add); 
    fun2();
}
function fun2(){
   let tasks=getstore();
   for(let x of tasks)
   {
       $("#b").val(x);
       add();
   }
}
function Add(){
   var v=$("#b").val();
   if(v!="")
   {
      $("#b").val("");  
      var div1=$("<div></div>");
      var ele1=$("<h2></h2>");
      var ele2=$("<h2>Remove</h2>"); 
      v=convert(v);
      ele1.text(v);
      div1.append(ele1,ele2);   
      div1.addClass("D");
      ele2.addClass("Del");
      $("#d").append(div1);
      ele2.click(function(){
           let p=ele2.parent();
           var v=ele2.prev().text();
           p.remove();
           let tasks=getstore();
           for(x in tasks)
           {
               if(tasks[x]==v)
               {
                  tasks.splice(x,1);
                  break;
               }
           }
           localStorage.setItem("task",JSON.stringify(tasks));
      });
      let tasks=getstore();  
      tasks.push(v);
      localStorage.setItem("task",JSON.stringify(tasks)); 
      div1.css({"animation":"Animate 0.8s linear 1"}); 
   }
 }
 function add()
 {
   var v=$("#b").val();
   if(v!="")
   {
      $("#b").val("");  
      var div1=$("<div></div>");
      var ele1=$("<h2></h2>");
      var ele2=$("<h2>Remove</h2>"); 
      v=convert(v);
      ele1.text(v);
      div1.append(ele1,ele2);   
      div1.addClass("D");
      ele2.addClass("Del");
      $("#d").append(div1);
      ele2.click(function(){
           let p=ele2.parent();
           var v=ele2.prev().text();
           p.remove();
           let tasks=getstore();
           for(x in tasks)
           {
               if(tasks[x]==v)
               {
                  tasks.splice(x,1);
                  break;
               }
           }
           localStorage.setItem("task",JSON.stringify(tasks));
      });
   }
 }
function getstore()
{
    let L=[];
    if(localStorage.getItem("task")===null)
    {
       return L;    
    }
    else 
    {
      L=JSON.parse(localStorage.getItem("task"));
      return L;
    }
}
function convert(s)
{
         let S="";
         for(let i=0;i<s.length;i++)
         {
             if(i==0||s[i-1]==' ')
             {
                S=S+s[i].toUpperCase();
             }
             else
             {
                S=S+s[i];
             }
         }
         return S;
}