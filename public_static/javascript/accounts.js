
$(document).ready(function () {
  $.get('/getAccounts', function (response) {

    for(let i = 0; i < response.length; i++){
      let curraccount = response[i];
      $('#options').append("<option value='"+curraccount+"'>"+curraccount+"</option>");
    }
  })
})