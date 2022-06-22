function printDetails(){
    console.log("Hello here are the details")
}

async function main(args) {
    const signature = args.__ow_headers['x-signature-ed25519'];
    const timestamp = args.__ow_headers['x-signature-timestamp'];
    printDetails()
    console.log(args);
    console.log(completed)

    return {
        statusCode: 200,
        message: "Success"
    }
}

exports.main = main;