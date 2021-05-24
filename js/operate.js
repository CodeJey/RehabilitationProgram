function loadPage() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "xml/currentPatients.xml", true)
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            loadData(this);
        }
    }
}

function loadData(req) {
    var xmlR = req.responseXML;
    var table = "<tr><th>Name</th><th>Age</th></tr>";
    var el = xmlR.getElementsByTagName("PATIENT");
    for (var i = 0; i < el.length; i++ ){
        table += "<tr><td>" + el[i].getElementsByTagName("NAME")[0].childNodes[0].nodeValue + "</td><td>" + el[i].getElementsByTagName("AGE")[0].childNodes[0].nodeValue + "</td></tr>";
    }
    document.getElementById("patients").style = "display: table";
    document.getElementById("patients").innerHTML = table;
}