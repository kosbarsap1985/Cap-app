sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'zkb.zkbreader',
            componentId: 'ReadersObjectPage',
            entitySet: 'Readers'
        },
        CustomPageDefinitions
    );
});