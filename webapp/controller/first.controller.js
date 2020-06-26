sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function (Controller, MessageToast) {
	"use strict";

	return Controller.extend("NewProject.NEWPROJECT.controller.first", {
		onInit:function(){
        
		},
		
		onShowHello : function () {
			// read msg from i18n model
			//var oBundle = this.getView().getModel("i18n").getResourceBundle();
			var sRecipient = this.getView().getModel("helloPanel").getProperty("/recipient/name");
		 //   var oContext = sRecipient.getBindingContext("Model>/ProductSet");
		  //  var sPath = oContext.getPath();
		//	var sMsg = oBundle.getText([sRecipient]);
            var oForm = this.getView().byId("idSimpleForm");
          //  var spath = Model>/ProductSet([sRecipient]);
	    		oForm.bindElement("Model>/ProductSet('" + sRecipient + "')");
			// show message
		//	MessageToast.show(sMsg);
		},

		onContinue:function(){

			var IoRouter = sap.ui.core.UIComponent.getRouterFor(this);

		// Navigation to the second form	   
			IoRouter.navTo("second");
			
		},
		
		oncall  :function(){
            var fname = sap.ui.getCore().byId(this.createId("idPname")).getValue();

            this.getView().getModel("TempDataModel").setProperty("/",{ "ProductID":fname} );
			var IoRouter = sap.ui.core.UIComponent.getRouterFor(this);

		// Navigation to the second form	   
			IoRouter.navTo("second");
			
		}
	});
});