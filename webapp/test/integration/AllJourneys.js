/* global QUnit*/

sap.ui.define([
	"sap/ui/test/Opa5",
	"CustApp/CustApp/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"CustApp/CustApp/test/integration/pages/app",
	"CustApp/CustApp/test/integration/navigationJourney"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "CustApp.CustApp.view.",
		autoWait: true
	});
});