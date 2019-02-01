# Mashup of Bear Tracker LWC sample project app and MickWheelz SFDX CI boilerplate

## Ursus Park sample app for Trailhead project Build Flexible Apps with Lightning Web Components

### Resource Links:
Trailhead project
https://trailhead.salesforce.com/en/content/learn/projects/lwc-build-flexible-apps?trailmix_creator_id=00550000006yDdKAAU&trailmix_id=lightning-web-components

Mick Wheeler blog post
https://mickwheelz.net/index.php/2018/10/03/continuous-integration-with-github-sfdx-and-circleci-easier-than-you-think/


### Instructions to setup CI with CircleCI:

(from https://github.com/mickwheelz/Dreamforce2018)
*Continuous Integration with GitHub, SFDX and CircleCI ...Easier than you think!
I hope you enjoyed my talk at Dreamforce 2018!*

**You can use this repository as a base for setting up your own continuous integration workflow!**

This repository contains build scripts (located in the build/ folder) and an example config.yml file in the .circleci/ folder to get you started

*Getting Started*

You first need to create a certificate and key to authenticate with. To do this you can run the script in build/generate-keys.sh

Follow the prompts when creating the certificate files
Take note of the Base64 output, as you will need this to set up CircleCI later
You will need to create a connected app in your production (and any sandboxes you wish to use CI with)

First, from Setup, enter App in the Quick Find box, then select App Manager. Click New Connected App.
Give your application a name such as 'CircleCI'
Make sure you check Enable OAuth Settings in the connected app
Set the OAuth callback to http://localhost:1717/OauthRedirect
Check Use Digital Signatures and add your certificate file (server.crt), this will be in the build/ folder. Once you have done this delete this file
Select the required OAuth scopes
Make sure that refresh is enabled - otherwise you'll get this error: user hasn't approved this consumer
Ensure that Admin approved users are pre-authorized under Permitted Users is selected
Ensure that you allow the System Administrator profile is selected under the Profiles related list
Take note of the Consumer Key as you will need it for CircleCI
You now can set up your CircleCI build

Open CircleCI and click on Add Projects choose your GitHub repository and click Set Up Project then click Start building there is an example config.yml in this repository already. You can edit this to suit your needs.

Cancel the first build, as it will fail without any enviornment variables set

Click the gear icon next to the repository name on the left hand side of the screen

In the settings screen, choose Environment Variables you will need to add three variables by clicking Add Variable

SFDC_SERVER_KEY is the Base64 output generated in Step 1
SFDC_PROD_CLIENTID is the Consumer Key from Step 2
SFDC_PROD_USER is the user to use with CircleCI
You can now re-run the first build.

You are now ready to build your salesforce projects with CircleCI!
