//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here


// *************** SPACE-PROTO ****************** select a destination pg
router.post('/space-proto/what-is-your-name', function(request, response) {
  if (request.session.data['destination'] === undefined){
      response.redirect("/space-proto/select-a-destination-error")
  } else {
      response.redirect("/space-proto/what-is-your-name")
  }
})
router.post('/space-proto/what-is-your-name-error', function(request, response) {
  if (request.session.data['destination'] === undefined){
      response.redirect("/space-proto/select-a-destination-error")
  } else {
      response.redirect("/space-proto/what-is-your-name")
  }
})
// ********************************************** what is your name pg
router.post('/space-proto/what-is-your-address', function(request, response) {
  if (request.session.data['full-name'] == ''){
      response.redirect("/space-proto/what-is-your-name-error")
  } else {
      response.redirect("/space-proto/what-is-your-address")
  }
})
router.post('/space-proto/what-is-your-name-error', function(request, response) {
  if (request.session.data['full-name'] == ''){
      response.redirect("/space-proto/what-is-your-name-error")
  } else {
      response.redirect("/space-proto/what-is-your-address")
  }
})
// ********************************************** what is your address pg
router.post('/space-proto/check-your-answers', function(request, response) {
  const addressline1 = request.session.data['address-line-1']
  const addresstown = request.session.data['address-town']
  const addresspostcode = request.session.data['address-postcode']

  if ((addressline1 == '') && (addresstown != '') && (addresspostcode != '')){  
      response.redirect("/space-proto/what-is-your-address-error-1")
  } else if ((addressline1 == '') && (addresstown == '') && (addresspostcode != '')){ 
      response.redirect("/space-proto/what-is-your-address-error-2") 
  } else if ((addressline1 == '') && (addresstown == '') && (addresspostcode == '')){  
      response.redirect("/space-proto/what-is-your-address-error-3") 
  } else if ((addressline1 != '') && (addresstown == '') && (addresspostcode == '')){  
      response.redirect("/space-proto/what-is-your-address-error-4")   
  } else if ((addressline1 != '') && (addresstown != '') && (addresspostcode == '')){  
      response.redirect("/space-proto/what-is-your-address-error-5")  
  } else if ((addressline1 != '') && (addresstown == '') && (addresspostcode != '')){  
    response.redirect("/space-proto/what-is-your-address-error-6")
  } else {
      response.redirect("/space-proto/check-your-answers")
  }
})



