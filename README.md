# Mock Insurance Premium Quote API


# Step 1: Clone the Repository

Using Git Command Line: Open a terminal or command prompt. Navigate to the directory where you want to clone the repository: cd /path/to/your/directory Clone the repository using the GitLab URL: 
git clone https://github.com/MANPR840/MockPremiumQuoteApi.git 

Using Visual Studio: Open Visual Studio. Go to the Git menu and select Clone Repository. Enter the GitLab repository URL in the "Repository Location" field. Choose a local folder for the clone and click Clone.

# Step 2: Open the Project in Visual Studio

After cloning, open Visual Studio and navigate to the cloned folder.

Open the .sln (solution) file to load the project


# Step 3: Build the Project

In Visual Studio, press Ctrl + Shift + B or go to Build > Build Solution.

Ensure there are no build errors.

# Step 4: Run as HTTP Server

Press Ctrl+F5 (Run without debugging). or click on http in Menu
This will launch a browser with your application running on a local development server. [http://localhost:5136/swagger/index.html]

It would open a swagger page with two operations GET and Post
Test the post endpoint with data.. 
Sample data
```json
{
  "policyTerm": 2,
  "coverageAmount": 50000000
}
```
Sample Response: 201 
```json
{
  "quoteId": "6dd1dbae-e97c-40a4-b70e-5d0fffc4fe6c"
}
 ```

## Copy the quoteId from response and use it as input parameter in get endpoint

Sample Response 
```json
{
  "quoteId": "6dd1dbae-e97c-40a4-b70e-5d0fffc4fe6c",
  "policyTerm": 2,
  "coverageAmount": 50000000,
  "premiums": [
    {
      "companyCode": "ABC001",
      "premium": 1250000
    },
    {
      "companyCode": "STQ002",
      "premium": 750000
    },
    {
      "companyCode": "QRJ003",
      "premium": 250000
    },
    {
      "companyCode": "JKL004",
      "premium": 100000
    }
  ]
}
```


