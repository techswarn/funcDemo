function printDetails(){
    console.log("Hello here are the details")
}

async function main(args) {
    console.log(args.__ow_headers)
    printDetails(...args)
    console.log(args);
    console.log(completed)

    return {
        statusCode: 200,
        message: "Success"
    }
}

exports.main = main;