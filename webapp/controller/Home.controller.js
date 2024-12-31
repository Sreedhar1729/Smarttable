sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("com.sap.smartcontrols.controller.Home", {
        onInit() {
        },
        /**selection change */
        onEmployeeTableChange:function(oEvent){
        let oSelectedItem = oEvent.getParameter('listItem'),
        oContext = oSelectedItem.getBindingContext();
        if(oContext){
        let oSelectedData = oContext.getObject();
        const oRouter = this.getOwnerComponent().getRouter();
        oRouter.navTo("RouteDetail",{CustomerID:oSelectedData.CustomerID});
        }
        }
    });
});