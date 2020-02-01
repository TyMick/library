$(function() {
  function displayResult(result) {
    $("#apiOutput").text(JSON.stringify(result, null, 2));
    hljs.highlightBlock(document.getElementById("apiOutput"));
    $("#apiOutputModal").modal("show");
  }

  $("#addBook").submit(function() {
    event.preventDefault();
    $("button").attr("disabled", true);
    $("button", this).html(
      '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span><span class="sr-only">Loading...</span>'
    );
    $.ajax({
      url: "/api/books",
      type: "post",
      data: { title: $("#addTitle").val() },
      success: function(data) {
        displayResult(data);
        $("#addBook button").html("POST");
        $("button").removeAttr("disabled");
      }
    });
  });

  $("#getAllBooks").submit(function() {
    event.preventDefault();
    $("button").attr("disabled", true);
    $("button", this).html(
      '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span><span class="sr-only">Loading...</span>'
    );
    $.ajax({
      url: "/api/books",
      type: "get",
      success: function(data) {
        displayResult(data);
        $("#getAllBooks button").html("GET");
        $("button").removeAttr("disabled");
      }
    });
  });

  $("#deleteAllBooks").submit(function() {
    event.preventDefault();
    $("button").attr("disabled", true);
    $("button", this).html(
      '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span><span class="sr-only">Loading...</span>'
    );
    $.ajax({
      url: "/api/books",
      type: "delete",
      success: function(data) {
        displayResult(data);
        $("#deleteAllBooks button").html("DELETE");
        $("button").removeAttr("disabled");
      }
    });
  });

  $("#addComment").submit(function() {
    event.preventDefault();
    $("button").attr("disabled", true);
    $("button", this).html(
      '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span><span class="sr-only">Loading...</span>'
    );
    $.ajax({
      url: "/api/books/" + $("#postId").val(),
      type: "post",
      data: { comment: $("#postComment").val() },
      success: function(data) {
        displayResult(data);
        $("#addComment button").html("POST");
        $("button").removeAttr("disabled");
      }
    });
  });

  $("#getOneBook").submit(function() {
    event.preventDefault();
    $("button").attr("disabled", true);
    $("button", this).html(
      '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span><span class="sr-only">Loading...</span>'
    );
    $.ajax({
      url: "/api/books/" + $("#getId").val(),
      type: "get",
      success: function(data) {
        displayResult(data);
        $("#getOneBook button").html("GET");
        $("button").removeAttr("disabled");
      }
    });
  });

  $("#deleteBook").submit(function() {
    event.preventDefault();
    $("button").attr("disabled", true);
    $("button", this).html(
      '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span><span class="sr-only">Loading...</span>'
    );
    $.ajax({
      url: "/api/books/" + $("#deleteId").val(),
      type: "delete",
      success: function(data) {
        displayResult(data);
        $("#deleteBook button").html("DELETE");
        $("button").removeAttr("disabled");
      }
    });
  });
});
