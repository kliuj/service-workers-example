this.addEventListener('install',function(event){
	event.waitUntil(
		caches.open('v1').then(function(cache){
			return cache.addAll([
					'/test/',
					'/test/test.js',
					'/test/images/1.jpg',
					'/test/images/2.jpg',
					'/test/images/3.jpg',
					'/test/images/4.jpg',
					'/test/images/5.jpg',
					'/test/images/6.jpg'
				])
		})
	)
})
this.addEventListener('fetch',function(event){
	var response;
	event.respondWith(caches.match(event.request).catch(function(){
		return fetch(event.request)
	}).then(function(r){
		response = r;
		caches.open('v1').then(function(cache){
			cache.put(event.request,response)
		})
		return response.clone()
	}).catch(function(){
		return caches.match('/test/6.jpg')
	})
	)
})