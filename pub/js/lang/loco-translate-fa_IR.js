/**
 * Loco js export: JavaScript function
 * Project: loco.po conversion
 * Release: Working copy
 * Locale: fa_IR, Persian
 * Exported at: Fri, 24 Apr 2015 12:52:07 +0100 
 */
loco = window.loco||{}, loco.t = function( pairs ){
    
    // named plural forms
    var pluralForms = ["other"];
    
    // calc numeric index of a plural form (0-0)
    function pluralIndex( n ){
        return Number( 0 );
    }

    // expose public t() function
    return function( msgid1, msgid2, n ){
        var value = pairs[msgid1];
        // singular if no multiplier
        if( null == n ){
            n = 1;
        }
        // plurals stored as objects, e.g. { one: "" }
        if( value instanceof Object ){
            value = value[ pluralForms[ pluralIndex(n) ] || 'one' ];
        }
        return value || ( 1 === n ? msgid1 : msgid2 ) || msgid1 || '';
    };
}(
    {"Error":"\u062e\u0637\u0627","Warning":"\u0627\u062e\u0637\u0627\u0631","OK":{"OK":["\u0627\u0648\u06a9\u06cc","\u0627\u0648\u06a9\u06cc"]},"Permission denied":"\u062f\u0633\u062a\u0631\u0633\u06cc \u0627\u0645\u06a9\u0627\u0646 \u067e\u0630\u06cc\u0631 \u0646\u06cc\u0633\u062a","Settings saved":"\u062a\u0646\u0638\u06cc\u0645\u0627\u062a \u0630\u062e\u06cc\u0631\u0647 \u0634\u062f","New PO file":"\u0641\u0627\u06cc\u0644 PO \u062c\u062f\u06cc\u062f","You must specify a valid locale for a new PO file":"\u0634\u0645\u0627 \u0628\u0627\u06cc\u062f \u06cc\u06a9 \u0645\u0633\u06cc\u0631 \u0642\u0627\u0628\u0644 \u0642\u0628\u0648\u0644 \u0628\u0631\u0627\u06cc \u0641\u0627\u06cc\u0644 PO \u0645\u0634\u062e\u0635 \u06a9\u0646\u06cc\u062f","No translatable strings found":"\u0647\u06cc\u0686 \u0633\u0637\u0631\u06cc \u0628\u0631\u0627\u06cc \u062a\u0631\u062c\u0645\u0647 \u067e\u06cc\u062f\u0627 \u0646\u0634\u062f","Cannot create a PO file.":"\u0633\u0627\u062e\u062a \u0641\u0627\u06cc\u0644 PO \u0627\u0645\u06a9\u0627\u0646 \u067e\u0630\u06cc\u0631 \u0646\u06cc\u0633\u062a","PO file already exists with locale %s":"\u0641\u0627\u06cc\u0644 PO \u0642\u0628\u0644\u0627 \u0628\u0631\u0627\u06cc \u0632\u0628\u0627\u0646 %s \u0648\u062c\u06cc\u0648 \u062f\u0627\u0631\u062f","PO file used as template. This will be renamed to %s on first save":"\u0641\u0627\u06cc\u0644 PO \u0628\u0647 \u062c\u0627\u06cc \u0642\u0627\u0644\u0628 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0634\u062f. \u062f\u0631 \u0630\u062e\u06cc\u0631\u0647 \u0627\u0648\u0644\u060c \u0641\u0627\u06cc\u0644 \u0628\u0647 \u0646\u0627\u0645 %s \u062a\u063a\u06cc\u06cc\u0631 \u0646\u0627\u0645 \u062e\u0648\u0627\u0647\u062f \u062f\u0627\u062f","File cannot be created automatically. Fix the file permissions or use Download instead of Save":"\u0641\u0627\u06cc\u0644 \u0642\u0627\u06cc\u0644 \u062f\u062e\u06cc\u0631\u0647 \u0634\u062f\u0646 \u0646\u06cc\u0633\u062a. \u0627\u062c\u0627\u0632\u0647 \u062f\u0633\u062a\u0631\u0633\u06cc \u0641\u0627\u06cc\u0644 \u0647\u0627 \u0631\u0627 \u062f\u0631\u0633\u062a \u06a9\u0646\u06cc\u062f \u06cc\u0627 \u0627\u0632 \u062f\u0631\u06cc\u0627\u0641\u062a \u0628\u0647 \u062c\u0627\u06cc \u062f\u062e\u06cc\u0631\u0647 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u062f","%s file is empty":"\u0641\u0627\u06cc\u0644 %s \u062e\u0627\u0644\u06cc \u0627\u0633\u062a","Run Sync to update from source code":"\u0627\u062c\u0631\u0627\u06cc \u0647\u0645\u0627\u0647\u0646\u06af \u0633\u0627\u0632\u06cc \u0628\u0631\u0627\u06cc \u0628\u0647 \u0631\u0648\u0632 \u0631\u0633\u0627\u0646\u06cc \u0633\u0648\u0631\u0633 \u06a9\u062f","No strings could be extracted from source code":"\u0647\u06cc\u0686 \u0633\u0637\u0631\u06cc \u0627\u0632 \u0633\u0648\u0631\u0633 \u06a9\u062f \u067e\u06cc\u062f\u0627 \u0646\u0634\u062f","Run Sync to update from %s":"\u0627\u062c\u0631\u0627\u06cc \u0647\u0645\u0627\u0647\u0646\u06af \u0633\u0627\u0632\u06cc \u0628\u0631\u0627\u06cc \u0628\u0647 \u0631\u0648\u0632 \u0631\u0633\u0627\u0646\u06cc \u0627\u0632 %s","Source code has been modified, run Sync to update POT":"\u0633\u0648\u0631\u0633 \u06a9\u062f \u0648\u06cc\u0631\u0627\u06cc\u0634 \u0634\u062f\u0647 \u0627\u0633\u062a\u061b \u0628\u0631\u0627\u06cc \u0628\u0647 \u0631\u0648\u0632 \u0631\u0633\u0627\u0646\u06cc\u060c \u0647\u0645\u0627\u0647\u0646\u06af \u0633\u0627\u0632\u06cc \u0631\u0627 \u0627\u062c\u0631\u0627 \u06a9\u0646\u06cc\u062f","POT has been modified since PO file was saved, run Sync to update":"\u0627\u0632 \u0632\u0645\u0627\u0646\u06cc \u06a9\u0647 \u0641\u0627\u06cc\u0644 PO \u0630\u062e\u06cc\u0631\u0647 \u0634\u062f\u0647 \u0628\u0648\u062f\u060c \u0641\u0627\u06cc\u0644 POT \u0648\u06cc\u0631\u0627\u06cc\u0634 \u0634\u062f\u0647 \u0627\u0633\u062a. \u0647\u0645\u0627\u0647\u0646\u06af \u0633\u0627\u0632\u06cc \u0631\u0627 \u0627\u062c\u0631\u0627 \u06a9\u0646\u06cc\u062f","Bad file path":"\u0645\u0633\u06cc\u0631 \u0642\u0627\u06cc\u0644 \u0642\u0628\u0648\u0644 \u0646\u06cc\u0633\u062a","Empty or invalid %s file":"\u0641\u0627\u06cc\u0644 %s \u062e\u0627\u0644\u06cc \u06cc\u0627 \u063a\u06cc\u0631 \u0642\u0627\u0628\u0644 \u0642\u0628\u0648\u0644 \u0645\u06cc \u0628\u0627\u0634\u062f","%s file has no header":"\u0641\u0627\u06cc\u0644 %s \u062f\u0627\u0631\u0627\u06cc \u0633\u0631\u0628\u0631\u06af \u0646\u0645\u06cc \u0628\u0627\u0634\u062f","New template":"\u0641\u0631\u0645 \u062c\u062f\u06cc\u062f","New language":"\u0632\u0628\u0627\u0646 \u062c\u062f\u06cc\u062f","%s%% translated":"%s%% \u062a\u0631\u062c\u0645\u0647 \u0634\u062f\u0647","1 string":{"other":"%s \u0633\u0637\u0631"},"%s fuzzy":"%s \u0645\u0628\u0647\u0645","%s untranslated":"%s \u062a\u0631\u062c\u0645\u0647 \u0646\u0634\u062f\u0647","Failed to compile MO file with built-in compiler":"\u0641\u0627\u06cc\u0644 MO \u0628\u0627 \u06a9\u0627\u0645\u067e\u0627\u06cc\u0644\u0631 \u062a\u0648\u06a9\u0627\u0631\u060c \u06a9\u0627\u0645\u067e\u0627\u06cc\u0644 \u0646\u0634\u062f","Loco, Translation Management":"\u0644\u0648\u06a9\u0648\u060c \u0645\u062f\u0631\u06cc\u062a \u062a\u0631\u062c\u0645\u0647","Manage translations":"\u0645\u062f\u0631\u06cc\u062a \u062a\u0631\u062c\u0645\u0647 \u0647\u0627","Translation options":"\u062a\u0646\u0638\u06cc\u0645\u0627\u062a \u062a\u0631\u062c\u0645\u0647 \u0647\u0627","Loco Translate":"\u0645\u062a\u0631\u062c\u0645 \u0644\u0648\u06a9\u0648","Settings":"\u062a\u0646\u0638\u06cc\u0645\u0627\u062a","File download failed":"\u062e\u0637\u0627 \u062f\u0631 \u062f\u0631\u06cc\u0627\u0641\u062a \u0641\u0627\u06cc\u0644","WPLANG is deprecated and should be removed from wp-config.php":"WPLANG \u0645\u0646\u0633\u0648\u062e \u0634\u062f\u0647 \u0648 \u0628\u0627\u06cc\u062f \u0627\u0632 wp-config.php \u067e\u0627\u06a9 \u0634\u0648\u062f","Unknown language":"\u0632\u0628\u0627\u0646 \u0646\u0627 \u0622\u0634\u0646\u0627","Some files not writable":"\u062a\u0639\u062f\u0627\u062f\u06cc \u0627\u0632 \u0641\u0627\u06cc\u0644 \u0642\u0627\u0628\u0644 \u0646\u0648\u0634\u062a\u0646 \u0646\u06cc\u0633\u062a\u0646\u062f","Some files missing":"\u062a\u0639\u062f\u0627\u062f\u06cc \u0627\u0632 \u0641\u0627\u06cc\u0644 \u0647\u0627 \u0645\u0648\u062c\u0648\u062f \u0646\u06cc\u0633\u062a\u0646\u062f","\"%s\" folder not writable":"\u067e\u0648\u0634\u0647 %s \u0642\u0627\u0628\u0644 \u0646\u0648\u0634\u062a\u0646 \u0646\u06cc\u0633\u062a","POT file not writable":"\u0641\u0627\u06cc\u0644 POT \u0642\u0627\u06cc\u0644 \u0646\u0648\u0634\u062a\u0646 \u0646\u06cc\u0633\u062a","PO file not writable":"\u0641\u0627\u06cc\u0644 PO \u0641\u0627\u0628\u0644 \u0646\u0648\u0634\u062a\u0646 \u0646\u06cc\u0633\u062a","MO file not writable":"\u0641\u0627\u06cc\u0644 MO \u0641\u0627\u0628\u0644 \u0646\u0648\u0634\u062a\u0646 \u0646\u06cc\u0633\u062a","MO file not found":"\u0641\u0627\u06cc\u0644 MO \u067e\u06cc\u062f\u0627 \u0646\u0634\u062f","Folder not writable":"\u067e\u0648\u0634\u0647 \u0642\u0627\u06cc\u0644 \u0646\u0648\u0634\u062a\u0646 \u0646\u06cc\u0633\u062a","Folder not found":"\u067e\u0648\u0634\u0647 \u067e\u06cc\u062f\u0627 \u0646\u0634\u062f","User does not have permission to manage translations":"\u06a9\u0627\u0631\u0628\u0631 \u062f\u0633\u062a\u0631\u0633\u06cc \u0644\u0627\u0632\u0645 \u0628\u0631\u0627\u06cc \u0645\u062f\u0631\u06cc\u062a \u062a\u0631\u062c\u0645\u0647 \u0647\u0627 \u0631\u0627 \u0646\u062f\u0627\u0631\u062f","Failed to compile MO file with %s, check your settings":"\u062e\u0637\u0627\u06cc \u06a9\u0627\u0645\u067e\u0627\u06cc\u0644 \u0641\u0627\u06cc\u0644 MO \u0628\u0627 %s. \u062a\u0646\u0638\u06cc\u0645\u0627\u062a \u062e\u0648\u062f \u0631\u0627 \u0628\u0631\u0633\u06cc \u06a9\u0646\u06cc\u062f","Invalid data posted to server":"\u062f\u0627\u062f\u0647 \u0646\u0627\u062f\u0631\u0633\u062a \u0628\u0647 \u0633\u0631\u0648\u0631 \u0627\u0631\u0633\u0627\u0644 \u0634\u062f\u0647","Package not found called %s":"\u0628\u0633\u062a\u0647 \u0627\u06cc \u0628\u0627 \u0646\u0627\u0645 %s \u067e\u06cc\u062f\u0627 \u0646\u0634\u062f","Web server cannot create backups in \"%s\". Fix file permissions or disable backups in settings":"\u0633\u0631\u0648\u0631 \u0646\u0645\u06cc \u062a\u0648\u0627\u0646\u062f \u062f\u0631 %s \u067e\u0634\u062a\u06cc\u0628\u0627\u0646 \u062a\u0647\u06cc\u0647 \u06a9\u0646\u062f. \u0627\u062c\u0627\u0632\u0647 \u062f\u0633\u062a\u0631\u0633\u06cc \u0631\u0627 \u062f\u0631\u0633\u062a \u06a9\u0646\u06cc\u062f \u06cc\u0627 \u067e\u0634\u062a\u06cc\u0628\u0627\u0646 \u06af\u06cc\u0631\u06cc \u0631\u0627 \u063a\u06cc\u0631 \u0641\u0639\u0627\u0644 \u06a9\u0646\u06cc\u062f","Web server cannot create \"%s\" directory in \"%s\". Fix file permissions or create it manually.":"\u0633\u0631\u0648\u0631 \u0646\u0645\u06cc \u062a\u0648\u0627\u0646\u062f \u067e\u0648\u0634\u0647 %s \u0631\u0627 \u062f\u0631 %s \u06cc\u0633\u0627\u0632\u062f. \u0627\u062c\u0627\u0632\u0647 \u062f\u0633\u062a\u0631\u0633\u06cc \u0628\u062f\u0647\u06cc\u062f \u0648 \u06cc\u0627 \u067e\u0648\u0634\u0647 \u0631\u0627 \u0628\u0647 \u0635\u0648\u0631\u062a \u062f\u0633\u062a\u06cc \u0628\u0633\u0627\u0632\u06cc\u062f","Web server cannot create files in the \"%s\" directory. Fix file permissions or use the download function.":"\u0633\u0631\u0648\u0631 \u0646\u0645\u06cc \u062a\u0648\u0627\u0646\u062f \u0641\u0627\u06cc\u0644\u06cc \u062f\u0631 %s \u0628\u0633\u0627\u0632\u062f. \u0627\u062c\u0627\u0632\u0647 \u062f\u0633\u062a\u0631\u0633\u06cc \u0628\u062f\u0647\u06cc\u062f \u0648 \u06cc\u0627 \u0627\u0632 \u0627\u0645\u06a9\u0627\u0646 \u062f\u0631\u06cc\u0627\u0641\u062a \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u062f","%s file is not writable by the web server. Fix file permissions or download and copy to \"%s\/%s\".":"\u0641\u0627\u06cc\u0644 %s \u0642\u0627\u0628\u0644 \u0646\u0648\u0634\u062a\u0646 \u0646\u06cc\u0633\u062a. \u0627\u062c\u0627\u0632\u0647 \u062f\u0633\u062a\u0631\u0633\u06cc \u0628\u062f\u0647\u06cc\u062f \u0648 \u06cc\u0627 \u06cc\u06a9 \u0646\u0633\u062e\u0647 \u0628\u0647 %s\/%s \u06a9\u067e\u06cc \u06a9\u0646\u06cc\u062f","Cannot create MO file":"\u0641\u0627\u06cc\u0644 MO \u0633\u0627\u062e\u062a\u0647 \u0646\u0634\u062f","Cannot overwrite MO file":"\u0641\u0627\u06cc\u0644 MO \u062f\u0648\u0628\u0627\u0631\u0647 \u0646\u0648\u06cc\u0633\u06cc \u0646\u0634\u062f","Failed to write MO file":"\u0641\u0627\u06cc\u0644 MO \u0646\u0648\u0634\u062a\u0647 \u0646\u0634\u062f","No source files in this package, nothing to sync":"\u0647\u06cc\u062c \u0641\u0627\u06cc\u0644 \u0633\u0648\u0631\u0633\u06cc \u062f\u0631 \u0627\u06cc\u0646 \u0628\u0633\u062a\u0647 \u067e\u06cc\u062f\u0627 \u0646\u0634\u062f\u061b \u0686\u06cc\u0632\u06cc \u0628\u0631\u0627\u06cc \u0647\u0645\u0627\u0647\u0646\u06af \u0633\u0627\u0632\u06cc \u0646\u06cc\u0633\u062a","No strings could be extracted from source files":"\u0647\u06cc\u0686 \u0633\u0637\u0631\u06cc \u0627\u0632 \u0633\u0648\u0631\u0633 \u06a9\u062f \u0648\u0627\u0631\u062f \u0646\u0634\u062f","Unknown error":"\u062e\u0637\u0627\u06cc \u0646\u0627 \u0622\u0634\u0646\u0627","PO file saved":"\u0641\u0627\u06cc\u0644 PO \u0630\u062e\u06cc\u0631\u0647 \u0634\u062f","and MO file compiled":"\u0648 \u0641\u0627\u06cc\u0644 MO \u06a9\u0627\u0645\u067e\u0627\u06cc\u0644 \u0634\u062f","Merged from %s":"\u0627\u0632 %s \u06cc\u06a9\u06cc \u0633\u0627\u0632\u06cc \u0634\u062f","Merged from source code":"\u06cc\u06a9\u06cc \u0633\u0627\u0632\u06cc \u0627\u0632 \u0633\u0648\u0631\u0633 \u06a9\u062f","Already up to date with %s":"\u0642\u0628\u0644\u0627 \u0628\u0627 %s \u0628\u0647 \u0631\u0648\u0632 \u0627\u0633\u062a","Already up to date with source code":"\u0642\u0628\u0644\u0627 \u0628\u0627 \u0633\u0648\u0631\u0633 \u06a9\u062f \u0628\u0647 \u0631\u0648\u0632 \u0627\u0633\u062a","1 new string added":{"other":"%s \u0633\u0637\u0631 \u0627\u0636\u0627\u0641\u0647 \u0634\u062f"},"1 obsolete string removed":{"other":"%s \u0633\u0637\u0631 \u0642\u062f\u06cc\u0645\u06cc \u067e\u0627\u06a9 \u0634\u062f"},"Your changes will be lost if you continue without saving":"\u0627\u06af\u0631 \u0628\u062f\u0648\u0646 \u0630\u062e\u06cc\u0631\u0647 \u06a9\u0631\u062f\u0646 \u0627\u062f\u0627\u0645\u0647 \u062f\u0647\u06cc\u062f\u060c \u062a\u0646\u0638\u06cc\u0645\u0627\u062a \u0634\u0645\u0627 \u067e\u0627\u06a9 \u062e\u0648\u0627\u0647\u062f \u0634\u062f","Source text":"\u0645\u062a\u0646","%s translation":"\u062a\u0631\u062c\u0645\u0647 %s","Comments":"\u06cc\u0627\u062f\u062f\u0627\u0634\u062a","Context":"\u0645\u062a\u0646","Translation":"\u062a\u0631\u062c\u0645\u0647","Packages":"\u0628\u0633\u062a\u0647 \u0647\u0627","File check":"\u0686\u06a9 \u0641\u0627\u06cc\u0644","File system permissions for %s":"\u0627\u062c\u0627\u0632\u0647 \u062f\u0633\u062a\u0631\u0633\u06cc \u0628\u0631\u0627\u06cc %s","Back":"\u0641\u0628\u0644\u06cc","Get help":"\u06a9\u0645\u06a9 \u0628\u06af\u06cc\u0631\u06cc\u062f","Package details":"\u062c\u0632\u0626\u06cc\u0627\u062a \u0628\u0633\u062a\u0647","Translations (PO)":"\u062a\u0631\u062c\u0645\u0647 (PO)","Template (POT)":"\u0642\u0627\u0644\u0628 (POT)","File permissions":"\u062f\u0633\u062a\u0631\u0633\u06cc \u0641\u0627\u06cc\u0644","Extends: %s":"\u0627\u0636\u0627\u0641\u0647 \u0634\u062f: %s","1 language":{"other":"%u \u0632\u0628\u0627\u0646"},"Updated":{"Updated":["\u0628\u0647 \u0631\u0648\u0632 \u0631\u0633\u0627\u0646\u06cc \u0634\u062f","\u0628\u0647 \u0631\u0648\u0632 \u0631\u0633\u0627\u0646\u06cc \u0634\u062f"]},"Powered by":"\u0642\u062f\u0631\u062a \u06af\u0631\u0641\u062a\u0647 \u062a\u0648\u0633\u0637","Loco may not work as expected":"\u0644\u0648\u06a9\u0648 \u0645\u0645\u06a9\u0646 \u0627\u0633\u062a \u062f\u0631\u0633\u062a \u06a9\u0627\u0631 \u0646\u06a9\u0646\u062f","Configure Loco Translate":"\u062a\u0646\u0638\u06cc\u0645 \u0645\u062a\u0631\u062c\u0645 \u0644\u0648\u06a9\u0648","Compiling MO files":"\u062f\u0631 \u062d\u0627\u0644 \u06a9\u0627\u0645\u067e\u0627\u06cc\u0644 \u0641\u0627\u06cc\u0644 MO","Use built-in MO compiler.":"\u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u06a9\u0627\u0645\u067e\u0627\u06cc\u0631 \u062a\u0648\u06a9\u0627\u0631 MO.","Use external command:":"\u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u062f\u0633\u062a\u0648\u0631 \u062e\u0627\u0631\u062c\u06cc:","Enter path to msgfmt on server":"\u0648\u0627\u0631\u062f \u06a9\u0631\u062f\u0646 \u0645\u0633\u06cc\u0631 msgfmt  \u062f\u0631 \u0633\u0631\u0648\u0631","Generate hash tables":"\u0633\u0627\u062e\u062a\u0646 \u062c\u062f\u0648\u0644 hash","Backing up PO files":"\u067e\u0634\u062a\u06cc\u0628\u0627\u0646 \u06af\u06cc\u0631\u06cc \u0627\u0632 \u0641\u0627\u06cc\u0644 \u0647\u0627\u06cc PO","Number of backups to keep of each file:":"\u062a\u0639\u062f\u0627\u062f \u067e\u0634\u062a\u06cc\u0628\u0627\u0646 \u0647\u0627\u06cc \u06af\u0631\u0641\u062a\u0647 \u0634\u062f\u0647 \u0627\u0632 \u0647\u0631 \u0641\u0627\u06cc\u0644:","Experimental features":"\u0642\u0627\u0628\u0644\u06cc\u062a \u0647\u0627\u06cc \u0622\u0632\u0645\u0627\u06cc\u0634\u06cc","Enable Wordpress core translations":"\u0641\u0639\u0627\u0644 \u0633\u0627\u0632\u06cc \u062a\u0631\u062c\u0645\u0647 \u0647\u0633\u062a\u0647 \u0648\u0631\u062f\u067e\u0631\u0633","Save settings":"\u062f\u062e\u06cc\u0631\u0647 \u062a\u0646\u0638\u06cc\u0645\u0627\u062a","Template file":"\u0642\u0627\u0644\u0628 \u0641\u0627\u06cc\u0644","Switch to...":"\u062a\u0639\u0648\u06cc\u0636 \u0628\u0647","never":"\u0647\u0631\u06af\u0632","Save":"\u0630\u062e\u06cc\u0631\u0647","Download":"\u062f\u0631\u06cc\u0627\u0641\u062a","Sync":"\u0647\u0645\u0627\u0647\u0646\u06af \u0633\u0627\u0632\u06cc","Revert":"\u0628\u0631\u06af\u0631\u062f\u0627\u0646\u062f\u0646","Add":"\u0627\u0636\u0627\u0641\u0647 \u06a9\u0631\u062f\u0646","Del":"\u067e\u0627\u06a9 \u06a9\u0631\u062f\u0646","Fuzzy":"\u0645\u0628\u0647\u0645","Filter translations":"\u0641\u06cc\u0644\u062a\u0631 \u062a\u0631\u062c\u0645\u0647","Help":"\u06a9\u0645\u06a9","Initialize new translations in %s":"\u0627\u06cc\u062c\u0627\u062f \u0641\u0627\u06cc\u0644 \u062a\u0631\u062c\u0645\u0647 \u0628\u0631\u0627\u06cc %s","Select from common languages":"\u06cc\u06a9\u06cc \u0627\u0632 \u0632\u0628\u0627\u0646 \u0647\u0627\u06cc \u0645\u062a\u062f\u0627\u0648\u0644 \u0631\u0648 \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646\u06cc\u062f","or enter any language code":"\u06cc\u0627 \u06a9\u062f \u0632\u0628\u0627\u0646 \u0631\u0627 \u0648\u0627\u0631\u062f \u06a9\u0646\u06cc\u062f","create in <code>%s<\/code>":"\u062f\u0631 <code>%s<\/code> \u0633\u0627\u062e\u062a\u0647 \u0634\u0648\u062f","create in global languages directory":"\u062f\u0631 \u067e\u0648\u0634\u0647 \u062a\u0631\u062c\u0645\u0647 \u0647\u0627\u06cc \u0633\u0631\u0627\u0633\u0631\u06cc \u0633\u0627\u062e\u062a\u0647 \u0634\u0648\u062f","Start translating":"\u0634\u0631\u0648\u0639 \u062a\u0631\u062c\u0645\u0647","New version available":"\u0646\u0633\u062e\u0647 \u062c\u062f\u06cc\u062f \u0622\u0645\u0627\u062f\u0647 \u0627\u0633\u062a","Upgrade to version %s of Loco Translate":"\u0628\u0647 \u0646\u0633\u062e\u0647 %s \u0645\u062a\u0631\u062c\u0645 \u0644\u0648\u06a9\u0648 \u0628\u0647 \u0631\u0648\u0632 \u0631\u0633\u0627\u0646\u06cc \u0634\u062f","Select a plugin or theme to translate":"\u06cc\u06a9 \u0627\u0641\u0632\u0648\u0646\u0647 \u06cc\u0627 \u067e\u0648\u0633\u062a\u0647 \u0631\u0627 \u0628\u0631\u0627\u06cc \u062a\u0631\u062c\u0645\u0647 \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646\u06cc\u062f","Themes":"\u067e\u0648\u0633\u062a\u0647 \u0647\u0627","Plugins":"\u0627\u0641\u0632\u0648\u0646\u0647 \u0647\u0627","Core":"\u0647\u0633\u062a\u0647"} 
);