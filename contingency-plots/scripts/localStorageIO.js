function writeLocalStorage(data) {
  toCache = {}
  console.log(data.length)
  if (data.length > 0) {
    $.each(data, function(i, elem) {
      console.log(elem['id'], elem['address_object']['raw'], 
        elem['address_object']['latitude'], 
        elem['address_object']['longitude'])
      toCache['id'] = elem['id']
      toCache['address'] = elem['address_object']['formatted_address']
      toCache['bedrooms'] = elem['bedrooms']
      toCache['bathrooms'] = elem['bathrooms']
      toCache['building_size'] = elem['building_size']
      toCache['car_spaces'] = elem['car_spaces']
      toCache['listing_type'] = elem['listing_type']
      toCache['price'] = elem['price']
      toCache['size_units'] = toCache['size_units']
      toCache['latitude'] = elem['address_object']['latitude']
      toCache['longitude'] = elem['address_object']['longitude']
      localStorage.setItem(elem['id'], JSON.stringify(toCache))
    })
  }
}

$.ajax
  url: murl,
    type: 'GET',
    contentType: 'text/json',
    dataType: 'json',
    success: function(resp) {
      console.log("success ajax")
      console.log(resp.length)
      writeLocalStorage(resp['results'])
    },
    error: function() {
      console.log('error')
    }
  })