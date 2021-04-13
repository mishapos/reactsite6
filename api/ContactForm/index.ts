import { AzureFunction, Context, HttpRequest } from '@azure/functions';

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');
    const name = req.query.name || (req.body && req.body.name)

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: {
            text: "Function executed at: " + (new Date()).toString(),
        },
    };
};

export default httpTrigger;
