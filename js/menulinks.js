$('.landing-link').click(function() {
    $('.landing').animate({
        marginTop: '-10%'
    },350)
    
    setTimeout(function() {
        $('.landing').animate({
            background: 'red'
        })

        $('body').animate({
            background: 'red'
        })
    }, 350)
    
    setTimeout(function() {
        $('.landing').toggleClass('invisible')
    },350);
    
})

$('#contactLandingLink').click(function() {
    $('#contentWrapper').load('../page/contact/index.html');
})