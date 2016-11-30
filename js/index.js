var g_Categories = [],
	g_Entries = [],
	g_Examples = [],
	g_CategoryTemplate = {id:"category_id", name:"Category Name"},
	g_EntryTemplate = {id:"entry_id", name:"Entry Name", desc:"Entry Description", examples:["example_id"]},
	g_ExampleTemplate = {id:"example_id", name:"Example Title", desc:"Example Description", code:"Example Code"};

function RegisterCategory(obj) {
	var reg = {};
	var regid = obj.id || g_CategoryTemplate.id;
	reg.name = obj.name || g_CategoryTemplate.name;
	g_Categories[regid] = reg;
}

function RegisterEntry(obj) {
	var reg = {};
	var regid = obj.id || g_EntryTemplate.id;
	reg.name = obj.name || g_EntryTemplate.name;
	reg.desc = obj.desc || g_EntryTemplate.desc;
	reg.examples = obj.examples || g_EntryTemplate.examples;
	g_Entries[regid] = reg;
}

function RegisterExample(obj) {
	var reg = {};
	var regid = obj.id || g_ExampleTemplate.id;
	reg.name = obj.name || g_ExampleTemplate.name;
	reg.desc = obj.desc || g_ExampleTemplate.desc;
	reg.code = obj.code || g_ExampleTemplate.code;
	g_Examples[regid] = reg;
}

function BuildCategories() {
	for (cat in g_Categories) {
		// Create list items of something
	}
}
