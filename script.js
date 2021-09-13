var main = function() {
    //toggle <ul class="more-menu">
    $('.more-btn').on('click', ({currentTarget}) => {
        $(currentTarget).text() === 'More' && $(currentTarget).text('Less') || $(currentTarget).text('More')
        $(currentTarget).next().toggle()
    })
    
    //toggle share menu"
    $('.share').on('click', ({currentTarget}) => {
        $(currentTarget).next().toggle()
    })

    //
    $('.bell').on('click', ({currentTarget}) => $(currentTarget).toggleClass('notification active'))
};

$(document).ready(main);