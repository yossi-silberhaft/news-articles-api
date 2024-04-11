# News Headlines

## Endpoints:

### Get Top Headlines

Returns all the top headlines
Method: GET

Endpoint: `http://127.0.0.1:8000/api/headlines`

### Get All News

Returns all news results
Method: GET

You can define the limit of results by passing the `limit` query parameter.    
Default limit is 10.
Max limit is 100.
Minimum limit is 0.

**Example:**   
Endpoint: `http://127.0.0.1:8000/api/news?limit=25`
