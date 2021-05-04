import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class TopHeadlinesInput {
  @Field((type) => String, { nullable: true })
  country: string;

  @Field((type) => String, { nullable: true })
  category: string;

  @Field((type) => [String], { nullable: true })
  sources: string;

  @Field((type) => String, { nullable: true })
  q: string;

  @Field((type) => Int, { nullable: true })
  page: number;
}
