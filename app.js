//Declaration
const description = document.getElementById("description"),
    visibility = document.getElementById("visibility"),
    assigned = document.getElementById("assigned"),
    priority = document.getElementById("priority"),
    submit = document.getElementById("submit"),
    issue = document.getElementById("issues"),
    newName = document.getElementById("newUser"),
    nameSubmit = document.getElementById("nameSubmit"),
    assignedBtn = document.getElementById("assignedBtn")
var x = document.getElementById("assignedBtn")
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
    if (description.value.replace(/\s+/, "") != "") {
        arr.push(obj)
        localStorage.setItem("issue", JSON.stringify(arr));
        assigned.options[0].selected = "true"
        priority.options[0].selected = "true"
    } else {
        alert("You dont have description for your issue")
    }
    showIssue();
    description.value = ""
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

//See which value is applied or if there is any value if there isnt value make option to assign it
function testValuesAssigned() {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].assigned == "") {
            document.getElementById(`us${i}`).innerHTML = `<p id="inAssigned"></p><select name="assigned" id="assignedIn${i}" class="custom-select" id="inputGroupSelect02">
              <option value="" disabled selected>
                Choose on which user you want to assign
              </option>
              </select
            ><button id="assignedBtn" class="btn btn-primary" onclick = "setNewUser(${i})">Submit</button><br />`;
            usersSetting('assignedIn' + i)
        } else if (arr[i].assigned != "") {
            document.getElementById(`us${i}`).style.display = "inline-block";
        }
    }

}
//Set user for unnasigned issue
function setNewUser(i) {
    const user = document.getElementById("assignedIn" + i).value
    arr[i].assigned = user
    localStorage.setItem("issue", JSON.stringify(arr));
    showIssue()
}
//Test values of status
function testValuesStatus() {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].status == "Open") {
            document.getElementById(`spanToggle${i}`).style.backgroundColor = "blue";
        } else if (arr[i].status == "Close") {
            document.getElementById(`spanToggle${i}`).style.backgroundColor = "red";
        }
    }

}
//Setting users from js
function usersSetting(id) {
    for (var y = 0; y < users.length; y++) {
        // var op = document.getElementById(id)
        var c = document.createElement("option")
        c.text = users[y];
        document.getElementById(id).options.add(c, 1);
    }
}
// //Add new user
function setUser() {
    var name = newName.value
    if (name.replace(/\s+/, "") != "") {
        users.push(name)
        var op = document.getElementById("assigned")
        var c = document.createElement("option")
        c.selected = "true"
        c.text = name;
        op.options.add(c, 1);
        localStorage.setItem("user", JSON.stringify(users));
        newName.value = ""
    } else {
        alert("You have to enter your name!")
    }
}
//EVENT LISTENERS
submit.addEventListener("click", setIssue)
nameSubmit.addEventListener('click', setUser)
showIssue()
usersSetting('assigned')
