// Mobile device redirect
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
   // window.location.replace("csgoflair.github.io"); would be mobile url later
   console.log("Mobile Redirect Placeholder");
}

$(document).ready(function(){
   $('.csf-social-b').addClass("animated fadeIn");
   $('.csf-logo-s').css({"font-family": "\'Roboto\'", "font-size": "20px", "text-align": "center", "margin-top": "-35px"});
   $('.csf-social-h').css({"font-family": "\'Roboto\'", "text-align": "center"});
   $('.csf-social-b').css({"font-family": "\'Roboto\'", "text-align": "center", "width": "160px", "height": "50px";});
   $('#s-linktarget':nth-child(1)).css("color", "red");
});



// var g_Categories = [],
// 	g_Entries = [],
// 	g_Examples = [],
// 	g_CategoryTemplate = {id:"category_id", name:"Category Name"},
// 	g_EntryTemplate = {id:"entry_id", name:"Entry Name", desc:"Entry Description", examples:["example_id"]},
// 	g_ExampleTemplate = {id:"example_id", name:"Example Title", desc:"Example Description", code:"Example Code"};
//
// function RegisterCategory(obj) {
// 	var reg = {};
// 	var regid = obj.id || g_CategoryTemplate.id;
// 	reg.name = obj.name || g_CategoryTemplate.name;
// 	g_Categories[regid] = reg;
// }
//
// function RegisterEntry(obj) {
// 	var reg = {};
// 	var regid = obj.id || g_EntryTemplate.id;
// 	reg.name = obj.name || g_EntryTemplate.name;
// 	reg.desc = obj.desc || g_EntryTemplate.desc;
// 	reg.examples = obj.examples || g_EntryTemplate.examples;
// 	g_Entries[regid] = reg;
// }
//
// function RegisterExample(obj) {
// 	var reg = {};
// 	var regid = obj.id || g_ExampleTemplate.id;
// 	reg.name = obj.name || g_ExampleTemplate.name;
// 	reg.desc = obj.desc || g_ExampleTemplate.desc;
// 	reg.code = obj.code || g_ExampleTemplate.code;
// 	g_Examples[regid] = reg;
// }
//
// function BuildCategories() {
// 	for (cat in g_Categories) {
// 		// Create list items of something
// 	}
// }

window.onload = function() {
  if(window.innerHeight > window.innerWidth) {
  alert('WARNING! This page looks sort of wierd on mobile devices, it is reccomended that you swap to landscape mode and continue.');
}
};

function getStarted() {
   alert('Unfortunately, this website is not complete yet. This link will be clickable when it is finished. For now, you can help contribute to the project by clicking the "GitHub" link below.');
}
