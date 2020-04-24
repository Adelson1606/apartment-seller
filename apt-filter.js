//Only start playing with this file if you're done with all the basics

const must = (radio) => radio.filter(rb => rb.checked).length

const findRelevantApts = function (address, minPrice, maxPrice, minRooms, maxRooms, parking, immediate) {
  const relevantApts = apartments.filter(a =>
    a.address.toLowerCase().includes(address.toLowerCase() || "") &&
        a.price >= (minPrice || 0) &&
        a.price <= (maxPrice || a.price) &&
        a.rooms >= (minRooms || 0) &&
        a.rooms <= (maxRooms || a.rooms)
  )

  
  const immediateCheck = immediate[0].checked 
  const parkingCheck = parking[0].checked
  return relevantApts
    .filter(a => {
      if (immediateCheck) {
        return a.immediate
      }
      return true
    })
    .filter(a => {
      if (parkingCheck) {
        return a.parking
      }
      return true
    })
}