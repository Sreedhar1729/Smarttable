sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/UIComponent"
  ], (BaseController,UIComponent) => {
    "use strict";
  
    return BaseController.extend("com.sap.smartcontrols.controller.Detail", {
        onInit() {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.getRoute("DetailView").attachPatternMatched(this._onObjectMatched, this);
        },
        _onObjectMatched: function(oEvent) {
            var sSysID = oEvent.getParameter("arguments").CustomerID;

            // Bind the view to the selected item using its SysID
            this.getView().bindElement({
                path: "/yourDataPath('" + sSysID + "')"
            });
        }
    });
  });