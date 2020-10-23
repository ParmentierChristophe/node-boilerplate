import SwaggerJSDoc from 'swagger-jsdoc';

const options = {
  swaggerDefinition: {
    openapi: '3.0.3',
    info: {
      title: 'Documentation Swagger node-boilerplate',
      version: '1.0.0',
      description: 'A boilerplate for Node.js',
      license: {
        name: 'MIT',
        url: 'https://choosealicense.com/licenses/mit/',
      },
      contact: {
        name: 'Christophe Parmentier',
        email: 'cparmentier.dev@gmail.com',
      },
    },
    host: "localhost:8081",
    basePath: "/api",
    servers: [
      {
        url: 'http://localhost:8081/api/',
      },
    ],
  },
  basePath:'/',
  apis: ['./server/modules/*/router.js','./database/models/*.js'],
};

export default SwaggerJSDoc(options);
