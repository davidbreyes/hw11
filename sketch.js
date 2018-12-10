let img;
let img2;
let img3;
let img4;
let img5;
let img6;
let img7;
let img8;
let img9;
let img10;
let img11;
let img12;
let img13;
let img14;
let img15;
let img16;
let img17;
let img18;
let img19;
let img20;
let img21;
let img22;
let img23;
let img24;
let img25;
let img26;
let img27;
let img28;
let img29;
let img30;
let img31;
let img32;
let img33;
let img34;
let img35;
let img36;
let img37;
let img38;
let img39;
let img40;
let img41;
let img42;
let img43;
let img44;
let img45;
let img46;
let img47;
let img48;
let img49;

let snd;
let snd2;
let snd3;
let snd4;
let snd5;
let snd6;
let snd7;
let snd8;

let keytab = [];
let eyetab = [];
let shirttab = [];
let pantstab = [];
let shoestab = [];
let hairtab = [];

function preload() {
snd = loadSound('cpfpsfx1.mp4');
snd2 = loadSound('cpfpsfx2.mp4');
snd3 = loadSound('cpfpsfx3.mp4');
snd4 = loadSound('cpfpsfx4.mp4');
snd5 = loadSound('cpfpsfx5.mp4');
snd6 = loadSound('cpfpsfx6.mp4');
snd7 = loadSound('cpfpsfx7.mp4');
snd8 = loadSound('cpfpsfx8.mp4');

//tabs pressed
img = loadImage('smft0n.png');
img2 = loadImage('smft1n.png');
img3 = loadImage('smft2n.png');
img4 = loadImage('smft3n.png');
img5 = loadImage('smft4n.png');
img6 = loadImage('smft5n.png');

//eye tabs
img7 = loadImage('smftne1.png');
img8 = loadImage('smftne2.png');
img9 = loadImage('smftne3.png');
img10 = loadImage('smftne4.png');
img11 = loadImage('smftne5.png');
img12 = loadImage('smftne6.png');
img13 = loadImage('smftne7.png');
img14 = loadImage('smftne8.png');
img15 = loadImage('smftne9.png');

//shirt tabs
img16 = loadImage('smftns1.png');
img17 = loadImage('smftns2.png');
img18 = loadImage('smftns3.png');
img19 = loadImage('smftns4.png');
img20 = loadImage('smftns5.png');
img21 = loadImage('smftns6.png');
img22 = loadImage('smftns7.png');
img23 = loadImage('smftns8.png');
img24 = loadImage('smftns9.png');
img25 = loadImage('smftns10.png');

//pants tabs
img26 = loadImage('smftnp1.png');
img27 = loadImage('smftnp2.png');
img28 = loadImage('smftnp3.png');
img29 = loadImage('smftnp4.png');
img30 = loadImage('smftnp5.png');
img31 = loadImage('smftnp6.png');
img32 = loadImage('smftnp7.png');
img33 = loadImage('smftnp8.png');

//shoes tabs
img34 = loadImage('smftnsh1.png');
img35 = loadImage('smftnsh2.png');
img36 = loadImage('smftnsh3.png');
img37 = loadImage('smftnsh4.png');
img38 = loadImage('smftnsh5.png');

//hair tabs
img39 = loadImage('smftnh1.png');
img40 = loadImage('smftnh2.png');
img41 = loadImage('smftnh1.png');
img42 = loadImage('smftnh5.png');
img43 = loadImage('smftnh6.png');
img44 = loadImage('smftnh7.png');
img45 = loadImage('smftnh8.png');
img46 = loadImage('smftnh9.png');
img47 = loadImage('smftnh10.png');
img48 = loadImage('smftnh11.png');

//clear
img49 = loadImage('smftncl0.png');
}

function setup() {
createCanvas(770,1080);
}

function draw() {
background(770,1080);
fill(255);
image(img,0,0);

//function mousePressed() {

//}
//keytab rects
//noFill;
//noStroke;
//rect(332,43,82,40);
//rect(416,43,82,40);
//rect(500,43,82,40);
//rect(585,43,82,40);
//rect(670,43,82,40);

//clear rect
//noFill;
//noStroke;
//rect(28,22,85,36);

//colors rects
//noFill;
//noStroke;
// rect(334,112,102,102);
// rect(334,230,102,102);
// rect(334,347,102,102);

//eye rects / command + / to //
//noFill;
//noStroke;
// rect(478,99,82,49);
// rect(478,162,82,49);
// rect(478,227,82,49);
// rect(478,290,82,49);
// rect(578,99,82,49);
// rect(578,162,82,49);
// rect(578,227,82,49);
// rect(676,99,82,49);
// rect(676,162,82,49);
// rect(676,227,82,49);

//shirt rects
//noFill;
//noStroke;
// rect(478,99,82,62);
// rect(478,175,82,62);
// rect(478,251,82,62);
// rect(478,327,82,62);
// rect(578,99,82,62);
// rect(578,175,82,62);
// rect(578,251,82,62);
// rect(675,99,82,62);
// rect(675,175,82,62);
// rect(675,251,82,62);

//pants rects
//noFill;
//noStroke;
// rect(478,99,84,99);
// rect(478,214,84,99);
// rect(478,329,84,99);
// rect(580,99,84,99);
// rect(580,214,84,99);
// rect(580,329,84,99);
// rect(682,99,84,99);
// rect(682,214,84,99);

// shoes rects
//noFill;
//noStroke;
// rect(478,99,100,62);
// rect(478, 177,100,62);
// rect(478,255,100,62);
// rect(595,99,100,62);
// rect(595,177,100,62);

//hair rects
//noFill;
//noStroke;
// rect(478,99,86,73);
// rect(478,188,86,73);
// rect(478,275,86,73);
// rect(478,362,86,73);
// rect(580,99,86,73);
// rect(580,188,86,73);
// rect(580,275,86,73);
// rect(580,362,86,73);
// rect(682,99,86,73);
// rect(682,188,86,73);
// rect(682,275,86,73);
}
