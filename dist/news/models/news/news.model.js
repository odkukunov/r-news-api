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
exports.News = void 0;
const graphql_1 = require("@nestjs/graphql");
const source_model_1 = require("../source/source.model");
let News = class News {
};
__decorate([
    graphql_1.Field((type) => source_model_1.Source),
    __metadata("design:type", source_model_1.Source)
], News.prototype, "source", void 0);
__decorate([
    graphql_1.Field((type) => String, { nullable: true }),
    __metadata("design:type", String)
], News.prototype, "author", void 0);
__decorate([
    graphql_1.Field((type) => String),
    __metadata("design:type", String)
], News.prototype, "title", void 0);
__decorate([
    graphql_1.Field((type) => String, { nullable: true }),
    __metadata("design:type", String)
], News.prototype, "description", void 0);
__decorate([
    graphql_1.Field((type) => String, { nullable: true }),
    __metadata("design:type", String)
], News.prototype, "urlToImage", void 0);
__decorate([
    graphql_1.Field((type) => graphql_1.GraphQLISODateTime, { nullable: true }),
    __metadata("design:type", Date)
], News.prototype, "publishedAt", void 0);
__decorate([
    graphql_1.Field((type) => String),
    __metadata("design:type", String)
], News.prototype, "url", void 0);
News = __decorate([
    graphql_1.ObjectType()
], News);
exports.News = News;
//# sourceMappingURL=news.model.js.map