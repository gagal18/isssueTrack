const description = document.getElementById("description"),
      visibility = document.getElementById("visibility"),
      assigned = document.getElementById("assigned"),
      priority = document.getElementById("priority"),
      submit = document.getElementById("submit"),
      issue = document.getElementById("issues")
var arr = JSON.parse(localStorage.getItem("issue")) || [];
var obj = {
    issueId : arr.length,
    description : description.value,
    visibility : visibility.value,
    assigned : assigned.value,
    priority : priority.value,
}
function setIssue(){
    obj = {
        issueId : arr.length,
        description : description.value,
        visibility : visibility.value,
        assigned : assigned.value,
        priority : priority.value,
    }
    arr.push(obj)
    localStorage.setItem("issue", JSON.stringify(arr));
}
function showIssue(){
        if(arr.length){
            arr.forEach(() => {
                issue.innerHTML = "";
                for (var i = 0; i < arr.length; i++)
                issue.innerHTML +=`<li id="arr[${i}" class="liE">`
                + arr[i].description+`<br>`+
                + arr[i].assigned  +  `<br>`
                + arr[i].priority   + `<br></li>`
        })}else{
          todoList.innerHTML = ""
        }
}
submit.addEventListener("click", setIssue)
showIssue()