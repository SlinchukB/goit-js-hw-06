const images = [
  {
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




const GalleryEl = document.querySelector('.gallery');

const ImagesList = images.map((image) => `<li class = "image-item"><img src=${image.url} alt="${image.alt}" width=600 height=400 /></li>`).join('');


console.log(ImagesList);

// console.log(GalleryEl.children);


GalleryEl.insertAdjacentHTML('beforeend', ImagesList);

GalleryEl.style.display = "flex";
GalleryEl.style.listStyle = 'none';
GalleryEl.style.justifyContent = "space-between";
GalleryEl.querySelector('li').style.marginRight = "20 px";
GalleryEl.querySelector("img").style.objectFit = "cover";




