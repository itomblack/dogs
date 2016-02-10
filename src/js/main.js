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













}); //END ALL