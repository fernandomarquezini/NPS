$('#calendar').datepicker({
		});

$("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });

    trocarCor = function(nota){
        if($(nota).text() == '0'){
            $(nota).removeClass('btn-primary');
            $(nota).css("background", "#ffff00");
            $(nota).css("color", "#fff");
        }else if($(nota).text() == '1'){
            $(nota).removeClass('btn-primary');
            $(nota).css("background", "#fff000");
            $(nota).css("color", "#fff");
        }else if($(nota).text() == '2'){
            $(nota).removeClass('btn-primary');
            $(nota).css("background", "#FFD700");
            $(nota).css("color", "#fff");
        }else if($(nota).text() == '3'){
            $(nota).removeClass('btn-primary');
            $(nota).css("background", "#ffb53e");
            $(nota).css("color", "#fff");
        }else if($(nota).text() == '4'){
            $(nota).removeClass('btn-primary');
            $(nota).css("background", "#FFA400");
            $(nota).css("color", "#fff");
        }else if($(nota).text() == '5'){
            $(nota).removeClass('btn-primary');
            $(nota).css("background", "#FF8C00");
            $(nota).css("color", "#fff");
        }else if($(nota).text() == '6'){
            $(nota).removeClass('btn-primary');
            $(nota).css("background", "#f67e18");
            $(nota).css("color", "#fff");
        }else if($(nota).text() == '7'){
            $(nota).removeClass('btn-primary');
            $(nota).css("background", "#ff6a00");
            $(nota).css("color", "#fff");
        }else if($(nota).text() == '8'){
            $(nota).removeClass('btn-primary');
            $(nota).css("background", "#FF4500");
            $(nota).css("color", "#fff");
        }else if($(nota).text() == '9'){
            $(nota).removeClass('btn-primary');
            $(nota).css("background", "#f00");
            $(nota).css("color", "#fff");
        }else if($(nota).text() == '10'){
            $(nota).removeClass('btn-primary');
            $(nota).css("background", "#e00303");
            $(nota).css("color", "#fff");
        }else{
            $(nota).addClass('btn-primary');
        }
    };
    
    manterCor = function(nota){
        if($(nota).text() == '0'){
            $(nota).removeClass('btn-primary');
            $(nota).css("background", "#ffff00");
            $(nota).css("color", "#fff");
        }else if($(nota).text() == '1'){
            $(nota).removeClass('btn-primary');
            $(nota).css("background", "#fff000");
            $(nota).css("color", "#fff");
        }else if($(nota).text() == '2'){
            $(nota).removeClass('btn-primary');
            $(nota).css("background", "#FFD700");
            $(nota).css("color", "#fff");
        }else if($(nota).text() == '3'){
            $(nota).removeClass('btn-primary');
            $(nota).css("background", "#ffb53e");
            $(nota).css("color", "#fff");
        }else if($(nota).text() == '4'){
            $(nota).removeClass('btn-primary');
            $(nota).css("background", "#FFA400");
            $(nota).css("color", "#fff");
        }else if($(nota).text() == '5'){
            $(nota).removeClass('btn-primary');
            $(nota).css("background", "#FF8C00");
            $(nota).css("color", "#fff");
        }else if($(nota).text() == '6'){
            $(nota).removeClass('btn-primary');
            $(nota).css("background", "#f67e18");
            $(nota).css("color", "#fff");
        }else if($(nota).text() == '7'){
            $(nota).removeClass('btn-primary');
            $(nota).css("background", "#ff6a00");
            $(nota).css("color", "#fff");
        }else if($(nota).text() == '8'){
            $(nota).removeClass('btn-primary');
            $(nota).css("background", "#FF4500");
            $(nota).css("color", "#fff");
        }else if($(nota).text() == '9'){
            $(nota).removeClass('btn-primary');
            $(nota).css("background", "#f00");
            $(nota).css("color", "#fff");
        }else if($(nota).text() == '10'){
            $(nota).removeClass('btn-primary');
            $(nota).css("background", "#e00303");
            $(nota).css("color", "#fff");
        }else{
            $(nota).addClass('btn-primary');
        }
    };
    
    $(".nota").hover(function(){
        $(".nota").css("background", "");;
        $(".nota").addClass('btn-primary');
        trocarCor(this);
    });
    
    $(".nota").click(function(){
        $(".nota").removeAttr('style');
        $(this).animate({
        fontSize: "2em"
          }, 1100 );
        manterCor(this);
        $("#notaSelecionada").val($(this).text());
    });
    $('#enviarNota').on('click', function(event) 
    { 
      if($("#comment").val() != "" && $("#notaSelecionada").val() != ""){
        return true;
      }else{  
        var htmlAlert = '<div class="alert card-warning"><em class="fa fa-exclamation-triangle mr-2"></em> <strong>Importante! </strong>É preciso selecionar uma nota e preencher o campo de justificativa.</div>';   
        $(".alert-message").prepend(htmlAlert);    
        $(".alert-message .alert").first().hide().fadeIn(300).delay(15000).fadeOut(3000, function () { $(this).remove(); });
          return false;
      }
    });