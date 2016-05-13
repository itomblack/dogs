$(document).ready(function() {


	var dogsFiltered = [];
	const filterCategory = {
	  category: [],
	  sized: [],
	  grooming: [],
	  childOK: []
	}

	
	//sort data by name first and then load into DOM
	dataSortName( dogData ); 

	


	/************* BUTTON CLICK ***************/	
	$('[id^=ft_]').on('click', function(){

			$( this ).toggleClass( 'js-btn-on' );


			// get the key and selection to put it in from the ID
			var filterKey = this.id.replace( 'ft_','' );
			filterKey = filterKey.slice(0, filterKey.indexOf('_'));

			var filterSelect = this.id.replace( 'ft_','' ).replace( filterKey, '').replace( '_', '');
			
			//check if already in and add
			if ( filterKey == "category" ) { addToFilters( filterCategory.category, filterSelect ); }
			else if ( filterKey == "sized" ) { addToFilters( filterCategory.sized, filterSelect ); }
			else if ( filterKey == "grooming" ) { addToFilters( filterCategory.grooming, filterSelect ); }
			else if ( filterKey == "childOK" ) { addToFilters( filterCategory.childOK, filterSelect ); }

			filterDogs( filterCategory );

			//NEED A NEW ARRAY OF "DOGS WITH INCOMPLETE DATA"

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






	//********** ADD OR REMOVE ITEM FROM THE FILTER OBJECT *********//
	function addToFilters( filterCat, filterSelect ) {
			var existingFilter = false;
			var arrayNum = "";

			// See if it exists
			for ( i = 0; i < filterCat.length; i++ ) {
					if ( filterCat[i] == filterSelect ) {
						existingFilter = true;
						arrayNum = i;
						i == filterCat.length;
					}
			};

			if ( existingFilter ) {
					filterCat.splice(arrayNum, 1); //delete that one from array
			} else {
					filterCat.push( filterSelect ); //add category to array
			};

	}; 


	


 	/************* FILTER DOGS BASED ON BUTTON CLICK ***************/
 	function filterDogs( filterCategory ){
 			  const filteredDogs = dogData.filter(dog => {
 			  	//if filter category is empty, or if category from dog doesn't exist within it then this is true
 			    const inCategory = !filterCategory.category.length || filterCategory.category.indexOf(dog.category) !== -1;
 			    const inSized = !filterCategory.sized.length || filterCategory.sized.indexOf(dog.sized) !== -1;
 			    const inGrooming = !filterCategory.grooming.length || filterCategory.grooming.indexOf(dog.grooming) !== -1;
 			    const inChildOK = !filterCategory.childOK.length || filterCategory.childOK.indexOf(dog.childOK) !== -1;
 			    
 			    // here check that they are all true with && (If all filters were empty, or not found in that dog)
 			    if ( inCategory && inSized && inGrooming && inChildOK ) {
 			    	return dog;
 			    }
 			  });

 			//reload DOM info
 			dataSortName( filteredDogs );
 	};




 	/************* SORT ALPHABETICALLY BY NAME & LOAD ***************/
 	function dataSortName( dogData ) {
 		var byName = dogData.slice(0);
 		
 		byName.sort(function(a,b) {
 			var x = a.breed.toLowerCase();
 			var y = b.breed.toLowerCase();
 			return x < y ? -1 : x > y ? 1 : 0;
 		});

 		//load data into DOM
		loadDogs(byName);
 	};








}); //END ALL