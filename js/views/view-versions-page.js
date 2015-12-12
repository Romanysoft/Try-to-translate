(function () {
    window['UI'] = window['UI'] || {};
    window.UI.c$ = window.UI.c$ || {};
})();

(function(){
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    var c$ = {};
    c$ = $.extend(window.UI.c$, {});
    
    c$.updateVersionsPage = function(){
        
        var l10n = c$.l10n["VersionPage"] || {};

        var win32Url = "images/download/win32.png",
            osxUrl = "images/download/osx.png",
            linuxUrl = "images/download/linux.png";

        var  versionList = [
            {
                version:"3.18.0",
                zipList:[
                    {osUrl:win32Url, name:"Trytotranslate-v3.18-win32-x86-setup.exe", size:"44.7MB", downURL:"https://bitbucket.org/romanysoft/fileshare/downloads/Trytotranslate-v3.18-win32-x86-setup.exe"},
                    {osUrl:win32Url,name:"Trytotranslate-v3.18-win32-x64-setup.exe", size:"53.4MB", downURL:"https://bitbucket.org/romanysoft/fileshare/downloads/Trytotranslate-v3.18-win32-x64-setup.exe"},
                    {osUrl:osxUrl,name:"TryToTranslate-v3.18.0-darwin-x64.zip", size:"4.8MB", downURL:"https://bitbucket.org/romanysoft/fileshare/downloads/TryToTranslate-v3.18.0-darwin-x64.zip"},
                    {osUrl:linuxUrl,name:"Trytotranslate-v3.18-linux-ia32-install.tar.gz", size:"38.6MB", downURL:"https://bitbucket.org/romanysoft/fileshare/downloads/Trytotranslate-v3.18-linux-ia32-install.tar.gz"},
                    {osUrl:linuxUrl,name:"Trytotranslate-v3.18-linux-x64-install.tar.gz", size:"38.6MB", downURL:"https://bitbucket.org/romanysoft/fileshare/downloads/Trytotranslate-v3.18-linux-x64-install.tar.gz"},
                ]
            }
        ];
        
        var htmlContent = template('version-content-tmpl', {labelVersion:l10n["labelVersion"] || "Version", list:versionList});
        $('#versions-content').html(htmlContent);
    };
    
    c$.MC_l10n.add(c$.updateVersionsPage);
    
    window.UI.c$ = $.extend(window.UI.c$, c$);
})();