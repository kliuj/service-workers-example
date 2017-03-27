if( 'serviceWorker' in navigator){
			navigator.serviceWorker.register('/service-workers-example/test.js',{scope:'/service-workers-example/'}).then(function(reg){
				//registration worked
				console.log(reg)
			}).catch(function(error){
				console.log(error)
			})
		}