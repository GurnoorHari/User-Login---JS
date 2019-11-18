document.getElementById("search").addEventListener("click", usernameSearch);


function usernameSearch() {
    let name = document.getElementById("input-name").value;
    let name2 = document.getElementById("input-pass").value;
    name = name.toLowerCase();



    if (name == 'hello' && name2 == 'bye'){

    document.getElementById('incor').innerHTML ='Sign in successful';
    }
    else{

    document.getElementById('incor').innerHTML = 'Username or password is incorrect'
    }
}