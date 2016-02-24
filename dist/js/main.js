$(document).ready(function() {


	var dogsFiltered = [];
	var filterCategory = [];

	//sort data by dogname
	// dogData.sort();
	loadDogs(dogData);

	


	/************* BUTTON CLICK ***************/	
	$('.btn-type-select').on('click', function(){

			$( this ).toggleClass( 'js-btn-off' );
			var filterSelect = this.id.replace( 'filter','' );
			var existingFilter = false;
			var arrayNum = "";

			for ( i = 0; i < filterCategory.length; i++ ) {
					if ( filterCategory[i] == filterSelect ) {
						existingFilter = true;
						arrayNum = i;
					}
			};

			if ( existingFilter ) {
					filterCategory.splice(arrayNum, 1); //delete that one from array
			} else {
					filterCategory.push( filterSelect ); //add category to array
			};

			console.log(filterCategory);
			
			filterDogs( filterCategory );
	});


	/************* LOAD DOGS ON INITIAL PAGE LOAD ***************/
 	function loadDogs(dogDataSet){
 				var dogElements = "";
 				// for each in dogData, make an element
 			 	for ( i = 0; i < dogDataSet.length; i++ ) {
 			 			var dogItem = '<div class="dog-breed-item"><p>' + dogDataSet[i].breed + '</p></div>';
 			 			dogElements = dogElements + dogItem;
 			 	};

 			 	//push array of dog names to html
 			 	document.getElementById('dog-breeds').innerHTML = dogElements;
 	};


 	/************* FILTER DOGS BASED ON BUTTON CLICK ***************/
 	function filterDogs( filterCategory ){
 			dogsFiltered = [];
 			// for each in dogData
 			for ( i = 0; i < dogData.length; i++ ) {
 					//compare with all category filters
 					var filterMatch = false;
 					for ( x = 0; x < filterCategory.length; x++ ) {
 							//dog category
 							if (dogData[i].category == filterCategory[x]) {
 								filterMatch = true;
 								x = filterCategory.length;
 							}
 							//size of dog
 							else if (dogData[i].sized == filterCategory[x]) {
 								filterMatch = true;
 								x = filterCategory.length;
 							}
 							//grooming needs
 							else if (dogData[i].grooming == filterCategory[x]) {
 								filterMatch = true;
 								x = filterCategory.length;
 								console.log(dogData[i].grooming);
 							}
 							//good with children
 							else if (dogData[i].childOK == filterCategory[x]) {
 								filterMatch = true;
 								x = filterCategory.length;
 							};
 					};

 					if ( filterMatch === false ) {
 						dogsFiltered.push( dogData[i] );
 					};
 			};
			
 			loadDogs( dogsFiltered );

 	};




/////////////////////// GORDONS CODE TO REWRITE //////////////////////////

// function filterData (filters) {
//   const filteredDogs = dogData.filter(dog => {
//     // !filters.category.length = true if the array is empty
//     // if the array is not empty, it continues after the || (which means or)
//     // which checks that the index of the selected category is not -1 (which
//     // means it is not in the array)
//     const inCategory = !filters.category.length || filters.category.indexOf(dog.category) !== -1;
//     // same here
//     const inSized = !filters.sized.length || filters.sized.indexOf(dog.sized) !== -1;
//     // ... repeat for multiple filters
// ​
//     // here check that they are all true with &&
//     if (inCategory && inSized) {
//       return dog;
//     }
//   });
//   return filteredDogs;
// }
// ​
// // apply two filters
// filters.category = ['Terrier'];
// filters.sized = ['Med', 'Sml'];
// ​
// // log the results
// console.log(filterData(filters));

/////////////////////// GORDONS CODE TO REWRITE //////////////////////////










}); //END ALL