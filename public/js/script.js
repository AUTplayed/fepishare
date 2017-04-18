$(document).ready(function () {

});

var files;

$("#dropfile").on("dragover dragenter", function (e) {
    e.preventDefault();
    e.stopPropagation();
    $("#dropfile").addClass("dragover");
    $("#textwrapper").html("release now lol");
});
$("#dropfile").on("dragleave dragend drop", function (e) {
    e.preventDefault();
    e.stopPropagation();
    $("#dropfile").removeClass("dragover");
    $("#textwrapper").html("drop files here lol");
});

function response(res) {
    console.log(res.responseText);
    $("#spinner").css("display","none");
    if(res.responseText!="nah"){
        window.prompt("Uploaded!",window.location.origin+"/"+res.responseText);
    }
    else{
        alert(res.responseText);
    }
}

$("#dropfile").on("drop", function (e) {
    e.preventDefault();
    e.stopPropagation();
    $("#spinner").css("display","flex");
    files = e.originalEvent.dataTransfer.files;
    for(var i = 0;i<files.length;i++){
        upload(files[i]);
    }
});

function upload(file){
    var formdata = new FormData();
    formdata.append(file.name, file);
    $.ajax({
        url: '/upload?pw='+hashCode($('#pw').val()),
        data: formdata,
        type: 'POST',
        processData: false,
        contentType: false,
        dataType: 'json',
        success: response,
        error: response
    });
}

function hashCode(s){
  return s.split("").reduce(function(a,b){a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);              
}