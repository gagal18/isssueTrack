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
var users = ["BOJAN" , "METIN" ,"BOSS" ]
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
                + arr[i].description+`<br>`
                + arr[i].assigned + `<br>`
                + arr[i].priority+ `<br>`+
                `<button class = "btn" onclick = "delDesc(${i})"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
              </svg></button><button class = "btn" onclick = "closeDesc(${i})"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-up" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z"/>
              </svg></button></li>`
        })}else{
          issue.innerHTML = ""
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
    selIssue.innerHTML = `<h4>Issue is hidden,Press the button to show the content</h4><button class="show btn" onclick = "showDesc(${i})"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-up" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z"/>
  </svg></button>`;
}
//Showing the issue on clicked arrow
function showDesc(i){
    const selIssue = document.getElementById("arr-" + i)
    selIssue.innerHTML =`<li id="arr-${i}" class="liE">`
    + arr[i].description+`<br>`
    + arr[i].assigned + `<br>`
    + arr[i].priority+ `<br>`+
    `<button class = "btn" onclick = "delDesc(${i})"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
  </svg></button><button class = "btn" onclick = "closeDesc(${i})"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-up" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z"/>
  </svg></button></li>`
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