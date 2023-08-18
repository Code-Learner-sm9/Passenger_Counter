//  let countEl = document.getElementById("count-el").innerText=0

//we can use textContent instead of innerText which is more relevent

let count =0
let countEl=document.getElementById("count-el")

let storedval=document.getElementById("store")

let historylogEl=document.getElementById("history.log")
let history=[]

let saveEl=document.getElementById("save-el")

function updateHistoryLog(action)
{
    const timestamp= new Date().toLocaleString()
    history.push(`${action} at ${timestamp}`)
    historylogEl.innerHTML = history.map(entry=> `<p>${entry}</p>`).join('')
     
}


function increment()
{
    count += 1
    countEl.innerText=count 
    updateHistoryLog('Increment')

}

function decrement()
{
    count -= 1
    countEl.textContent=count
    // we can use textContent which is more powerful
    updateHistoryLog("Decrement")
}


function save()
{
    
    let countstr=count+" - "
    saveEl.textContent += countstr
    //.innerText cant contain both spaces of " - "
    //To solve that we can use .textContent
    console.log(count)
    updateHistoryLog("SAVED")
    count = 0
    countEl.textContent=count
}


function reset()
{
    storedval.innerText=count
    // storedval=count
    count =0
    countEl.innerText=count
    updateHistoryLog('Reset')

}

function undo()
{
    storedval.innerText=0
    updateHistoryLog('Undid')
}







