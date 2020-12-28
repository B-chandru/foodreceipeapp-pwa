var btn=document.getElementById("btn");
var title=document.getElementById("title");
var div=document.getElementById("grid");
var video=document.getElementById("bottom")


btn.addEventListener("click",()=>{
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then(res => res.json())
    .then(res =>  displayMeals(res.meals[0]))

})

function displayMeals(meals){
 title.innerHTML=`${meals.strMeal}`
 div.innerHTML=`  <div class="g1">
 <img src="${meals.strMealThumb}" alt="" id="img">
 <p id="cat"><strong style=" text-shadow: 0px -1px 0px white;">CATAGORY:
 </strong>${meals.strCategory}</p>
 <p id="AREA"><strong style="text-shadow: 0px -1px 0px white;">AREA:
 </strong>${meals.strArea}</p>
 <p id="cat"><strong style="text-shadow: 0px -1px white;">TAGS:</strong style="text-shadow: 0px 1px 0px white;">${meals.strTags}<p>
    </strong></p>
</div>
<div class="g2">
 <h2 id="in">instruction</h2>
    <p> ${meals.strInstructions}<p>
</div>`
video.innerHTML=`<h2 id="h4">VIDEO TUTORIAL OF THIS RECEPIE</h2>
<iframe src="https://www.youtube.com/embed/${meals.strYoutube.slice(-11)}" width="500px" height="350px" id="if"></iframe> `;
}