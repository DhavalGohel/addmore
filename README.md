# addmore
addmore plugin for add dynamic html form elements

put this code inside form element

&ltdiv style="display: block;" class="admore-fields"&gt
&lt/div&gt

<!-- Add more button -- >
&ltdiv style="display: block;"&gt
	 &lta href="#" class="addmore-addbtn"&gtAdd more&lt/a&gt
&lt/div&gt

&lt!-- Addmore template --&gt
&ltscript id="addmore-template" type="text/template"&gt
    &ltdiv class="addmore-row rowId"&gt
        &ltinput type="text" name="items[key][field1]" /&gt
        &ltinput type="text" name="items[key][field2]" /&gt
        &ltinput type="text" name="items[key][field3]" /&gt
        &lta href="#" data-rowid="key" class="addmore-removebtn"&gtRemove&lt/a&gt
    &lt/div&gt
&lt/script&gt

for use put this line of code in script tag
<pre>
$('.admore-fields').addmore();
</pre>

or with option
<pre>
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
</pre>


