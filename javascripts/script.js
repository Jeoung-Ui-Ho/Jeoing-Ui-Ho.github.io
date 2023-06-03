
function nav_home(){
    $("#self-introduction").css("display", "block");
    $("#non-alcohol").css("display", "None");
    $("#alcohol").css("display", "None");
}

function nav_non_alcohol(){
    $("#self-introduction").css("display", "None");
    $("#non-alcohol").css("display", "block");
    $("#alcohol").css("display", "None");
}

function nav_alcohol(){
    $("#self-introduction").css("display", "None");
    $("#non-alcohol").css("display", "None");
    $("#alcohol").css("display", "block");
}

$(document).ready(function () {
    var s_width = $('[data-role="slider"]').attr('data-Swidth');
    var s_height = $('[data-role="slider"]').attr('data-Sheight');
    var s_count = $('[data-role="slider"] img.item').length;
    var dl_array = [
        'https://www.youtube.com/watch?v=qKggnBh2Mdw',
        'https://www.youtube.com/watch?v=0J2QdDbelmY',
        'https://www.youtube.com/watch?v=snItFJlBtTc',
        'https://www.youtube.com/watch?v=RRKJiM9Njr8',
        'https://www.youtube.com/watch?v=A-hHb3-8Xsk'
    ];
    $('[data-role="slider"]').css({
        position: 'relative', overflow: 'hidden', width: s_width, height: s_height
    })
        .find('.musicContainer').css({
            position: 'absolute', width: s_count * s_width, overflow: 'hidden'
        })
        .find('.item').css({
            width: s_width, height: s_height, float: 'left'
        });

    var s_currentPage = 0;
    var changePage = function () {
        $('[data-role="slider"] > .musicContainer').animate({ left: -s_currentPage * s_width }
            , 500);
    };

    $('#left-button').click(function () {
        if (s_currentPage > 0) { s_currentPage--; changePage(); }
    });
    $('#right-button').click(function () {
        if (s_currentPage < s_count - 1) { s_currentPage++; changePage(); }
    });
    $('#playLink-button').click(function() {
        window.location = dl_array[s_currentPage];
    });
});

function able_all(){
    $("#cocktail").css("display", "block");
    $("#bar").css("display", "block");
    $("#recipe").css("display", "block");
    $("#purchase").css("display", "block");
}

function able_cocktail(){
    $("#cocktail").css("display", "block");
    $("#bar").css("display", "None");
    $("#recipe").css("display", "None");
    $("#purchase").css("display", "None");
}

function able_bar(){
    $("#cocktail").css("display", "None");
    $("#bar").css("display", "block");
    $("#recipe").css("display", "None");
    $("#purchase").css("display", "None");
}

function able_recipe(){
    $("#cocktail").css("display", "None");
    $("#bar").css("display", "None");
    $("#recipe").css("display", "block");
    $("#purchase").css("display", "None");
}

function able_purchase(){
    $("#cocktail").css("display", "None");
    $("#bar").css("display", "None");
    $("#recipe").css("display", "None");
    $("#purchase").css("display", "block");
}

$(document).ready(function () {
    var c_width = $('[data-role="Cslider"]').attr('data-Cwidth');
    var c_height = $('[data-role="Cslider"]').attr('data-Cheight');
    var c_count = $('[data-role="Cslider"] img.Citem').length;
    $('[data-role="Cslider"]').css({
        position: 'relative', overflow: 'hidden', width: c_width, height: c_height
    })
        .find('.cocktailContainer').css({
            position: 'absolute', width: c_count * c_width, overflow: 'hidden'
        })
        .find('.Citem').css({
            width: c_width, height: c_height, float: 'left'
        });

    var c_currentPage = 0;
    var c_changePage = function () {
        $('[data-role="Cslider"] > .cocktailContainer').animate({ left: -c_currentPage * c_width }
            , 500);
    };

    $('#Cleft-button').click(function () {
        if (c_currentPage > 0) { c_currentPage--; c_changePage(); }
    });
    $('#Cright-button').click(function () {
        if (c_currentPage < c_count - 1) { c_currentPage++; c_changePage(); }
    });
});

$(document).ready(function () {
    var bt_width = $('[data-role="Btslider"]').attr('data-Btwidth');
    var bt_height = $('[data-role="Btslider"]').attr('data-Btheight');
    var bt_count = $('[data-role="Btslider"] img.Btitem').length;
    $('[data-role="Btslider"]').css({
        position: 'relative', overflow: 'hidden', width: bt_width, height: bt_height
    })
        .find('.BtContainer').css({
            position: 'absolute', width: bt_count * bt_width, overflow: 'hidden'
        })
        .find('.Btitem').css({
            width: bt_width, height: bt_height, float: 'left'
        });

    var bt_currentPage = 0;
    var bt_changePage = function () {
        $('[data-role="Btslider"] > .BtContainer').animate({ left: -bt_currentPage * bt_width }
            , 500);
    };

    $('#Btleft-button').click(function () {
        if (bt_currentPage > 0) { bt_currentPage--; bt_changePage(); }
    });
    $('#Btright-button').click(function () {
        if (bt_currentPage < bt_count - 1) { bt_currentPage++; bt_changePage(); }
    });
});

$(document).ready(function () {
    var mb_width = $('[data-role="Mbslider"]').attr('data-Mbwidth');
    var mb_height = $('[data-role="Mbslider"]').attr('data-Mbheight');
    var mb_count = $('[data-role="Mbslider"] img.Mbitem').length;
    $('[data-role="Mbslider"]').css({
        position: 'relative', overflow: 'hidden', width: mb_width, height: mb_height
    })
        .find('.MbContainer').css({
            position: 'absolute', width: mb_count * mb_width, overflow: 'hidden'
        })
        .find('.Mbitem').css({
            width: mb_width, height: mb_height, float: 'left'
        });

    var mb_currentPage = 0;
    var mb_changePage = function () {
        $('[data-role="Mbslider"] > .MbContainer').animate({ left: -mb_currentPage * mb_width }
            , 500);
    };

    $('#Mbleft-button').click(function () {
        if (mb_currentPage > 0) { mb_currentPage--; mb_changePage(); }
    });
    $('#Mbright-button').click(function () {
        if (mb_currentPage < mb_count - 1) { mb_currentPage++; mb_changePage(); }
    });
});