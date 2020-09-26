# Website to surge via Github Actions!


This will help you to build , test and deploy your website to surge via Github actions and notify you on Email and Slack.

The website used here is a basic website build with Gatsby Framework. Follow the below link:

https://www.gatsbyjs.com/docs/quick-start/

When you have made the JS app you can build it to a static HTML website with command “gatsby build”.


## Getting started with surge: 

(Follow this link to install surge to your machine and after that run the command “surge” in the project folder made by gatsby)

https://surge.sh/help/getting-started-with-surge

 Now,
1)	Get a Deployment Token- Run the command “surge token” from cmd/bash and save the token for future use.

2)For now , Setup 2 secrets in your repository secrets tab (You will be setting-up more secrets later)

SURGE_TOKEN -> Your Surge Token from cmd

SURGE_DOMAIN -> The domain you want publish your site

3)	Push the project folder to Github.

4) Now go to actions tab in the repo and crate a custom workflow with yaml file and save it.

(Check the workflow folder for the yaml file)

5)	Test it with a commit.


# Understanding the jobs:

1)Build-Job:

npm install -g surge

This command will install surge and will install all your requirements.

2)Test-job1/Test-job2/Test-job3

These jobs will install mocha , chai and unitjs (these are tesing framework) and will run the test script present in Test folder.

3)Deploy-job

surge ./ ${{secrets.SURGE_DOMAIN }} --token ${{ secrets.SURGE_TOKEN }}

These commands will take your secrets and will deploy your website to surge.sh

4)Postdeploy-Testing

Sudo apt install curl
curl -Is http://www.google.com | head -n 1

These commands will install curl and run a post-deployment test with curl command.
(This command will return HTTP/1.1 200 OK if all the things are right)

5)Notify on Email

Setup 2 secrets in your repository secrets tab

MAIL_USERNAME -> Your complete mail-id with which you want send email and set the smtp server.

MAIL_PASSWORD -> Password of the above email.

(For gmail you need enable the option of less secure apps from settings)

6)Notify on Slack

Now again setup 1 more secret in repo

SLACK_WEBHOOK - The url of your webhook on slack

NOTE: You can visit the webpage at http://tense-fire.surge.sh/
![Screenshot (316)](https://user-images.githubusercontent.com/46739055/93215825-8e197c00-f784-11ea-8cd5-bbac7a0b8c3a.png)

# Understanding the other tokens of the workflow : (You need to save all these in secrets of your repo)

JIRA_TOKEN:
1)Log in to https://id.atlassian.com/manage/api-tokens.
2)Click Create API token.
3)From the dialog that appears, enter a memorable and concise Label for your token and click Create.
4)Click Copy to clipboard, then paste the token to your script, or elsewhere to save

JIRA_BASE_URL: 
URL of your Jira account. (eg: https://example.atlassian.net/)

JIRA_USER_EMAIL:
E-mail with which you have created Jira account.

SONAR_TOKEN :

To generate a token, to go User > My Account > Security (on your sonar account) Your existing tokens are listed here, each with a Revoke button.

The form at the bottom of the page allows you to generate new tokens. Once you click the Generate button, you will see the token value. Copy it immediately; once you dismiss the 

notification you will not be able to retrieve it.

GITHUB_TOKEN:
It will be generated automatically.

# Triggering GitHub Actions Using Postman

1)In your workflow yml file, you need to add a trigger for the on key that says that the workflow will accept repository dispatches.

2)The first step is to create a new environment in Postman to store your personal access token.

(To generate personal access token -https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/creating-a-personal-access-token)

![1](https://user-images.githubusercontent.com/46739055/94343196-28ef4180-0034-11eb-83ef-9f1bf67cff1b.PNG)

3)Once this environment is set up, you can now create a new collection of requests that will trigger your GitHub Actions workflows. To use the token that is a part of your 

environment, make sure your environment is selected in the upper right hand corner of your application, and then add the token to the Bearer Authorization of your request.

![2](https://user-images.githubusercontent.com/46739055/94343199-2d1b5f00-0034-11eb-90e1-e33b08c4ae98.PNG)

4)Next set the appropriate headers.

![3](https://user-images.githubusercontent.com/46739055/94343201-30164f80-0034-11eb-98b4-b5c8391da420.PNG)

5)You can now set the appropriate payload for your dispatch and send the request.

(Notice that the endpoint is: https://api.github.com/repos/:owner/:repo/dispatches)

![4](https://user-images.githubusercontent.com/46739055/94343204-3278a980-0034-11eb-9870-65e11c9d85f7.PNG)

Congratulations! Your manual button to trigger your GitHub Actions workflow has successfully been setup.








