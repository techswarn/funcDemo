const dotenv = require('dotenv')
dotenv.config({path: './config.env'})

const key = process.env.KEY

function printDetails(){
  console.log(`Hello, from serverless and how are you doing ${key} `)
}

async function main(args) {
  console.log(args?.__ow_headers)
  printDetails()
  console.log(args);
  console.log("completed")

  return {
      statusCode: 200,
      message: "Success"
  }
}

main()

exports.main = main;