async function fetchData() {
    try {
        const response = await fetch('data.json');
        const data = await response.json();
        items = data;
        boxisBlock();
    } catch (error) {
        console.error(error);
    }
}
fetchData();
function boxisBlock() {
    let detail = document.querySelector('.detail');
    let itemInfo = document.getElementById("item-info");
    let footer = document.querySelector("footer");
    let itemId = new URLSearchParams(window.location.search).get('id');
    let thisItem = items.filter(value => {
        return value.id == itemId;
    })[0];
    if (!thisItem) {
        window.location.href = '/';
    }
    detail.querySelector('.image-container img').src = thisItem.logo;
    detail.querySelector(".image-container").style.backgroundColor = thisItem.logoBackground;
    detail.querySelector('.names h2').innerHTML = thisItem.company;
    detail.querySelector(".names span").innerHTML = thisItem.website;
    itemInfo.querySelector(".post-time").innerHTML = thisItem.postedAt;
    itemInfo.querySelector(".part-time").innerHTML = thisItem.contract;
    itemInfo.querySelector(".job").innerHTML = thisItem.position;
    itemInfo.querySelector(".location").innerHTML = thisItem.location;
    itemInfo.querySelector(".item-body p.description").innerHTML = thisItem.description;
    itemInfo.querySelector(".item-body p.require").innerHTML = thisItem.requirements.content;
    const ulElement = document.createElement('ul');
    thisItem.requirements.items.forEach((item) => {
        const liElement = document.createElement('li');
        liElement.textContent = item;
        ulElement.appendChild(liElement);
    });
    itemInfo.querySelector(".item-body .require-div").appendChild(ulElement);
    itemInfo.querySelector(".item-body .to-do").innerHTML = thisItem.role.content;

    const olElement = document.createElement('ol');
    thisItem.role.items.forEach((item) => {
        const oliElement = document.createElement('li');
        oliElement.textContent = item;
        olElement.appendChild(oliElement);
    });
    itemInfo.querySelector(".item-body .todo-div").appendChild(olElement);
    itemInfo.querySelector(".item-body .to-do").innerHTML = thisItem.role.items;
    footer.querySelector("h2").innerHTML = thisItem.position;
}