document.getElementById('signInBtn').addEventListener('click', signIn);

function signIn() {
    // Implement Google Sign in functionality
    // This can be achieved using Google OAuth APIs
}

document.getElementById('addPersonalBtn').addEventListener('click', addPersonalChecklist);
document.getElementById('addSharedBtn').addEventListener('click', addSharedChecklist);

function addPersonalChecklist() {
    var personalList = document.getElementById('personalList');
    var itemName = prompt("Enter item name:");
    if (itemName) {
        var li = document.createElement('li');
        li.textContent = itemName;
        personalList.appendChild(li);
    }
}

function addSharedChecklist() {
    var sharedList = document.getElementById('sharedList');
    var itemName = prompt("Enter item name:");
    if (itemName) {
        var li = document.createElement('li');
        li.textContent = itemName;
        sharedList.appendChild(li);
    }
}
