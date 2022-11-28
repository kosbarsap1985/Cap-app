sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'zkb/zkbbooks/test/integration/FirstJourney',
		'zkb/zkbbooks/test/integration/pages/BooksList',
		'zkb/zkbbooks/test/integration/pages/BooksObjectPage'
    ],
    function(JourneyRunner, opaJourney, BooksList, BooksObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('zkb/zkbbooks') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheBooksList: BooksList,
					onTheBooksObjectPage: BooksObjectPage
                }
            },
            opaJourney.run
        );
    }
);