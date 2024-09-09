document.addEventListener('DOMContentLoaded',() => {

    const artistData = [
        { name: 'Demi Lovato', image: './img/Demi.jpeg'},
        { name: 'Selena Gomez', image: './img/Selena Gomez.jpeg'},
        { name: 'The Weeknd', image: './img/the weekend.jpeg'},
        { name: 'Justin Bieber', image: './img/justin bieber.jpeg'},
        { name: 'One Direction', image: './img/One d.jpeg'},
        { name: 'Billie Eilish', image: './img/Billie Eilish.jpeg'},
    
    ];
    
    const albumsData = [
        { name:'Bloom', artist: 'RÜFÜS DU SOL', image:'./img/bloom.jpeg'},
        { name:'Promised Land', artist: 'Vintage Culture', image:'./img/PromisedL.jpg'},
        { name:'Born to Die', artist: 'Lana Del Rey', image:'./img/Born to Die.jpeg'},
        { name:'A Head Full of Dreams', artist: 'Coldplay', image:'./img/A Head Full of Dreams.jpg'},
        { name:'Evolve', artist: 'Imagine Dragons', image:'./img/Evolve.jpeg'},
        { name:'Hard To Imagine The Neighbourhood Ever Changing', artist: 'The Neighbourhood', image:'./img/Hard To Imagine The Neighbourhood Ever Changing.jpeg'},
    ];

    const artistGrid = document.querySelector('.artists-grid')
    const albumsGrid = document.querySelector('.albums-grid')

    artistData.forEach( artist =>{
        const artistCard = document.createElement('div')
        artistCard.classList.add('artist-card')

        artistCard.innerHTML = `
        <img src="${artist.image}" alt= "imagem do${artist.name}">
        <h3>${artist.name}</h3>
        <p>artista</p>
        `

        artistGrid.appendChild(artistCard) 
    })

    albumsData.forEach( albums =>{
        const albumsCard = document.createElement('div')
        albumsCard.classList.add('albums-card')

        albumsCard.innerHTML = `
        <img src="${albums.image}" alt= "imagem do${albums.name}">
        <h3>${albums.name}</h3>
        <p>${albums.artist}</p>
        `
        albumsGrid.appendChild(albumsCard) 
    })

})






