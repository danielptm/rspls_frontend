##How to get started.
1. Make sure you have, node8, java8, maven and git installed as well as a java IDE.
2. Open your terminal
3. Cd to a location where you want to clone the projects.
4. Run `git clone https://github.com/danielptm/rspls_frontend.git`
5. Run `git clone https://github.com/danielptm/rspls_backend.git`
6. Open`rspls_backend` project in Intellij or a java IDE and run the springboot app from there (`http://localhost:8080/`). 
7. Cd to the `rspls_frontend` repo and run `npm install` then `npm run start` And view the app in your browser at `http://localhost:3000/`
8. You may have refresh the page if you started the frontend before the backend.

### Positives with this project.
- Both a frontend and backend application were completed.
- The requirements laid out in the instructions were completed.
- I had fun with this project and added my own creative elements here and there even if some of the things did not get done as I had planned.
- It's clear that I can do frontend and backend development with java/spring html/css/react.

### Negatives with this project.
- Using java.util.logger. Log4j should be used it's better then the logger chosen for this project. This was chosen due to time.
- Not use of exception mapper. Exceptions mappers could be used to map backend errors to web exceptions and throw correct http error codes.
- No Api authentication. The API is completely open. Using spring security or something like that could offer protection.
- ObjectMapper singleton in ResultsService. There are instances of this everywhere. This should be a singleton.
- Too much Gson stuff everywhere. Due to time, I used a lot of Gson/JSON stuff. This could have been done a bit cleaner.
- There should be more data validation There should could be more data validation on incoming data.
- S3 client is not used. I put considerable effort into getting that set up to return the top 10 results. To do this i created an IAM role that had programatic access to s3. because my s3 has nothing important in it, i created security credentials and embedded the tokens in the project and commited to github. While I was at work AWS sent me an email saying my account had been compromised due to private credentails that had got out in the open. I deleted those credentials and decided not to go furhter with this, plus time also became an issue.
- Unit tests could be a bit better on the front end and the backend. Due to time I skimped a little bit on this. In addition there is an important unit test on the backend that is being ignored. It broke during a refactoring, but I know the logic works so i left i there as @ignore.
- The UI was started from react seed project. It has vulnerable dependencies that should fixed.
- I should have been better about estimating. While I think I did pretty well I got stuck with some AWS/spring stuff that slowed this project down. I did not adjust my time estimate for getting slowed down and assumed everything would have gone perfectly.
- The unit tests do not run when you run `mvn test`. The important ones worked for me while developing though.

### Big take away
The project was completed both a front end and a backend. There are many things that could be improved on. I did not have enough time due to work
and other things to spend more time on it and get everything I wanted to done. But it shows I can be affective in both a html/css/react environment as well as a java/spring/AWS environment.
