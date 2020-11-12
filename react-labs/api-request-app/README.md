# REST API project
The goal of this project is to create a React application that uses a REST API.

Start the react app with the command `npm start` and start the rest server in a different terminal with
the command `npm run start-rest-api`. By default the react app will be on http://localhost:3000 and
you can pull the rest data at http://localhost:4000/posts.

Your task is to update the starter code to in App.js to render the list of posts returned by the rest API.
Hint: this has been configured to proxy the requests automatically to the right host and port. You can access
the data by calling `fetch('/posts)`.

Note: For extra fun feel free to modify the `db.json` file and restart the rest server, to serve whatever type of RESTful
resource - cats, turtles, cities, you name it - that you would like, and build an app around that data instead.

# Extra credit 1
Implement a CreatePost component that will POST a new blog post to the REST API.

# Extra credit 2
Implement a button to delete a blog post.

# Extra credit 3
Implement a way to update a blog post.