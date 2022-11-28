sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'zkb/zkbbooking/test/integration/FirstJourney',
		'zkb/zkbbooking/test/integration/pages/BookingList',
		'zkb/zkbbooking/test/integration/pages/BookingObjectPage'
    ],
    function(JourneyRunner, opaJourney, BookingList, BookingObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('zkb/zkbbooking') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheBookingList: BookingList,
					onTheBookingObjectPage: BookingObjectPage
                }
            },
            opaJourney.run
        );
    }
);