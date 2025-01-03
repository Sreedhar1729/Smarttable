sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], (Controller,MessageToast) => {
    "use strict";

    return Controller.extend("com.sap.smartcontrols.controller.Home", {
        onInit() {
            
        },
        /**selection change */
        onEmployeeTableChange: function (oEvent) {
            let oSelectedItem = oEvent.getParameter('listItem'),
                oContext = oSelectedItem.getBindingContext();
            if (oContext) {
                let oSelectedData = oContext.getObject();
                const oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("RouteDetail", { CustomerID: oSelectedData.CustomerID });
            }
        },
        /*For ToolMenuCollapse */
        onCollapseExpandPress() {
            const oSideNavigation = this.byId("idSidenavigation"),
                bExpanded = oSideNavigation.getExpanded();
            oSideNavigation.setExpanded(!bExpanded);
        },
        /**changing the view based on selection */
        onItemSelect: function (oEvent) {
            var itemKey = oEvent.getParameter("item").getKey();
            var navContainer = this.getView().byId("idNavContainer");
            const navigationMap = {
                "MasterRecords": "idScroll2",
                // "ContainerDetails": "idScroll4",
                // "Home": "idScroll1",
                // "ProductDetails": "idScroll3",
                "SimulationCreation":"idScroll5"
            };
            // Get the target ID from the navigation map
            const targetId = navigationMap[itemKey];

            // Navigate to the corresponding page based on the selected key
            if (targetId) {
                navContainer.to(this.getView().createId(targetId));
            }
        },
        openDateTimePicker: function(oEvent) {
			this.getView().byId("HiddenDTP").openBy(oEvent.getSource().getDomRef());
		},
        
    });
});