function getSum() {
  var a = $("#a1").val()
  var b = $("#b1").val()

  console.log("Summing: " + a + " and " + b);

  $.get(`http://${document.domain}/api/sum/?a=` + a + "&b=" + b, function( data ) {
    $("body")
      .append(" Status: " + data.Status)
          .append(" Result: " + data.Result + "<br>")
    }, "json");

}

function getDiff() {
  var a = $("#a2").val()
  var b = $("#b2").val()

  console.log("Difference between: " + a + " and " + b);

  $.get(`http://${document.domain}/api/diff/?a=` + a + "&b=" + b, function( data ) {
    $("body")
      .append(" Status: " + data.Status)
      .append(" Result: " + data.Result + "<br>")
    }, "json");
}
