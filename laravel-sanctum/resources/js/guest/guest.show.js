// take the id from url
let url_string = window.location.href;
const idApart = url_string.split(/[\s/]+/).pop();

const tagShow = document.querySelector('#guest-show');
const urlShowGuest = 'http://127.0.0.1:8000/api/apartments/show/' + idApart;

if (tagShow != null) {
    fetch(urlShowGuest)
    .then(response => response.json())
    .then(res => {
        let data = res[0];
        renderShowCard(data)
    })
}

function renderShowCard(data){
    let cardShowTemplate = `
        <div class="card_show_container">
            <div class="card">
                <img src="${data.img}" alt="${data.title}" class="card-img-top card_img_show">
                <div class="card-body">
                    <h5 class="card-title">${data.title}</h5>
                    <p class="card-text">${data.description}</p>
                    <ul>
                        <li>Rooms: 3</li>
                        <li>Beds: 2</li>
                        <li>Bathroom: 1</li>
                        <li><strong>Price: € ${data.price}</strong></li>
                    </ul>
                </div>
            </div>
        </div>
    `;

    tagShow.innerHTML = cardShowTemplate;
}