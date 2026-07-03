(function($) {
  // Wait for the document to be ready
  $(document).ready(function() {
   
    // Example: Add a custom change event for the select dropdown
		$('#edit-field-supplier-receiver-und-0-field-test-und').on('change', function() {
		//	alert("hi");
			var selectedValue = $(this).val();
			 var $this = $(this); 
			 $this.next('.person-info').remove();
		if (selectedValue) {
			// Make an AJAX request to fetch the node data
			$.ajax({
			  url: '/Handover/getdata/' + selectedValue,  // URL from the menu callback
			  type: 'GET',
			  dataType: 'json',  // Expect a JSON response
			  success: function(response) {
				if (response.nid) {
				  var newDiv = $('<div>', { 
					class: 'person-info', 
					text: 'Name: ' + response.name + ', PAN: ' + response.pan + ', ADDRESS: ' + response.thoroughfare+' ' + response.premise+' ' + response.locality+ '  '+ response.postal_code+' ' + response.country
				  });
				  $this.after(newDiv);
				} else {
				  // If the node is not found, show an error message
				  alert('Error: ' + response.error);
				}
			  },
			  error: function() {
				// Show an error message if the AJAX request fails
				alert('An error occurred while fetching the node data.');
			  }
			});
		  } else {
			alert('Please select a valid node ID.');
		  }
		});

	   $('#edit-field-receiver-und-0-field-test-und').on('change', function() {
		//	alert("hi");
			var selectedValue = $(this).val();
			 var $this = $(this); 
			 $this.next('.person-info').remove();
		if (selectedValue) {
			// Make an AJAX request to fetch the node data
			$.ajax({
			  url: '/Handover/getdata/' + selectedValue,  // URL from the menu callback
			  type: 'GET',
			  dataType: 'json',  // Expect a JSON response
			  success: function(response) {
				if (response.nid) {
				  var newDiv = $('<div>', { 
					class: 'person-info', 
					text: 'Name: ' + response.name + ', PAN: ' + response.pan + ', ADDRESS: ' + response.thoroughfare+' ' + response.premise+' ' + response.locality+ '  '+ response.postal_code+' ' + response.country
				  });
				  $this.after(newDiv);
				} else {
				  // If the node is not found, show an error message
				  alert('Error: ' + response.error);
				}
			  },
			  error: function() {
				// Show an error message if the AJAX request fails
				alert('An error occurred while fetching the node data.');
			  }
			});
		  } else {
			alert('Please select a valid node ID.');
		  }
		});
    });
})(jQuery);