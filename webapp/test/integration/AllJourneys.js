/* global QUnit*/

sap.ui.define([
	"sap/ui/test/Opa5",
	"NewProject/NEWPROJECT/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"NewProject/NEWPROJECT/test/integration/pages/app",
	"NewProject/NEWPROJECT/test/integration/navigationJourney"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "NewProject.NEWPROJECT.view.",
		autoWait: true
	});
});