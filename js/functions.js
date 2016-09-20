$(document).ready(function(){
    
        /* --------------------------------------------------------
	Components
    -----------------------------------------------------------*/
    (function(){
        /* Textarea */


        //Select
	if($('.select')[0]) {
	    $('.select').selectpicker();
	}
        
    })();
    
    


    /* --------------------------------------------------------
	Notifications
    -----------------------------------------------------------*/
    (function(){
        $('body').on('click touchstart', '.drawer-toggle', function(e){
            e.preventDefault();
            var drawer = $(this).attr('data-drawer');

            $('.drawer:not("#'+drawer+'")').removeClass('toggled');

            if ($('#'+drawer).hasClass('toggled')) {
                $('#'+drawer).removeClass('toggled');
                $('.tick').css('display','none');
            }
            else{
                $('#'+drawer).addClass('toggled');
                $('.tick').css('display','block');
            }
        });

        //Close when click outside
        $(document).on('mouseup touchstart', function (e) {
            var container = $('.drawer, .tm-icon');
            if (container.has(e.target).length === 0) {
                $('.drawer').removeClass('toggled');
                $('.drawer-toggle').removeClass('open');
                $('.tick').css('display','none');
            }
        });

        //Close
        $('body').on('click touchstart', '.drawer-close', function(){
            $(this).closest('.drawer').removeClass('toggled');
            $('.drawer-toggle').removeClass('open');
            $('.tick').css('display','none');
        });
    })();
    
    
    $(".gameicon").click(function(){
                    $("#dock").css("bottom","-85px");
                    $("#up-arrow").css("bottom","0px");
                    $("#up-arrow").fadeIn(1000);
                });
    $("#up").hover(function(){
                    $("#dock").css("bottom","0px");
                    $("#up-arrow").css("bottom","55px");
                    $("#up-arrow").fadeOut(750);                                        
                });
    $("#dock").hover(function(){},function(){
        $("#dock").css("bottom","-85px");
        $("#up-arrow").css("bottom","0px");
        $("#up-arrow").fadeIn(1000);
    });
    
    $(document).on('click', '#dalalbull' ,function(){
        $.get('text/dalalbull1.txt', function(data){
            $('#main-games').fadeOut(300, function(){
                $(this).html(data).fadeIn(400).promise().done(function(){
                    /* --------------------------------------------------------
                     Animate numbers
                     -----------------------------------------------------------*/
                    $('.quick-stats').each(function(){
                        var target = $(this).find('h2');
                        var toAnimate = $(this).find('h2').attr('data-value');
                        // Animate the element's value from x to y:
                        $({someValue: 0}).animate({someValue: toAnimate}, {
                            duration: 1000,
                            easing:'swing', // can be anything
                            step: function() { // called on every step
                                // Update the element's text with rounded-up value:
                                target.text(commaSeparateNumber(Math.round(this.someValue)));
                            }
                        });

                        function commaSeparateNumber(val){
                            while (/(\d+)(\d{3})/.test(val.toString())){
                                val = val.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
                            }
                            return val;
                        }
                    });
                    ticker();                   
                        
                //Line Chart
                    $(function () {
                        if ($('#line-chart')[0]) {
                            var d1 = [[1,14], [2,15], [3,18], [4,16], [5,19], [6,17], [7,15], [8,16], [9,20], [10,16], [11,18]];

                            $.plot('#line-chart', [ {
                                data: d1,
                                label: "Data",

                            },],

                                {
                                    series: {
                                        lines: {
                                            show: true,
                                            lineWidth: 1,
                                            fill: 0.25,
                                        },

                                        color: 'rgba(255,255,255,0.7)',
                                        shadowSize: 0,
                                        points: {
                                            show: true,
                                        }
                                    },

                                    yaxis: {/*
                                        min: 10,
                                        max: 22,*/
                                        tickColor: 'rgba(255,255,255,0.15)',
                                        tickDecimals: 0,
                                        font :{
                                            lineHeight: 13,
                                            style: "normal",
                                            color: "rgba(255,255,255,0.8)",
                                        },
                                        shadowSize: 0,
                                    },
                                    xaxis: {
                                        tickColor: 'rgba(255,255,255,0)',
                                        tickDecimals: 0,
                                        font :{
                                            lineHeight: 13,
                                            style: "normal",
                                            color: "rgba(255,255,255,0.8)",
                                        }
                                    },
                                    grid: {
                                        borderWidth: 1,
                                        borderColor: 'rgba(255,255,255,0.25)',
                                        labelMargin:10,
                                        hoverable: true,
                                        clickable: true,
                                        mouseActiveRadius:6,
                                    },
                                    legend: {
                                        show: false
                                    }
                                });

                            $("#line-chart").bind("plothover", function (event, pos, item) {
                                if (item) {
                                    var x = item.datapoint[0].toFixed(2),
                                        y = item.datapoint[1].toFixed(2);
                                    $("#linechart-tooltip").html(item.series.label + " of " + x + " = " + y).css({top: item.pageY+5, left: item.pageX+5}).fadeIn(200);
                                }
                                else {
                                    $("#linechart-tooltip").hide();
                                }
                            });

                            $("<div id='linechart-tooltip' class='chart-tooltip'></div>").appendTo("body");
                        }

                    });
                    
                });
            });
        });
    
    });


    
});
