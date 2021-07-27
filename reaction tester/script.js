   var start= new Date().getTime();

    // random color

   function getrandomcolor() {
      
      // random colors will be taken ex:-like html code (11wdagd") 

      var letters = '0123456789ABCDEF'.split('');
      
      var color = '#'; 
      
      for (i=0 ; i < 6 ; i++) {
      
         // appending colors blw like from one clr to anthr 
      
         color += letters[Math.floor(Math.random() * 16)]; 
      }
  
      return color;
  
   }

   // to make the shape
   
   function makeShapeAppear(){

      var top = Math.random() * 400;

      var left = Math.random() * 400;

      var width = Math.random() * 400;
     

      // to get a circle

      if (Math.random() > 0.5) {
      
         document.getElementById("shape").style.borderRadius = "50%";

      } 
       
      else {
           
         document.getElementById("shape").style.borderRadius ="0";

      }

      // random shape changer
     
      document.getElementById("shape").style.backgroundColor = getrandomcolor();

      
      document.getElementById("shape").style.width = width + "px";

      
      document.getElementById("shape").style.height = width + "px";
       
      document.getElementById("shape").style.top = top + "px";

      
      document.getElementById("shape").style.left = left + "px";
    
     document.getElementById("shape").style.display="block";
 
     start= new Date().getTime();

    }

     function appearafterdelay() {
 
        setTimeout(makeShapeAppear , Math.random() * 1100); 

     }

     appearafterdelay();

    document.getElementById("shape").onclick = function() {

    document.getElementById("shape").style.display = "none";  
  
   var end = new Date().getTime();
   
   var timetaken = (end - start) /1000;

   // "S" blw means seconds 

  document.getElementById("timetaken").innerHTML = timetaken + "s";
 
  appearafterdelay();

}