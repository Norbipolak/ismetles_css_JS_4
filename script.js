/*
Eseménykezelés

Az eseménykezelés a felhasználói interakciót jelenti. 
Például görgetés, klikkelés, állapotváltozás stb...

<button onclick="alert('Megnyomtad a gombot.')">Nyomd meg!</button>
Fentről le fog ugrani egy alert, hogy megnyomtuk a gombot 

Így lehet attributummal létrehozni egy eseménykezelőt

Készítünk itt egy function-t 
function writeConsole(text) {
    console.log(text);
}
Ami egy megadott paraméter értékét írja ki a konzolra (text)!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

Akkor azt is meg tudjuk tenni, hogy nem egy beépített függvényt adunk meg, hanem ezt a writeConsole nevű függvényt adjuk meg az onClick-nek
button onclick="writeConsole('asdf')">Nyomd meg!</button>

És akkor itt megadtuk ennek a függvénynek, amit kért tehát a paraméterben a text-et, jelen esetben a függvény meghívásakor az onClick-ben 
azt írtuk be, hogy "asdf" és mivel a függbényben az van, hogy console.log(text) ezt ki is írta a konzolra!!!!!!!!!!!!
Mármint ez egy onClick attributim a button-nek, szóval akkor fogja ezt kiírni ha megnyomjuk a gombot 

Tehát így tudunk eseménykezelőt létrehozni attributum segítségével 
**************************************************************************************************************************************
Attributum létrehozása objektummal 

Létrehoztunk egy button-t és megadtunk neki egy id-t, hogy btn-1
<button id="btn1">Ne nyomd meg!</button>

Tanultuk, hogy hogyan tudunk hozzáférni ezekhez a HTML elemekhez -> lementeni getElementById vagy querySelector segítségével 

const btn1 = document.querySelector(#btn1);
-> 
btn1.addEventListener()
Az eventListener az hozza létre az eseményünket!!!!!!!!!!!!!!!
Ez két paramétert vár 
1. az esemény fajtája 
2. egy callback function-t megadunk neki egy létrehozottat vagy itt csinálunk egy névtelen callback functiont 

Csinálunk egy callback function, amely alert-vel kiírja azt, hogy "asdf";
function cb() {
    alert("asdf")
}
és az eventListenernél megadjuk az esemény fajtáját, mivel ez egy button, ezért ez "click" lesz
második paraméternek megadjuk a cb functiont, amit csináltunk 
és ezzel már létre is hoztuk az eseménykezelőt, amugy eventListener-nek van még egy harmadik paramétere az eventCapturing vagy az eventBubbling 
esetében 

És ebben az esetben megjelent felülről lejövö valami, ugye az alert miatt, ami van a cb függvényben és ezt a függvényt adtuk meg az 
eventListenernek "click"-vel, tehát ha rákattintunk a gombra, akkor következik ez be 

Lehet ezt másképpen is csinálni, méghozzá úgy az eseménykezelőnek nem egy létező függvényt hanem egy úgynevezett névtelen függvényt hozunk létre
-> !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
btn1.addEventListener("click", function() {

});
Tehát itt második paraméterként egy névtelen függvényt hoztunk létre
Ez akkor lehet hasznos, ha mondjuk az eventListenerünkben meg akarunk hívni több függvényt!!!!!!!
btn1.addEventListener("click", function() {
    writeConsole("asdf");
    cb();
});
és akkor így mindkettő függvény meg van hívva, tehát a writeConsole az kiírja a konzolra az asdf-et a cb függvény megjelenít egy alertet
amiben szintén az lesz, hogy asdf!!!!
-> 
Tehát amikor rákkatintottunk a gombra, akkor a második paraméterként megadott callback function, ami egy névtelen function, mert nincsen neve
csak azt írjuk hogy function és utána semmit, tehát nincsen neve, abban meghívtunk két normál functiont és atok lefutottak 
*********************************************************************************************************************************************
Milyen eseménytípusok léteznek még -> 
Nagyon sok eseménytípus létezik pl. eddig volt a kattintás (click), van olyan esemény is, hogy Állapotváltozás(onChange)
Állapotváltozás(onChange)
Erre csinálunk egy select mezőt, amiben vannak optionök, selectnek adtunk egy id-t, amivel ezt le tudjuk menteni 

    <select id="select1">
        <option value="0"></option>
        <option value="1"></option>
        <option value="2"></option>
    </select>

const select1 = document.querySelector("#select1");

select1.addEventListener("change", function() {
    console.log("asdf"),
});
Ez arra fog reagálni, amikor a select-ben egy option-t fogunk kiválasztani vagy ha a kiválasztott option helyett egy másik optiont.
Tehát kiválasztottuk a böngészőben a 2-t és lefutott a callback function a konzolra meg kiírta, hogy asdf, kiválasztottunk egy 
másikat megint lefutott és kiírta a konzolra, hogy asdf

Hogyan tudjuk megkapni ezeknek az optionöknek a value-ját 
1. this.value 
select1.addEventListener("change", function() {
    console.log(this);
});
A this az maga select mező lesz!!!!! -> <select id="select"></select>
Ha meg azt mondjuk, hogy this.value, akkor az meg a kijelölt értéke!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
select1.addEventListener("change", function() {
    console.log(this.value);
});
console.log(this.value);
Attól függően, hogy melyik érték van kijelölve pl. ha az egy, akkor konzolon 1 lesz, ha kettes, akkor a konzolon a 2 lesz 

2. De azt is meg lehet csinálni, hogy function-nak megadjuk paraméterben az e-t és akkor megkapjuk a event objektumot 
és az event objektum az csomó mindent tartalmaz itt pl. azt, hogy target 
Target az szintén, mint a this az maga a select mező lesz -> <select id="select"></select> !!!!!!!!!!!!!!!!!!!!
és ezen belül van egy value-nk, ami meg ugyanugy, mint a this.value, attól függően, hogy melyik optionön vagyunk az lesz a value-ja 
1,2,3
->
select1.addEventListener("change", function(e) {
    console.log(this.value);
    console.log(e.target.value);
});
Ezeknek a value-knak mindig string az értékük!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
console.log(typeof this.value);
*********************************************************************************************************************************************
MouseOver
Csináltunk egy div-et, megadtunk neki egy id="square1", ezt pedig formáztunk HTML-ben style-val 
<div id="square1"></div>
    
<style>
    #square1 {
        width: 200px;
        height: 100px;
        background-color: #123456;
    }
</style>

const square1 = document.querySelector("#square1");

square1.addEventListener("mouseover", function() {
    console.log("mouse over");
});
Amikor az objektum felé visszük az egeret, akkor jön létre ez a mouseover esemény 
Tehát, amikor a négyzet felé visszük az egeret, akkor kiírja a konzolra, hogy mouse over

És van olyan is, hogy mouseleave!!!
square1.addEventListener("mouseleave", function() {
    console.log("mouse leave");
});

Szóval ha meg van mindkettő, akkor ha felévisszük, akkor meghívodik a mouseover eseménykezelő és kiírja a konzolra, hogy mouse over 
ha pedig levisszük, akkor meg kiírja, hogy mouse leave

Ezek voltak az eseméynkezelők 
***********************************************************************************************************************************************
Attributumok manipulációja (classList!!!!!!!, add, remove, toggle)

Csináltunk egy div-et id="square2" attributummal, meg három buttont annak is megadtunk egy-egy id-t, ami alapján majd le leht menteni őket
div id="square2"></div>
<button id="add-class">add class</button>
<button id="remove-class">remove class</button>
<button id="toggle-class">toggle class</button>

    #square2 {
        width: 250px;
        height: 250px;
        border: 1px solid grey,
    }

ez a class, amit majd ráteszünk illetve leveszünk erröl a square2-ről az eseménykezelők segítségével 
    .red-bg {
        background-color: red;
    }

Mind a három gombunkat lementjük meg a square2 id-s div-et is 
->
const addClass = document.querySelector("#add-class");
const removeClass = document.querySelector("#remove-class");
const toggleClass = document.querySelector("#toggle-class");
const square2 = document.querySelector("square2");

és késíítünk rájuk eventListener-öket

1.Add  

addClass.addEventListener("click", function() {
    square2.classList.add("red-bg");
});

Hozzáadunk egy red-bg nevű class-t!!!!!!!!!!!!!!!!!!!!!!!
És ha rányomunk az add class button-re, akkor rá fogja rakni ezt a class-t és mivel ez background-color: red; ezért a square2-nek a bg-je is red

2.Remove

removeClass.addEventListener("click", function() {
    square2.classList.remove("red-bg");
});

Ha rányomunk a remove class buttonre, akkor pedig leveszi ezt a classt 

3.Toggle

toggleClass.addEventListener("click", function() {
    square2.classList.toggle("red-bg");
});

A toggle-vel meg ha rajta van, akkor leveszi, ha nincsen rajta, akkor meg rárakja 
******************************************************************************************************************************************
Style attributum módosítása

Csináltunk egy buttont, aminek megadtuk a modify-style id-t és egy div-et square3 id-vel, amit megformáztunk HTML-ben 

<button id="modify-style">modify style</button>
<div id="square3"></div>

    #square3 {
        width: 250px;
        height: 250px;
        border: 1px solid grey;  
    }

Lementjük a button-t és a div-et
const modifyStyle = dolcument.querySelector("#modify-style");
const square3 = document.querySelector("#square3");

modifyStyle.addEventListener("click", function() {
    square3.style.backgroundColor = "blue";
    square.style.border = "5px solid brown";
});

Van a style attributum és ezen belül a background-color(backgroundColor itt) property, boxSizing meg így lenne írva

ezt ugye itt megadtuk neki, meg volt egy bordere de itt csináltunk neki egy másikat -> square.style.border = "5px solid brown";
ami felülírta az eredetit, amit a HTML style-ban csináltunk #square3 border: 1px solid grey;
És akkor így lehet a style attributumot manipulálni!!!
*******************************************************************************************************************************************
Hogyan tudunk más attributumokat megadni, mondjuk különböző forrásattributumokat 

Van egy képünk, annak van egy id-ja, az az id-ja, hogy img1, keresünk neki egy url-t, amit majd megadunk az src-jének
<img src="https://www.google.com/search?q=ice%20tea&tbm=isch&tbs=isz:i&rlz=1C1KNTJ_huHU1072HU1072&hl=en&sa=X&ved
=0CAQQpwVqFwoTCNi86ouWgYUDFQAAAAAdAAAAABAD&biw=1519&bih=695#imgrc=sTsrPiMFoxcbFM" id="img1">

Akkor alapból így néz ki ez az src-je, de ha mi módosítani akarjuk ezt a dolgot -> csinálunk egy buttont 
lementjük id alapján és adunk neki egy eventListener-t 
<button id="modify-src">modify src</button>

const img1 = document.querySelector("#img1");
const modifySrc = document.querySelector("#modify-src");

modifySrc.addEventListener("click", function() {
    img.src = "......png";
})

1. 
Ezt meg lehet úgy is csinálni, hogy az eventListener belsejébe azt írjuk, hogy img1.src = "";
Mert ugye lementettük ezt a dolgot az img egy img1 változóban és annak van egy src-je, amiben van a képnek az url-je 
És akkor keresünk egy másik képet a neten, amit ide megadunk az img1.srcnek 
És amikor rákkattintunk a gombra, amire van csinálva egy eventListener, akkor a képnek az eredeti src-jét kicseréli arra, amit 
most itt megadtunk neki a lementett img1.src-nek

de ezt az img-t be tudjuk rakni egy div-be, hogy legyen valami sortörés és akkor a button nem a kép mellett lesz hanem alatta

    <div>
        <img src="https://www.google.com/search?q=ice%20tea&tbm=isch....
    </div>

a böngészőben már így fog kinézni ->
kép 
gomb 
nem így, hogy kép mellette gomb

2. setAttribute!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
Meg lehet ezt csinálni setAttribute-val is
img1.setAttribute();
A setAttribute az vár 2 paramétert
1. Attributumnak a neve -> src
2. Attributum értéke (URL, amire szeretnénk változtatni)
->
modifySrc.addEventListener("click", function() {
    img1.setAttribute("src", "https://www.google.com/search?q=ice%20tea&tbm=isch....");
})

Az első példában az src nem egy attributumként van jelen, hanem egy property, egy tulajdonság!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
Mert, ha lementünk itt egy bármilyen HTML tag-et, akkor az objektumként fog szerepelni
És az objektumoknak lesznek különböző property és metódusai, pont olyanok, mint amiket mi létre tudunk hozni az objektumoknak!!!!!!!!!!!!!!!!!!
Fontos!!!!!!!!!!!!!!!!

Így fog kinézni egy html elem, amikor lementjük, ilyen object lesz -> 
<div id="myDiv">This is a div element</div>
var myElement = document.getElementById("myDiv");

myElement:
  - nodeName: "DIV"
  - nodeType: 1
  - innerHTML: "This is a div element"
  - id: "myDiv"
  - className: ""
  - ...
  - (other properties and methods)


És setAttribute az egy ilyen metódus, setEventListener az megint egy ilyen metódus!!!!!!!!!!!!!!!!!!!!!!!!!
Tehát egy input tag-nek nincsen src attributuma, mert miért is lenne ellenben van egy value-ja, ami meg az img-nek nincsen 

Csináltunk egy gombot, ami majd le fogja venni ezt az src-t, ami meg van adva ennek a tag-nek és akkor semmi nem lesz ott 
<button id="remove-src">remove src</button>

const removeSrc = document.querySelector("#remove-src");

removeSrc.addEventListener("click", function() {
    img1.removeAttribute("src");
});

de meg tudjuk az attributumnak az értékét is getAttribute!!!!!
csinálunk erre is egy gombot 
<button id="get-attribute">get attribute</button>

const getAttribute = document.querySelector("#get-attribute");

getAttribute.addEventListener("click", function(){
    alert(img1.getAttribute("src");
});

És akkor felül(oldal közlendője) lejön valami amiben bent lesz az URL-je az src-nek
-> 
https://www.google.com/search?q=ice%20tea&tbm=isch....
Tehát ezt így meg tudjuk kapni, le tudjuk menteni egy változóban, getAttribute-nak az a visszatérési értéke 
a paraméterként megadott attributumnak az értéke 

attributumos dolognak van 3 fajtája 
    - setAttribute (amikor beállítjuk valamilyen attributumnak az értékét, vár 2 paramétert, 1.attr. neve 2.érték, amire beállítjuk)
    - removeAttribute (amikor egy attributumot teljesen kitöröl, 1 paraméter, meg kell adni, hogy melyik attr. van szó)
    - getAttribute (megkapjuk az adott attributumnak az értékét, ha nincs ilyen attr. akkor null-t fogunk visszakapni)

************************************************************************************************************************************
Mi az attributum és mi a property 
1. Attributum 
    - HTML-nek a része 
    - Kapnak egy kezdő értéket a HTML-ben és nem lehet ezt megváltoztatni, ameddig ezt nem változtatjuk meg JavaScript segítségével
    - Ezek specifikációk a HTML elemről, amit az első nyitó tag-be írunk bele pl. <img src="image.jpg" alt="Description of the image">
    - Ilyenek példáúl az id, class, href, src, title, alt

2. Property 
    - DOM(Documentation Object Model)-nek a részét képzik és ez a HTML elemnek a reprezentációja 
    - JavaScript-vel tudjuk őket elérni és manipulálni 
    - Properties az aktális állapotát jelképezik ezeknek az elemeknek, egy web-page során is változhat ez 
    - Properties sok esetben ugyanazok, mint az attributumok, de pl. a value-ja egy input mezőnék a propertyként az a current value 
    míg ez a HTML nem biztos, hogy meg van adva -> 
    For instance, the value property of an input element reflects the current value entered by the user, 
    which may or may not be initially set by the value attribute in the HTML.

Fontos!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
Tehát amikor lementünk egy tag-et id alapján, akkor ezekkel a property-kkel és metódusokkal fog rendelkezni
->
1. id: Retrieves the ID of the element.
2. innerHTML: Gets or sets the HTML content within the element.
3. innerText or textContent: Gets or sets the text content of the element (excluding HTML tags).
4. classList: Provides access to the CSS classes applied to the element.

1. addEventListener(): Attaches an event handler function to the element.
2. setAttribute(): Sets the value of an attribute on the element.
3. getAttribute(): Retrieves the value of a specified attribute on the element.
4. querySelector(): Finds the first descendant element that matches a specified CSS selector.
5. querySelectorAll(): Finds all descendant elements that match a specified CSS selector.

!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
************************************************************************************************************************************
Tehát, amikor lementünk egy elemet, akkor lesznek property-je meg metódusai is 
Egy ilyen property az innerText és az innerHTML

<div id="square4"></div>

    .square4 {
        width: 250px;
        height: 250px;
        border: 1px solid grey;
    }

<button id="add-text">add text</button>
<button id="add-html">add html</button>

const square4 = document.querySelector("#square4");
const addText = document.querySelector("add-text");
const addHtml = document.querySelector("add-html");

addText.addEventListener("click", function() {              -> "<h1>asdf</h1>"
    square4.innerText("<h1>asdf</h1>");
});

Megjelent a square4-ben ez, hogy <h1>asdf</h1>
Tehát ez így helytelen, mert az innerText-be csak szöveget tudunk írni nem úgy mint a innerHTML-be, mert ott HTML elemeket is,
mondjuk amit itt beraktunk ez a "<h1>asdf</h1>" ->
Akkor ott csak a szöveget fogja kiírni h1-es nagysággal, így 
-> 
addHtml.addEventListener("click", function() {              -> asdf (h1-es nagysággal lesz kiírva)
    square4.innerHTML("<h1>asdf</h1>");
});
********************************************************************************************************************************************
Eventcapturing és Eventbubbling
Csináltunk egy div-et, aminek az id-ja az, hogy div1 és ebbe csináltunk egy másik div-et, aminek div2 az id-ja
->
    <div id="div1">
        <div id="div2"></div>
    </div>

    #div1 {
        width: 200px;
        height: 200px;
        background-color: #569874;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    #div2 {
        width: 100px;
        height: 100px;
        background-color: #7a9bbc;
    }

Tehát rendelkezünk egy nagyobb és egy kisebb négyzettel, a nagyobba van benne a kisebb és mivel ennek a nagyobbnak, amiben benne van a kisebb
megadtunk egy olyat, hogy display: flex; justify-content: center; align-items: center;
Ezért a kisebb az vertikálisan és horizontálisan is középen lesz a nagyban 

Belsőt lementjük és beállítunk neki egy eventListener-t 

const div2 = document.querySelector("#div2");

div2.addEventListener("click", function() {
    console.log(this);
});
Mi volt a this 
-> 
Maga az elem, amire az eseménykezelőt elkészítettük 
<div id="div2"></div>
És ha erre az elemre rákkatintunk, tehát a belső négyzetre, akkor ki jön nekünk ez a div
tehát az eseménykezelő nem csak egy gombra jó, hanem bármilyen elemre és ha "click" van megadva, akkor csak rá 
kell kattintani, arra az elemre és az eseménykezelő le fog futni

És mi történik akkor, ha hozzátesszük a másik div-et
Tehát lementjük és csinálnuk rá egy eventListenert, ugyanugy console.log(this)-vel 

const div1 = document.querySelector("#div1");
const div2 = document.querySelector("#div2");

div1.addEventListener("click", function() {
    console.log(this);
});

div2.addEventListener("click", function() {
    console.log(this);
});

Azt mondjuk, hogy div1.addEventListener, hol van a div1, az a külső, a div2 a belső 
Milyen sorrendben jelent ez meg (rákattintottunk)
->
<div id="div2"></div>
<div id="div1"></div>

Ez az eventBubbling
->
Az volt mögötte a logika, hogy belülről kifele, tehát mindig a belső elemnek az eventListener-je fog előbb lefutni 
mint hogy a buborékok is belülről kifele nőnnek koncepció 

Eventcapturing

Mi van, ha a külsőnek adunk egy harmadik paramétert, amit true-ra állítunk -> 
div1.addEventListener("click", function() {
    console.log(this);
}, true);

Tehát így 3 paramétere van 
1. eseménytípus (pl. "click")
2. callback function
3. true

És akkor meg fog változni a sorrend
A külső fog lefutni elöször utána meg a belső 
->
<div id="div1"></div>
<div id="div2"></div>

Ezzel azt történt, hogy megfordult az irány kívülről haladunk befelé 
Ez a különbség az eventCapturing és az eventBubbling között 

e.stopPropogation!!!!!!

És ha kivülről haladunk befelé, akkor tudjuk ezt csinálni
-> 
div1.addEventListener("click", function(e) {
    console.log(this);
    e.stopPropogation();
});

Mi történik ilyenkor
->
<div id="div1"></div>
e.stopPropogation megállítja az összes event-et, ami utána lefutna, amihez neki van bármiféle köze 
Nem arról van szó, hogy egy másik event láncolatot állít meg, hanem azt, hogy mivel rákattintottunk a belső elemre
ezért kötvetve a külső elemre is rákattintottunk!!!!!!!!!!!!!!!!!
Azt mondtuk, hogy kívülről befelé haladjon az event, tehát ha megállítjuk ezt az event-et a div1-nél, akkor a div2-nél 
már nem fog lefutni!!!!!!!!

Mi van, akkor ha ezt a e.stopPropogation-t akkor írjuk oda, ha nincsen eventCapturing(nem írjuk oda 3.dik paraméternek a külsőnek a true-t)

div1.addEventListener("click", function(e) {
    console.log(this);
    e.stopPropogation();
});

div2.addEventListener("click", function() {
    console.log(this);
});

<div id="div2"></div>
<div id="div1"></div>

Akkor mindkettő lefut, mert ilyenkor hogyha nincsen eventCapturing, mert ilyenkor belülről megyünk befelé és a belsővel tudjuk megakadályozni 
a külsőnek a lefutását, tehát kell ott az e(event objektum) és annak adjuk meg ezt az e.stopPropogation-t 

div1.addEventListener("click", function() {
    console.log(this);
});

div2.addEventListener("click", function(e) {
    console.log(this);
    e.stopPropogation();
});

Ilyenkor meg ugye csak a belső fog lefutni
<div id="div2"></div>

Tehét erre jó az e.stopPropogation és azért szükséges, hogy legyen ilyen eventCapturing vagy eventBubbling, hogy belülről vagy kívülről haladjunk, 
mert nem mindegy, hogy a belsőnél akarjuk megállítani a külsőt vagy a külsőnél a belsőt

Mikor lehet ennek bármilyen gyakorlati jelentősége!!!!
->
Akkor pl. hogyha csak a belsőre legyen egy eseménykezelő, hogyha arra rákattintunk, akkor kiírjon valamit de akkor ne fusson le mégegyszer,
mert a külső elem a belsőt leszármazotja 

Az event capturing-nél kivűlről befelé haladaz event, az event bubbling-nál fordítva.
Az event bubbling az alapértelmezett!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
******************************************************************************************************************************************
Event listener törlése 
<div id="square5"></div>

    #square5 {
        width: 200px;
        height: 200px;
        border: 2px solid black;
    }

<button id="remove-event">remove event</button>
square5-re létrehozunk egy bármilyen eseménykezelőt és majd a button-val ezt töröljül 

square5.addEventListener("click", function() {
    this.classList.toggle = "lightcoral-bg";
});

Tehát, ha rákattintunk erre a square5-re, pontosabban belekattinunk, akkor megkapja ezt a színt, amit itt létrehoztunk az 
eseménykezelőjében this.style.backgroundColor = "lightcoral"; vagy ehelyett inkább azt mondjuk, hogy this.classList.toggle("lightcoral-bg")

    .lightcoral-bg {
        background-color: lightcoral;
    }

Tehát, most csináltunk egy ilyen class-t, aminek az a háttérszíne, hogy lightcoral, ezt a class-t megadtuk a square5-nek az eseménykezelőjében
a this-vel ->this.classList.toggle(ligthcoral-bg);
és akkor ha rákattintunk, akkor hozzáadja a class-t ha mégegyszer, akkor pedig leveszi-> mert nem add hanem toggle!!!!

lementjük ezt a delete-event gombot 
->
const deleteEvent = document.querySelector("#delete-event");

deleteEvent.addEventListener("click", function() {
    square5.removeEventListener("");
});

removeEventListener az két paramétert vár 
1. hogy mi az event (ez nyilván egy click)
2. mi volt a function 

És itt jön az érdekes dolog!!!!!!!!!!!!!!!!!!!!
Mert ha névtelen function-t hozunk létre, akkor azt soha nem fogjuk tudni leszedni, ezért nevesített finctiont kell létrehozni 
azt meg kell adni (a nevét) az addEventListener-ben 2 paraméterként és ugyanigy a remove-ban!!!!

nevesített függvény 
function toggleLightCoral() {
    this.classList.toggle("lightcoral-bg")
}

Akkor ebben az esetben már lehetőségem nyillik arra, hogy eltávolítsuk az eventListener-t 

square5.addEventListener("click", toggleLightCoral);

deleteEvent.addEventListener("click", function() {
    square5.removeEventListener("click", toggleLightCoral);
});

!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
Ezek voltak az eventListener-ök és az attributumoknak a manipulációja!!!!!!!!






































*/