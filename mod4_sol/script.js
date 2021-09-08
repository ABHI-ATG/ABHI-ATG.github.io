var names = new Array();
names[0] = "benten";
names[1] = "John";
names[2] = "Jenny";
names[3] = "janm";
names[4] = "paltu";
names[5] = "abhi";
names[6] = "goomy";
names[7] = "hurra";
names[8] = "laura";
names[9] = "jim";


for (var i = 0; i < names.length; i++) {
    if (names[i].charAt(0) === 'J' || names[i].charAt(0) === 'j') {
        console.log("Goodbye " + names[i])
    } else {
        console.log("Hello " + names[i])
    }
}