// global variables
actualPage = 1;
totalPages = 0;

// HTML CONTENT
const template =  ` 
    <div class="row card_deck">

    </div>
    <nav aria-label="Page navigation example">
        <ul class="pagination">
            <li class="page-item"><a class="page-link prev" style="cursor: pointer;">Previous</a></li>
            <li class="page-item"><a class="page-link label-actual-page" style="cursor: pointer;">1</a></li>
            <li class="page-item"><a class="page-link next" style="cursor: pointer;">Next</a></li>
        </ul>
    </nav>
`

const tagIndex = document.querySelector('#guest-index');
if (tagIndex != null){
    tagIndex.innerHTML = template;
    getAllApartments(actualPage);
}

document.addEventListener('click', function (event) {

    if (
        !event.target.matches('.prev') && 
        !event.target.matches('.next')
    ) return;

    // Don't follow the link
	event.preventDefault();
    
    if (event.target.matches('.prev')) {
        actualPage--
        if (actualPage <= 0) {
            actualPage = totalPages;
        }
    } else if (event.target.matches('.next')) {
        actualPage++
        if (actualPage > totalPages) {
            actualPage = 1;
        }
    }

    getAllApartments(actualPage);

}, false);


// method to render cards on the screen from data Api 
function renderCards(data) {
    const cardDeckTag = document.querySelector('.card_deck')

    let cardTemplate = ` 
        <div class="col-x">
            <div class="card">
                <img class="card-img-top card_img_top" src="${data.img}" alt="Card image cap">
                <div class="card-body">
                <h5 class="card-title">${data.title}</h5>
                <p class="card-text">${data.description}</p>
                </div>
                <div class="card-footer">
                <small class="text-muted"><a href="/show/${data.id}">more details</a></small>
                </div>
            </div>
        </div>
    `;

    let newCardTemplate = cardDeckTag.innerHTML + cardTemplate;
    cardDeckTag.innerHTML = newCardTemplate; 
}

// api to receive all apartment, argument for pagination
function getAllApartments(page) {
    const urlIndexGuest = 'http://127.0.0.1:8000/api/apartments/' + page;

    fetch(urlIndexGuest)
    .then(response => response.json())
    .then(res => {
        totalPages = res.pages;
        document.querySelector('.card_deck').innerHTML = '';
        document.querySelector('.label-actual-page').innerHTML = actualPage;
        if (res.data!=null) {
            res.data.forEach(element => {
                renderCards(element)
            })
        }
    })
    .catch(err => console.log(err));
}