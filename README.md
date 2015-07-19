# Appcelerator
Appcelerator resources I made. See http://appcelerator.com

**jmHelper.js:** Some useful functions in a js file:

*isJSON(obj)* : Check if an object is a jSON.

*getData(url, _callback)* : Get jSON data from GET request.

*postData(url, obj, _callback)* : POST data to an url specified.

*listViewJSon(url, obj, _callback)* : populate a ListView element (obj=id) trought a jSON petition.

**Examples**

```
var helper = require('jmHelper');
helper.postData("http://posttestserver.com/post.php", temp, function(_response) {
	(_response.success) ? alert("Perfect!") : alert('F·$k!: ' + _response.error);
});

helper.getData("http://api.randomuser.me/?nat=es", function(_response) {
 (_response.success) ? alert(_response.data.results[0].user.name.first) : alert('F·$k!: ' + _response.error);
 });
 
helper.listViewJSon("http://misapuntesde.com/listview_ex.json", $.elementsList, function(e) {
	// get the clicked section
	var section = $.elementsList.sections[e.sectionIndex];
	// get the clicked item from that section
	var item = section.getItemAt(e.itemIndex);
	// print the item's title
	Ti.API.info('itemclick: ' + item.properties.title);
});
```
