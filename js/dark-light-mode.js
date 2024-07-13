const switchToggle = document.getElementById('toggleCircle');
const switchTheme = () => {
    const rootElem = document.documentElement;
    const dataTheme = rootElem.getAttribute("data-type");
    const newTheme = dataTheme === 'light'? 'dark' : 'light';
    rootElem.setAttribute('data-type', newTheme);
    localStorage.setItem("Theme", newTheme);
    switchToggle.style.float = newTheme === 'light'? 'left' : 'right';
};
document.querySelector("#switch").addEventListener("click", switchTheme);

const initialTheme = localStorage.getItem("Theme") || 'light';
document.documentElement.setAttribute('data-type', initialTheme);
switchToggle.style.float = initialTheme === 'light'? 'left' : 'right';