const dotenv = require('dotenv')
dotenv.config({path: './config.env'})

const key = process.env.KEY

function printDetails(args){
  console.log(`---------start----------- `)
  console.log(args?.__ow_headers)
  console.log(args?.__ow_body)
  console.log(`---------completed------- `)
}

async function main(args) {
  printDetails(args)
  return {
      statusCode: 200,
      "body": { "greeting": "Hello stranger!" }
  }
}

main()

exports.main = main;