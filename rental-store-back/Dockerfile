FROM maven:3.8.4-openjdk-17 AS build
COPY rental-store-back/src /home/app/src
COPY rental-store-back/pom.xml /home/app
RUN mvn -f /home/app/pom.xml clean package -Dmaven.test.skip

FROM openjdk:17-jdk-slim
COPY --from=build /home/app/target/rentalbook-0.0.1-SNAPSHOT.jar /usr/local/lib/rentalbook.jar

RUN groupadd -r rentalbookuser && useradd -r -g rentalbookuser rentalbookuser
RUN chown -R rentalbookuser:rentalbookuser /usr
USER rentalbookuser

EXPOSE 8080
ENTRYPOINT ["java","-jar","/usr/local/lib/rentalbook.jar"]