$(document).ready(function(){
    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#botaoReset').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(e){
        e.preventDefault();
        const enderecoDaNovaImagem = $("#endereco-imagem-nova").val();
        const novoItem = $('<li style="diplay: none></li>');
        $(`<img scr="${enderecoDaNovaImagem}" />`).appendTo(novoItem);
        $(`<div class="overlay-imagem-link">
        <a href= "${enderecoDaNovaImagem}" target="_blank" title="ver imagem em tamanho real">
        ver imagem em tamanho real
        </a>
        </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo("ul");
        $(novoItem).fadeIn(5000);
        $('#endereço-imagem-nova').val('')
    })

    })
