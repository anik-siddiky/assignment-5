function updateDate() {
    let now = new Date();

    let weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    let week = weekDays[now.getDay()];
    let month = months[now.getMonth()];
    let date = now.getDate();
    let year = now.getFullYear();

    let dateElement = document.getElementById('date');

    let fullText = `
        <span class="text-[22px]">${week},</span>
        <br>
        <span class="text-[22px] font-bold"> ${month} ${date} ${year}</span>
    `;

    dateElement.innerHTML = fullText;
}

updateDate();
setInterval(updateDate, 1000);
