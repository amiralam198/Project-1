function intialLoad(){
    var comment_box = document.getElementById("commentBox");
    comment_box.style.display = "none";
    var loginbtn = document.getElementById("logInBtn");
    loginbtn.onclick = () => {
        var username = document.getElementById("username").textContent;
        console.log(username);
    }

}

intialLoad();