# graphql-node
My PC is using this software
PS C:\Users\jonmc\Documents\Omnia\GraphQL\server> npm ls
server@1.0.0 C:\Users\jonmc\Documents\Omnia\GraphQL\server

─ express-graphql@0.12.0

─ express@4.18.2

─ graphql@15.3.0

─ lodash@4.17.21

─ mongodb@6.3.0

─ mongoose@8.0.1


Don't need lodash anymore, it was useful in the initial tutorial videos.

For the full tutorial, check out the following YouTube videos:

Starting with GraphQL Tutorial #1 - Introduction to GraphQL
by NetNinja (UK)

https://youtu.be/Y0lDGjwRYKw?si=Co50CT5NZ-tA98s2

There are definitely some things in the tutorial that didn't work initially.  
1. instead of: const graphqlHTTP = require('express-graphql');

2. For the mongoose implementation, you have to create a free account first on mongo db 
My account URL starts with:  https://cloud.mongodb.com/
Afer you have your account, you need the mongodb username/password uri of your own.  If you wanna use mine for starters, it's fine since
I don't have anything sensitive there, and it's hardcoded in the app.js file already, but you would want to replace it with yours, i.e.

const uri = "mongodb+srv://jonmcgill2:wxzQFvRxHibXLwu3@cluster0.r7ueebj.mongodb.net/?retryWrites=true&w=majority";

3. I have entered some data into mongodb, based on the tutorial, a small sample of books and authors.  
There's also some errored entries that might be there, from early implementation bugs, but they can be ignored safely.

4. To be implemented: REACT, i.e. Tutorial # 22 onwards, from the initial version I'm uploading to github, so when I make further updates
I should modify this README.md to reflect that it includes the REACT portions of the tutorial, also.
