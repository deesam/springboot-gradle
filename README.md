Understanding Gradle
1.	Gradle is a build automation tool.
2.	Gradle uses a Domain Specific Language (DSL) based on Groovy to declare builds. To learn more about DSL visit the following link https://docs.gradle.org/current/dsl/ 
3.	Some of the salient features of Gradle are
	a.	Support for Ant Tasks and Maven repositories
	b.	Incremental builds – Tasks in a build are executed only when needed
	c.	Multi-project builds
	d.	Gradle Wrapper - The Gradle Wrapper allows us to execute Gradle builds even if Gradle is not installed on a computer
4.	Download Gradle from http://www.gradle.org/downloads
5.	Set GRADLE_HOME in the environmental variable.
6.	Set Path as $GRADLE_HOME/bin.

Gradle commands:
1.	gradlew build – to execute compile and build of java class files
2.	gradlew test – to execute compile and run tests
3.	gradlew bootRun – to execute compule, test and run the application. The application will run on http://localhost:8080
4.	gradlew build && java -jar build/libs/ask-gradle-proj-0.1.0.jar – to execute compile, test and run the application
5.	gradlew sonarqube – to execute the sonar analysis. Prerequisites are sonarqube installed and running.
