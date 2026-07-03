Description
-----------
Address Field is available as a Webform component through
Addressfield Tokens module.

The purpose of Webform Addressfield Extra is to extend this
webform addressfield to provide autocompletion for the address,
with data from Google Maps Places Autocomplete API
(using geocomplete library as a wrapper).

Prerequisites
-------------
- Webform module
- Addressfield Tokens module (use latest 7.x-1.x-dev release, since 7.x-1.5 is outdated).
- Libraries API module
- jquery_update to update jquery to 1.7
- Geocomplete library: download and place it in
  /sites/all/libraries/geocomplete.
  You can use jquery.geocomplete.js or jquery.geocomplete.min.js

Installation
------------
To install, copy the webform_addressfield_extras directory and all its contents to your modules directory.
