export const grid = () => [
	{ id:1, title:"The Shawshank Redemption", year:1994, votes:678790 },
	{ id:2, title:"The Godfather", year:1972, votes:511495 },
	{ id:3, title:"The Godfather: Part II", year:1974, votes:319352 },
	{ id:4, title:"The Good, the Bad and the Ugly", year:1966, votes:213030 },
	{ id:5, title:"My Fair Lady", year:1964, votes:533848 },
	{ id:6, title:"12 Angry Men", year:1957, votes:164558 }
];

export const tree = () => [
    {id:"root", value:"Films data", open:true, data:[
		{ id:"1", open:true, value:"The Shawshank Redemption", data:[
			{ id:"1.1", value:"Part 1" },
			{ id:"1.2", value:"Part 2", data:[
				{ id:"1.2.1", value:"Page 1" },
				{ id:"1.2.2", value:"Page 2" },
				{ id:"1.2.3", value:"Page 3" },
				{ id:"1.2.4", value:"Page 4" },
				{ id:"1.2.5", value:"Page 5" }
			]},
			{ id:"1.3", value:"Part 3" }
		]},
		{ id:"2", open:true, value:"The Godfather", data:[
			{ id:"2.1", value:"Part 1" },
			{ id:"2.2", value:"Part 2" }
		]}
	]}
];