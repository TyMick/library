$(function() {
  function displayResult(result) {
    $("#apiOutput").text(JSON.stringify(result, null, 2));
    hljs.highlightBlock(document.getElementById("apiOutput"));
    $("#apiOutputModal").modal("show");
  }

  $("#addBook").submit(function() {
    event.preventDefault();
    $.ajax({
      url: "/api/books",
      type: "post",
      data: { title: $("#addTitle").val() },
      success: displayResult
    });
  });

  $("#getAllBooks").submit(function() {
    event.preventDefault();
    $.ajax({
      url: "/api/books",
      type: "get",
      success: displayResult
    });
  });

  $("#deleteAllBooks").submit(function() {
    event.preventDefault();
    $.ajax({
      url: "/api/books",
      type: "delete",
      success: displayResult
    });
  });

  $("#addComment").submit(function() {
    event.preventDefault();
    $.ajax({
      url: "/api/books/" + $("#postId").val(),
      type: "post",
      data: { comment: $("#postComment").val() },
      success: displayResult
    });
  });

  $("#getOneBook").submit(function() {
    event.preventDefault();
    $.ajax({
      url: "/api/books/" + $("#getId").val(),
      type: "get",
      success: displayResult
    });
  });

  $("#deleteBook").submit(function() {
    event.preventDefault();
    $.ajax({
      url: "/api/books/" + $("#deleteId").val(),
      type: "delete",
      success: displayResult
    });
  });
});
