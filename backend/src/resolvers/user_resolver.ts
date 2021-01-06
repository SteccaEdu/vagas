// backend/src/resolvers/user_resolver.ts

import { Resolver, Query } from "type-graphql";


@Resolver()
export class UserResolver {

  @Query(() => String)
  hello() {
    return "world :)))))";
  }
}