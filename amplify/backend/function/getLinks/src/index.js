

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
 const AWS = require('aws-sdk');
 const docClient = new AWS.DynamoDB.DocumentClient();
 
 
 
 async function listLinks(params){
   try {
     const data = await docClient.scan(params).promise()
     return data
   } catch (err) {
     return err
   }
 }
 
 exports.handler = async (event, context) => {
   try {
     let params = {
       TableName : 'linksUserTable',
       Key: {
         user: { S: event.mail },
       }
     }
     console.log(event);
     const data = await listItems(params)
     return { body: JSON.stringify(data) }
   } catch (err) {
     return { error: err }
   }
 }