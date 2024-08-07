const text = document.querySelector('#text-input');
const checkBtn = document.querySelector('#check-btn');
const result = document.querySelector('#result');

checkBtn.onclick = check;

function check() {
    if (text.value == "") {
        alert("Please input a value");
    } else if (text.value.length == 1 || palindrome(text.value)) {
        result.innerText = text.value + " is a palindrome";
    } else {
        result.innerText = text.value + " is not a palindrome";
    }
}

function palindrome(val) {
    val = val.toLowerCase().replace(/[^a-z0-9]/g, "");
    let rev = val.split("").reverse().join("");
    return (val === rev) ? true : false;
}

