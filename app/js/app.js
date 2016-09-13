(function(){
    "use strict";

    $(function(){

        $('.popup__scroll').each( function(){
            new NiceScroll( $(this) );
        } );

        $('.filter-by').each( function(){
            new FilterBy( $(this) );
        } );

    });

    var FilterBy = function(obj) {

        //private properties
        var _obj = obj,
            _objShowMore = _obj.find( '.filter-by__show-more' ),
            _objTitle = _obj.find( '.filter-by__title' );

        //private methods
        var _addEvents = function() {

                _objTitle.on( {
                    'click': function() {
                        var curElem = $(this);

                        if ( curElem.hasClass( 'open' ) ) {
                            curElem.removeClass( 'open' );
                            curElem.next().slideUp();
                        } else {
                            curElem.addClass( 'open' );
                            curElem.next().slideDown();
                        }
                    }
                } );

                _objShowMore.on( {
                    'click': function() {
                        var curElem = $(this),
                            curParent = curElem.parent();

                        curParent.find( '.hidden' ).removeClass( 'hidden' );

                        curElem.remove();

                        return false;
                    }
                } );

            },
            _addScroll = function() {
                _obj.niceScroll( {
                    railalign: 'right',
                    cursorborder: 0,
                    autohidemode: false,
                    horizrailenabled: false,
                    cursorcolor:"#176697",
                    cursorwidth: 9,
                    cursoropacitymin: 1,
                    cursorborderradius: 0,
                    railoffset: { top: 0, right: 4, left: 0, bottom: 0 }
                } );
            },
            _init = function () {
                _addEvents();
                _addScroll();
            };

        //public properties

        //public methods

        _init();
    };

    var NiceScroll = function(obj) {

        //private properties
        var _obj = obj;

        //private methods
        var _addEvents = function() {

                $( window ).on( {
                    'resize': function() {

                        _obj.getNiceScroll().resize();

                    }
                } );

            },
            _addScroll = function() {
                _obj.niceScroll( {
                    railalign: 'right',
                    cursorborder: 0,
                    autohidemode: false,
                    horizrailenabled: false,
                    cursorcolor:"#176697",
                    cursorwidth: 9,
                    cursoropacitymin: 1,
                    cursorborderradius: 0,
                    railoffset: { top: 0, right: 4, left: 0, bottom: 0 }
                } );
            },
            _init = function () {
                _addEvents();
                _addScroll();
            };

        //public properties

        //public methods

        _init();
    };

})();
