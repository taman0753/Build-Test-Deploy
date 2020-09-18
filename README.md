Website to surge via Github Actions!


This will help you to build , test and deploy your website to surge via Github actions and notify you on Email and Slack.

The website used here is a basic website build with Gatsby Framework. Follow the below link:

https://www.gatsbyjs.com/docs/quick-start/

When you have made the JS app you can build it to a static HTML website with command “gatsby build”.


Getting started with surge: 

(Follow this link to install surge to your machine and after that run the command “surge” in the project folder made by gatsby)

https://surge.sh/help/getting-started-with-surge

 Now,
1)	Get a Deployment Token- Run the command “surge token” from cmd/bash and save the token for future use.

2)	 Setup 2 secrets in your repository secrets tab

SURGE_TOKEN -> Your Surge Token from cmd

SURGE_DOMAIN -> The domain you want publish your site

3)	Push the project folder to Github.

4) Now go to actions tab in the repo and crate a custom workflow with yaml file and save it.

(Check the workflow folder for the yaml file)

5)	Test it with a commit.


Understanding the jobs:

1)Build-Job:

npm install -g surge

This command will install surge and will install all your requirements.

2)Test-job:

Npm install –global mocha
Npm test

These commands will install mocha and will run the test script present in Test folder.

3)Deploy-job

surge ./ ${{secrets.SURGE_DOMAIN }} --token ${{ secrets.SURGE_TOKEN }}

These commands will take your secrets and will deploy your website to surge.sh

4)Postdeploy-Testing

Sudo apt install curl
curl -Is http://www.google.com | head -n 1

These commands will install curl and run a post-deployment test with curl command.
(This command will return HTTP/1.1 200 OK if all the things are right)

5)Notify on Email





NOTE: You can visit the webpage at http://tense-fire.surge.sh/
![Screenshot (316)](https://user-images.githubusercontent.com/46739055/93215825-8e197c00-f784-11ea-8cd5-bbac7a0b8c3a.png)



