let data = [];
var a = 1
const addMovie = (ev)=>{
    ev.preventDefault();
    let movie = {
        id: Date.now(),
        index:document.getElementById('index').value,
        time: new Date(),
        name: document.getElementById('name').value,
        year: document.getElementById('yr').value
    }
    data.push(movie);
    document.forms[0].reset();

    console.warn('added' , {movies: data} );
    let pre = document.querySelector('#msg pre');
    pre.textContent = '\n' + JSON.stringify(data, '\t', 2);

    localStorage.setItem('MyMovieList', JSON.stringify(data) );
}
document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('btn').addEventListener('click', addMovie);
});
