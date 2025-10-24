# Mock Insurance Premium Quote UI

## Install Node.js and npm: Ensure you have Node.js and npm installed. Check versions with:

node --version
npm --version

## Install Angular CLI: Install Angular CLI globally using npm:

npm install -g @angular/cli

## Step 1: Clone the Repository
Open a terminal or command prompt. Navigate to the directory where you want to clone the repository: cd /path/to/your/directory Clone the repository using the GitLab URL: 
git clone https://github.com/MANPR840/MockInsurancePremiumQuoteUI.git


## Step 2: Install and run the app
Navigate to directory MockInsurancePremiumQuoteUI in terminal

npm install
npm start

On successful start , it would show a url 'http://localhost:61385/'
open this url in a browser

## Before testing UI in browser, make sure Mock API is up and running in another instance of visual studio 


Submit a quote on UI 
Example policyTerm = 2

coverageAmount = 400000

Click on submit Quote

{"quoteId":"81ad0156-aa02-4f96-a59a-d24e2b075f09"} created successfully.


Copy the quote Id 81ad0156-aa02-4f96-a59a-d24e2b075f09 and use it as input to retrieve quote. Click on Retrieve quote. It should show quote details






