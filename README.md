# Tech Blog
  [![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
## Description

This is a CMS-style blog site where Rick and Morty fans can publish their blog posts and comment on other fans' posts as well. Originally this was supposed to be a Tech Blog but I thought this would be more fun. This application follows the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication. Please see User Story and Acceptance Criteria below:

User Story: 

AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions

Acceptance Criteria:

GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view posts and comments but I am prompted to log in again before I can add, update, or delete posts


## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)


## Installation

N/A

## Usage

In order to use this application, go to my webpage [here](https://immense-caverns-15186-3cc45d438581.herokuapp.com/). You are able to view the current posts on the homepage. If you would like to look at the post comments or the dashboard you must create an account. Once created, you can click on any post on the homepage to view the comments or add your own comment. On your dashboard, you will have the option to create a new article (post), edit and delete your posts. You will also be able to see the comments posted on your posts and send a comment response back.

Link to deployed application: https://immense-caverns-15186-3cc45d438581.herokuapp.com/

## Demo

N/A

## Credits

CSS Reset file (jass.css file in public folder) from github user: necolas in Repository: normalize.css. See below for link to repository: https://github.com/necolas/normalize.css

Badge for MIT License was made with [Shields.io](http://shields.io/) and taken from GitHub user: lukas-h. See below for the link to the license badge collection: https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba


## License

MIT License, please refer to the LICENSE in the repo.

## Contributing

N/A

## Tests

N/A

## Questions

Please refer to my profile for additional projects: https://github.com/Vannasaur

If you have any questions please email me at: vannaluciano@gmail.com

![B1E16F29-8D26-4041-9380-855020B7F1B0_1_201_a](https://github.com/Vannasaur/tech-blog/assets/141793843/7f8187bb-500f-471f-9080-80e2dd137538)
![0CC1CF27-41DB-4197-A8EE-C141281C4EFD_1_201_a](https://github.com/Vannasaur/tech-blog/assets/141793843/3704a35a-292f-4701-99c6-7be2be47f935)