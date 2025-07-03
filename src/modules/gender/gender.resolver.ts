import { Resolver, Query } from '@nestjs/graphql';
import { GenderService } from './gender.service';

@Resolver()
export class GenderResolver {
  constructor(private readonly genderService: GenderService) {}

  @Query(() => String)
  hello() {
    return 'Hello from Gender!';
  }
}
