$(document).ready(function () {
    const prep1 = '<div class="row"><div class="col s6 name">';
    const prep2 = '</div><div class="col s6 size">';
    const prep3 = '</div><div class="hash" style="display:none">';
    const prep4 = '</div></div>';
    $.get("/list", function (data) {
        for(var prop in data){
            if (data.hasOwnProperty(prop)) {
                var appending = prep1 + data[prop].name + prep2 + data[prop].length + prep3 + prop + prep4;
                $("#list").append(appending);
            }
        }
    });
});