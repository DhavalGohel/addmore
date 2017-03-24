<!DOCTYPE html>
<html>
<head>
 	<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title> Add more example</title>
	<script src="https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="  crossorigin="anonymous"></script>
</head>
	<body>
		<form>
			<!-- main container for add more  -->
			<div class="admore-fields">
                <?php if(!empty($_POST['items'])): ?>
                    <?php foreach($_POST['items'] as $key => $row): ?>
                        <div class="fieldsaddmore-row rowId-<?php echo $key ?>">
                            <input type="text" name="items[<?php echo $key ?>][field1]" />
                            <input type="text" name="items[<?php echo $key ?>][field2]" />
                            <input type="text" name="items[<?php echo $key ?>][field3]" />
                            <a href="#" data-rowid="<?php echo $key ?>" class="fieldsaddmore-removebtn">Remove</a>
                        </div>
                    <?php endforeach; ?>
                <?php endif; ?>
            </div>


			<div style="display: block;" class="admore-fields">
			</div>

			<!-- Add more button -->
			<div style="display: block;">
				 <a href="#" class="addmore-addbtn">Add more</a>
			</div>
		</form>

		<!-- Addmore template -->
		<script id="addmore-template" type="text/template">
		    <div class="addmore-row rowId">
		        <input type="text" name="items[key][field1]" />
		        <input type="text" name="items[key][field2]" />
		        <input type="text" name="items[key][field3]" />
		        <a href="#" data-rowid="key" class="addmore-removebtn">Remove</a>
		    </div>
		</script>

		<script src="addmore.js"></script>
		<script>
			$(document).ready(function(){
				$('.admore-fields').addmore();
			});
		</script>
	</body>
</html>