/* JS Document */

/******************************

[Table of Contents]

1. Vars and Inits
2. Set Header
3. Init Menu
4. Init Image
5. Init Quantity


******************************/

jQuery(document).on('turbolinks:load',function()
{
	"use strict";
	initImage(); 

	function initImage()
	{
		var images = $('.product_image_thumbnail');
		var selected = $('.product_image_large img');

		images.each(function()
		{
			var image = $(this);
			image.on('click', function()
			{
				var imagePath = new String(image.data('image'));
				selected.attr('src', imagePath);
			});
		});
	}

});