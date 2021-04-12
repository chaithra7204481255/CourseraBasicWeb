// Event handling
document.addEventListener("DOMContentLoaded", 

    function (event) {
    
    // Unobtrusive event binding
    document.querySelector("button")
      .addEventListener("click", function () {
        
        // Call server to get the name
        $ajaxUtils
          .sendGetRequest("data/name.txt", 
          // callback function
            function (request) {
              // console.log("request is " + request);
              var name = request.responseText;
              // console.log("name is " + name);
              document.querySelector("#content")
                .innerHTML = "<h2>Hello " + name + "!</h2>";
            });

        
      });
  }
);
