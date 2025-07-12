import { Module } from '@nestjs/common';
import { SharedModule } from '@shared/shared.module';
import { ConfigurationModule } from '../config/configuration.module';
import { GraphqlConfigService } from '../config/graphql-config.service';
import { GenderModule } from '@modules/gender/gender.module';
import { NotificationModule } from '@modules/notification/notification.module';
import { NotificationTypeModule } from '@modules/notification-type/notification-type.module';
import { PostModule } from '@modules/post/post.module';
import { CommentModule } from '@modules/comment/comment.module';
import { AttachmentTypeModule } from '@modules/attachment-type/attachment-type.module';
import { ActionTypeModule } from '@modules/action-type/action-type.module';
import { ReportedPostModule } from '@modules/reported-post/reported-post.module';
import { RoleModule } from '@modules/role/role.module';
import { ReportReasonModule } from '@modules/report-reason/report-reason.module';
import { StatusModule } from '@modules/status/status.module';
import { LocationModule } from '@modules/location/location.module';
import { ConversationModule } from '@modules/conversation/conversation.module';
import { SavedPostModule } from '@modules/saved-post/saved-post.module';
import { MessageModule } from '@modules/message/message.module';
import { LikedPostModule } from '@modules/liked-post/liked-post.module';
import { PostMediaModule } from '@modules/post-media/post-media.module';
import { UserModule } from '@modules/user/user.module';
import { PostAuditLogModule } from '@modules/post-audit-log/post-audit-log.module';
import { PostUserTagModule } from '@modules/post-user-tag/post-user-tag.module';
import { MessageAttachmentModule } from '@modules/message-attachment/message-attachment.module';
import { UserFollowModule } from '@modules/user-follow/user-follow.module';
import { UserRoleModule } from '@modules/user-role/user-role.module';
import { CommentAuditLogModule } from '@modules/comment-audit-log/comment-audit-log.module';
import { UserAuditLogModule } from '@modules/user-audit-log/user-audit-log.module';
import { UserFollowAuditLogModule } from '@modules/user-follow-audit-log/user-follow-audit-log.module';
import { UserConversationModule } from '@modules/user-conversation/user-conversation.module';
import { LoginHistoryModule } from '@modules/login-history/login-history.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

@Module({
  imports: [
    SharedModule, // 👈 Ahora contiene ConfigModule global
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      imports: [ConfigurationModule],
      useClass: GraphqlConfigService,
    }),
    GenderModule,
    NotificationModule,
    NotificationTypeModule,
    PostModule,
    CommentModule,
    AttachmentTypeModule,
    ActionTypeModule,
    ReportedPostModule,
    RoleModule,
    ReportReasonModule,
    StatusModule,
    LocationModule,
    ConversationModule,
    SavedPostModule,
    MessageModule,
    LikedPostModule,
    PostMediaModule,
    UserModule,
    PostAuditLogModule,
    PostUserTagModule,
    MessageAttachmentModule,
    UserFollowModule,
    UserRoleModule,
    CommentAuditLogModule,
    UserAuditLogModule,
    UserFollowAuditLogModule,
    UserConversationModule,
    LoginHistoryModule,
  ],
  providers: [],
})
export class AppModule {}
