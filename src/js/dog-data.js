// categories: Herding / Terrier / Sporting / Toy / Hound / Non-sporting / Working
// intelligence: 1 - 100%
// lifespan: 7.56 - 16.50
// purchaseCost: 288 - 2680
// foodCost (yearly): 279 - 1349
// grooming: "Daily" = daily / 2 = weekly  / 3 = few weeks
// childOK: "Good" = very suitable / 2 = Medium suitability / 3 = low suitability
// sized: Sml / Med / Lrg

// {
// 	breed: "",
// 	category: "",
// 	intelligence: ,
// 	lifespace: ,
// 	purchaseCost: ,
// 	foodCost: ,
// 	grooming: ,
// 	childOK: ,
// 	sized: ""
// },


var dogData = [
	{
		breed: "Border Collie",
		category: "Herding",
		intelligence: 100,
		lifespace: 12.52,
		purchaseCost: 622,
		foodCost: 324,
		grooming: "Weekly",
		childOK: "Poor",
		sized: "Med"
	},
	{
		breed: "Border Terrier",
		category: "Terrier",
		intelligence: 70,
		lifespace: 14,
		purchaseCost: 833,
		foodCost: 324,
		grooming: "Weekly",
		childOK: "Good",
		sized: "Sml"
	},
	{
		breed: "Brittany",
		category: "Sporting",
		intelligence: 80,
		lifespace: 12.92,
		purchaseCost: 618,
		foodCost: 466,
		grooming: "Weekly",
		childOK: "OK",
		sized: "Med"
	},
	{
		breed: "Cairn Terrier",
		category: "Terrier",
		intelligence: 61,
		lifespace: 13.84,
		purchaseCost: 435,
		foodCost: 324,
		grooming: "Weekly",
		childOK: "Good",
		sized: "Sml"
	},
	{
		breed: "Welsh Springer Spaniel",
		category: "Sporting",
		intelligence: 69,
		lifespace: 12.49,
		purchaseCost: 750,
		foodCost: 324,
		grooming: "Weekly",
		childOK: "Good",
		sized: "Med"
	},
	{
		breed: "English Cocker Spaniel",
		category: "Sporting",
		intelligence: 82,
		lifespace: 11.66,
		purchaseCost: 800,
		foodCost: 324,
		grooming: "Weekly",
		childOK: "Good",
		sized: "Med"
	},
	{
		breed: "Cocker Spaniel",
		category: "Sporting",
		intelligence: 79,
		lifespace: 12.5,
		purchaseCost: 465,
		foodCost: 674,
		grooming: "Weekly",
		childOK: "Good",
		sized: "Sml"
	},
	{
		breed: "Papillon",
		category: "Toy",
		intelligence: 92,
		lifespace: 13,
		purchaseCost: 740,
		foodCost: 324,
		grooming: "Weekly",
		childOK: "OK",
		sized: "Sml"
	},
	{
		breed: "Australian Cattle Dog",
		category: "Herding",
		intelligence: 90,
		lifespace: 11.67,
		purchaseCost: 530,
		foodCost: 466,
		grooming: "Weekly",
		childOK: "Poor",
		sized: "Med"
	},
	{
		breed: "Shetland Sheepdog",
		category: "Herding",
		intelligence: 94,
		lifespace: 12.53,
		purchaseCost: 465,
		foodCost: 405,
		grooming: "Daily",
		childOK: "Good",
		sized: "Sml"
	},
	{
		breed: "Siberian Husky",
		category: "Working",
		intelligence: 45,
		lifespace: 12.58,
		purchaseCost: 650,
		foodCost: 466,
		grooming: "Bi-weekly",
		childOK: "Good",
		sized: "Med"
	},
	{
		breed: "Lhasa Apso",
		category: "Toy",
		intelligence: 56,
		lifespace: 11.42,
		purchaseCost: 350,
		foodCost: 324,
		grooming: "Weekly",
		childOK: "Good",
		sized: "Sml"
	},
	{
		breed: "Affenpinscher",
		category: "Toy",
		intelligence: 56,
		lifespace: 11.42,
		purchaseCost: 510,
		foodCost: 324,
		grooming: "Weekly",
		childOK: "OK",
		sized: "Sml"
	},
	{
		breed: "Dachshund",
		category: "Hound",
		intelligence: 37,
		lifespace: 12.63,
		purchaseCost: 423,
		foodCost: 324,
		grooming: "Weekly",
		childOK: "Poor",
		sized: "Sml"
	},
	{
		breed: "Miniature Schauzer",
		category: "Terrier",
		intelligence: 87,
		lifespace: 11.81,
		purchaseCost: 715,
		foodCost: 405,
		grooming: "Weekly",
		childOK: "OK",
		sized: "Sml"
	},
	{
		breed: "Chihuahua",
		category: "Toy",
		intelligence: 16,
		lifespace: 16.5,
		purchaseCost: 588,
		foodCost: 324,
		grooming: "Weekly",
		childOK: "Poor",
		sized: "Sml"
	},
	{
		breed: "Australian Terrier",
		category: "Terrier",
		intelligence: 64,
		lifespace: 11.05,
		purchaseCost: 640,
		foodCost: 324,
		grooming: "Weekly",
		childOK: "OK",
		sized: "Sml"
	},
	{
		breed: "Whippet",
		category: "Hound",
		intelligence: 34,
		lifespace: 12.87,
		purchaseCost: 915,
		foodCost: 324,
		grooming: "Weekly",
		childOK: "OK",
		sized: "Med"
	},
	{
		breed: "English Springer Spaniel",
		category: "Sporting",
		intelligence: 86,
		lifespace: 12.54,
		purchaseCost: 615,
		foodCost: 466,
		grooming: "Weekly",
		childOK: "Good",
		sized: "Med"
	},
	{
		breed: "West Highland White Terrier",
		category: "Terrier",
		intelligence: 41,
		lifespace: 12.8,
		purchaseCost: 538,
		foodCost: 324,
		grooming: "Weekly",
		childOK: "Good",
		sized: "Sml"
	},
	{
		breed: "Bedlington Terrier",
		category: "Terrier",
		intelligence: 54,
		lifespace: 13.51,
		purchaseCost: 1058,
		foodCost: 324,
		grooming: "Weekly",
		childOK: "OK",
		sized: "Sml"
	},
	{
		breed: "Poodle",
		category: "Non-sporting",
		intelligence: 99,
		lifespace: 11.95,
		purchaseCost: 900,
		foodCost: 466,
		grooming: "Weekly",
		childOK: "OK",
		sized: "Med"
	},
	{
		breed: "Bichon Frise",
		category: "Non-sporting",
		intelligence: 45,
		lifespace: 12.21,
		purchaseCost: 693,
		foodCost: 324,
		grooming: "Daily",
		childOK: "Good",
		sized: "Sml"
	},
	{
		breed: "German Shorthaired Pointer",
		category: "Sporting",
		intelligence: 84,
		lifespace: 11.46,
		purchaseCost: 545,
		foodCost: 971,
		grooming: "Weekly",
		childOK: "Good",
		sized: "Lrg"
	},
	{
		breed: "Pointer",
		category: "Sporting",
		intelligence: 49,
		lifespace: 12.42,
		purchaseCost: 294,
		foodCost: 710,
		grooming: "Weekly",
		childOK: "Good",
		sized: "Lrg"
	},
	{
		breed: "Tibetan Spaniel",
		category: "Non-sporting",
		intelligence: 43,
		lifespace: 14.42,
		purchaseCost: 1050,
		foodCost: 466,
		grooming: "Weekly",
		childOK: "Good",
		sized: "Sml"
	},
	{
		breed: "Labrador Retriever",
		category: "Sporting",
		intelligence: 93,
		lifespace: 12.04,
		purchaseCost: 810,
		foodCost: 466,
		grooming: "Weekly",
		childOK: "Good",
		sized: "Med"
	},
	{
		breed: "Maltese",
		category: "Toy",
		intelligence: 25,
		lifespace: 12.25,
		purchaseCost: 650,
		foodCost: 270,
		grooming: "Daily",
		childOK: "Poor",
		sized: "Sml"
	},
	{
		breed: "Pomeranian",
		category: "Toy",
		intelligence: 77,
		lifespace: 9.67,
		purchaseCost: 670,
		foodCost: 324,
		grooming: "Weekly",
		childOK: "OK",
		sized: "Sml"
	},
	{
		breed: "Shih Tzu",
		category: "Toy",
		intelligence: 13,
		lifespace: 13.2,
		purchaseCost: 583,
		foodCost: 324,
		grooming: "Daily",
		childOK: "Good",
		sized: "Sml"
	},
	{
		breed: "Australian Shepherd",
		category: "Herding",
		intelligence: 52,
		lifespace: 12.28,
		purchaseCost: 565,
		foodCost: 466,
		grooming: "Weekly",
		childOK: "OK",
		sized: "Med"
	},
	{
		breed: "Yorkshire Terrier",
		category: "Toy",
		intelligence: 75,
		lifespace: 12.6,
		purchaseCost: 1057,
		foodCost: 324,
		grooming: "Daily",
		childOK: "Poor",
		sized: "Sml"
	},
	{
		breed: "Irish Setter",
		category: "Sporting",
		intelligence: 61,
		lifespace: 11.63,
		purchaseCost: 525,
		foodCost: 466,
		grooming: "Weekly",
		childOK: "Good",
		sized: "Lrg"
	}
];

