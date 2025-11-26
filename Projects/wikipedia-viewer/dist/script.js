$("#Search").click(function()
{ // get user input 
   var SearchTerm=$("#SearchTerm").val();
   var URL= "https://en.wikipedia.org/w/api.php?action=opensearch&search="+SearchTerm+"&format=json&origin=*";

   const xhr = new XMLHttpRequest
   xhr.responseType = "json"
   xhr.open("GET",URL)
   
   xhr.onload = () =>
   {
      if(xhr.readyState === XMLHttpRequest.DONE)
         {
            const data = xhr.response;
            renderResults(data)
            return xhr.response
         }
      
   }
   
   renderResults = (data) =>
   {
      $("#output").html('');// resets output list
      for(i=0;i<data[1].length;i++){
      $("#output").prepend("<a href="+data[3][i]+">"+data[1][i]+"</a><p>"+data[2][i]+"</p></li>");
      }
   }
   
   xhr.send()
});