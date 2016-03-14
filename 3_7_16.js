// write a function that makes a triangle of the character `#`. (it can be a lopsided triangle.) do this without manually writing each line in your code. example result:

// #
// ##
// ###
// ####
// #####
// ######
// #######

function makeTri(num) {

    var hashTag = '#';
    var space = '';
    for(var i = 0; i < num; i++){
        space = space + hashTag;
        console.log(space);
    }
}


makeTri(3);
makeTri(7);
