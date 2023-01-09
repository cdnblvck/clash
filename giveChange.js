function giveChange(amount) {
    var ch = { two:0, five:0, ten:0 };

    if ( amount < 2 || amount == 3 ) return null;

    if ( amount % 2 ) {
        amount -= 5;
        ch.five = 1;
    }   
    
    while ( amount % 10 ) {
        amount -= 2;
        ch.two ++;
    }

    ch.ten = amount/10;

    return ch;
}