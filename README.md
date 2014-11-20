ClearLens
=========

Clear Lens - JQuery Plugin

To implement the plugin you have to include the pixastic library. and call the plugin in $(window).load event, Because for image processing first the image should be loaded. Hope you all know $(window).load will be triggered after all the assets are loaded.

<h2>How to use?</h2>
It is very simple to implement the plugin
include you jQuery 
<ol>
<li> include Pixastic Library</li>
<li> include the plugin code</li>
<li> Add attribute fitler="blur" for images that you want to apply</li>
<li> on $(window).load Event call the following code
<br>
<code>	$('img').blurLens();</code>
<br/>
or
<br/>
<code>
  $('img').blurLens({
	    width: 200,
	    height: 200,
	    blur: 5
	});
</code>
<br/>
width - Width of lens<br/>
height - Height of lens<br/>
blur - Blur Amount</br>

</li>
</ol>

<h2><a href="http://jsfiddle.net/ajai/k8Ube/" target="_blank">Demo</a></h2>
