
$(document).ready(function () {
  var curraccount;
  var selectedAccount;
  $.get('/getAccounts', function (response) {
    for(let i = 0; i < response.length; i++){
      curraccount = response[i];
      $('#options').append("<option value='"+curraccount+"'>"+curraccount+"</option>");
    }
  })

  $('#submit').click(function () {
    selectedAccount = $('#options').val();
    console.log(selectedAccount);
    $.post('/getBalance', {account : selectedAccount}, function (response) {
      $('.select').removeClass("active");
      $('.send').addClass("active");
      $('#account').text(selectedAccount);
      $('#balance').text(response);
    })
  })

  $('#send').click(function () {
    $('#status').text("Sending...");
    let amount = $('#amount').val();
    let receiver = $('#receiver').val();
    $.post('/sendCoin', {amount : amount, sender : selectedAccount, receiver : receiver}, function (response) {
      $('#balance').text(response);
    })
  });
})