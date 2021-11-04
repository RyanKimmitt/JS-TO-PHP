
let submit = document.getElementById("button").addEventListener("click", toPHP);


function toPHP() {
    let uploadData = document.getElementById("input").value;

    let xhr = new XMLHttpRequest();
    let url = "submit.php";

    xhr.open("POST", url, true);


    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {

            // Print received data from server
            console.log(this.responseText);

        }
    };

    var data = JSON.stringify(uploadData);
    console.log(data);
    xhr.send(data);

}
