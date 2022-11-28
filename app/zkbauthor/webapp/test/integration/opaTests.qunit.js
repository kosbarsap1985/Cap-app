sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'zkb/zkbauthor/test/integration/FirstJourney',
		'zkb/zkbauthor/test/integration/pages/AuthorsList',
		'zkb/zkbauthor/test/integration/pages/AuthorsObjectPage',
		'zkb/zkbauthor/test/integration/pages/BooksObjectPage'
    ],
    function(JourneyRunner, opaJourney, AuthorsList, AuthorsObjectPage, BooksObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('zkb/zkbauthor') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheAuthorsList: AuthorsList,
					onTheAuthorsObjectPage: AuthorsObjectPage,
					onTheBooksObjectPage: BooksObjectPage
                }
            },
            opaJourney.run
        );
    }
);