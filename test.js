this.addEventListener('install',function(event){
	event.waitUntil(
		caches.open('v1').then(function(cache){
			return cache.addAll([
					'/service-workers-example/',
					'/service-workers-example/index.html',
					'/service-workers-example/app.js',
					'/service-workers-example/images/1.jpg',
					'/service-workers-example/images/2.jpg',
					'/service-workers-example/images/3.jpg',
					'/service-workers-example/images/4.jpg',
					'/service-workers-example/images/5.jpg',
					'/service-workers-example/images/6.jpg'
				])
		})
	)
})
this.addEventListener('fetch',function(event){
	var response;
	event.respondWith(
		caches.match(event.request).catch(function(){
			return fetch(event.request).then(function(r){
				response = r;
				return caches.open('v1').then(function(cache){
					cache.put(event.request, response.clone());
					return response;
				})
			})
		}).catch(function(){
				return caches.match('/service-workers-example/images/6.jpg')
			})
	)
})