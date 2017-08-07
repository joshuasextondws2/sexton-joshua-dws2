//variables for the event listener 
var search = document.querySelector('#search'); 

//variable for user input
var userInput= document.querySelector("#search");

//listen for the form blur
search.addEventListener('submit', function(e){

	e.preventDefault();

	//variable from input
	var userSearch = userInput.value;

	//build api search query
	var api = 'https://api.themoviedb.org/3/movie/550?api_key=53b5edee243439f6f61a407ad6114785&query='+userSearch;

	//instantiate new request
	var request = new XMLHttpRequest();

	//build the query
	var url = api;

	//open the request
	request.open('GET', url, true);

	//listen for the onload event.
	request.onload = function(){

		//check status codes
		if (request.status >= 200 && request.status < 400){

		//parse our data
		var data = JSON.parse(request.responseText);

		//variable for the h4 within the list
		element = document.querySelector('#results li');

		//insert the returned results
		element.querySelectorAll('h4')[0].innerHTML = data.results[0].title;
		element.quesySelectorAll('p')[0].innerHTML = data.results[0].release_date;


}

}
}
