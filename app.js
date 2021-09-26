
$('#squareGenerator').on('click', function() {
    for(let i = 0; i < 1; i++){
        let color = (Math.random() < 0.5) ? 'red': 'blue';
        $('#squareContainer').prepend(`<li class="${color} square"></li>`);
        var totalSquares = $("ul > li").size();
    }

    let x = totalSquares;
    let n = Math.floor(Math.sqrt(x));

    while (n > 0){
        if (n == 1){
            console.log(`Congrats ${x} is a prime number!`);
        }
        if (x % n == 0){
            m = Math.floor(x / n);
            break;
        }
        else{
            n -= 1
        }
    }
    console.log(`${n} and ${m} are the closest divisors of ${x}!`);



    console.log(x + " " + n + " " + m);
    let width = n*100+'px';
    let height = m*100+'px';
    $('#squareContainer').css({
        'width': width,
        'height': height});
});

$('#squareContainer').on('mousedown', '.square', function() {
    $(this).toggleClass('red blue')
});


