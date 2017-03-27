if( 'serviceWorker' in navigator){
	navigator.serviceWorker.register('/service-workers-example/test.js',{scope:'/service-workers-example/'}).then(function(reg){
		//registration worked
		if(reg.installing) {
	      console.log('Service worker installing');
	    } else if(reg.waiting) {
	      console.log('Service worker installed');
	    } else if(reg.active) {
	      console.log('Service worker active');
	    }
	}).catch(function(error){
		console.log(error)
	})
}