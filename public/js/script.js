$(document).ready(function () {

});

var files, file;

$("#dropfile").on("dragover dragenter", function (e) {
    e.preventDefault();
    e.stopPropagation();
    $("#dropfile").addClass("dragover");
});
$("#dropfile").on("dragleave dragend drop", function (e) {
    e.preventDefault();
    e.stopPropagation();
    $("#dropfile").removeClass("dragover");
});

function response(res) {
    console.log(res.responseText);
    alert(res.responseText);
}

$("#dropfile").on("drop", function (e) {
    e.preventDefault();
    e.stopPropagation();
    files = e.originalEvent.dataTransfer.files;
    file = files[0];
    var formdata = new FormData();
    formdata.append(file.name, file);
    $.ajax({
        url: '/upload',
        data: formdata,
        type: 'POST',
        processData: false,
        contentType: false,
        dataType: 'json',
        success: response,
        error: response
    });

    /*
    $.post("/upload",formdata,function(res){
        console.log(res);
    });
    */
});