/*
FETCH

What is Fetch? The Fetch API allows us to "fetch" or pull resources from across the web: text files, code, data, and more. 

Fetch centers around one concept for the most part: a generic definition of objects known as "Request" and "Response". Because these objects are generic, they can be used anywhere you need them. 

1. The fetch() method takes in your desired resource's path as a mandatory argument. 
2. The Request object returns a "Promise" that resolves to the arguement's Response. 
3. After retrieving a "Response", a multitude of methods define the body content and how it will be handled. 
4. Note - you can use Request() and Response() constructors to directly create request and responses, but they are more likely to be created by other API actions. 

Basic Fetch Components
- GlobalFetch - Contains the fetch() used to fetch a resource. 
- Headers - HTTP response/request headers can be queried and allow you to do things such as retrieving, updating, or deleting. 
- Request - A resouce request. It contains the method of the request. (GET, POST, etc.), the url, associated headers, and more. 
- Response - The response to the request. It contains headers and url, but more importantly replies with the status code to determine whether or not the request was successful. 
Body - contains methods relating to the main content of the response/request that allow you to specify content type and how to handle it. 
*/
fetch('http://example.com/movies.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
        console.log(myJson)
    })