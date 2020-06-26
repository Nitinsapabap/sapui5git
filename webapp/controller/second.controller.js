sap.ui.define([
	"sap/ui/core/mvc/Controller",
		"sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
	"use strict";

	return Controller.extend("NewProject.NEWPROJECT.controller.second", {
	onInit:function(){
		
					var oModel = new JSONModel();
			this.getView().byId("packItem").setModel(oModel);
			
		   this._oRouter = sap.ui.core.UIComponent.getRouterFor(this);
           this._oRouter.getRoute("second").attachMatched(this.handleRouteMatched, this);
		    
		},	
		
		handleRouteMatched : function (evt) {
    var oModel = this.getOwnerComponent().getModel("TempDataModel");
		    var oView = this.getView();
		    oView.setModel(oModel);
		    var odata = oModel.getProperty("/ProductID");                         
            var oForm = this.getView().byId("idSimple");
	     	oForm.bindElement("Model>/ProductSet('" + odata + "')");
  },
	
		
		fetch: function () {
			// read msg from i18n model
			//var oBundle = this.getView().getModel("i18n").getResourceBundle();
			var sRecipient = this.getView().getModel("TempDataModel").getProperty("/ProductID");
		 //   var oContext = sRecipient.getBindingContext("Model>/ProductSet");
		  //  var sPath = oContext.getPath();
		//	var sMsg = oBundle.getText([sRecipient]);
            var oForm = this.getView().byId("idSimple");
          //  var spath = Model>/ProductSet([sRecipient]);
	    		oForm.bindElement("Model>/ProductSet('" + sRecipient + "')");
			// show message
		//	MessageToast.show(sMsg);
		
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
//                           Binding the data to the table 
 
     var oModel = this.getView().byId("packItem").getModel();
       	   		// Then get the property “/data” of the model.
	 var itemData = oModel.getProperty("/data");
     var des = this.getView().byId("des").getValue();
	 var prd = this.getView().byId("prd").getValue();
	 var cat = this.getView().byId("cat").getValue();
	 
	 				// Push this entry into array and bind it to the table
	 	var items = {
	 		Product: prd,
	 		Category: cat,
	 		Description: des
	 	};			
     
				// If the data type is of the property is correct, append the itemRow value to the itemData using the .push function
				//if the data is in good format
				if (typeof itemData !== "undefined" && itemData !== null && itemData.length > 0) {
					// Append the data using /push
					itemData.push(items);
				} else {
					// if Data is not good add blank line
					itemData = [];
					// append 
					itemData.push(items);
				}     
				// Set Model	
				oModel.setData({
					data: itemData
				});
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
		},	
		
		
	onback:function(){
	history.go(-1);	
	}	
		
	});
});