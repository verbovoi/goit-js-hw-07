const images = [{
        url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'White and Black Long Fur Cat',
    },
    {
        url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
        url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Group of Horses Running',
    },
];

const addImage = imageArr => {
    const listEl = document.querySelector('#gallery');

    imageArr.forEach(({
        url,
        alt
    }) => {
        listEl.insertAdjacentHTML('afterbegin', '<li><img></li>');
        const imageEl = listEl.querySelector('img');
        imageEl.classList.add('image');
        imageEl.src = url;
        imageEl.alt = alt;

    })

    console.log(listEl);
}

addImage(images);