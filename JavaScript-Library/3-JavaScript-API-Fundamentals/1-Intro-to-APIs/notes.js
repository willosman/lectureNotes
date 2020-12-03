/*HTTP Requests

HTTP Common Verbs

- POST - Any time a user is creating new information

- GET - Any time a user is retrieving existing information. 

- PUT - Any time a user is overwriting existing information or updating information. 

- DELETE - Any time a user is deleting existing information. 

------------------------------------------------------------------------------------------

JSON - JSON is short for JavaScript Object Notation. JSON can convert any JavaScript object into readable text that can be sent to the server or vice versa. Because it can be created using almost any language, JSON objects are the most commonly used way to pass data through HTTP requests. 

--------------------------------------------------------------------------------------------
API Endpoints

What is an Endpoint? An API Endpoint is the url that the client application uses to communicate with your server. It's the path it takes step-by-step, page-by-page. 

--------------------------------------------------------------------------------------------

SERVER

What is a server? A server receives a request (such as an HTTP GET) from the client, then returns a response, similar to a container. It can contain a url, an image, some data, something else, or any combination of the above. Sometimes the server will pass a request to a database for more information, then receive that response back before sending it on to the client. 

-------------------------------------------------------------------------------------------

RESPONSE

What is an HTTP Response? These are three digit numbers that give us an indication if our code is doing what we want. 

value                   category                    explanation
1xx                     Informational               Request received, continuing process
2xx                     Success                     The action was successfully received, understood, and accepted
3xx                     Redirection                 Further action must be taken in order to complete the request. 
4xx                     Client Error(404 -not found) The request contains bad syntax or cannot be fulfilled.
5xx                     Server Error                The server failed to fulfill an apparently valid request. 

---------------------------------------------------------------------------------------------
Statelessness

It helps to prevent secure information from being compromised. If noting is sotred, nothing can be accessed. 
It allows an API to be deployed to multiple servers to spread out user traffic. Nothing is dependant on certain information that is only stored in one place. 
It allows an API to focus only on client-side logic. No server-side logic means less code. and therefore fewer things take up time for each search. 

----------------------------------------------------------------------------------------------

REST & API's

What is REST? REST stands for "Representational State Transfer", and was introduced and defined by Roy Fielding in his 2000 doctoral shape. It is a set of rules that, if developers want their API to be RESTful, they follow when creating their API. A lot of properties of API's we've talked aobut are specific to RESTful API's. Most API developers creat and use are RESTful.


*/


