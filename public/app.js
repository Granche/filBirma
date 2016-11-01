$(document).ready(function(){

  $.ajax({
    url: "/bilar",
    type: 'GET',
    success: function(result) {
      result.forEach(function(data){
        putter(data);

      })
    }
  });

});

function putter(data) {
  var regDiv = document.createElement("div");
        var modDiv = document.createElement("div");
        var skaDiv = document.createElement("div");
        var ownDiv = document.createElement("div");
        var holder = document.createElement("div");
        var checkbox = document.createElement('input');

        holder.id = "holder";
        regDiv.id = "regDiv";
        modDiv.id = "modDiv";
        skaDiv.id = "skaDiv";
        ownDiv.id = "ownDiv";
        holder.className = "col-md-5"
        checkbox.type = "checkbox";
        checkbox.id = "krysset";


        regDiv.innerHTML = data.registration;
        modDiv.innerHTML = data.model;     
        skaDiv.innerHTML = data.damage;
        ownDiv.innerHTML = data.owner;        
        

        holder.appendChild(modDiv);
        holder.appendChild(regDiv);
        holder.appendChild(skaDiv);
        holder.appendChild(ownDiv);
        holder.appendChild(checkbox);



        document.getElementById("mainFrame").appendChild(holder);

        $("krysset").change(function(){
          alert("Hello")
        });
}