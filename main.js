HandlebarsIntl.registerWith(Handlebars);

$("button").on("click", function () {
  const address = $("#addr-input").val()
  const minPrice = $("#min-p-input").val()
  const maxPrice = $("#max-p-input").val()
  const minRooms = $("#min-r-input").val()
  const maxRooms = $("#max-r-input").val()
  const parking = $('#park-y')
  const immediate = $("#immed-y")

  const relevantApts = findRelevantApts(address, minPrice, maxPrice, minRooms, maxRooms, parking, immediate)
  renderApts(relevantApts)
})

const renderApts = function (apartments) {
  $("#results").empty()
  console.log(apartments) //array of apartments to render
    
  //Your code goes here.
  const source = $('#template').html()
  const template = Handlebars.compile(source)
  const newHTML = template({ apartments })
  
  // append our new html to the page
  $('#results').append(newHTML)
    
}

renderApts(apartments) //renders apartments when page loads