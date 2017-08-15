const submit= document.querySelector('#submitSearch');

const userInput= document.querySelector('#searchField');

//listen for the submit event
submit.addEventListener('submit', function(e){

	e.preventDefault();
	
	//variable for user input
	var userSearch = userInput.value;
	
	//build api search query
	var api = 'https://api.themoviedb.org/3/search/movie?api_key=53b5edee243439f6f61a407ad6114785&query='+userSearch; 
	

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

		console.log(data);


}else{
console.log('response error', request)


}
};




request.onerror = function(){
	
	console.log('connection error')

} 



request.send();

}

