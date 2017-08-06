//jshint esversion:6


const camera = require("./camera");
var locationDetail = document.querySelector('#locationDetail');
var title = document.querySelector('#title');
var mapData = document.querySelector('#mapdata').innerHTML;
var tileSize=32;
var mapWidth = 70*tileSize; //mapdata is 70characters wide.
var mapHeight = 30*mapData.height*tileSize; //mapdata is 30 characters high.
var aMap1=mapData.split('\n');
var aMap2 = [];
var playerTile;
var output = document.querySelector('#output').innerHTML;

function make2dArray(){
    for(var i = 0; i<aMap1.length; i++){
        aMap2.push(Array.from(aMap1[i])); 
    }
}
make2dArray();

var titleData=[];

module.exports = function Player(){

    let px =1120; 
    let py =480;

    function move(stepX, stepY){
        px += stepX;
        py += stepY;

        console.log("x: ",px,"y: ",py);
        playerTile= getTileByCoordinates(px+23,py-13,aMap2);//add ints to properly align tile and co-ordinates 
        showDetail();
        console.log(playerTile);}

    function getPosition() {
        return {x: px, y: py};
    }
    return {
        move, //expose public API containing our move function (but not updateSpritePosition)
        getPosition
    };


    function getTileByCoordinates(px,py,map){

        var tileX=Math.round(px/tileSize+0.5);
        var tileY=Math.round(py/tileSize+0.5);
        return map[tileY][tileX];

    }

    function showDetail(){
        if(playerTile==="Q"){
            locationDetail.style.backgroundPositionX="0px";
            locationDetail.style.visibility="visible";
            title.innerHTML=titleData[0];
        }

        if(playerTile==="W"){
            locationDetail.style.backgroundPositionX="2700px";
            locationDetail.style.visibility="visible";   
            title.innerHTML=titleData[1];
        }

        if(playerTile==="E"){
            locationDetail.style.backgroundPositionX="2400px";
            locationDetail.style.visibility="visible";   
            title.innerHTML=titleData[2];
        }

        if(playerTile==="R"){
            locationDetail.style.backgroundPositionX="2100px";
            locationDetail.style.visibility="visible";   
            title.innerHTML=titleData[3];
        }

        if(playerTile==="T"){
            locationDetail.style.backgroundPositionX="1800px";
            locationDetail.style.visibility="visible";   
            title.innerHTML=titleData[4];
        }

        if(playerTile==="Y"){
            locationDetail.style.backgroundPositionX="1500px";
            locationDetail.style.visibility="visible";   
            title.innerHTML=titleData[5];
        }

        if(playerTile==="U"){
            locationDetail.style.backgroundPositionX="1200px";
            locationDetail.style.visibility="visible";   
            title.innerHTML=titleData[6];
        }

        if(playerTile==="I"){
            locationDetail.style.backgroundPositionX="900px";
            locationDetail.style.visibility="visible";   
            title.innerHTML=titleData[7];
        }

        if(playerTile==="O"){
            locationDetail.style.backgroundPositionX="600px";
            locationDetail.style.visibility="visible";   
            title.innerHTML=titleData[8];
        }

        if(playerTile==="P"){
            locationDetail.style.backgroundPositionX="300px";
            locationDetail.style.visibility="visible";   
            title.innerHTML=titleData[9];
        }

        if(playerTile==="." || playerTile==="r" || playerTile==="M" ||playerTile==="^" ){locationDetail.style.visibility="hidden";
            title.innerHTML="";}

    }
};



var placeNames = [
    ["","","","","","","","","",""],//0 empty to align with naContae numbers

    //1 Contae Uíḃ Ḟailí
    [


        "An Féar Bán",
        "Cluain Ṁic Nóis",
        "Biorra",
        "Cluain na nGaṁan",
        "Ráth Iomġáin",
        "Cill Aiċiḋ",
        "An Tóċar",
        "Suí an Róin",
        "Dún Cairin",
        "Éadan Doire"

    ],

    //2 Contae Lú

    [

        "Dún Dealgan",
        "Baile an Ċláir",
        "Ceann Ċloċair",
        "Rinn Ḋún Áine",
        "Baile an Ġearlánaigh",
        "Na Creagaċa Duḃa",
        "An Grianfort",
        "Mainistir Ḃuiṫe",
        "Baile Átha Ḟirdia",
        "Lú",
    ],
    //3 Contae Loch Garman
    [

        "Loch Garman",
        "Inis Córṫaidh",
        "Guaire",
        "Coill an Iarainn",
        "Cill Téile",
        "Teaċ Munna",
        "Rinn Duáin ",
        "Dún Ċormaic",
        "Baile an Droichid",
        "Maolán na nGaḃar"


    ],
    //4 Contae Luimnigh

    [

        "Luimneach",
        "Lios na Graí", 
        "An Leaca Ṁór",
        "Brú Rí",
        "Carraig Ċiarraí",
        "Eas Géitine",
        "Pailis Ċaonraí",
        "Tobar Ṗádraig",
        "Caisleán Uí Ċonaill",
        "Baile na gCailleach"
    ],
    //5 Contae  Átha Ċliath
    [

        "Duḃlinn",
        "Deilginis",
        "An Caisleán Nua",
        "Binn Éadair",
        "Cluain Dolcáin",
        "Cluain Tarbh",
        "Fionnġlas",
        "Mullach Íde",
        "Lusca",
        "Dún Laoiġaire"
    ],
    //6  Contae Liatroma

    [

        "An Tulaċán",
        "Gleann Éada",
        "Coillte Cloċair",
        "Cluainín ",
        "Cill Féarga",
        "Baile na gCléireach",
        "Aċaḋ na Síleann",
        "Fíonach",
        "Dromad",
        "Droim Seanḃó"



    ],
    //7 Contae Aontroma


    [

        "Aontroim",
        "An Baile Meánach",
        "Baile na Mainistreaċ",
        "Béal Feiriste", //born in belfast sample & JQnasc
        "Carraig Ḟearġais",
        "Reaċlainn",
        "An Ḃinn Ḃán",
        "Carn Ṁéaḃla",
        "Aċaḋ Eoċaille",
        "Coill na Baice"
    ],
    //8 Contae Ḋún na nGall

    [

        "Sléiḃte Ḋoire Ḃeatha",
        "Sléiḃte Ġleann Doṁain",
        "Árainn Ṁór",
        "Na Cruaċa",
        "Bealach Féich",
        "Leitir Ceanainn",
        "Cionn Dhún Damh",
        "Bun na hAḃann",
        "Gleann Doimhin",
        "Cnoc Fola"
    ],
    //9 Contae Ḟear Manaċ

    [
        "Inis Ceiṫleann",
        "Scriobaċ",
        "An Garastún",
        "Lios na Daróg",
        "Eadarnaiḋ",
        "Lios na Scéiṫe",
        "Maċaire Ṁílic",
        "Baile Ui Ċasaide",
        "Clabaiġ",
        "Beal Leice"
    ],    
    // naContae10 : Cork
    ["an Bhograch",
        "Skibbereen",
        "Blarney",
        "Beal na Bláth",
        "BallyLicky",
        "Cill na Mallach",
        "Tigh Nua an Dhá Phota",
        "Mainistir na Corran",
        "Mainistir Fhear Mhaigh",
        "Ceann tSáile"
    ],

    // 11 Contae Ċill Ṁantáin
    [

        "Cill Ṁantáin",
        "An tInḃear Mór",
        "Na Cloċa Liaṫa",
        "Bré",
        "Poll an Ṗúca",
        "Cillín Ċaoimhín",
        "Dún Ard",
        "Siol Éalaiġ",
        "Cluain na nGall",  //Galloglas?
        "Aḃóca"
    ],
    //12  Co. Ros Comáin
    [
        "Ros Comáin", //tá rí i Ros Comáin.  Beidh ort cead a lorg nasc/bothán a tógál anseo. lorg cead->
        "Corr na Fola",
        "Tuilsce",
        "Scramóg",
        "Baile an Tobair",
        "Cluain Fada",
        "Tobar Bríde",
        "Cnoc an Ċrocaire",
        "Loch Bó Dearge",
        "Loch bó Finne"

    ],
    //13  Contae Ḋoire
    [
        "Doire",
        "Cúil Raiṫin",
        "Léim an Ṁadaiḋ",
        "Dún Geimhin",
        "Maċaire Ráṫa",
        "Clóidigh",
        "An Seanṁullach",
        "Droichead Fíolta",
        "Baile Uí Rónáin",
        "Muine Mór"
    ],

    //14 Contae Ṡligiġ
    [
        "    Sligeaċ",
        "Ceaṫrú an Eadain ",
        "Cúil Áine",
        "Áth an Ċláir",
        "Iascaigh",
        "An Mullach Mór ",
        "Béal Átha na gCarraigíní",
        "Rath an Ṁuilinn",
        "Tobar an Ċoire",
        "An Scrín"
    ],

    //15  Contae Ṫiobraid Árann
    [
        "Tiobraid Árann",
        "Ros Cré",
        "Durlas",
        "Cnoc Mór na nGaiḃlte",
        "Faiċe Ró",
        "Sliabh na mBan",
        "Buiríos Ó Luiġeach ",
        "Carraig an Ċoṁraic",
        "Pocán",
        "Cluain Meala"
    ],

    //16  Contae Laoise
    [
        "Port Laoise",
        "Cúil an tSúdaire",
        "Baile Átha Í",
        "Baile na Coille",
        "Eiréil ",
        "Buiríos Mór Osraí" ,//Shortcut to an Osraí eile? //linked hack and slash dungeons w.batman sfx G.
        "Baile Ċaisleáin Ċinn Eich",
        "Darú",
        "Ros Ḟionnġlaise",
        "An Baile Fionn"
    ],
    //17 Contae Ṗort Láirge
    [
        "Dún Garḃán",
        "An Baile Dubh",
        "Béal na Molt ",
        "Cill Ṁíodáin",
        "Coill Ṁic Ṫomáisín",
        "Dún Mór",
        "Cuan Ṗort Lairge",
        "Mullach Suí Finn",
        "Sléiḃte an Ċomaraigh",
        "Cluain Ḟia"

    ],

    //18 Contae Ċill Ċainniġ
    [
        "Cill Ċainniġ",
        "Ġráinseaċ Ċuffe",
        "Dún Garḃáin",
        "Baile Ṁic Andáin",
        "Cnoc Ḃreanáil",
        "Ros Ṁic Ṫriúin",
        "An Gleann Mór",
        "Muileann an Ḃata" ,//where all the people carry ṡticks?",
        "Bearna na Gaoiṫe",
        "Sliaḃ Rua"
    ],

    //19 Contae Na Mí
    [
        "Teamhair",
        "An Uaimh",
        "Baile Áṫa Troim",
        "Baile an Locha",
        "Baile Ṡláine",
        "An Inse",
        "Tigh na Sióg",
        "Cill Ḃríde",
        "Ráth Ċairn",
        "Buaile na Bréachṁaí ",

    ],
    //20 Contae Ċiarraí
    [
        "Na Cruaċa Duḃa",
        "Ċill Airne",
        "An tSnaidhm",
        "An Daingean ",
        "Neidín ",
        "Cathair Saiḋḃín",
        "Trá Lí",
        "Tuath Ó Siasta",
        "Sliabh Mis",
        "Corca Ḋuiḃne",

    ],

    //21 Contae An LongFoirt
    [
        "An LongFort",
        "Maiġ Duṁa",
        "Droim Lis ",
        "An Lios Breac",
        "Cluain Dá Ráth",
        "An Ċarraig Ḃuí",
        "Gránard",
        "Ardach",
        "Baile Uí Ṁaṫáin",
        "Cill na Sí"  //fairy ring to cleite's Ceist III?",

    ],

    //22 Contae Ṁaigh Eo
    [
        "Oileán Acaill",
        "An Fód Dubh",
        "Na Stácaí",
        "Ceann Ḋún Pádraig",
        "Cill Ala",
        "An Éill",
        "Coill an tSiáin",
        "Cathair na Mart",
        "Baile Ui Ḟiacáin",
        "Caisleán an Ḃarraiġ",
    ],

    //23 Contae Na hIarṁí
    [
        "An Muileann gCearr",
        "Ráth Ḟearna",
        "Beal Átha na nGaḃar",
        "Cill Ḃeagáin",
        "Ráth Conarta",
        "Baile na gCailleach",
        "Ráth Eoġain",
        "Na Colúir",
        "An Teanga",
        "Baile Átha Luain",

    ],

    //24 Contae An Dúin
    [
        "An Caisleán Riaḃach",
        "An Ṁainistir Liath",
        "Port an Ṗeire",
        "Baile Loch Cuan",
        "Dún Pádraig",
        "Cill Ċaoil",
        "An tIúr",
        "Droichead na Banna",
        "An Lorgain",
        "Lios na gCearrḃach",
    ],

    //25 Contae Ard Ṁaċa
    [
        "Ard Ṁaċa",
        "Port An Dúnáin",
        "Crois Ṁic Lionnáin",
        "Lios Liath",
        "Sráid na nAlbanach",
        "Craigavon",
        "Baile an Ṁuilinn",
        "Baile Úr",
    ],
    //26 Contae Ċeaṫarlaċ
    [
        "Ceaṫarlaċ",
        "Cill Deirge",
        "An Tulach",
        "Ráth Ḃile ",
        "Cill Téagáin",
        "Fionnṁaċ",
        "Muine Ḃeag",
        "An Ḃuiríos",
        "Na Staiġhrí Duḃa",
        "Baile Uí Ṁurċú",
        "Seanleiṫġlinn",
    ],

    //27 Contae Ṁuineaċáin
    [
        "Muineaċán",
        "Carraig Ṁaċaire Rois",
        "Teach an Scotaigh",
        "Cluain Eois",
        "Tigh Domhnata",
        "Scairbh na gCaorach",
        "Caisleán an tSiáin",
        "Einistir Ḃuithe",
        "An Ṁainistir Ṁóranaigh Ġeala",
        "Crícheán Rua",
    ],


    // 28 Contae na Gailliṁe
    [
        "Gailliṁ",
        "Tuaim",
        "Gleann na Madadh",
        "An Teach Dóite",
        "Inis Bó Finne",
        "An Spidéal ",
        "An Ċeaṫrú Rua",
        "Inis Mór",
        "Inis Meáin", 
        "Inis Óirr"
    ],
    //29 Contae Ċill Dara
    [
        "Cill Dara",
        "Cairbre",
        "An Currach",
        "Díseart Diarmada",
        "Maigh Géine",
        "Na Solláin",
        "Léim an Ḃradáin",
        "Maigh Nuad",
        "Fioḋ Alúine",
        "An Nás"
    ],
    //30 Contae An Ċláir
    [
        "Fíoch Rua",
        "Baile Uí Ḃeacáin",
        "Ceann Boirne",
        "Ceann Caillí",
        "Poll na nOisrí",
        "Ceann Léime",
        "An Geata Bán",
        "Tuath Ó gConaíle",
        "An Tulach",
        "Bun Raite"

    ],
    //Contae An Caḃáin

    [
        "An Caḃán",
        "Dún an Rí",
        "Lios Cré",
        "An Lios Duḃ",
        "Béal Tairbirt",
        "An Cnoc Rua",
        "An Muileann Iarainn",
        "Gob an Ṁianaiġ",
        "Doire na Criaḋ",
        "An Dromainn"
    ],
    //32 Contae Ṫír Eoghain
    [
        "An Ómaigh",
        "Dún Geanainn",
        "An Ċorr Ċríochach",
        "Caisleán na Deirge",
        "Muileann an tSiáin",
        "An Sraṫ Bán",
        "Baile Mhic Gofraidh",
        "An Chrannóg",
        "An Caisleán Glas",
        "An Goirtín"
    ]
];
function getCounty(output){
    if(output==="Co. Chorcaí"){
        for(var i = 0; i< placeNames[10].length; i++){

            titleData.push(placeNames[10][i]);

        }
        console.log("Hi placenames Cork");
    }
    console.log("my",titleData);

}


getCounty(output);
