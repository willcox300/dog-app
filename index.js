function getDogImages(input) {
  let dogCount = input;
  fetch(`https://dog.ceo/api/breeds/image/random/${dogCount}`)    
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson));
}

function displayResults(responseJson) {
  console.log(responseJson);
  for (let i=0; i<responseJson.message.length; i++){
    $('#dogPics').append(`
      <img src="${responseJson.message[i]}" class="results-img">
      `);
  }
  $('#dogPics').removeClass('hidden');
}

$('form').submit(function(event){
  event.preventDefault();
  let dogCount = parseInt($('#appInput').val());
  if (isNaN(dogCount)){
    dogCount = 3;
  }
  getDogImages(dogCount);

});

