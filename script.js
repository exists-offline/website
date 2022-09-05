//-- Variablendeklaration und Initialisierung----------------------------------------------------------------------------------------------------------------------------------------
let aTypedText = [];
let iTypedTextPosition = 0;
let pTypedContent = document.getElementById("pTyping").innerText;

    //pressedKey
let bShiftPressed    = false;

    //Layout-Arrays
let aQwertzLayout    = ['1','2','3','4','5','6','7','8','9','0','ß','q','w','e','r','t','z','u','i','o','p','ü','a','s','d','f','g','h','j','k','l','ö','ä','y','x','c','v','b','n','m',',','.','-'];
let aQwertzLayoutCap = ['!','"','§','$','%','&','/','(',')','=','?','Q','W','E','R','T','Z','U','I','O','P','Ü','A','S','D','F','G','H','J','K','L','Ö','Ä','Y','X','C','V','B','N','M',';',':','_'];
let aNeoLayout       = ['1','2','3','4','5','6','7','8','9','0','-','x','v','l','c','w','k','h','g','f','q','ß','u','i','a','e','o','s','n','r','t','d','y','ü','ö','ä','p','z','b','m',',','.','j'];
let aNeoLayoutCap    = ['!','"','§','$','%','&','/','(',')','=','_','X','V','L','C','W','K','H','G','F','Q','?','U','I','A','E','O','S','N','R','T','D','Y','Ü','O','Ä','P','Z','B','M',';',':','J'];
let aBoneLayout      = ['1','2','3','4','5','6','7','8','9','0','-','j','d','u','a','x','p','h','l','m','w','ß','c','t','i','e','o','b','n','r','s','g','q','f','v','ü','ä','ö','y','z',',','.','k'];
let aBoneLayoutCap   = ['!','"','§','$','%','&','/','(',')','=','_','J','D','U','A','X','P','H','L','M','W','?','C','T','I','E','O','B','N','R','S','G','Q','F','V','Ü','Ä','Ö','Y','Z',';',':','K'];
let aAdnwLayout      = ['1','2','3','4','5','6','7','8','9','0','-','k','u','ü','.','ä','v','g','c','l','j','f','h','i','e','a','o','d','t','r','n','s','ß','x','y','ö',',','q','b','p','w','m','z'];
let aAdnwLayoutCap   = ['!','"','§','$','%','&','/','(',')','=','_','K','U','Ü',':','Ä','V','G','C','L','J','F','H','I','E','A','O','B','T','R','N','S','?','X','Y','Ö',';','Q','B','P','W','M','Z']; 
let iArrayLetterCount= aQwertzLayout.length +1;


//-- Laden des visuellen Tastaturlayouts in divLayoutInfo, wenn btnLayoutLaden geklickt wird ----------------------------------------------------------------------------------------
document.getElementById('btnLayoutLaden').addEventListener("click", function(){

    if (document.getElementById('selLayout').value == 'QWERTZ') {
        document.getElementById('divLayoutInfo').innerHTML = 
        `
        <!-- Row 1 -->
        <img id="0" src="img-qwertz/key-assets/0.png">
        <img id="1" src="img-qwertz/key-assets/1.png">
        <img id="2" src="img-qwertz/key-assets/2.png">
        <img id="3" src="img-qwertz/key-assets/3.png">
        <img id="4" src="img-qwertz/key-assets/4.png">
        <img id="5" src="img-qwertz/key-assets/5.png">
        <img id="6" src="img-qwertz/key-assets/6.png">
        <img id="7" src="img-qwertz/key-assets/7.png">
        <img id="8" src="img-qwertz/key-assets/8.png">
        <img id="9" src="img-qwertz/key-assets/9.png">
        <img id="10" src="img-qwertz/key-assets/10.png">
        <br>

        <!-- Row 2 -->
        <div class="spacer">&nbsp</div>
        <div class="spacer">&nbsp</div>
        <img id="11" src="img-qwertz/key-assets/11.png">
        <img id="12" src="img-qwertz/key-assets/12.png">
        <img id="13" src="img-qwertz/key-assets/13.png">
        <img id="14" src="img-qwertz/key-assets/14.png">
        <img id="15" src="img-qwertz/key-assets/15.png">
        <img id="16" src="img-qwertz/key-assets/16.png">
        <img id="17" src="img-qwertz/key-assets/17.png">
        <img id="18" src="img-qwertz/key-assets/18.png">
        <img id="19" src="img-qwertz/key-assets/19.png">
        <img id="20" src="img-qwertz/key-assets/20.png">
        <img id="21" src="img-qwertz/key-assets/21.png">
        <br>

        <!-- Row 3 -->
        <div class="spacer">&nbsp</div>
        <div class="spacer">&nbsp</div>
        <div class="spacer">&nbsp</div>
        <img id="22" src="img-qwertz/key-assets/22.png">
        <img id="23" src="img-qwertz/key-assets/23.png">
        <img id="24" src="img-qwertz/key-assets/24.png">
        <img id="25" src="img-qwertz/key-assets/25.png">
        <img id="26" src="img-qwertz/key-assets/26.png">
        <img id="27" src="img-qwertz/key-assets/27.png">
        <img id="28" src="img-qwertz/key-assets/28.png">
        <img id="29" src="img-qwertz/key-assets/29.png">
        <img id="30" src="img-qwertz/key-assets/30.png">
        <img id="31" src="img-qwertz/key-assets/31.png">
        <img id="32" src="img-qwertz/key-assets/32.png">
        <br>

        <!-- Row 4 -->
        <div class="spacer">&nbsp</div>
        <div class="spacer">&nbsp</div>
        <div class="spacer">&nbsp</div>
        <div class="spacer">&nbsp</div>
        <div class="spacer">&nbsp</div>
        <img id="33" src="img-qwertz/key-assets/33.png">
        <img id="34" src="img-qwertz/key-assets/34.png">
        <img id="35" src="img-qwertz/key-assets/35.png">
        <img id="36" src="img-qwertz/key-assets/36.png">
        <img id="37" src="img-qwertz/key-assets/37.png">
        <img id="38" src="img-qwertz/key-assets/38.png">
        <img id="39" src="img-qwertz/key-assets/39.png">
        <img id="40" src="img-qwertz/key-assets/40.png">
        <img id="41" src="img-qwertz/key-assets/41.png">
        <img id="42" src="img-qwertz/key-assets/42.png">
        `
    }
    else if (document.getElementById('selLayout').value == 'Neo') {
        document.getElementById('divLayoutInfo').innerHTML = 
        `
        <!-- Row 1 -->
        <img id="0" src="img-neo/key-assets/0.png">
        <img id="1" src="img-neo/key-assets/1.png">
        <img id="2" src="img-neo/key-assets/2.png">
        <img id="3" src="img-neo/key-assets/3.png">
        <img id="4" src="img-neo/key-assets/4.png">
        <img id="5" src="img-neo/key-assets/5.png">
        <img id="6" src="img-neo/key-assets/6.png">
        <img id="7" src="img-neo/key-assets/7.png">
        <img id="8" src="img-neo/key-assets/8.png">
        <img id="9" src="img-neo/key-assets/9.png">
        <img id="10" src="img-neo/key-assets/10.png">
        <br>

        <!-- Row 2 -->
        <div class="spacer">&nbsp</div>
        <div class="spacer">&nbsp</div>
        <img id="11" src="img-neo/key-assets/11.png">
        <img id="12" src="img-neo/key-assets/12.png">
        <img id="13" src="img-neo/key-assets/13.png">
        <img id="14" src="img-neo/key-assets/14.png">
        <img id="15" src="img-neo/key-assets/15.png">
        <img id="16" src="img-neo/key-assets/16.png">
        <img id="17" src="img-neo/key-assets/17.png">
        <img id="18" src="img-neo/key-assets/18.png">
        <img id="19" src="img-neo/key-assets/19.png">
        <img id="20" src="img-neo/key-assets/20.png">
        <img id="21" src="img-neo/key-assets/21.png">
        <br>

        <!-- Row 3 -->
        <div class="spacer">&nbsp</div>
        <div class="spacer">&nbsp</div>
        <div class="spacer">&nbsp</div>
        <img id="22" src="img-neo/key-assets/22.png">
        <img id="23" src="img-neo/key-assets/23.png">
        <img id="24" src="img-neo/key-assets/24.png">
        <img id="25" src="img-neo/key-assets/25.png">
        <img id="26" src="img-neo/key-assets/26.png">
        <img id="27" src="img-neo/key-assets/27.png">
        <img id="28" src="img-neo/key-assets/28.png">
        <img id="29" src="img-neo/key-assets/29.png">
        <img id="30" src="img-neo/key-assets/30.png">
        <img id="31" src="img-neo/key-assets/31.png">
        <img id="32" src="img-neo/key-assets/32.png">
        <br>

        <!-- Row 4 -->
        <div class="spacer">&nbsp</div>
        <div class="spacer">&nbsp</div>
        <div class="spacer">&nbsp</div>
        <div class="spacer">&nbsp</div>
        <div class="spacer">&nbsp</div>
        <img id="33" src="img-neo/key-assets/33.png">
        <img id="34" src="img-neo/key-assets/34.png">
        <img id="35" src="img-neo/key-assets/35.png">
        <img id="36" src="img-neo/key-assets/36.png">
        <img id="37" src="img-neo/key-assets/37.png">
        <img id="38" src="img-neo/key-assets/38.png">
        <img id="39" src="img-neo/key-assets/39.png">
        <img id="40" src="img-neo/key-assets/40.png">
        <img id="41" src="img-neo/key-assets/41.png">
        <img id="42" src="img-neo/key-assets/42.png">
        `
    }
    else if (document.getElementById('selLayout').value == 'Bone') {
        document.getElementById('divLayoutInfo').innerHTML = 
        `
        <!-- Row 1 -->
        <img id="0" src="img-bone/key-assets/0.png">
        <img id="1" src="img-bone/key-assets/1.png">
        <img id="2" src="img-bone/key-assets/2.png">
        <img id="3" src="img-bone/key-assets/3.png">
        <img id="4" src="img-bone/key-assets/4.png">
        <img id="5" src="img-bone/key-assets/5.png">
        <img id="6" src="img-bone/key-assets/6.png">
        <img id="7" src="img-bone/key-assets/7.png">
        <img id="8" src="img-bone/key-assets/8.png">
        <img id="9" src="img-bone/key-assets/9.png">
        <img id="10" src="img-bone/key-assets/10.png">
        <br>

        <!-- Row 2 -->
        <div class="spacer">&nbsp</div>
        <div class="spacer">&nbsp</div>
        <img id="11" src="img-bone/key-assets/11.png">
        <img id="12" src="img-bone/key-assets/12.png">
        <img id="13" src="img-bone/key-assets/13.png">
        <img id="14" src="img-bone/key-assets/14.png">
        <img id="15" src="img-bone/key-assets/15.png">
        <img id="16" src="img-bone/key-assets/16.png">
        <img id="17" src="img-bone/key-assets/17.png">
        <img id="18" src="img-bone/key-assets/18.png">
        <img id="19" src="img-bone/key-assets/19.png">
        <img id="20" src="img-bone/key-assets/20.png">
        <img id="21" src="img-bone/key-assets/21.png">
        <br>

        <!-- Row 3 -->
        <div class="spacer">&nbsp</div>
        <div class="spacer">&nbsp</div>
        <div class="spacer">&nbsp</div>
        <img id="22" src="img-bone/key-assets/22.png">
        <img id="23" src="img-bone/key-assets/23.png">
        <img id="24" src="img-bone/key-assets/24.png">
        <img id="25" src="img-bone/key-assets/25.png">
        <img id="26" src="img-bone/key-assets/26.png">
        <img id="27" src="img-bone/key-assets/27.png">
        <img id="28" src="img-bone/key-assets/28.png">
        <img id="29" src="img-bone/key-assets/29.png">
        <img id="30" src="img-bone/key-assets/30.png">
        <img id="31" src="img-bone/key-assets/31.png">
        <img id="32" src="img-bone/key-assets/32.png">
        <br>

        <!-- Row 4 -->
        <div class="spacer">&nbsp</div>
        <div class="spacer">&nbsp</div>
        <div class="spacer">&nbsp</div>
        <div class="spacer">&nbsp</div>
        <div class="spacer">&nbsp</div>
        <img id="33" src="img-bone/key-assets/33.png">
        <img id="34" src="img-bone/key-assets/34.png">
        <img id="35" src="img-bone/key-assets/35.png">
        <img id="36" src="img-bone/key-assets/36.png">
        <img id="37" src="img-bone/key-assets/37.png">
        <img id="38" src="img-bone/key-assets/38.png">
        <img id="39" src="img-bone/key-assets/39.png">
        <img id="40" src="img-bone/key-assets/40.png">
        <img id="41" src="img-bone/key-assets/41.png">
        <img id="42" src="img-bone/key-assets/42.png">
        `
    }
    else if (document.getElementById('selLayout').value == 'AdNW') {
        document.getElementById('divLayoutInfo').innerHTML = 
        `
        <!-- Row 1 -->
        <img id="0" src="img-adnw/key-assets/0.png">
        <img id="1" src="img-adnw/key-assets/1.png">
        <img id="2" src="img-adnw/key-assets/2.png">
        <img id="3" src="img-adnw/key-assets/3.png">
        <img id="4" src="img-adnw/key-assets/4.png">
        <img id="5" src="img-adnw/key-assets/5.png">
        <img id="6" src="img-adnw/key-assets/6.png">
        <img id="7" src="img-adnw/key-assets/7.png">
        <img id="8" src="img-adnw/key-assets/8.png">
        <img id="9" src="img-adnw/key-assets/9.png">
        <img id="10" src="img-adnw/key-assets/10.png">
        <br>

        <!-- Row 2 -->
        <div class="spacer">&nbsp</div>
        <div class="spacer">&nbsp</div>
        <img id="11" src="img-adnw/key-assets/11.png">
        <img id="12" src="img-adnw/key-assets/12.png">
        <img id="13" src="img-adnw/key-assets/13.png">
        <img id="14" src="img-adnw/key-assets/14.png">
        <img id="15" src="img-adnw/key-assets/15.png">
        <img id="16" src="img-adnw/key-assets/16.png">
        <img id="17" src="img-adnw/key-assets/17.png">
        <img id="18" src="img-adnw/key-assets/18.png">
        <img id="19" src="img-adnw/key-assets/19.png">
        <img id="20" src="img-adnw/key-assets/20.png">
        <img id="21" src="img-adnw/key-assets/21.png">
        <br>

        <!-- Row 3 -->
        <div class="spacer">&nbsp</div>
        <div class="spacer">&nbsp</div>
        <div class="spacer">&nbsp</div>
        <img id="22" src="img-adnw/key-assets/22.png">
        <img id="23" src="img-adnw/key-assets/23.png">
        <img id="24" src="img-adnw/key-assets/24.png">
        <img id="25" src="img-adnw/key-assets/25.png">
        <img id="26" src="img-adnw/key-assets/26.png">
        <img id="27" src="img-adnw/key-assets/27.png">
        <img id="28" src="img-adnw/key-assets/28.png">
        <img id="29" src="img-adnw/key-assets/29.png">
        <img id="30" src="img-adnw/key-assets/30.png">
        <img id="31" src="img-adnw/key-assets/31.png">
        <img id="32" src="img-adnw/key-assets/32.png">
        <br>

        <!-- Row 4 -->
        <div class="spacer">&nbsp</div>
        <div class="spacer">&nbsp</div>
        <div class="spacer">&nbsp</div>
        <div class="spacer">&nbsp</div>
        <div class="spacer">&nbsp</div>
        <img id="33" src="img-adnw/key-assets/33.png">
        <img id="34" src="img-adnw/key-assets/34.png">
        <img id="35" src="img-adnw/key-assets/35.png">
        <img id="36" src="img-adnw/key-assets/36.png">
        <img id="37" src="img-adnw/key-assets/37.png">
        <img id="38" src="img-adnw/key-assets/38.png">
        <img id="39" src="img-adnw/key-assets/39.png">
        <img id="40" src="img-adnw/key-assets/40.png">
        <img id="41" src="img-adnw/key-assets/41.png">
        <img id="42" src="img-adnw/key-assets/42.png">
        `
    }
})


//-- Hauptfunktion - Transformation der eingegebenen Tastendrücke und Anzeigen der gedrückten Tasten in divLayoutInfo ---------------------------------------------------------------
document.addEventListener("keydown", function(e){
    
    aTypedText[iTypedTextPosition] = '';

    //--Shift / Backspace / Space pressed-------------------------------------------------------------------------
    if (e.key == 'Shift') bShiftPressed = true;                                  //wenn Shift gedrückt wird - shiftPressed=true
    if (e.code == 'Space') aTypedText[iTypedTextPosition] = '&nbsp';
    if (e.key == 'Enter') aTypedText[iTypedTextPosition] = '<br>';


    //--Transformation der eingegeben Tastendrücke------------------------------------------------------------------
    //QWERTZ
    if (document.getElementById('selLayout').value == 'QWERTZ') {
        for (let i=0; i<=iArrayLetterCount; i++) {
            if (bShiftPressed == true) {
                if (e.key == aQwertzLayoutCap[i]) {
                    aTypedText[iTypedTextPosition] += aQwertzLayoutCap[i];       //wenn shift aktiviert - Qwertz capitalised Layout
                    document.getElementById(i).src = "img-qwertz/keypressed-assets/" + i + ".png";
                };
            }
            else {
                if (e.key == aQwertzLayout[i]) {
                    aTypedText[iTypedTextPosition] += aQwertzLayout[i];             //wenn nichts weiter aktiviert - Qwertz normal Layout 
                    document.getElementById(i).src = "img-qwertz/keypressed-assets/" + i + ".png";
                }
            }
        }
    }

    //Neo
    else if (document.getElementById('selLayout').value == 'Neo') {
        for (let i=0; i<=iArrayLetterCount; i++) {
            if (bShiftPressed == true) {
                if (e.key == aQwertzLayoutCap[i]) {
                    aTypedText[iTypedTextPosition] += aNeoLayoutCap[i];       //wenn shift aktiviert - Neo capitalised Layout
                    document.getElementById(i).src = "img-neo/keypressed-assets/" + i + ".png";
                }
            }
            else {
                if (e.key == aQwertzLayout[i]) {
                    aTypedText[iTypedTextPosition] += aNeoLayout[i];             //wenn nichts weiter aktiviert - Neo normal Layout 
                    document.getElementById(i).src = "img-neo/keypressed-assets/" + i + ".png";
                }
            }
        }
    }

    //Bone
    else if (document.getElementById('selLayout').value == 'Bone') {
        for (let i=0; i<=iArrayLetterCount; i++) {
            if (bShiftPressed == true) {
                if (e.key == aQwertzLayoutCap[i]) {
                    aTypedText[iTypedTextPosition] += aBoneLayoutCap[i];       //wenn shift aktiviert - Bone capitalised Layout
                    document.getElementById(i).src = "img-bone/keypressed-assets/" + i + ".png";
                }
            }
            else {
                if (e.key == aQwertzLayout[i]) {
                    aTypedText[iTypedTextPosition] += aBoneLayout[i];             //wenn nichts weiter aktiviert - Bone normal Layout 
                    document.getElementById(i).src = "img-bone/keypressed-assets/" + i + ".png";
                }
            }
        }
    }

    //Aus der Neo-Welt
    else if (document.getElementById('selLayout').value == 'AdNW') {
        for (let i=0; i<=iArrayLetterCount; i++) {
            if (bShiftPressed == true) {
                if (e.key == aQwertzLayoutCap[i]) {
                    aTypedText[iTypedTextPosition] += aAdnwLayoutCap[i];       //wenn shift aktiviert - Bone capitalised Layout
                    document.getElementById(i).src = "img-adnw/keypressed-assets/" + i + ".png";
                }
            }
            else {
                if (e.key == aQwertzLayout[i]) {
                    aTypedText[iTypedTextPosition] += aAdnwLayout[i];             //wenn nichts weiter aktiviert - Bone normal Layout 
                    document.getElementById(i).src = "img-adnw/keypressed-assets/" + i + ".png";
                }
            }
        }
    }


    //-Space, Backspace, Enter ---------------------------------------------------------------------------------------
    if (e.key == 'Backspace') {
        iTypedTextPosition -= 1;
        aTypedText[iTypedTextPosition] = '';
        if (iTypedTextPosition  < 0) iTypedTextPosition = 0;
    }

    else if (e.key == ' ') {
        iTypedTextPosition += 1;
    }

    else if (e.key == 'Enter') {
        iTypedTextPosition += 1;
    }

    else{
        for (let i=0; i<=iArrayLetterCount; i++) {
            if ((e.key == aQwertzLayout[i])||(e.key == aQwertzLayoutCap[i])) {
                if (iTypedTextPosition < 0) iTypedTextPosition = 0;
                else iTypedTextPosition += 1;
            }
        }
    }

    
    //-Ausgabe -------------------------------------------------------------------------------------------------------
    document.getElementById("pTyping").innerHTML = aTypedText.join('') + '|';                        //array aTypedText gebunden ausgeben
})


//-- Erneutes Anzeigen der nicht gedrückten Taste in divLayoutInfo und Shift lösen ------------------------------------------------------------------------------------------------------------------
document.addEventListener("keyup", function(e){

    //Shift gelöst
    if (e.key == 'Shift') bShiftPressed = false;                                 

    //Anzeigen der nicht gedrückten Taste
    if (document.getElementById('selLayout').value == 'QWERTZ') {
        for (let i=0; i<=iArrayLetterCount; i++) {
            if (e.key == aQwertzLayout[i]) {
                    document.getElementById(i).src = "img-qwertz/key-assets/" + i + ".png";
            }
            else if (e.key == aQwertzLayoutCap[i]) {
                    document.getElementById(i).src = "img-qwertz/key-assets/" + i + ".png";
            };
        }
    }
    else if (document.getElementById('selLayout').value == 'Neo') {
        for (let i=0; i<=iArrayLetterCount; i++) {
            if (e.key == aQwertzLayout[i]) {
                    document.getElementById(i).src = "img-neo/key-assets/" + i + ".png";
            }
            else if (e.key == aQwertzLayoutCap[i]) {
                    document.getElementById(i).src = "img-neo/key-assets/" + i + ".png";
            };
        }
    }
    else if (document.getElementById('selLayout').value == 'Bone') {
        for (let i=0; i<=iArrayLetterCount; i++) {
            if (e.key == aQwertzLayout[i]) {
                    document.getElementById(i).src = "img-bone/key-assets/" + i + ".png";
            }
            else if (e.key == aQwertzLayoutCap[i]) {
                    document.getElementById(i).src = "img-bone/key-assets/" + i + ".png";
            };
        }
    }
    else if (document.getElementById('selLayout').value == 'AdNW') {
        for (let i=0; i<=iArrayLetterCount; i++) {
            if (e.key == aQwertzLayout[i]) {
                    document.getElementById(i).src = "img-adnw/key-assets/" + i + ".png";
            }
            else if (e.key == aQwertzLayoutCap[i]) {
                    document.getElementById(i).src = "img-adnw/key-assets/" + i + ".png";
            };
        }
    }
});