import { IConverter } from "./IConverter";

class BrunoConverter implements IConverter {
  name = 'Bruno';

  isSelected = false;

  convert(data: any): [string, any] {
    const { arrEndpoints } = data;
    let stringReturn = '';
    const arrayReturn = [];
    const objReturn = {};
    let counter = 0;

    for (const ep of arrEndpoints) {
      let thisStringReturn = 'meta {\n';
      thisStringReturn += `  name: ${ep.summary}\n`;
      thisStringReturn += '  type: http\n';
      thisStringReturn += '}\n\n';
      switch (ep.method) {
        case 'GET':
          thisStringReturn += 'get {\n';
          thisStringReturn += `  url: ${ep.path}\n`;
          thisStringReturn += '  body: none\n';
          thisStringReturn += '  auth: none\n';
          thisStringReturn += '}\n\n';
          break;

        case 'POST':
          thisStringReturn += 'post {\n';
          thisStringReturn += `  url: ${ep.path}\n`;
          thisStringReturn += '}\n\n';
          break;

        case 'PUT':
          thisStringReturn += 'put {\n';
          thisStringReturn += `  url: ${ep.path}\n`;
          thisStringReturn += '}\n\n';
          break;

        case 'PATCH':
          thisStringReturn += 'patch {\n';
          thisStringReturn += `  url: ${ep.path}\n`;
          thisStringReturn += '}\n\n';
          break;

        case 'DELETE':
          thisStringReturn += 'delete {\n';
          thisStringReturn += `  url: ${ep.path}\n`;
          thisStringReturn += '}\n\n';
          break;
        default:
        // do nothing
      }

      // Output query parameters
      const required_params = ep.query_parameters.filter(
        (p) => p.required === true,
      );
      if (required_params.length > 0) {
        thisStringReturn += '\nquery {\n';
        for (const param of required_params) {
          thisStringReturn += `  ${param.name}: ${param.type}\n`;
        }
        thisStringReturn += '}\n\n';
      }

      // Output request body parameters
      if (ep.requestBody && ep.requestBody.content) {
        try {
          // console.log(ep.requestBody.content);
          for (const [enctype, content] of Object.entries(
            ep.requestBody.content,
          )) {
            stringReturn += `\nContent-Type: ${enctype}`;

            const schema = content.schema ?? null;
            let properties;
            if (
              schema.$ref &&
              typeof data.schemas === 'object' &&
              schema.$ref.replace('#/components/schemas/', '') in data.schemas
            ) {
              properties =
                data.schemas[schema.$ref.replace('#/components/schemas/', '')]
                  .properties ?? null;
            } else if (
              schema?.type === 'array' &&
              typeof data.schemas === 'object' &&
              typeof schema?.items === 'object' &&
              schema.items.$ref.replace('#/components/schemas/', '') in
                data.schemas
            ) {
              properties =
                [
                  data.schemas[
                    schema.items.$ref.replace('#/components/schemas/', '')
                  ].properties,
                ] ?? null;
            } else {
              // TODO: handle nested array / objects
              properties = schema.properties ?? null;
            }

            // TODO: if not one of the recognized content-types, do we skip. Can do different handling for multipart/form-data and application/json for example
            switch (enctype) {
              case 'multipart/form-data':
                // for (const [key, property] of Object.entries(properties)) {
                //     console.log(key);
                // }
                break;
              case 'application/json':
                let body;
                if (properties) {
                  body = [];
                  if (Array.isArray(properties)) {
                    body = [];
                    for (const [key, property] of Object.entries(
                      properties[0],
                    )) {
                      body.push(`      ${key}: '${property.type ?? ''}'`);
                    }
                    thisStringReturn += `body {\n  [\n    {\n${body.join(
                      ',\n',
                    )}\n    }\n  ]\n}`;
                  } else {
                    for (const [key, property] of Object.entries(properties)) {
                      body.push(`    ${key}: '${property.type ?? ''}'`);
                    }
                    thisStringReturn += `body {\n  {\n${body.join(
                      ',\n',
                    )}\n  }\n}`;
                  }
                }
                break;
              case 'application/xml':
              case 'application/x-www-form-urlencoded':
              default:
            }
          }
        } catch (err) {
          // console.log(err);
          // console.log('Unable to parse content for ' + ep.method + ' ' + ep.path);
        }
      }

      arrayReturn.push(thisStringReturn);
      objReturn[
        `${ep.summary
          .toLowerCase()
          .replace(/ /g, '_')
          .replace(/\W/g, '')}-${counter}`
      ] = thisStringReturn;
      counter++;
    }

    stringReturn = arrayReturn.join(
      '\n----------------------------------------\n\n',
    );
    return [stringReturn, objReturn];
  }
}

export default BrunoConverter;
