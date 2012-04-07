// ┌────────────────────────────────────────────────────────────────────┐ \\
// │ JAVASCRIPT FOR COURSE RECOMMENDER SITE                             │ \\
// ├────────────────────────────────────────────────────────────────────┤ \\
// │ THE NEURO LOUNGE TEAM                     						    │ \\
// │ Jesse, Joseph, Jonathan & Michael                                  │ \\
// └────────────────────────────────────────────────────────────────────┘ \\

function course(code, name, instructor) {
	this.code       = code       || "College 101";
	this.name       = name 		 || "Unknown"    ;
	this.instructor = instructor || "Staff"      ;
    this.toString = function () {
    	return "("+this.code+", "+this.name+", "+this.instructor+")";   
    };
}

var database = [
new course("ENGL 101","A brief history of American Classics","Prof Byzarre"),
new course("PSYCH 22","The Brain : an introspection","Mr Sandman"),
new course("MATH 952","Simple Logic","Dr. Raiman"),
new course("PE 12 PZ","Bungee Jumping","Antoine Domain"),
new course("PE 11","Fly Fishing with Ralp","Evil Eye Bob"),
new course("ENGL 250","The Great Minds of Jenzabar : a review by Joseph L.","Joseph Long"),
new course("CS 12","How to simple things in Python without Rails","Dr. M. Maltese"),
new course("ENGL 55","A brief history of American Classics","Prof Byzarre"),
new course("ENG 101","Material structures in outer space","Prof Orbit"),
new course("MATH 670","Complexifications","Prof Slitherin"),
new course("ID 1","Seminars by Seminaries","Prof Closing"),
new course("ANTHRO 250","The indigeneous cultures of Tanzania","Dr. Jones"),
new course("CS 909","API Design","Dr. M. Maltese"),
new course("MEDIA 99","ESCAPING the usual GOTCHAS","Bruce Wayne"),
new course("HIST 150","From Randomness to Importations","Prof Jesse"),
new course("BIO 106","Friction between ambiguous cellular bodies","Prof Synecdoche"),
new course("CHEM 51","Making Nitro","Prof Swarthmore"),
new course("PHYS 128","Arduinos & Piano Playing","Prof Raphie"),
new course("ART 16","The grand use of Raphael JS in the world of Modern Art: a review","Dr. M. Maltese")
];

$(".staricon").live('mouseover', function() {
	var pastfill = $(this).attr('fill');
	$(this).css({'fill':$(this).attr('fillalternate')});
	$(".staricon").live('mouseout', function() {
		$(this).css({'fill':pastfill});
	});
});

$("document").ready( function () {
	for (var i=0; i<database.length;i++){
		console.log(database[i]+"");
	}
	
	autocompletions = [];
	for (var i = 0; i < database.length; i++) {
	    autocompletions.push(database[i].name);
	}
	
	$("#userinput input[type='text']").autocomplete({
	    source: autocompletions,
	    search: function (event, ui) { console.log("Searching..."); }
	});
})