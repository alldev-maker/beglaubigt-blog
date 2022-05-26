(function ($) {
    "use strict"

    var htmlint = {};

    /* =============================================
    Pre Load
    ============================================= */
    htmlint.WebLoad = function () {
        $("#loading").fadeOut(300);
    }


    /* =============================================
    Smooth Scroll
    ============================================= */
    htmlint.HeaderScroll = function () {
        $('a[href*="#"]:not([href="#"])').on('click', function (e) {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top,
                    }, 1000);
                    return false;
                }
            }
        });
    }

     /*=============================================
    Header Fixed
    ============================================= */
    htmlint.HeaderFixed = function(){
        var scroll = $(window).scrollTop();
        if (scroll >= 100) {
            $("body").addClass("header-fixed");
        } else {
            $("body").removeClass("header-fixed");
        }
    }

    /* =============================================
    Menu Close
    ============================================= */
    htmlint.MenuClose = function () {
        $('.navbar-nav .nav-link').not('.dropdown-toggle').on('click', function (e) {
            var toggle = $('.navbar-toggler').is(':visible');
            if (toggle) {
                $('.navbar-collapse').collapse('hide');
            }
        });

    }


    htmlint.support = function () {
        var activetab = $(".support-description.active").attr("id");
        $(".support-description.active").slideDown();
        $('[data-tabs="'+activetab+'"]').addClass("active");
        $("[data-tabs]").click(function () {
            $("[data-tabs]").removeClass("active");
            var targettab = $(this).data('tabs');
            $('[data-tabs="'+targettab+'"]').addClass("active");
            $("[data-tabcontainer] .support-description").removeClass("active").stop().slideUp();;
            $("[data-tabcontainer]").find("#" + targettab).addClass("active").stop().slideDown();
        })

    }

    /* =============================================
    popup Accordion
    ============================================= */

    htmlint.popupaccordion = function () {
        $("[data-accordion].active-slide").find(".accordion-slide").slideDown();
        $(".accordion-handle").click(function () {
            var y = $(this).closest('[data-accordion]').hasClass("active-slide");
            if (y) {
                $(this).closest('[data-accordion]').find(".accordion-slide").stop().slideUp();
                $(this).closest('[data-accordion]').removeClass("active-slide");
            } else {
                $(this).closest('[data-accordion]').find(".accordion-slide").stop().slideDown();
                $(this).closest('[data-accordion]').addClass("active-slide")
            }
        })
    }

    htmlint.accordion = function () {
        var accodiant = $('[data-accordions]');
        if(accodiant.length){
                $(".accordion-section-item.active h3").next('.accordion-section-content').slideDown()
                $(".accordion-section-item h3").click(function(){
                    var accordionContainer =  $(this).next('.accordion-section-content');
                    var thisaccordionContainer = $(this).closest('.accordion-section-item').find('.accordion-section-content');
                    if(thisaccordionContainer.is(":visible")){
                        if(accordionContainer.is(":visible")){
                            accordionContainer.slideUp().closest('ccordion-section-item').removeClass('active');
                        }else{
                            thisaccordionContainer.slideUp().closest('ccordion-section-item').removeClass('active');
                            accordionContainer.slideDown().closest('ccordion-section-item').addClass('active');
                        }

                    }else{
                        accordionContainer.slideDown().closest('ccordion-section-item').addClass('active');
                    }
                });
         }
    }


    /* =============================================
    Tab
    ============================================= */
    htmlint.tabs = function(){
        var $tabs = $('[data-tab]');
        if($tabs.length){
            $tabs.each(function(){
                var $this = $(this);
                $this.find('.tab-panels').hide();
                $('[data-tabimg]').hide();
                var getactiveTab = $this.find("[data-tabmenu]").find('li.active').find('[data-targettab]').attr('data-targettab');
                $this.find("#"+getactiveTab).show();
                $('[data-tabimg="'+getactiveTab+'"]').show();
                $this.find('[data-targettab]').on('click touchend', function(event){
                    event.preventDefault()
                    $(this).parents('[data-tabmenu]').find('li').removeClass('active');
                    $(this).parent().addClass('active');
                    var currentTab = $(this).attr('data-targettab');
                    $tabs.find('.tab-panels').hide();
                    $("#"+currentTab).show();
                    $('[data-tabimg]').hide();
                    $('[data-tabimg="'+currentTab+'"]').show();
                });
            })
        }



    }

    /* =============================================
    From
    ============================================= */
    htmlint.formvalidation = function(){
        window.addEventListener('load', function() {
            // Fetch all the forms we want to apply custom Bootstrap validation styles to
            var forms = document.getElementsByClassName('needs-validation');
            // Loop over them and prevent submission
            var validation = Array.prototype.filter.call(forms, function(form) {
              form.addEventListener('submit', function(event) {
                if (form.checkValidity() === false) {
                  event.preventDefault();
                  event.stopPropagation();
                }
                event.preventDefault();
                form.classList.add('was-validated');
                $('[data-formp="form"]').slideUp();
                $('[data-formp="loading"]').slideDown();
                $.ajax({
                    url: "https://hook.integromat.com/9yltry228gjoklf6q4nh3navlew7f0ao",
                    type: "post",
                    data: $("#contantform").serialize(),
                    success: function(d) {
                        $('[data-formp="loading"]').slideUp();
                        $('[data-formp="sussess"]').slideDown();
                      // Redirect to another success page
                    }
                  });
              }, false);

              form.querySelectorAll('.form-required').forEach(input => {
                input.addEventListener(('input'), () => {
                  if (form.checkValidity()) {
                    $('[data-btn-form="contant"]').attr("disabled",false);
                  }else{
                    $('[data-btn-form="contant"]').attr("disabled",true);
                  }
                });
              });

            });
          }, false);
    }


    /* =============================================
    Counter js
    ============================================= */
    var a = 0;
    htmlint.Counter = function(){
        if($('.counterbox').length){
            var oTop = $('.counterbox').offset().top - window.innerHeight;
            if (a == 0 && $(window).scrollTop() > oTop) {
                $('.count').each(function () {
                    $(this).prop('Counter',0.1).animate({
                        Counter: $(this).text()
                    }, {
                        duration: 1000,
                        easing: 'swing',
                        step: function (now) {
                            $(this).text(Math.ceil(now));
                        }
                    });
                });
                a = 1;
            }
        }
    }

    /*=============================================
    Get querystring from URL using jQuery
    ============================================= */
    htmlint.getUrlVars = function(){
      var vars = [], hash;
      var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
      for(var i = 0; i < hashes.length; i++)
      {
          hash = hashes[i].split('=');
          vars.push(hash[0]);
          vars[hash[0]] = hash[1];
      }
      return vars;
    }

    /*=============================================
    Form Funnel
    ============================================= */
    htmlint.funnel = function(){
        var steppost =  $('[data-fstep]');
        if(steppost.length){
            var activesteps = $('[data-fstep-active]').data('fstep-active');
            var activeform = htmlint.getUrlVars()['form'];
            if(activeform){
              activesteps = 2;
              $('[name="funnel-type"][value="'+activeform+'"]').prop("checked", true);
            }
            var shareholder = [{
              name: "",
              birthdate:"",
              placeofresidence:"",
              Becomesmanagingdirector:""
            }]

            var stepform = {
                activestep : activesteps,
                nextstep:activesteps,
                formtype:$('[name="funnel-type"]:checked').val(),
                sharehoderid:2,
                targetstep : function(target){

                },
                pagestage : function(){
                  var getpagename =  htmlint.getUrlVars()['form'];
                  if(stepform.formtype != getpagename){
                    history.pushState({pageID: stepform.formtype}, stepform.formtype, '?form='+stepform.formtype);
                  }
                  if(stepform.activestep == 1){
                    history.pushState({pageID: 'funnel'}, 'Funnel', '?');
                  }
                },
                runstep: function(){
                  var nextstep = $('[data-fstep="'+stepform.nextstep+'"]');
                  if(stepform.nextstep != 1 && stepform.formtype){
                    nextstep = $('[data-formtype="'+stepform.formtype+'"] [data-fstep="'+stepform.nextstep+'"]');
                  }

                  nextstep.addClass('activestep');
                  nextstep.removeClass('complatedstep');
                  stepform.activestep = stepform.nextstep;
                  var higet = nextstep.innerHeight();
                  $('.funnel-form').css('height', higet);
                  stepform.progressbar();
                  setTimeout(function(){
                    $('[data-fstep]').removeClass('complatedstep');
                  },800)
                  stepform.pagestage();

                },
                progressbar:function(){
                    $('[data-fstep-menu]').removeClass('active');
                    $('[data-fstep-item]').removeClass('done').removeClass('active');
                    if(stepform.formtype && stepform.activestep !=1){
                      $('[data-fstep-menu="'+stepform.formtype+'"]').addClass('active')
                      $('[data-fstep-menu="'+stepform.formtype+'"] [data-fstep-item="'+stepform.activestep+'"]').prevAll().addClass('done')
                      $('[data-fstep-menu="'+stepform.formtype+'"] [data-fstep-item="'+stepform.activestep+'"]').addClass('active');
                      if(!$('[data-fstep-menu="'+stepform.formtype+'"] [data-fstep-item="'+stepform.activestep+'"]').data('fstep-item')){
                        $('[data-fstep-item]').addClass('done');
                      }
                    }
                },
                sendajax:function(){
                      var formdata =  $('form[data-formtype="'+stepform.formtype+'"]').serialize();
                      var formurl =  $('form[data-formtype="'+stepform.formtype+'"]').data('url')
                      $.ajax({
                        url: formurl,
                        type: "post",
                        data: formdata,
                        success: function(d) {
                          // Redirect to another success page
                        }
                      });
                },
                formvalidation:function(){
                  steppost.each(function(){
                      var target = $(this);
                      var notvalid = true;
                      var id = target.data('fstep');

                      target.find('textarea').each(function(){
                        var getvalue = $(this).val();
                        if(getvalue==""){
                             $(this).addClass('fieldempty');
                        }else{
                           $(this).removeClass('fieldempty')
                        }

                      });
                      target.find('input').not('[type="radio"]').each(function(){
                        var getvalue = $(this).val();
                        if(getvalue==""){
                             $(this).addClass('fieldempty')
                        }else{
                           $(this).removeClass('fieldempty')
                        }
                      });

                        target.find('input[required]').not('[type="radio"]').each(function(){
                            var ss = $(this)[0].checkValidity()
                            if(!ss){
                              notvalid = false;
                            }
                        });

                        target.find('input[required][type="radio"]').each(function(){
                          var name  = $(this).attr('name');
                          var radios = document.getElementsByName(name);
                          var formValid = false;
                          var i = 0;
                          while (!formValid && i < radios.length) {
                              if (radios[i].checked) formValid = true;
                              i++;
                          }
                          if (!formValid) {
                            notvalid = false;
                          };
                          return formValid;
                        });



                      var fieldempltry = target.find('[required].fieldempty').length;
                      if(fieldempltry>0){
                        notvalid = false;
                      }

                      if(!notvalid){
                        target.find('button[data-fbtn="next"]').attr('disabled', true);
                        target.find('[data-fbtn="done"]').attr('disabled', true);
                      }else{
                        target.find('button[data-fbtn="next"]').attr('disabled', false);
                        target.find('[data-fbtn="done"]').attr('disabled', false)
                      }

                  });
                }
            }
            $('body').on('click keyup','input[name], textarea[name]',function(){
              stepform.formvalidation();
            })



            stepform.runstep();
            stepform.progressbar();
            stepform.formvalidation();
            $('[data-fbtntarget]').click(function(){
              stepform.nextstep = $(this).data('fbtntarget');
              var currentstep = $('[data-fstep="'+stepform.activestep+'"]');
              currentstep.addClass('complatedstep').removeClass('activestep');
              stepform.runstep();
            })
            $('[data-fbtn="back"]').click(function(){
                var currentstep = $('[data-fstep="'+stepform.activestep+'"]');
                stepform.nextstep = stepform.nextstep - 1;
                currentstep.removeClass('activestep');
                stepform.runstep();
            });
            $('[data-fbtn="next"]').click(function(){
              stepform.nextstep = stepform.nextstep + 1;
              var currentstep = $('[data-fstep="'+stepform.activestep+'"]');
              currentstep.addClass('complatedstep').removeClass('activestep');
              stepform.runstep();
            });
            $('[data-fbtn="done"]').click(function(){
              stepform.nextstep = stepform.nextstep + 1;
              var currentstep = $('[data-fstep="'+stepform.activestep+'"]');
              currentstep.addClass('complatedstep').removeClass('activestep');
              stepform.runstep();
              stepform.sendajax();
            });

            $('[name="funnel-type"]').click(function(){
              var typeform = $('[name="funnel-type"]:checked').val();
              if(typeform !=stepform.formtype){
                    stepform.formtype = typeform;

              }
            });

            $('body').on('keyup', '[data-updatekey]', function(){
                var targetkey = $(this).data('updatekey');
                var Thisval = $(this).val();
                $('[name="'+targetkey+'"]').val(Thisval);
            });

            $('body').on('keyup', '[data-capitalcontribution]', function(){
                var capitalcontribution = $('input[data-capitalcontribution]');
                var capitalpercentage = $('[data-contributionpercentage]');
                if(capitalcontribution.length){
                  var $total = 0;
                  capitalcontribution.each(function(){
                     var $val = $(this).val();
                      $total  = Number($total) + Number($val);
                  });
                }
                if(capitalpercentage.length){
                  capitalpercentage.each(function(){
                      var $this = $(this);
                      var $targetname = $this.data('contributionpercentage');
                      var $target = $('input[data-capitalcontribution="'+$targetname+'"]');
                      var $targetvale = $target.val();
                      var percentage =(100 * $targetvale) / $total;
                      percentage  = percentage.toFixed(0)
                      $this.html(percentage +'%')
                  })
                }
            });


            $('[data-addshareholder]').click(function(){
                var id = stepform.sharehoderid;

                var $sharehoderhtml = $('#shareholdertemplate').html();
                $sharehoderhtml =  $sharehoderhtml.replaceAll('{{id}}',id)
                $('[data-shareholdergroup="shareholder"]').append($sharehoderhtml);

                var activestep = $('[data-formtype="'+stepform.formtype+'"] [data-fstep="'+stepform.activestep+'"]');
                var higet = activestep.innerHeight();
                $('.funnel-form').css('height', higet);

                var $stammeinlagehtml = $('#stammeinlagetemplate').html();
                $stammeinlagehtml =  $stammeinlagehtml.replaceAll('{{id}}',id);
                $('[data-shareholdergroup="stammeinlage"]').append($stammeinlagehtml);
                stepform.sharehoderid++;

            });

            $('body').on('click', '[data-removeshareholder]', function(){
              var target = $(this).data('removeshareholder');
              $('[data-shareholdergroup="shareholder"] [data-shareholder="shareholder'+target+'"]').remove();
              $('[data-shareholdergroup="stammeinlage"] [data-stammeinlage="stammeinlage'+target+'"]').remove();
            });





        }
    }


    /* =============================================
    Window on Load
    ============================================= */
    $(window).on("load", function () {

    });



    /* =============================================
    Document on ready
    ============================================= */
    $(document).on("ready", function () {
        htmlint.HeaderScroll();
        htmlint.MenuClose();
        htmlint.support();
        htmlint.popupaccordion();
        htmlint.HeaderFixed();
        htmlint.tabs();
        htmlint.formvalidation();
        htmlint.accordion();
        htmlint.Counter();
        htmlint.funnel();
        htmlint.WebLoad();
    })

     /* =============================================
    Window on Scroll
    ============================================= */
    $(window).on("scroll", function(){
        htmlint.HeaderFixed();
        htmlint.Counter();
    });

})(jQuery);
