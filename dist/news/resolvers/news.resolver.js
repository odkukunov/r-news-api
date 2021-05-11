"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const news_model_1 = require("../models/news/news.model");
const news_service_1 = require("../news.service");
const newsResponse_model_1 = require("../models/news/newsResponse.model");
const topHeadlinesInput_model_1 = require("../models/news/topHeadlinesInput.model");
let NewsResolver = class NewsResolver {
    constructor(newsService) {
        this.newsService = newsService;
    }
    topHeadlines(options) {
        return this.newsService.getTopHeadlines(options);
    }
};
__decorate([
    graphql_1.Query((returns) => newsResponse_model_1.NewsResponse),
    __param(0, graphql_1.Args('options', { type: () => topHeadlinesInput_model_1.TopHeadlinesInput })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [topHeadlinesInput_model_1.TopHeadlinesInput]),
    __metadata("design:returntype", void 0)
], NewsResolver.prototype, "topHeadlines", null);
NewsResolver = __decorate([
    graphql_1.Resolver((of) => news_model_1.News),
    __metadata("design:paramtypes", [news_service_1.NewsService])
], NewsResolver);
exports.NewsResolver = NewsResolver;
//# sourceMappingURL=news.resolver.js.map