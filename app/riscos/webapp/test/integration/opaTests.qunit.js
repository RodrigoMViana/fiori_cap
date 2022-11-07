sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'nsrisks/riscos/test/integration/FirstJourney',
		'nsrisks/riscos/test/integration/pages/RisksList',
		'nsrisks/riscos/test/integration/pages/RisksObjectPage'
    ],
    function(JourneyRunner, opaJourney, RisksList, RisksObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('nsrisks/riscos') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheRisksList: RisksList,
					onTheRisksObjectPage: RisksObjectPage
                }
            },
            opaJourney.run
        );
    }
);