let user = "Naseer";
let comments = [];
let users = []



function intialLoad(){
    var comment_box = document.getElementById("commentBox");
    comment_box.style.display = "none";
    console.log("load");
    UpdateComments();
    UpdateUsers();
    
}

async function UpdateUsers(){
    await fetch("./Data/Users.json").then((res)=>{
        return res.json()
    }).then((data)=>{
        users = data.users;
    })
}

function Auth(usern,pass){
    for(let i=0;i<users.length;i++){
        if(users[i][0]==usern && users[i][1]==pass){
            user=pass;
            return true;
        }
    }
    return false;
}

async function UpdateComments(){
    await fetch("./Data/Comment.json").then((res)=>{
        return res.json()
    }).then((data)=>{
        comments = data.posts;
    })

    loadComments();
}

function loadComments(){
    var list = document.getElementById("commentsList");

    list.innerHTML = ""

    console.log("loading comments")

    for(let i = 0;i<comments.length;i++){
        var post = document.createElement("div");
        var com = document.createElement("div");
        var u = document.createElement("div");

        com.innerText = comments[i][0];
        u.innerText = comments[i][1];

        post.appendChild(com)
        post.appendChild(u)
 
        list.appendChild(post);
    }

}

function getCommentBox(){
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;
    user = "";
    pass = "";
    var comment_box = document.getElementById("commentBox");
    comment_box.style.display = "Block";
    var logIn = document.getElementById("login")
    logIn.style.display = "none";

}

function lgnBtn(){
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;
    console.log(user);
    console.log(pass);
    // Authenticate Later
    if(Auth(user,pass)){
        getCommentBox();
    }
    else{
        user = "";
        pass = "";

        alert("wrong username or password");
    }
}

function postComment(){
    var comment = document.getElementById("commBox").value;
    comments.push([comment,user]);
    loadComments();
}

intialLoad();