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

    //1 Contae Uíbh Fhailí
    [


        "An Féar Bán",
        "Cluain Mhic Nóis",
        "Biorra",
        "Cluain na nGamhan",
        "Ráth Iomgháin",
        "Cill Aichidh",
        "An Tóchar",
        "Suí an Róin",
        "Dún Cairin",
        "Éadan Doire"

    ],

    //2 Contae Lú

    [

        "Dún Dealgan",
        "Baile an Chláir",
        "Ceann Chlochair",
        "Rinn Ḋún Áine",
        "Baile an Ghearlánaigh",
        "Na Creagacha Dubha",
        "An Grianfort",
        "Mainistir Bhuithe",
        "Baile Átha Fhirdia",
        "Lú",
    ],
    //3 Contae Loch Garman
    [

        "Loch Garman",
        "Inis Córthaidh",
        "Guaire",
        "Coill an Iarainn",
        "Cill Téile",
        "Teach Munna",
        "Rinn Duáin ",
        "Dún Chormaic",
        "Baile an Droichid",
        "Maolán na nGabhar"


    ],
    //4 Contae Luimnigh

    [

        "Luimneach",
        "Lios na Graí", 
        "An Leaca Mhór",
        "Brú Rí",
        "Carraig Chiarraí",
        "Eas Géitine",
        "Pailis Chaonraí",
        "Tobar Phádraig",
        "Caisleán Uí Chonaill",
        "Baile na gCailleach"
    ],
    //5 Contae  Átha Chliath
    [

        "Dubhlinn",
        "Deilginis",
        "An Caisleán Nua",
        "Binn Éadair",
        "Cluain Dolcáin",
        "Cluain Tarbh",
        "Fionnghlas",
        "Mullach Íde",
        "Lusca",
        "Dún Laoighaire"
    ],
    //6  Contae Liatroma

    [

        "An Tulachán",
        "Gleann Éada",
        "Coillte Clochair",
        "Cluainín ",
        "Cill Féarga",
        "Baile na gCléireach",
        "Achadh na Síleann",
        "Fíonach",
        "Dromad",
        "Droim Seanbhó"



    ],
    //7 Contae Aontroma


    [

        "Aontroim",
        "An Baile Meánach",
        "Baile na Mainistreach",
        "Béal Feiriste", //born in belfast sample & JQnasc
        "Carraig Fhearghais",
        "Reachlainn",
        "An Bhinn Bhán",
        "Carn Mhéabhla",
        "Achadh Eochaille",
        "Coill na Baice"
    ],
    //8 Contae Ḋún na nGall

    [

        "Sléibhte Ḋoire Bheatha",
        "Sléibhte Ghleann Domhain",
        "Árainn Mhór",
        "Na Cruacha",
        "Bealach Féich",
        "Leitir Ceanainn",
        "Cionn Dhún Damh",
        "Bun na hAbhann",
        "Gleann Doimhin",
        "Cnoc Fola"
    ],
    //9 Contae Fhear Manach

    [
        "Inis Ceithleann",
        "Scriobach",
        "An Garastún",
        "Lios na Daróg",
        "Eadarnaidh",
        "Lios na Scéithe",
        "Machaire Mhílic",
        "Baile Ui Chasaide",
        "Clabaigh",
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

    // 11 Contae Chill Mhantáin
    [

        "Cill Mhantáin",
        "An tInbhear Mór",
        "Na Clocha Liatha",
        "Bré",
        "Poll an Phúca",
        "Cillín Chaoimhín",
        "Dún Ard",
        "Siol Éalaigh",
        "Cluain na nGall",  //Galloglas?
        "Abhóca"
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
        "Cnoc an Chrocaire",
        "Loch Bó Dearge",
        "Loch bó Finne"

    ],
    //13  Contae Ḋoire
    [
        "Doire",
        "Cúil Raithin",
        "Léim an Mhadaidh",
        "Dún Geimhin",
        "Machaire Rátha",
        "Clóidigh",
        "An Seanmhullach",
        "Droichead Fíolta",
        "Baile Uí Rónáin",
        "Muine Mór"
    ],

    //14 Contae Shligigh
    [
        "Sligeach",
        "Ceathrú an Eadain ",
        "Cúil Áine",
        "Áth an Chláir",
        "Iascaigh",
        "An Mullach Mór ",
        "Béal Átha na gCarraigíní",
        "Rath an Mhuilinn",
        "Tobar an Choire",
        "An Scrín"
    ],

    //15  Contae Thiobraid Árann
    [
        "Tiobraid Árann",
        "Caiseal",
        "Durlas",
        "Cnoc Mór na nGaibhlte",
        "Faiche Ró",
        "Sliabh na mBan",
        "Ros Cré",
        "Carraig an Chomhraic",
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
        "Baile Chaisleáin Chinn Eich",
        "Darú",
        "Ros Fhionnghlaise",
        "An Fraoch Mór"
    ],
    //17 Contae Phort Láirge
    [
        "Dún Garbhán",
        "An Baile Dubh",
        "Béal na Molt ",
        "Cill Mhíodáin",
        "Coill Mhic Thomáisín",
        "Port Láirge",
        "Carraig na Siúire",
        "Mullach Suí Finn",
        "Sléibhte an Chomaraigh",
        "Cluain Fhia"

    ],

    //18 Contae Chill Chainnigh
    [
        "Cill Chainnigh",
        "Ghráinseach Chuffe",
        "Dún Garbháin",
        "Baile Mhic Andáin",
        "Cnoc Bhreanáil",
        "Ros Mhic Thriúin",
        "An Gleann Mór",
        "Muileann an Bhata" ,//where all the people carry ṡticks?",
        "Bearna na Gaoithe",
        "Sliabh Rua"
    ],

    //19 Contae Na Mí
    [
        "Teamhair",
        "An Uaimh",
        "Baile Átha Troim",
        "Baile an Locha",
        "Baile Shláine",
        "An Inse",
        "Tigh na Sióg",
        "Cill Bhríde",
        "Ráth Chairn",
        "Buaile na Bréachmhaí ",

    ],
    //20 Contae Chiarraí
    [
        "Na Cruacha Dubha",
        "Chill Airne",
        "An tSnaidhm",
        "An Daingean ",
        "Neidín ",
        "Cathair Saidhbhín",
        "Trá Lí",
        "Lios Tuathail",
        "Sliabh Mis",
        "Tuath Ó Siasta",

    ],

    //21 Contae An LongFoirt
    [
        "An LongFort",
        "Maigh Dumha",
        "Droim Lis ",
        "An Lios Breac",
        "Cluain Dá Ráth",
        "An Charraig Bhuí",
        "Gránard",
        "Ardach",
        "Baile Uí Mhatháin",
        "Cill na Sí"  //fairy ring to cleite's Ceist III?",

    ],

    //22 Contae Mhaigh Eo
    [
        "Oileán Acaill",
        "An Fód Dubh",
        "Na Stácaí",
        "Ceann Ḋún Pádraig",
        "Cill Ala",
        "An Éill",
        "Coill an tSiáin",
        "Cathair na Mart",
        "Beal an Átha",
        "Caisleán an Dumha",
    ],

    //23 Contae Na hIarmhí
    [
        "An Muileann gCearr",
        "Ráth Fhearna",
        "Beal Átha na nGabhar",
        "Cill Bheagáin",
        "Ráth Conarta",
        "Baile na gCailleach",
        "Ráth Eoghain",
        "Na Colúir",
        "An Teanga",
        "Baile Átha Luain",

    ],

    //24 Contae An Dúin
    [
        "An Caisleán Riabhach",
        "An Mhainistir Liath",
        "Port an Pheire",
        "Baile Loch Cuan",
        "Dún Pádraig",
        "Cill Chaoil",
        "An tIúr",
        "Droichead na Banna",
        "An Lorgain",
        "Lios na gCearrbhach",
    ],

    //25 Contae Ard Mhacha
    [
        "Ard Mhacha",
        "Port An Dúnáin",
        "Crois Mhic Lionnáin",
        "Lios Liath",
        "Sráid na nAlbanach",
        "Craigavon",
        "Baile an Mhuilinn",
        "Baile Úr",
    ],
    //26 Contae Cheatharlach
    [
        "Ceatharlach",
        "Cill Deirge",
        "An Tulach",
        "Ráth Bhile ",
        "Cill Téagáin",
        "Fionnmhach",
        "Muine Bheag",
        "An Bhuiríos",
        "Na Staighhrí Dubha",
        "Baile Uí Mhurchú",
        "Seanleithghlinn",
    ],

    //27 Contae Mhuineacháin
    [
        "Muineachán",
        "Carraig Mhachaire Rois",
        "Teach an Scotaigh",
        "Cluain Eois",
        "Tigh Domhnata",
        "Scairbh na gCaorach",
        "Caisleán an tSiáin",
        "Einistir Bhuithe",
        "An Mhainistir Mhóranaigh Gheala",
        "Crícheán Rua",
    ],


    // 28 Contae na Gaillimhe
    [
        "Gaillimh",
        "Tuaim",
        "Gleann na Madadh",
        "An Teach Dóite",
        "Inis Bó Finne",
        "An Spidéal ",
        "An Cheathrú Rua",
        "Inis Mór",
        "Inis Meáin", 
        "Inis Óirr"
    ],
    //29 Contae Chill Dara
    [
        "Cill Dara",
        "Cairbre",
        "An Currach",
        "Díseart Diarmada",
        "Maigh Géine",
        "Na Solláin",
        "Léim an Bhradáin",
        "Maigh Nuad",
        "Fiodh Alúine",
        "An Nás"
    ],
    //30 Contae An Chláir
    [
        "Fíoch Rua",
        "Baile Uí Bheacáin",
        "Ceann Boirne",
        "Ceann Caillí",
        "Poll na nOisrí",
        "Ceann Léime",
        "An Geata Bán",
        "Tuath Ó gConaíle",
        "An Tulach",
        "Bun Raite"

    ],
    //Contae An Cabháin

    [
        "An Cabhán",
        "Dún an Rí",
        "Lios Cré",
        "An Lios Dubh",
        "Béal Tairbirt",
        "An Cnoc Rua",
        "An Muileann Iarainn",
        "Gob an Mhianaigh",
        "Doire na Criadh",
        "An Dromainn"
    ],
    //32 Contae Thír Eoghain
    [
        "An Ómaigh",
        "Dún Geanainn",
        "An Chorr Chríochach",
        "Caisleán na Deirge",
        "Muileann an tSiáin",
        "An Srath Bán",
        "Baile Mhic Gofraidh",
        "An Chrannóg",
        "An Caisleán Glas",
        "An Goirtín"
    ]
];
function getCounty(output){
    if(output==="Co. Uíbh Fhailí"){
        for(var i = 0; i< placeNames[1].length; i++){

            titleData.push(placeNames[1][i]);

        }
    }
    if(output==="Co. Lú"){
        for(var j = 0; j< placeNames[2].length; j++){

            titleData.push(placeNames[2][j]);

        }
    }

    if(output==="Co. Luimnigh"){
        for(var k = 0; k< placeNames[10].length; k++){

            titleData.push(placeNames[10][k]);

        }
    }

    if(output==="Co. Átha Chliath"){
        for(var l = 0; l< placeNames[10].length; l++){

            titleData.push(placeNames[10][l]);

        }
    }

    if(output==="Co. Liatroma"){
        for(var m = 0; m< placeNames[10].length; m++){

            titleData.push(placeNames[10][m]);

        }
    }

    if(output==="Co. Aontroma"){
        for(var n = 0; n< placeNames[10].length; n++){

            titleData.push(placeNames[10][n]);

        }
    }

    if(output==="Co. Dhún na nGall"){
        for(var o = 0; o< placeNames[10].length; o++){

            titleData.push(placeNames[10][o]);

        }
    }

    if(output==="Co. Fhear Manach"){
        for(var p = 0; p< placeNames[10].length; p++){

            titleData.push(placeNames[10][p]);

        }
    }

    if(output==="Co. Chorcaí"){
        for(var q = 0; q< placeNames[10].length; q++){

            titleData.push(placeNames[10][q]);

        }
    }

    if(output==="Co. Chill Mhantáin"){
        for(var r = 0; r< placeNames[10].length; r++){

            titleData.push(placeNames[10][r]);

        }
    }

    if(output==="Co. Ros Comáin"){
        for(var s = 0; s< placeNames[10].length; s++){

            titleData.push(placeNames[10][s]);

        }
    }

    if(output==="Co. Dhoire"){
        for(var t = 0; t< placeNames[10].length; t++){

            titleData.push(placeNames[10][t]);

        }
    }

    if(output==="Co. Shligigh"){
        for(var u = 0; u< placeNames[10].length; u++){

            titleData.push(placeNames[10][u]);

        }
    }

    if(output==="Co. Thiobraid Árann"){
        for(var v = 0; v< placeNames[10].length; v++){

            titleData.push(placeNames[10][v]);

        }
    }

    if(output==="Co. Laoise"){
        for(var w = 0; w< placeNames[10].length; w++){

            titleData.push(placeNames[10][w]);

        }
    }

    if(output==="Co. Phort Láirge"){
        for(var x = 0; x< placeNames[10].length; x++){

            titleData.push(placeNames[10][x]);

        }
    }

    if(output==="Co. Chill Chainnigh"){
        for(var y = 0; y< placeNames[10].length; y++){

            titleData.push(placeNames[10][y]);

        }
    }

    if(output==="Co. Na Mí"){
        for(var z = 0; z< placeNames[10].length; z++){

            titleData.push(placeNames[10][z]);

        }
    }

    if(output==="Co. Chiarraí"){
        for(var a = 0; a< placeNames[10].length; a++){

            titleData.push(placeNames[10][a]);

        }
    }

    if(output==="Co. An Longfoirt"){
        for(var b = 0; b< placeNames[10].length; b++){

            titleData.push(placeNames[10][b]);

        }
    }

    if(output==="Co. Mhaigh Eo"){
        for(var c = 0; c< placeNames[22].length; c++){

            titleData.push(placeNames[22][c]);

        }
    }

    if(output==="Co. Na hIarmhí"){
        for(var d = 0; d< placeNames[10].length; d++){

            titleData.push(placeNames[10][d]);

        }
    }

    if(output==="Co. An Dúin"){
        for(var e = 0; e< placeNames[10].length; e++){

            titleData.push(placeNames[10][e]);

        }
    }

    if(output==="Co. Ard Mhacha"){
        for(var f = 0; f< placeNames[10].length; f++){

            titleData.push(placeNames[10][f]);

        }
    }

    if(output==="Co. Cheatharlach"){
        for(var g = 0; g< placeNames[10].length; g++){

            titleData.push(placeNames[10][g]);

        }
    }

    if(output==="Co. Mhuineacháin"){
        for(var h = 0; h< placeNames[10].length; h++){

            titleData.push(placeNames[10][h]);

        }
    }

    if(output==="Co. na Gaillimhe"){
        for(var aa = 0;aa< placeNames[10].length;aa++){

            titleData.push(placeNames[10][aa]);

        }
    }

    if(output==="Co. Chill Dara"){
        for(var ab = 0; ab< placeNames[10].length; ab++){

            titleData.push(placeNames[10][ab]);

        }
    }

    if(output==="Co. An Chláir"){
        for(var ac = 0; ac< placeNames[10].length; ac++){

            titleData.push(placeNames[10][ac]);

        }
    }

    if(output==="Co. Thír Eoghain"){
        for(var ad = 0; ad< placeNames[10].length; ad++){

            titleData.push(placeNames[10][ad]);

        }
    }


}


getCounty(output);
