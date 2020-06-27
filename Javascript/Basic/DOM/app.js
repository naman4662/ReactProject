const btnShowModal = document.getElementById("addMoviewbtn")
const btnSaveMoview = document.querySelector(".modal-footer button")
const ul_elem = document.querySelector('ul')

const movieTitle = document.getElementById("title")
const movieImage = document.getElementById("image-url")
const movieRating = document.getElementById("rating")
const btnDel = document.getElementById("delModal")
const btnYesDel = document.getElementById("movieDel")
const modelDialogue = document.querySelector("#moview-modal")

let movieList = []

function deleteMovie(e){
  const delModal = document.getElementById('delModal')
  delModal.style.display = "block"
}

function deleteMovieFinal(e){
  debugger
}


function getstar (rating) {  
  data=""
  for ( var i=1 ; i <= rating ; i ++){
    data = data + '<span><i class="fas fa-star"></i></span>'
  }
  return data
}

function clearData () {
  movieTitle.value = ""
  movieImage.value=""
  movieRating.value=""
  }


function getMoviewData(){

 
    movieList.push(
      {
        movieTitle:movieTitle,
        movieImage:movieImage,
        movieRating:movieRating
      }
    )
  
    movieRatingNew = parseInt(movieRating.value)
    get_number_stars = getstar(movieRatingNew)
    console.log(movieList);
    
    li_ele = document.createElement('li');

    main_card = document.createElement('div');
    main_card.classList = ["card"]
    
    card_row = document.createElement('div')
    card_row.classList=["row"]
  
    card_col8 = document.createElement('div')
    card_col8.classList=["col-8"]
  
    card_image = document.createElement('img')
    card_image.classList = ["card-img-top"]
    card_image.src = movieImage.value
  
    card_col8.appendChild(card_image)
  
    card_col4 = document.createElement('div')
    card_col4.classList=["col-4"]
  
  
    
  
    card_div_inner = document.createElement('div')
    card_div_inner.classList = ["card-body"]
  
    card_h5 = document.createElement("h5")
    card_h5.classList = ["card-title"]
    card_h5.innerText = movieTitle.value
  
    card_rating = document.createElement('a')
    card_rating.classList.add("btn", "btn-primary","list-btn")
    card_rating.innerHTML = get_number_stars  
    card_div_inner.appendChild(card_h5)
    card_div_inner.appendChild(card_rating)
  
    card_col4.appendChild(card_div_inner)
  
    card_row.appendChild(card_col8)
    card_row.appendChild(card_col4)
    
    main_card.appendChild(card_row)
    li_ele.appendChild(main_card)
    ul_elem.appendChild(li_ele)
    modelDialogue.classList=["modelDialogue"]
    li_ele.classList.add('mvi_list')
    li_ele.addEventListener('click',deleteMovie)
  }
 


btnShowModal.addEventListener('click',clearData)
btnSaveMoview.addEventListener('click',getMoviewData)
btnYesDel.addEventListener('click',deleteMovieFinal)
