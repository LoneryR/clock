const timeDiv = document.querySelector('.time')

const currentTime = () => {
    const date = new Date()
    let hh = date.getHours()
    let mm = date.getMinutes()
    let ss = date.getSeconds()

    let session = hh > 12 ? 'PM' : 'AM'

    let time = `
    ${(hh < 10) ? '0' + hh : hh}:${mm = (mm < 10) ? '0' + mm : mm}:${ss = (ss < 10) ? '0' + ss : ss}
    ${session}`
    timeDiv.innerHTML = time
    setTimeout(currentTime, 1000)
}

currentTime()