(function () {
    window.RTYConfig = {
        appName:"Try to translate",
        appID:"com.romanysoft.app.macos.TryToTranslate",
        documentTitle:"Try to translate By Romanysoft",
        supportPlatforms:["Mac","Windows","Linux"],
        googleUA:"UA-76676167-4",
        gitHome:"//github.com/Romanysoft/Try-to-translate",
        reportIssueUrl:"//github.com/Romanysoft/Try-to-translate/issues",
        changeLogUrl:"//github.com/Romanysoft/Try-to-translate/wiki/Changelog",
        wikiUrl:"//github.com/Romanysoft/Try-to-translate/wiki",
        jumpLocation:"https://aws.romanysoft.com/trytotranslate/",
        romanysoftHome:"//www.romanysoft.com",
        copyright:"Copyright © " + (new Date()).getFullYear() + " Romanysoft LAB."
    };
    
    if(window.RTYConfig.jumpLocation){
        window.location = window.RTYConfig.jumpLocation;
    }
})();
