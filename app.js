const input = document.querySelector("input");
const generateButtonPass = document.querySelector(".GeneratePass");
const copyButtonPass = document.querySelector(".CopyPass");

generateButtonPass.addEventListener("click", () => {
    input.value = GeneratePassword(16);
})

copyButtonPass.addEventListener("click", copyPass);


function GeneratePassword(length = 16) {

    const charset = "abcdefghijklmnopqrstuvwxyz01234565789@#$/*-_?!";

    let password = "";

    for (let i = 0; i < length; ++i) {

        let at = Math.floor(Math.random() * (charset.length + 1));

        password += charset.charAt(at);

    }

    return password;
}

function copyPass() {

    const el = document.createElement("textarea");
    el.value = document.getElementById("inputVal").value
    document.body.appendChild(el);

    el.select()
    document.execCommand("copy");
    document.body.removeChild(el);

    document.querySelector(".CopyPass").innerHTML = "Coppied"

    let x = setInterval(function () {
        document.querySelector(".CopyPass").innerHTML = "📋 Copy Password"
        clearInterval(x);
    }, 1000)


}


