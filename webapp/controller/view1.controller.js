sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("CustApp.CustApp.controller.view1", {
		onInit: function () {

		},
		
		handle: function(){
		if(!this._oValueHelpDialog){
				var oInput = this.getView().byId("idInput");
			this._oValueHelpDialog = new sap.ui.comp.valuehelpdialog.ValueHelpDialog("idValueHelp",{
			supportRanges: true,
			key: "CompanyCode",
			descriptionKey: "CompanyCode",
			ok: function(oEvent){
			
			var aTokens = oEvent.getParameter("tokens");	
		    oInput.setTokens(aTokens);
		    this.close();
			},
			cancel: function(){
				this.close();
			}
			});
		}
		// Bind the columns for the table 
		// Dynamically create the column structure for the
		var oColModel = new sap.ui.model.json.JSONModel();
		oColModel.setData({
		 cols: [
		 	   {label: "Company Code", template: "CompanyCode"},
		 	   {label: "Company Name", template: "CompanyName"},
		 	   {label: "City", template: "City"},
		 	   {label: "Currency Code", template: "CurrencyCode"}
		 	   ]	
		});
		var oTable = this._oValueHelpDialog.getTable();
		oTable.setModel(oColModel, "columns");
	   // Binding it to the JSON Model
	  var oRowModel = new sap.ui.model.json.JSONModel("model/mock.json");
	  oTable.setModel(oRowModel);
	  oTable.bindRows("/CompanyCodes");
      	  
	  this._oValueHelpDialog.setRangeKeyFields([
	  	   {label: "Company Code", key: "CompanyCode"},
	  	   {label: "Company Name", key: "CompanyName"}]);
	  
		this._oValueHelpDialog.open();
		},
	// Navigation to second screen on click on the execute button	
	onClick: function(){
	  var IoRouter = sap.ui.core.UIComponent.getRouterFor(this);

		// Navigation to the second form	   
			IoRouter.navTo("view2");
	}             	
	});
});