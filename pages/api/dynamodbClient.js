const AWS = require("aws-sdk");

// Configure o AWS SDK
AWS.config.update({
  region: "sa-east-1", // Substitua pela região correta
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const dynamoDB = new AWS.DynamoDB.DocumentClient();

module.exports = dynamoDB;
