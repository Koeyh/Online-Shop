//Fetch Json file
function loadItems() {
    // 외부 리소스를 받아오기 위해 fetch()사용
    return fetch('data/data.json')
        .then((response) => response.json())
        .then((json) => json.items);
}

function displayItems(items) {
    // 'items' 클래스의 요소를 찾아 container에 대입
    const container = document.querySelector('.items');
    container.innerHTML = items.map((item) => createHTMLString(item)).join('');
}

function createHTMLString(item) {
    return `
    <li class="item">
        <img src="${item.img}" alt="${item.type}" class="item__thumbnail" />
        <span class="item__description">${item.gender}, ${item.size}</span>
    </li>
    `;
}

function setEventListeners(items) {
    const logo = document.querySelector('.logo');
    const buttons = document.querySelector('.buttons');
     
    // logo 클릭 시의 이벤트 리스너 설정
    logo.addEventListener('click', () => displayItems(items));

    // button 클릭 이벤트 리스너 설정
    buttons.addEventListener('click', (event) => {
        onButtonClick(event, items);
    });
}

function onButtonClick(event, items) {
    const dataset = event.target.dataset;
    const key = dataset.key;
    const value = dataset.value;

    if (key == null || value == null) {
        return;
    }

    //updateItems(items, key, value);
    displayItems(items.filter((item) => item[key] === value));
}

loadItems()
    .then((items) => {
        displayItems(items);
        setEventListeners(items);
    })
    .catch((err) => {
        console.error(err);
    });