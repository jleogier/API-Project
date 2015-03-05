$(document).ready(function(){
	
	$(function(){
		$('#search-form').submit(function(event){
			event.preventDefault();
			var searchTerm = $('#query').val();
			getRequest(searchTerm);
			});			
		});	

	function getRequest(searchTerm){
		var params = {
			'my_client_id': '274cfdf4540f40b2bf86823071b4f9bb',
			'my_secret': '3b7a63fd082c4b799cc2d0ec343674ae',
//			'URI': spotify:track:
			'q': searchTerm
		};
		url = 'https://api.spotify.com/v1/artists/43ZHCT0cAZBISjO8DG9PnE/top-tracks?country=SE';
		$.getJSON(url, params, function(data){
			showResults(data.items);
		});
	}
			

	function showResults(results){
		var html = "";
		$.each(results,function(index,video){
			console.log(video.snippet.thumbnails.medium.url);
			html += "<p>" + video.snippet.title + "</p>" + "<p><img src='" + video.snippet.thumbnails.medium.url + "' class='image'/></p>";
//			console.log(value.Title);
		});
		$('#search-results').html(html);
	}
 
});

