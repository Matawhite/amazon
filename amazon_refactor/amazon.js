var books = [
{
	title: 'The Girl On The Train',
	catagory: 'Fiction',
	price: 13.95,
	rating: 3,
	description: 'A psychological thriller set in the environs of London.',
	imgURL: 'http://placehold.it/140x100',

},

{ 
	title: 'All The Light We Cannot See',
	catagory: 'Fiction',
	price: 29.95,
	rating: 4,
	description: 'The lives of a blind French girl and a gadget-obsessed German boy before and during World War II; the winner of the 2015 Pulitzer Prize. ',
	imgURL: 'http://placehold.it/140x100',
},

{
	title: 'Code of Conduct',
	catagory: 'Fiction',
	price: 9.95,
	rating: 5,
	description: 'In Thor’s 15th thriller, the counterterrorism operative Scot Harvath undertakes a deadly assignment set in motion by a leaked video',
	imgURL: 'http://placehold.it/140x100'
},

];

//converting to arrays

var mappingBookCatagory = []
var mappingBookTitle = []
var mappingBookPrice = []
var mappingBookRating = []
var mappingBookDescription = []
var mappingBookImg = []

$.map(books, function(list){
	
	mappingBookTitle.push(list.title)
	mappingBookCatagory.push(list.catagory)
	mappingBookPrice.push(list.price)
	mappingBookRating.push(list.rating) 
	mappingBookDescription.push(list.description) 
	mappingBookImg.push(list.imgURL) 

});


// //appending the DOM

$( ".bookClick" ).click(function() {

$.each(mappingBookTitle, function(index, key){
   return $('.bookTitle').append("<p>" + key + "</p>")
  }) 

$.each(mappingBookCatagory, function(index, key){
   return $('.catagory').append("<p>" + key + "<p>")
  }) 

$.each(mappingBookPrice, function(index, key){
   return $('.price').append("<p>price: $" + key + "<p>")
  }) 

$.each(mappingBookRating, function(index, key){
   return $('.rating').append("<p>" + key + " Stars<p>")
  }) 

$.each(mappingBookDescription, function(index, key){
   return $('.description').append("<p>" + key + "<p>")
  }) 

$.each(mappingBookImg, function(index, key){
   return $('.img').append("<img src=" + key + ">")
  }) 
});







