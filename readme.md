# Full Cycle course - NGINX Reverse Proxy Challenge

In this challenge, you'll set up NGINX as a reverse proxy for a Node.js application that adds records to a MySQL database.

## Challenge Description

1. **Access NGINX**: When accessing NGINX, it will forward the request to the Node.js application.
2. **Node.js Application**: The application will add a record to the `people` table in the MySQL database.
3. **Response**: The application will return a message containing "Full Cycle Rocks!" and the list of names in the database.

## How to Run

To run the containers, use the following command:

```sh
docker-compose up -d
```
