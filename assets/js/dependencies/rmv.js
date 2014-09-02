$(document).ready(function() {
  $('#delBtn').click(function() {
    $.get("/delUrl?urlId=" + this.value, function(data) {
     location.href = '/dashboard'
    })
  })
})