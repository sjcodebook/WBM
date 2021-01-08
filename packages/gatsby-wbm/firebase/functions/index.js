const cors = require('cors')({ origin: true });
const functions = require('firebase-functions');

exports.helloWorld = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    // your function body here - use the provided req and res from cors
    console.log(request.body);
    // functions.logger.info('Hello logs!', { structuredData: true });
    response.status(200).send({ message: 'msg' });
  });
});
