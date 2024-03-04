const selectedAmenities = {};
const HOST = '0.0.0.0';

$(document).ready(init);

function() {
	$('.amenities .popover input').change(checkAction);
	checkApiStatus();
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

function checkApiStatus () {
  const url = `http://0.0.0.0:5001/api/v1/places_search/`;
  $.get(url, (data) => {
    if (data.status === 'OK') {
      $('div#api_status').addClass('available');
      console.log('Available');
    } else {
      $('div#api_status').removeClass('available');
    }
  });
}
