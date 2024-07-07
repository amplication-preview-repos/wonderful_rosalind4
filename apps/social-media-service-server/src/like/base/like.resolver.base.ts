/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Like } from "./Like";
import { LikeCountArgs } from "./LikeCountArgs";
import { LikeFindManyArgs } from "./LikeFindManyArgs";
import { LikeFindUniqueArgs } from "./LikeFindUniqueArgs";
import { CreateLikeArgs } from "./CreateLikeArgs";
import { UpdateLikeArgs } from "./UpdateLikeArgs";
import { DeleteLikeArgs } from "./DeleteLikeArgs";
import { Post } from "../../post/base/Post";
import { LikeService } from "../like.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Like)
export class LikeResolverBase {
  constructor(
    protected readonly service: LikeService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Like",
    action: "read",
    possession: "any",
  })
  async _likesMeta(
    @graphql.Args() args: LikeCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Like])
  @nestAccessControl.UseRoles({
    resource: "Like",
    action: "read",
    possession: "any",
  })
  async likes(@graphql.Args() args: LikeFindManyArgs): Promise<Like[]> {
    return this.service.likes(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Like, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Like",
    action: "read",
    possession: "own",
  })
  async like(@graphql.Args() args: LikeFindUniqueArgs): Promise<Like | null> {
    const result = await this.service.like(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Like)
  @nestAccessControl.UseRoles({
    resource: "Like",
    action: "create",
    possession: "any",
  })
  async createLike(@graphql.Args() args: CreateLikeArgs): Promise<Like> {
    return await this.service.createLike({
      ...args,
      data: {
        ...args.data,

        post: args.data.post
          ? {
              connect: args.data.post,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Like)
  @nestAccessControl.UseRoles({
    resource: "Like",
    action: "update",
    possession: "any",
  })
  async updateLike(@graphql.Args() args: UpdateLikeArgs): Promise<Like | null> {
    try {
      return await this.service.updateLike({
        ...args,
        data: {
          ...args.data,

          post: args.data.post
            ? {
                connect: args.data.post,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Like)
  @nestAccessControl.UseRoles({
    resource: "Like",
    action: "delete",
    possession: "any",
  })
  async deleteLike(@graphql.Args() args: DeleteLikeArgs): Promise<Like | null> {
    try {
      return await this.service.deleteLike(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Post, {
    nullable: true,
    name: "post",
  })
  @nestAccessControl.UseRoles({
    resource: "Post",
    action: "read",
    possession: "any",
  })
  async getPost(@graphql.Parent() parent: Like): Promise<Post | null> {
    const result = await this.service.getPost(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
