sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("CustApp.CustApp.controller.view2", {
		onInit: function () {

		},
		
				
	onback:function(){
	history.go(-1);	
	}
	
	});
});