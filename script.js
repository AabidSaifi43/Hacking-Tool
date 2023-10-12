let btn = document.getElementById("click");
let a = [
    " > Initializing Hack tool...",
    " > Connecting to Instagram...",
    " > Connecting to server 1...",
    " > Connection failed. Retrying...",
    " > Connecting to server 2",
    " > Connected Successfully...",
    " > Username Found on Instagram...",
    " > Trying Brute Force...",
    " > 200K passwords tried...",
    " > Match not found",
    " > Another 200K passwords tried...",
    " > Match not found...",
    " > Another 200K passwords tried...",
    " > Match not found...",
    " > Another 200K passwords tried ...",
    " > Match found...",
    " > Accessing Account...",
    " > Hack Successful...",
    " > Password is ***********"
]
btn.addEventListener('click', function () {
    let input = document.getElementById("hacker").value;
    const sleep = async (seconds) => {
        return new Promise((resolve, reject) => {
                setTimeout(() => { 
                    resolve(true) 
                }, seconds * 200)
        })
    }
    
    const showHack = async (message) => {
        await sleep(2)
        // console.log(message)
        text.innerHTML = text.innerHTML + `${input }` + message  + "<br>"
    }
    
    (async () => {
        for (let i = 0; i < a.length; i++) {
                await showHack(a[i])
        }
    })()
});

