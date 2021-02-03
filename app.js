//Declaration
const description = document.getElementById("description"),
    visibility = document.getElementById("visibility"),
    assigned = document.getElementById("assigned"),
    priority = document.getElementById("priority"),
    submit = document.getElementById("submit"),
    issue = document.getElementById("issues"),
    newName = document.getElementById("newUser"),
    nameSubmit = document.getElementById("nameSubmit")
var arr = JSON.parse(localStorage.getItem("issue")) || [];
var users = JSON.parse(localStorage.getItem("user")) || []
var obj = {
    issueId: arr.length,
    description: description.value,
    status: String,
    assigned: assigned.value,
    priority: priority.value
}
//Creating the issue(OBJECT)
function setIssue() {
    obj = {
        issueId: arr.length,
        description: description.value,
        status: "Open",
        assigned: assigned.value,
        priority: priority.value
    }
    if (description.value != "") {
        arr.push(obj)
        localStorage.setItem("issue", JSON.stringify(arr));
    } else {
        alert("You dont have description for your issue")
    }
}
//Showing the array from local storage to the HTML page
function showIssue() {
    if (arr.length) {
        issue.innerHTML = "";
        for (var i = 0; i < arr.length; i++) {
            issue.innerHTML += `<li id="arr-${i}" class="liE">`
                + `<div class="content">` + `ID:` + arr[i].issueId + `<br><span id="spanToggle${i}"class="badge badge-primary" onclick = "closeDesc(${i})">` + arr[i].status + `</span>` + `<p>Issue: ` + arr[i].description +
                `</p><br><i  id="ex${i}" class="fa fa-exclamation-circle fa-2x" aria-hidden="true"></i>` + arr[i].priority + `<br>`
                + `<i id = "us${i}" class="fa fa-user fa-2x" aria-hidden="true"></i>` + arr[i].assigned + `<br></div>` +
                `<div id="buttons"><button class = "btn" onclick = "delDesc(${i})"><img src="/2x/del1.png" alt="">
                </button><button class = "btn" onclick = "closeDesc(${i})"><img src="/2x/ar1.png" alt="">
                </button></div></li>`
        }
        testValuesAssigned()
        testValuesPriority()
        testValuesStatus()
    } else {
        issue.innerHTML = `<h2 class="midText">You have no issues to display</h2>`
    }
}
// Delete selected issue
function delDesc(i) {
    arr.splice(i, 1)
    localStorage.setItem("issue", JSON.stringify(arr));
    showIssue()
}
// Close the issue
function closeDesc(i) {
    if (arr[i].status == "Open") {
        arr[i].status = "Close";
        arr.splice(i, 1, arr[i])
        localStorage.setItem("issue", JSON.stringify(arr));
        showIssue()
    } else {
        arr[i].status = "Open";
        arr.splice(i, 1, arr[i])
        localStorage.setItem("issue", JSON.stringify(arr));
        showIssue()
    }
    showIssue()
    testValuesAssigned()
    testValuesPriority()
}
//See which value is applied or if ther is any vallue
function testValuesPriority() {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].priority == "Critical") {
            document.getElementById(`ex${i}`).style.color = "red";
        } else if (arr[i].priority == "High") {
            document.getElementById(`ex${i}`).style.color = "yellow";
        } else if (arr[i].priority == "Medium") {
            document.getElementById(`ex${i}`).style.color = "blue";
        } else if (arr[i].priority == "Low") {
            document.getElementById(`ex${i}`).style.color = "green";
        } else if (arr[i].priority == "") {
            document.getElementById(`ex${i}`).style.display = "none";
        }
    };

}

//See which value is applied or if ther is any vallue
function testValuesAssigned() {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].assigned == "") {
            document.getElementById(`us${i}`).style.display = "none";
        } else if (arr[i].assigned != "") {
            document.getElementById(`us${i}`).style.display = "inline-block";
        }
    }

}
function testValuesStatus() {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].status == "Open") {
            document.getElementById(`spanToggle${i}`).style.backgroundColor = "blue";
        } else if (arr[i].status == "Close"){
            document.getElementById(`spanToggle${i}`).style.backgroundColor = "red";
        }
    }

}
//Setting users from js
function usersSetting() {
    for (var y = 0; y < users.length; y++) {
        var op = document.getElementById("assigned")
        var c = document.createElement("option")
        c.text = users[y];
        op.options.add(c, 1);
    }
}
// //Add new user
function setUser(){
    var name = newName.value
    if (name != "") {
        users.push(name)
        var op = document.getElementById("assigned")
        var c = document.createElement("option")
        c.text = name;
        op.options.add(c, 1);
        localStorage.setItem("user", JSON.stringify(users));
        newName.value = ""
    }else {
        alert("You have to enter your name!")
    }
}

//EVENT LISTENERS
submit.addEventListener("click", setIssue)
nameSubmit.addEventListener('click', setUser)
showIssue()
usersSetting()