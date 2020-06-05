// document.addEventListener("DOMContentLoaded", function() {});
 
// DOM Element
const books = document.getElementById('list');
const booksContainer = document.querySelector('#show-panel');
const list = document.querySelector('#list-panel');

const booksUrl = 'http://localhost:3000/books'

function getBooks(booksUrl) {
    fetch(booksUrl)
        .then(res => res.json())
        .then(json => {
            for (const book of json) {
                addToDom(book);
            }
        })
        
}

// {
//     "id": 1,
//     "title": "Picture Perfect",
//     "description": "When her seven-year-old nephew, a hemophiliac, mysteriously disappears during their camping trip, pediatrician Lorrie Ryan races against time to find the missing boy with the help of FBI agent Stuart Saunders. Previously published as Panda Bear Is Critical. Reprint.",
//     "img_url": "http://books.google.com/books/content?id=CEMZ1OoPDIAC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
//     "users": [
//       {
//         "id": 2,
//         "username": "auer"
//       },
//       {
//         "id": 8,
//         "username": "goodwin"
//       }
//     ]
//   },
function singleBook(book){
    const div = document.createElement('div')
    const h1 = document.createElement('h1');
    const p = document.createElement('p');
    const img = document.createElement('img');
    const userP = document.createElement('p');
    const btn = document.createElement('button');

    h1.innerText = book.title;
    p.innerText = book.description;
    img.src = book.img_url;
    for(const userName of book.users){
        userP.append(`${userName["username"]} `)
    }
    userP.style.fontStyle = 'italic';
    btn.innerText = "Read Book"

    btn.addEventListener('click', () => {
        userP.innerText = book.users[0]['username']
    })

    div.append(h1, p, img, userP, btn);


    return div;

    // booksContainer.innerHTML = div
}
// <div id="list-panel">
// <ul id="list">

// </ul>
// </div>

function listBooks(book){
    const ul = document.querySelector('#list');
    const li = document.createElement('li');

    li.innerText = book.title;
    ul.append(li);

    li.addEventListener('click', e => {
        // debugger
        booksContainer.innerHTML = ''
        booksContainer.append(singleBook(book));
    })

}

function addToDom(book) {
    listBooks(book);

}


getBooks(booksUrl)