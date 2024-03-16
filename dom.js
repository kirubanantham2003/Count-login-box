function createLoginBoxes() {
    var loginCount = parseInt(document.getElementById("loginCountInput").value);

 
    document.getElementById("loginBoxesContainer").innerHTML = "";

    for (var i = 0; i < loginCount; i++) {
        var loginBox = document.createElement("div");
        loginBox.innerHTML = `
            <h3>Login Box ${i + 1}</h3>
            <label for="username${i}">Username:</label>
            <input type="text" id="username${i}">
            <label for="password${i}">Password:</label>
            <input type="password" id="password${i}">
            <br><br>
        `;
        document.getElementById("loginBoxesContainer").appendChild(loginBox);
    }
}
