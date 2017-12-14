const Main = imports.ui.main;

let SavedstartSearch;
let SavedonTextChanged;

function init() {
	this.SavedstartSearch = Main.overview._controls.viewSelector.startSearch;
	this.SavedonTextChanged = Main.overview._controls.viewSelector._onTextChanged;
}

function enable() {
	Main.overview._searchEntryBin.hide();
	Main.overview._controls.viewSelector.startSearch = function(event) {};
	Main.overview._controls.viewSelector._onTextChanged = function(se, prop) {};
}

function disable() {
	Main.overview._searchEntryBin.show();
	Main.overview._controls.viewSelector.startSearch = this.SavedstartSearch;
	Main.overview._controls.viewSelector._onTextChanged = this.SavedonTextChanged;
}
