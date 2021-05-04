import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Source {
  @Field((type) => ID, { nullable: true })
  id: string;

  @Field((type) => String)
  name: string;
}
