# Appcelerator
Appcelerator resources I made. See http://appcelerator.com

**jmHelper.js:** Some useful functions in a js file:

*isJSON(obj)* : Check if an object is a jSON.

*getData(url, _callback)* : Get jSON data from GET request.

*postData(url, obj, _callback)* : POST data to an url specified.

**Examples**

```
	var helper = require('jmHelper');
helper.postData("http://posttestserver.com/post.php", temp, function(_response) {
	(_response.success) ? alert("Perfect!") : alert('F·$k!: ' + _response.error);
});

helper.getData("http://api.randomuser.me/?nat=es", function(_response) {
 (_response.success) ? alert(_response.data.results[0].user.name.first) : alert('F·$k!: ' + _response.error);
 });
 
}
```
