sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'zkb/zkbreader/test/integration/FirstJourney',
		'zkb/zkbreader/test/integration/pages/ReadersList',
		'zkb/zkbreader/test/integration/pages/ReadersObjectPage'
    ],
    function(JourneyRunner, opaJourney, ReadersList, ReadersObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('zkb/zkbreader') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheReadersList: ReadersList,
					onTheReadersObjectPage: ReadersObjectPage
                }
            },
            opaJourney.run
        );
    }
);