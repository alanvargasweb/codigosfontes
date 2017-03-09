function verificaNavegador() {
    var navegador = navigator.appName;
    var retorno = navigator.appVersion;

    var versao = retorno.split(".");

    if (navegador === "Microsoft Internet Explorer" && versao[0] <= 4)
    {
        var atualiza = confirm('Foi detectado que você está utilizando um navegador desatualizado.\nPor favor atualize-o para visualizar o site corretamente.\n\nGotaria de atualizar agora?');
        if (atualiza === true)
        {
            window.open("http://browser-update.org/pt/update.html");
        }
    }
}


function isMobile() {
    return preg_match("/(android|avantgo|blackberry|bolt|boost|cricket|docomo|fone|hiptop|mini|mobi|palm|phone|pie|tablet|up\.browser|up\.link|webos|wos)/i", $_SERVER['HTTP_USER_AGENT']);
}

function email_valido(email) {

    er = /^[a-zA-Z0-9][a-zA-Z0-9\._-]+@([a-zA-Z0-9\._-]+\.)[a-zA-Z-0-9]{2}/;
    if (!er.exec(email))
    {
        return false;
    }

}

function apenas_numeros(val) {

    $(val).keyup(function () {

        var valor = $(this).val().replace(/[^0-9]+/g, '');

        $(this).val(valor);

    });

}

function ddd(val) {

    $(val).keyup(function () {

        var valor = $(this).val().replace(/[^0-9]+/g, '');


        $(this).val(valor);

        if (valor > 2) {
            $(this).next().focus();
        }

    });

}

function verificar_campo(form) {



    $(form + " form .cmp").on("load", function () {

        var vv = $(this).val();

        $(this).prev().css({
            top: "0"
        }).animate({
            top: "-15px"
        }, 100);
    });


    $(form + " form .cmp").on("keyup", function () {

        var vv = $(this).val();
        var vv2 = parseInt(vv);

        if (vv2 > 0) {

            if (vv2 === 1) {
                $(this).prev().css({
                    top: "15px"
                }).animate({
                    top: "-15px"
                }, 300);
            } else {
                $(this).prev().css({
                    top: "-15px"
                });
            }
        } else {
            $(this).prev().css({
                top: "-15"
            }).animate({
                top: "0px"
            }, 300, function () {
                $(this).removeAttr("style");
            });
        }

    });
}

function envia_formulario(form) {

    $(form + " form").on("submit", function (event) {

        $(".alert").remove();

        var erro = 0;
        var m = "";
        var msg2 = "";

        if ($("#nome").val() === "") {
            erro++;
            m += "Preencha o seu nome <br/>";
        }

        if ($("#telefone").val() === "") {
            erro++;
            m += "Preencha o seu telefone <br/>";
        }

        if ($("#email").val() === "") {
            erro++;
            m += "Preencha o seu e-mail <br/>";
        }

        if ($("#email").val() !== "" && email_valido($("#email").val()) === false) {
            erro++;
            m += "Preencha o seu e-mail corretamente<br/>";
        }


        if (erro > 0) {


            msg2 += "<div class='c3c c_24 alert'>";
            msg2 += "<div class='c3b c_24 box_03'>";
            msg2 += "<a href='#' class='close_box link1'>Fechar</a>";

            if (erro > 0 && erro <= 1) {
                msg2 += "<p><b>Foi encontrado " + erro + " erro</b></p>"
            } else {
                msg2 += "<p><b>Foram encontrados " + erro + " erros</b></p>"
            }

            msg2 += "<p>" + m + " </p>";
            msg2 += "</div>";
            msg2 += "</div>";



            $(msg2).prependTo(form);

            $(".close_box").click(function (e) {
                e.preventDefault();

                $(this).parent().parent().remove();
            });

            event.preventDefault();
        }

    });

}


function banner_rotativo(id, qtd) {

    var tamanho;

    function calcular() {
        var smobile = $(window).width();

        if (smobile > 400) {
            tamanho = qtd;
        } else {
            if (qtd !== "1") {
                tamanho === "4";
            } else {
                tamanho === "1";
            }
        }

        var valor1 = $(id + " div.slideb").width();
        var valor2 = valor1 / tamanho;


        $(id + " div.slidea div.slideb article").css("width", valor2);
    }


    function seq() {

        var valor1 = $(id + " div.slideb").width();
        var valor2 = valor1 / tamanho;
        var valor3 = "-" + valor2 + "px";


        $(id + " div.slidea article").first().css({
            marginLeft: "0",
            opacity: "1"
        }).animate({
            marginLeft: valor3,
            opacity: "0"
        }, 500, function () {
            $(this).appendTo(id + " div.sld1a div.slideb article");
        });



    }

    function rev() {
        var valor1 = $(id + " div.slideb").width();
        var valor2 = valor1 / tamanho;
        var valor3 = "-" + valor2 + "px";

        $(id + " div.slidea div.slideb article").last().prependTo(id + " div.slidea  div.slideb").css({
            opacity: "0",
            marginLeft: valor3,
            width: valor2
        }).animate({
            opacity: "1",
            marginLeft: "0px"
        }, 500);



    }

    function prev() {

        seq();

    }

    $("a.prev").click(function (event) {
        event.preventDefault();
        prev();
    });

    $("a.next").click(function (event) {
        event.preventDefault();
        rev();
    });

    setInterval(rev, 5000);
    setInterval(calcular, 1);

}




function inseremenu(id, classe, texto) {
    var menuboton = "<header class='c2b c_24 hide'>";
    menuboton += "<a href='#' class='" + classe + "'>" + texto + "</a>";
    menuboton += "</header>";

    $(menuboton).prependTo(id);
}

function verificar_menu(id, quebra) {


    function calcular2() {
        var smobile = $(window).width();

        if (smobile < quebra) {

            $(id + " div.menu").prev().removeClass("hide");
            $(id + " div.menu").removeClass("hlist");
            $(id + " div.menu").addClass("vlist");


        } else {
            $(id + " div.menu").prev().addClass("hide");
            $(id + " div.menu").removeClass("vlist");
            $(id + " div.menu").removeClass("show");
            $(id + " div.menu").addClass("hlist");
            $(id + " div.menu").removeAttr("style");
        }

    }


    $(id + " header a").click(function (event) {
        event.preventDefault();

        var existshow = $(id + " div.menu").hasClass("show");


        if (existshow === false) {
            $(id + " div.menu").addClass("show");

        } else {
            $(id + " div.menu").removeClass("show");

        }
    });

    setInterval(calcular2, 1);

}


function change_section() {

    var smobile = $(window).width();
    
    var content01 = $("#rg_header_01 div.left").css('height');
    var formulario = $("#form");
    var contato = $("#contato");
    var rightside = $("#rightside");
    
    $("#rg_header_01 div.right").css('height',content01);
    
    
    
    var hd1 = $("#rg_header_01 div.d_02").css('height');
    
    
    if (smobile < 660) {
        $("#form").appendTo("#rg_header_01 div.left").insertAfter("#banner");
        $("#contato").appendTo("#rg_header_01 div.left").insertAfter("#logo");
        $("#rightside").appendTo("#rg_header_01 div.left").insertAfter("#headline");
    } else {
        $("#form").appendTo("#rg_header_01 div.right");
        $("#contato").appendTo("#rg_header_01 div.right").insertBefore("#form");
         $("#rightside").appendTo("#rg_header_01 div.right").insertAfter("#form");
    }
    


}

function float_menu(valor) {

    var menu = $(valor);
    var pmenu = $(window).scrollTop();

    if (pmenu > 147) {
        $(menu).addClass("fixed");
    } else {
        $(menu).removeClass("fixed");
    }
    

}

$("#rightside a").on("click", function(event){
    event.preventDefault();
     $('html, body').animate({
                    scrollTop: $("#form").offset().top
                }, 300);
})

/* botoes */


envia_formulario("#form");
apenas_numeros("#telefone");

/* botoes */
change_section();


$(window).resize(function () {
    change_section();
});

$(window).scroll(function () {
    float_menu();
});

$(window).load(function () {
    verificaNavegador();
});