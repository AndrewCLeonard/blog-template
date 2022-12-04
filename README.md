# blog-template

## Requirements

### User Story

AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions

---

### Acceptance Criteria

_GIVEN a CMS-style blog site..._

| WHEN I...                                                      | THEN I...                                                                                                                                                                 | GitHub Issue |
| -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| visit the site for the first time                              | am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in |
| click on the homepage option                                   | am taken to the homepage                                                                                                                                                  |
| click on any other links in the navigation                     | am prompted to either sign up or sign in                                                                                                                                  |
| choose to sign up                                              | am prompted to create a username and password                                                                                                                             | 
| click on the sign-up button                                    | user credentials are saved and I am logged into the site                                                                                                                  |
| revisit the site at a later time and choose to sign in         | am prompted to enter my username and password                                                                                                                             |
| am signed in to the site                                       | see navigation links for the homepage, the dashboard, and the option to log out                                                                                           |
| click on the homepage option in the navigation                 | am taken to the homepage and presented with existing blog posts that include the post title and the date created                                                          |
| click on an existing blog post                                 | am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment                                |
| enter a comment and click on the submit button while signed in | will save the comment and the post is updated to display the comment, the comment creator’s username, and the date created                                                |
| click on the dashboard option in the navigation                | am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post                                                  |
| click on the button to add a new blog post                     | am prompted to enter both a title and contents for my blog post                                                                                                           |
| click on the button to create a new blog post                  | e title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post                                                               |
| click on one of my existing posts in the dashboard             | am able to delete or update my post and taken back to an updated dashboard                                                                                                |
| click on the logout option in the navigation                   | am signed out of the site                                                                                                                                                 |
| am idle on the site for more than a set time                   | am able to view comments but I am prompted to log in again before I can add, update, or delete comments                                                                   |

---

## Structure & Setup

## tl;dr: MVC pattern w/ Node, Express, Handlebars, & Sequelize ORM

### [Model-View-Controller pattern (MVC)](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller)

---

### [Express-Handlebars setup](https://www.npmjs.com/package/express-handlebars)

```
.
├── app.js
└── views
    ├── home.handlebars
    └── layouts
        └── main.handlebars

2 directories, 3 files
```

---

### Packages/Libraries Used

|     | package                                                                              | description                         |
| --- | ------------------------------------------------------------------------------------ | ----------------------------------- |
| M   | [MySQL2](https://www.npmjs.com/package/mysql2)                                       |                                     |
| M   | [Sequelize](https://www.npmjs.com/package/sequelize)                                 |                                     |
| V   | [express-handlebars](https://www.npmjs.com/package/express-handlebars)               | templating engine                   |
| V   | bootstrap                                                                            | imported using their CDN, _not_ npm |
| C   | [Express](https://www.npmjs.com/package/express)                                     |                                     |
|     | [dotenv](https://www.npmjs.com/package/dotenv)                                       | protect environment variables       |
|     | [bcrypt](https://www.npmjs.com/package/bcrypt)                                       |                                     |
|     | [express-session](https://www.npmjs.com/package/express-session)                     |                                     |
|     | [connect-session-sequelize](https://www.npmjs.com/package/connect-session-sequelize) |                                     |
|     | [nodemon](https://www.npmjs.com/package/nodemon) (dev dependency)                    |                                     |

### GitHub Issues

#### set up skeleton structure

####
