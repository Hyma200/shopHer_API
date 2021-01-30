# shopHer_API

## Documentation
### `/users`
Get: Gets all registered businesses in the app. Doesn't require authentication. Only allows for reading. 

### `/userNoAuth`
Post: Searches for the queried business name argument in string username

### `/category`
Post: Searches for all businesses that belong in a category. Input must be in format of json object named category.

### `/uploadImage`
Post: Allows businesses to upload an image to their profile.

### `/userInfo`
Post: User must be authenticated and have a token to use this function. Returns information about the business account associated with a user's token.

### `/editProfile`
Post: User must be logged in and have a valid token in the header. Allows users to edit their business profile.

### `/signup`
Post: Registers/Creates new user accounts/businsses.

### `/login`
Post: Firebase Authentication function that returns custom token if user credentials are valid.

