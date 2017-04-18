$(document).ready(function () {
    const prep1 = '<a class="row" href="';
    const prep2 = '"><div class="col s6 name">';
    const prep3 = '</div><div class="col s6 size">';
    const prep4 = '</div></a>';
    $.get("/list", function (data) {
        for (var prop in data) {
            if (data.hasOwnProperty(prop)) {
                var appending = prep1 + window.location.origin + "/" + prop + prep2 + data[prop].name + prep3 + data[prop].length+" bytes" + prep4;
                $("#list").append(appending);
            }
        }
    });
});