const selectedAmenities = {};

$(document).ready(init);

function() {
	$('.amenities .popover input').change(checkAction);
}

function init () {
	$('.amenities .popover input').change(checkAction);
}

function checkAction () {
	if ($(this).is(':checked')) {
		selectedAmenities[$(this).attr('data-id')] = $(this).attr('data-name');
	} else if ($(this).is(':not(:checked)')) {
		delete selectedAmenities[$(this).attr('data-id')];
	}
	displayAmenities(selectedAmenities);
}

function displayAmenities (selectedAmenities) {
	const amenities = Object.values(selectedAmenities).sort();
	$('.amenities h4').text(amenities.join(', '));
}
