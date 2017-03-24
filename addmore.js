(function($){
	"use strict";
	$.addmore = function(elmnt ,options){
		var core = this;
		var rowId = 0;

		core.$elmnt = $(elmnt);
		core.elmnt = elmnt;

		core.$elmnt.data('addmore', core);

        core.init = function(){
			var i;

			core.options = $.extend({}, $.addmore.defaultOptions, options);

			//callback before initialize
            core.options.callbackBeforeInit(core.$elmnt, core.options);

            //init events
            core.addClick();
            core.removeClick();

            // Set start row ID
            if($(core.options.rowEle).length>0){
                rowId = parseInt($(core.options.rowEle).last().find(core.options.removebtn).data('rowid'));
            }else{
                rowId = 0;
            }

            if (core.options.min) {
                for (i = 1; i <= core.options.min; i++) {
                    core.content();
                }
            }
		},

		 //replace content
        core.content = function() {
            //callback before add
            core.options.callbackBeforeAdd(core.$elmnt, core.options);

            rowId = rowId + 1;
            var template = $(core.options.templateEle).html();
            template = template.replace(/key/g, rowId);
            template = template.replace("rowId", "rowId-" + rowId);
            core.$elmnt.append(template);
            //callback affter add
            core.options.callbackAfterAdd(core.$elmnt, core.options);
        };


         //add more content add Event
        core.addClick = function() {
            $("form").on("click", core.options.addbtn, function() {
                //callback before add
                core.options.callbackBeforeAddClick(core.$elmnt, core.options);

                core.content();
                $(this).blur();

                //callback before add
                core.options.callbackAfterAddClick(core.$elmnt, core.options);
                return false;
            });
        };

        //add more content  remove Event
        core.removeClick = function() {
            $("form").on("click", core.options.removebtn, function() {
                //callback before add
                core.options.callbackBeforeRemoveClick(core.$elmnt, core.options);

                if (core.$elmnt.find(core.options.rowEle).length > core.options.min) {
                    core.$elmnt.find('.rowId-' + $(this).data('rowid')).remove();
                }
                $(this).blur();

                //callback before add
                core.options.callbackAfterRemoveClick(core.$elmnt, core.options);
                return false;
            });
        };

        // Run initializer
        core.init();


	};
    //default options
    $.addmore.defaultOptions = {
        templateEle: "#addmore-template",
        rowEle: ".addmore-row",
        addbtn: ".addmore-addbtn",
        removebtn: ".addmore-removebtn",
        min: 1,
        callbackBeforeInit: function(ele, options) {
        },
        callbackBeforeAdd: function(ele, options) {
        },
        callbackAfterAdd: function(ele, options) {
        },
        callbackBeforeAddClick: function(ele, options) {
        },
        callbackAfterAddClick: function(ele, options) {
        },
        callbackBeforeRemoveClick: function(ele, options) {
        },
        callbackAfterRemoveClick: function(ele, options) {
        }
    };

    //element implementation
    $.fn.addmore = function(options) {
        return this.each(function() {
            var addmore = new $.addmore(this, options);
        });
    };

})(jQuery);
