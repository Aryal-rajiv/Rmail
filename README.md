#RMAIL API

Send emails using packages and SMTP
As Express and Nodemailer can’t send messages without a mail service, 
I’ve used Mailtrap SMTP, which offers a reliable SMTP with robust sending capabilities, 
ensuring my emails reach recipients’ inboxes just in time.

Tech Stack
. Backend: Express JS, Node JS
. Database: MongoDB

🚀 Getting Started
Installation
git clone https://github.com/Aryal-rajiv/Rmail
cd RMAIL
npm install

Environment Setup
Create a .env file in the root

📖 API Endpoints
Each endpoint follows REST conventions. Responses are in JSON.
|  |  |  | 
|  | /api/ |  | 

🧪 Testing
Use Postman or curl to test endpoints. Sample collection included in /postman/.

Project Structure
frontend
Server
  .env
  server.js
  gitignore
package.json

