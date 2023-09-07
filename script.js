let btn = document.getElementById("shorten");

btn.addEventListener('click', short);


async function short(){
    let longURL = document.getElementById("longurl").value;
    let shortURL = document.getElementById("shorturl");

    const result = await fetch(`https://api.shrtco.de/v2/shorten?url=${longURL}`);
    const data = await result.json();

    shortURL.value = data.result.short_link2;
    let resultEl=document.getElementById('result');
    resultEl.textContent=""+string(data.result.short_link2);
    resultEl.classList.add('js-code');
}

let newURL = document.getElementById("shorturl");
let copyButton = document.getElementById("copy");

copyButton.onclick = ()=>{
    newURL.select();

    window.navigator.clipboard.writeText(newURL.value);
}

