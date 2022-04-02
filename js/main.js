var elList = document.querySelector(".list");
var elSecondList = document.querySelector(".second-list");

let elInput = document.querySelector(".form__input");

let NewBtnArray =[];



function renderGenes(arr , element){

  var renderGeners = [];

  arr.forEach((film) => {

    film.genres.forEach(genre => {
      if(!renderGeners.includes(genre)){
        renderGeners.push(genre)
      }
    })
  })

  renderGeners.forEach(genre => {
    const newOption = document.createElement("option");
    newOption.value = genre;
    newOption.textContent = genre;
    element.appendChild(newOption);
  })

}

function renderFilms(arr, element){
  element.innerHTML = "";

  arr.forEach(film =>{
    var newItem = document.createElement("li");
    var newImg = document.createElement("img");
    var newHeading = document.createElement("h3");
    var newText = document.createElement("p");
    var newBtn = document.createElement("button");
    // var newTime = document.createElement("time");
    // var newSubList = document.createElement("ul");


    newHeading.textContent = film.title;
    newText.textContent = film.overview.split(" ").slice(0 ,16).join(" ") + "...";
    // newTime.textContent = dateFormat(film.release_date);
    newBtn.textContent = "Bookmark";

    // for(var genre of film.genres){
    //   var newSubItem = document.createElement("li");
    //   newSubItem.textContent = genre;
    //   newSubList.appendChild(newSubItem);
    // }

    newItem.setAttribute("class", "list__item");
    newImg.setAttribute("src", film.poster);
    newImg.setAttribute("class", "list__img");
    newText.setAttribute("class", "list__text");
    newBtn.setAttribute("class" , "list__bnt");
    // newTime.setAttribute("datetime", "2022-03-12");
    var newBtnDataset = newBtn.dataset.filmid = film.id;



    newItem.appendChild(newImg);
    newItem.appendChild(newHeading);
    newItem.appendChild(newText);
    newItem.appendChild(newBtn);
    // newItem.appendChild(newTime);
    // newItem.appendChild(newSubList);

    element.appendChild(newItem);

  })



}


console.log();

form.addEventListener("submit", evt =>{
  evt.preventDefault();

  const selectVal = select.value;


  const inputVal = elInput.value

  let filterFilms = selectVal == "all" ? films : films.filter(element => element.genres.includes(selectVal))  ;


  if(  films.genres ==  inputVal  ){

    films.filter(element => element.genres.includes(inputVal))



  }

  // if(selectVal === "all"){
  //   filterFilms = films;
  // }else{
  //   filterFilms = films.filter(element => element.genres.includes(selectVal));
  // }



  renderFilms(filterFilms, elList);


});

function newul(arr , element){
 element.innerHTML= " "
  arr.forEach(e =>{

   var li = document.createElement("li");
  //  var newsecondimg = document.createElement("img");
  //  newsecondimg.setAttribute("scr" , e.poster)
   

    li.setAttribute("class" , "second-item");
   
    li.textContent = e.title ;

  

  var btn = document.createElement("button");
  btn.setAttribute("class" , "btn-remove");
  btn.textContent = "Remove";


  li.appendChild(btn);

  // li.appendChild(newsecondimg )

   element.appendChild(li);
  });

  



}



elList.addEventListener("click" , evt =>{

  const BtnDataset = evt.target.matches(".list__bnt") ;
 

 if(BtnDataset){
   const btnid = evt.target.dataset.filmid;


   const btnfind = films.find( e => e.id === btnid );

   if(!NewBtnArray.includes(btnfind)){
    
      NewBtnArray.push(btnfind);
   }
   
    
   console.log(NewBtnArray);

 if(!NewBtnArray.includes(btnfind)){
     NewBtnArray.push(btnfind)
   
 }

  
}





newul(NewBtnArray , elSecondList)
});

elSecondList.addEventListener("click" , evt =>{

  
 
   const btnremove = evt.target.matches(".btn-remove");
 
   if(btnremove){
     const btniddd = evt.target.dataset.filmid;
     const btnfindd = films.find( e => e.id === btniddd );
     NewBtnArray.splice(btnfindd , 1);


  
newul(NewBtnArray , elSecondList)
   }

   

  });







renderFilms(films, elList);
renderGenes(films , select);

