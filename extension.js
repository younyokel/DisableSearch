/* 	No Search in Overview (c) freeroot */

const Main = imports.ui.main;

// Initialize variables
let originalStartSearch;
let originalOnTextChanged;

function init() {
	// Save original functions
	originalStartSearch = Main.overview.viewSelector.startSearch;
	originalOnTextChanged = Main.overview.viewSelector.onTextChanged;
}

function enable() {
	// Hide search entry and erase functionality
	Main.overview.viewSelector.startSearch = function (event) { };
	Main.overview.viewSelector.onTextChanged = function (se, prop) { };
	Main.overview.searchEntry.hide();
}

function disable() {
	// Show search entry and restore functions
	Main.overview.viewSelector.startSearch = originalStartSearch;
	Main.overview.viewSelector.onTextChanged = originalOnTextChanged;
	Main.overview.searchEntry.show();
}

