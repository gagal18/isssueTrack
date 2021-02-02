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
var users = ["Bojan" , "Metin" ,"Boss" ]
var obj = {
    issueId : arr.length,
    description : description.value,
    assigned : assigned.value,
    priority : priority.value
}
//Creating the issue(OBJECT)
function setIssue(){
    obj = {
        issueId : arr.length,
        description : description.value,
        assigned : assigned.value,
        priority : priority.value
}
    if(description.value != ""){
    arr.push(obj)
    localStorage.setItem("issue", JSON.stringify(arr));
    }else{
        alert("You dont have description for your issue")
    }
}
//Showing the array from local storage to the HTML page
function showIssue(){
        if(arr.length){
            arr.forEach(() => {
                issue.innerHTML = "";
                for (var i = 0; i < arr.length; i++)
                issue.innerHTML +=`<li id="arr-${i}" class="liE">`
                +`<div class="content"><h4>Issue: </h4>`+ arr[i].description+`<br>`
                +`<h4>Assigned to: </h4>`+ arr[i].assigned + `<br>`
                +`<h4>Priority: </h4>`+ arr[i].priority+ `<br></div>`+
                `<div id="buttons"><button class = "btn" onclick = "delDesc(${i})"><img src="/2x/del.png" alt="">
                </button><button class = "btn" onclick = "closeDesc(${i})"><img src="/2x/ar.png" alt="">
                </button></div></li>`
        })}else{
          issue.innerHTML = `<h2 class="midText">You have no issues to display</h2>`
        }
}
// Delete selected issue
function delDesc(i){
     arr.splice(i,1)
    if(localStorage.getItem("issue") == null) {
        localStorage.setItem("issue", JSON.stringify(arr));
    } else {
        localStorage.setItem("issue", JSON.stringify(arr));
    }
    showIssue()
}
// Close the issue
function closeDesc(i){
    const selIssue = document.getElementById("arr-" + i)
    selIssue.innerHTML = `<h4>Issue is hidden,Press the button to show the content</h4><button class="show btn" onclick = "showDesc(${i})"><img src="/2x/ar.png" alt=""></button>`;
}
//Showing the issue on clicked arrow
function showDesc(i){
    const selIssue = document.getElementById("arr-" + i)
    selIssue.innerHTML =`<div class="content"><h4>Issue: </h4>`+ arr[i].description+`<br>`
    +`<h4>Assigned to: </h4>`+ arr[i].assigned + `<br>`
    +`<h4>Priority: </h4>`+ arr[i].priority+ `<br></div>`+
    `<div id="buttons"><button class = "btn" onclick = "delDesc(${i})"><img src="/2x/del.png" alt="">
    </button><button class = "btn" onclick = "closeDesc(${i})"><img src="/2x/ar.png" alt="">
    </button></div>`
}
//Setting users from js
function usersSetting(){
        for(var y =0;y<users.length;y++){
            var op = document.getElementById("assigned")
            var c  = document.createElement("option")
            c.text = users[y];
            op.options.add(c, 1);
    }
}
// //Add new user
// function setUser(){
//     var name = newName.value
//     users.push(name)
//     usersSetting()
// }
//EVENT LISTENERS
submit.addEventListener("click", setIssue)
// nameSubmit.addEventListener('click' ,setUser )
showIssue()
usersSetting()