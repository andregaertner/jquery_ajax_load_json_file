$(document).ready(function(){

  // define global Variables
  var items = [];
  var inputfilter;
  var duplicate = {};
  var i, attr, selectval;


  // get Json Data from file
  $.getJSON('file.json', function(data){

    // save json data in items
    items = data.employees;

    // fill select with options district
    for(i = 0; i < items.length; i++){
      $( "#district" ).append(
      '<option>'+items[i].district+'</option'
      );
    }


      // remove duplicate in option select district
      $('#district option').each(function() {
        var txt = $(this).text();
        if (duplicate[txt]){
          $(this).remove();
        }else{
        duplicate[txt] = true;
        }
      });

      // default
      // insert all data
      for(i = 0; i < items.length; i++){
        $( ".list2 tbody" ).append(
        '<tr>'+
        '<td>'+items[i].firstName+'</td>'+
        '<td>'+items[i].lastName+'</td>'+
        '<td>'+items[i].gender+'</td>'+
        '<td>'+items[i].district+'</td>'+
        '<td><a href="tel:'+items[i].phone+'">'+items[i].phone+'</a></td>'+
        '</tr>'
        );
      }
  });


  // function event 2 select fields
  $( "#gender, #district").change(function() {
    // get value select gender or district
    //console.log( gender.value );

    if($(this).attr("id") == 'gender'){
      selectval =  gender.value;
    }
    else{
      selectval =  district.value;
    }


    // get id from select field
    // console.log($(this).attr("id"));
    attr = $(this).attr("id");

    // remove lists in tables
    $(".list tbody").empty();
    $(".list2 tbody").empty();

    // inset data function
    insertData();
  });



  function insertData(){

    $.getJSON('file.json', function(data){

        // save json data in items
        items = data.employees;

        // abfrage gender
        for(i = 0; i < data.employees.length; i++){

          switch(attr) {
            case 'gender':
              // fügt alle Felder ein falls Sie übereinstimmen sonst links
              if(selectval == "all"){
                $( ".list2 tbody" ).append(
                  '<tr>'+
                  '<td>'+items[i].firstName+'</td>'+
                  '<td>'+items[i].lastName+'</td>'+
                  '<td>'+items[i].gender+'</td>'+
                  '<td>'+items[i].district+'</td>'+
                  '<td><a href="tel:'+items[i].phone+'">'+items[i].phone+'</a></td>'+
                  '</tr>'
                );
              }
              else if(selectval == items[i].gender){
                $( ".list2 tbody" ).append(
                  '<tr>'+
                  '<td>'+items[i].firstName+'</td>'+
                  '<td>'+items[i].lastName+'</td>'+
                  '<td>'+items[i].gender+'</td>'+
                  '<td>'+items[i].district+'</td>'+
                  '<td><a href="tel:'+items[i].phone+'">'+items[i].phone+'</a></td>'+
                  '</tr>'
                );
              }
              else{
                $( ".list tbody" ).append(
                  '<tr>'+
                  '<td>'+items[i].firstName+'</td>'+
                  '<td>'+items[i].lastName+'</td>'+
                  '<td>'+items[i].gender+'</td>'+
                  '<td>'+items[i].district+'</td>'+
                  '<td><a href="tel:'+items[i].phone+'">'+items[i].phone+'</a></td>'+
                  '</tr>'
                );
              }
            break;

            case 'district':
              // fügt alle Felder ein falls Sie übereinstimmen sonst links
              if(selectval == "all"){
                $( ".list2" ).append(
                  '<tr>'+
                  '<td>'+items[i].firstName+'</td>'+
                  '<td>'+items[i].lastName+'</td>'+
                  '<td>'+items[i].gender+'</td>'+
                  '<td>'+items[i].district+'</td>'+
                  '<td><a href="tel:'+items[i].phone+'">'+items[i].phone+'</a></td>'+
                  '</tr>'
                );
              }
              else if(selectval == items[i].district){
                $( ".list2" ).append(
                  '<tr>'+
                  '<td>'+items[i].firstName+'</td>'+
                  '<td>'+items[i].lastName+'</td>'+
                  '<td>'+items[i].gender+'</td>'+
                  '<td>'+items[i].district+'</td>'+
                  '<td><a href="tel:'+items[i].phone+'">'+items[i].phone+'</a></td>'+
                  '</tr>'
                );
              }
              else{
                $( ".list" ).append(
                  '<tr>'+
                  '<td>'+items[i].firstName+'</td>'+
                  '<td>'+items[i].lastName+'</td>'+
                  '<td>'+items[i].gender+'</td>'+
                  '<td>'+items[i].district+'</td>'+
                  '<td><a href="tel:'+items[i].phone+'">'+items[i].phone+'</a></td>'+
                  '</tr>'
                );
              }
            break;
          }

        }
    });
  }

});
