# Git Issues Monitoring

It contains 3 modules :
 1. To manage the database with updates periodically
 2. For email automation for open PR Analyzer for each team
 3. Backend for git issues monitoring dashboard
 
 Before running the modules create a file named ballerina.conf and add the following and provide the values:
 
     DB_URL = ""
     DB_USERNAME = ""
     DB_PASSWORD = ""
     
     GITHUB_AUTH_KEY = ""
     
     GMAIL_ACCESS_TOKEN = ""
     GMAIL_REFRESH_TOKEN = ""
     GMAIL_CLIENT_ID = ""
     GMAIL_CLIENT_SECRET = ""
     
     GMAIL_RECIPIENT = ""
     GMAIL_SENDER = ""
     GMAIL_CC = ""
     
     CRON_EXPRESSION_MAIL = ""
     CRON_EXPRESSION_UPDATE = ""
     CRON_EXPRESSION_UPDATE_COUNT = ""
 
 To run each module, navigate to the root directory of ballerina project and issue the following commands: 
 
     ballerina build <module-name>
     ballerina run target/bin/<module-name>.jar
 
 

    
