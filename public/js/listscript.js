$(document).ready(function () {
    const prep1 = '<div class="row"><div class="col s6 name">';
    const prep2 = '</div><div class="col s6 size">';
    const prep3 = '</div><div class="hash" style="display:none">';
    const prep4 = '</div></div>';
    $.get("/list", function (data) {
        data.forEach(function (row, i) {
            var appending = prep1 + row.fname + prep2 + row.length + prep3 + i + prep4;
            $("#list").append(appending);
        });
    });
});