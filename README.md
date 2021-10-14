# SIRKKA NETWORKS HOME PROJECT

## OBJECTIVE
The objective of this project is to create a Fullstack application in a Docker Swarm infrastructure.

* Client Container
    - Client application
    - Dockerfile

* Server Container
    - Server application
    - Dockerfile

* Traefik Container
    - Traefik Proxy
    - Traefik.yaml

* Docker-compose.yml
    - Services infrastructure


## DEPLOYING APPLICATION

To deploy Application:

1. Initialise project
    - to initialise the swarm run: [docker swarm init] at the root of the project
2. Start Project
    - to build the containers specified in the docker-compose file, run: [docker-compose up --build] at the root of the project
3. Build project
    - cd into the application you would like to work on.
    - you can view changes by navigating to:
        - client via: http://localhost:3000
        - server via: http://localhost:5000
4. Stop project
    - to stop the swarm run: [docker-compose down -v]

