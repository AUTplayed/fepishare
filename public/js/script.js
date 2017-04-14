$(document).ready(function () {
    
});

var files,file;

$("#dropfile").on("dragover dragenter",function(e){
    e.preventDefault();
    e.stopPropagation();
    $("#dropfile").addClass("dragover");
});
$("#dropfile").on("dragleave dragend drop",function(e){
    e.preventDefault();
    e.stopPropagation();
    $("#dropfile").removeClass("dragover");
});
$("#dropfile").on("drop",function(e){
    e.preventDefault();
    e.stopPropagation();
    files = e.originalEvent.dataTransfer.files;
    file = files[0];
    var formdata = new FormData();
    formdata.append(file.name,file);
    $.ajax({
        url:'/upload',
        data: formdata,
        type:'POST',
        processData:false,
        contentType: false,
        dataType:'json',
        success:function(res){
            console.log(res.responseText);
        },
        error:function(res){
            console.log(res.responseText);
        }
    });

    /*
    $.post("/upload",formdata,function(res){
        console.log(res);
    });
    */
});