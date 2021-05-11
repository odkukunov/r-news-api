"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const graphql_1 = require("@nestjs/graphql");
const news_module_1 = require("./news/news.module");
const config_json_1 = require("./config.json");
const httpModule = common_1.HttpModule.register({
    baseURL: 'https://newsapi.org/v2/',
    headers: {
        'X-Api-Key': config_json_1.API_KEY,
    },
});
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Global(),
    common_1.Module({
        imports: [
            graphql_1.GraphQLModule.forRoot({
                autoSchemaFile: 'schema.gql',
                sortSchema: true,
            }),
            httpModule,
            news_module_1.NewsModule,
        ],
        providers: [app_service_1.AppService],
        exports: [httpModule],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map