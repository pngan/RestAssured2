import { IConverter } from "./IConverter";

class RestClientConverter implements IConverter {
  name = 'Rest Client';

  isSelected = true;

  convert(data: any): [string, any] {
    const { arrEndpoints } = data;
    //   let refs = data.refs;
    let stringReturn = '';
    for (const ep of arrEndpoints) {
      stringReturn += `### ${ep.summary}\n`;
      stringReturn += `${ep.method} ${ep.path}\n`;
      stringReturn += `\n`;
      switch (ep.method) {
        case 'GET':
          break;
        case 'POST':
          // console.log(ep.requestBody.content[Object.keys(ep.requestBody.content)[0]]);
          // let content = ep.requestBody.content[Object.keys(ep.requestBody.content)[0]] ?? null;
          break;
        case 'PUT':
          break;
        case 'PATCH':
          break;
        case 'DELETE':
          break;
        default:
        // do nothing
      }

      // if (ep.requestBody && ep.requestBody.content) {
      //     try {
      //         // console.log(ep.requestBody.content);
      //         for (const [enctype, content] of Object.entries(ep.requestBody.content)) {
      //             stringReturn += 'Content-Type: ' + enctype;

      //             let schema = content['schema'] ?? null;
      //             let properties;
      //             if (schema.$ref) {
      //                 properties = refs.get(schema.$ref)?.properties ?? null;
      //             } else {
      //                 properties = schema['properties'] ?? null;
      //             }
      //             // console.log(properties);

      //             // TODO: if not one of the recognized content-types, do we skip. Can do different handling for multipart/form-data and application/json for example
      //             switch (enctype) {
      //                 case 'multipart/form-data':
      //                     // for (const [key, property] of Object.entries(properties)) {
      //                     //     console.log(key);
      //                     // }
      //                     break;
      //                 case 'application/json':
      //                     let body = {};
      //                     for (const [key, property] of Object.entries(properties)) {
      //                         body[key] = property['type'] ?? '';
      //                     }
      //                     stringReturn += '\n' + JSON.stringify(body, null, 4);
      //                     break;
      //                 default:
      //             }
      //         }
      //     } catch (err) {
      //         console.log(err);
      //         // console.log('Unable to parse content for ' + ep.method + ' ' + ep.path);
      //     }
      // }
    }
    stringReturn += '\n\n';
    return [stringReturn, {}];
  }
}

export default RestClientConverter;
