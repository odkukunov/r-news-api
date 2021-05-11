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
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewsResponse = void 0;
const graphql_1 = require("@nestjs/graphql");
const news_model_1 = require("./news.model");
let NewsResponse = class NewsResponse {
};
__decorate([
    graphql_1.Field((type) => String),
    __metadata("design:type", String)
], NewsResponse.prototype, "status", void 0);
__decorate([
    graphql_1.Field((type) => graphql_1.Int),
    __metadata("design:type", Number)
], NewsResponse.prototype, "totalResults", void 0);
__decorate([
    graphql_1.Field((type) => [news_model_1.News]),
    __metadata("design:type", Array)
], NewsResponse.prototype, "articles", void 0);
NewsResponse = __decorate([
    graphql_1.ObjectType()
], NewsResponse);
exports.NewsResponse = NewsResponse;
//# sourceMappingURL=newsResponse.model.js.map