document.addEventListener("DOMContentLoaded", function(event) {


	var disqus_config = function () {
	    this.page.url = sms-portfolio-sms;
	    this.page.identifier = sms-portfolio-sms;
	};

    (function() {
	var d = document, s = d.createElement('script');
	s.src = 'https://cyberpunk-police.disqus.com/embed.js';
	s.setAttribute('data-timestamp', +new Date());
	(d.head || d.body).appendChild(s);
    })();
   
	
   
    var thumbnailElement = document.getElementById("smart_thumbnail");

    thumbnailElement.addEventListener("click", function(){




	if (thumbnailElement.className == "small"){

	    thumbnailElement.className = null;
	} else {

	    thumbnailElement.className = "small";

	}



				     });


});
