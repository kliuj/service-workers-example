if( 'serviceWorker' in navigator){
			navigator.serviceWorker.register('/test/test.js',{scope:'/test'}).then(function(reg){
				//registration worked
				console.log(reg)
			}).catch(function(error){
				console.log(error)
			})
		}