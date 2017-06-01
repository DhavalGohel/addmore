# addmore
addmore plugin for add dynamic html form elements

put this code inside form element

#<div style="display: block;" class="admore-fields">
#</div>

<!-- Add more button -->
#<div style="display: block;">
#	 <a href="#" class="addmore-addbtn">Add more</a>
#</div>

<!-- Addmore template -->
#<script id="addmore-template" type="text/template">
 #   <div class="addmore-row rowId">
  #      <input type="text" name="items[key][field1]" />
  #      <input type="text" name="items[key][field2]" />
  #      <input type="text" name="items[key][field3]" />
  #      <a href="#" data-rowid="key" class="addmore-removebtn">Remove</a>
  #  </div>
#</script>

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


