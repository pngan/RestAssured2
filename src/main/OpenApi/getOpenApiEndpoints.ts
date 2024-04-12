const OpenAPIParser = require('@readme/openapi-parser');
const { default: QueryParameter } = require('./QueryParameter');
const { default: RestEndpoint } = require('./RestEndpoint');

export default async function getOpenApiEndpoints(strDocPath) {
  try {
    const api = await OpenAPIParser.parse(strDocPath);
    const refs = await OpenAPIParser.resolve(strDocPath);
    const arrEndpoints: RestEndpoint[] = [];
    Object.entries(api.paths).forEach(([endpoint, methods], pathIndex) => {
      Object.entries(methods).forEach(([method, data], methodIndex) => {

        const ep = new RestEndpoint(
          `${pathIndex}${methodIndex}${Math.floor(
            Math.random() * 10000000,
          ).toString()}`,
          method.toUpperCase(),
          endpoint,
          true
        );


        // Parser query parameters
        if (data.parameters !== undefined) {
          for (const parameter of data.parameters) {
            const p = new QueryParameter(parameter.name, parameter.schema.type, parameter.required);
            ep.query_parameters.push(p);
          }
        }
        arrEndpoints.push(ep);
      });
    });
    return {
      response: 'success',
      data: { arrEndpoints, refs },
    };
  } catch (err) {
    console.log(err);
    return { response: 'failed', data: 'Unable to parse OpenApi document' };
  }
}

