const clock = document.querySelector(".clock");
for (let i = 0; i < 60; i++) {
    const mark = document.createElement("span");
    mark.className = i % 5 === 0 ? "mark major":
    "mark";
    mark.style.setProperty("--angle", i * 6 + "deg");
        clock.appendChild(mark);
}

const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");
function updateClock() {
    const now = new Date ();
    const s = now.getSeconds() + now.getMilliseconds() /
    1000;
    const m = now.getMinutes() + s/60;
    const h = now.getHours() % 12 + m/ 60;
    hour.style.transform = '(rotate(${h *30}deg)';
        minute.style.transform = '(rotate(${m *6}deg)';
    second.style.transform = '(rotate(${s *6}deg)';
}
updateClock();
setInterval(updateClock,50);

