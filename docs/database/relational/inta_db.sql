
CREATE TABLE action_type
(
  id   INTEGER NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  PRIMARY KEY (id)
);

ALTER TABLE action_type
  ADD CONSTRAINT UQ_id UNIQUE (id);

CREATE TABLE attachment_type
(
  id   INTEGER NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  PRIMARY KEY (id)
);

ALTER TABLE attachment_type
  ADD CONSTRAINT UQ_id UNIQUE (id);

CREATE TABLE comment
(
  id                INTEGER   NOT NULL AUTO_INCREMENT,
  content           VARCHAR(1000)   NOT NULL,
  parent_commnet_id INTEGER   NULL    ,
  created_at        TIMESTAMP NOT NULL,
  updated_at        TIMESTAMP NULL    ,
  deleted_At        TIMESTAMP NULL    ,
  post_id           INTEGER   NOT NULL,
  user_id           INTEGER   NOT NULL,
  PRIMARY KEY (id)
);

ALTER TABLE comment
  ADD CONSTRAINT UQ_id UNIQUE (id);

CREATE TABLE comment_audit_log
(
  id             INTEGER   NOT NULL AUTO_INCREMENT,
  made_by        INTEGER   NOT NULL,
  old_data       JSON      NULL    ,
  new_data       JSON      NULL    ,
  created_at     TIMESTAMP NOT NULL,
  action_type_id INTEGER   NOT NULL,
  PRIMARY KEY (id)
);

ALTER TABLE comment_audit_log
  ADD CONSTRAINT UQ_id UNIQUE (id);

CREATE TABLE conversation
(
  id         INTEGER   NOT NULL AUTO_INCREMENT,
  is_group   BOOLEAN   NOT NULL,
  created_At TIMESTAMP NOT NULL,
  deleted_At TIMESTAMP NULL    ,
  PRIMARY KEY (id)
);

ALTER TABLE conversation
  ADD CONSTRAINT UQ_id UNIQUE (id);

CREATE TABLE gender
(
  id   INTEGER NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  PRIMARY KEY (id)
);

ALTER TABLE gender
  ADD CONSTRAINT UQ_id UNIQUE (id);

CREATE TABLE liked_post
(
  id         INTEGER   NOT NULL AUTO_INCREMENT,
  created_at TIMESTAMP NOT NULL,
  post_id    INTEGER   NOT NULL,
  user_id    INTEGER   NOT NULL,
  PRIMARY KEY (id)
);

ALTER TABLE liked_post
  ADD CONSTRAINT UQ_id UNIQUE (id);

CREATE TABLE location
(
  id         INTEGER   NOT NULL AUTO_INCREMENT,
  name       VARCHAR(100)   NULL    ,
  latitude   DECIMAL   NOT NULL,
  longitude  DECIMAL   NOT NULL,
  address    VARCHAR(255)   NULL    ,
  created_at TIMESTAMP NOT NULL,
  PRIMARY KEY (id)
);

ALTER TABLE location
  ADD CONSTRAINT UQ_id UNIQUE (id);

CREATE TABLE login_history
(
  id             INTEGER   NOT NULL AUTO_INCREMENT,
  made_by        INTEGER   NOT NULL,
  ip_address     VARCHAR(255)   NULL    ,
  device         VARCHAR(255)   NULL    ,
  created_at     TIMESTAMP NOT NULL,
  action_type_id INTEGER   NOT NULL,
  PRIMARY KEY (id)
);

ALTER TABLE login_history
  ADD CONSTRAINT UQ_id UNIQUE (id);

CREATE TABLE message
(
  id              INTEGER   NOT NULL AUTO_INCREMENT,
  content         VARCHAR(1000)   NOT NULL,
  read_at         TIMESTAMP NULL    ,
  created_at      TIMESTAMP NOT NULL,
  updated_at      TIMESTAMP NULL    ,
  deleted_at      TIMESTAMP NULL    ,
  conversation_id INTEGER   NOT NULL,
  PRIMARY KEY (id)
);

ALTER TABLE message
  ADD CONSTRAINT UQ_id UNIQUE (id);

CREATE TABLE message_attachment
(
  id                 INTEGER   NOT NULL AUTO_INCREMENT,
  attachment_url     VARCHAR(2083)   NOT NULL,
  created_at         TIMESTAMP NOT NULL,
  attachment_type_id INTEGER   NOT NULL,
  message_id         INTEGER   NOT NULL,
  PRIMARY KEY (id)
);

ALTER TABLE message_attachment
  ADD CONSTRAINT UQ_id UNIQUE (id);

CREATE TABLE notification
(
  id                   INTEGER   NOT NULL AUTO_INCREMENT,
  message              VARCHAR(1000)   NOT NULL,
  is_read              BOOLEAN   NOT NULL,
  type_id              VARCHAR(255)   NOT NULL COMMENT 'Is the id of the',
  created_at           TIMESTAMP NULL    ,
  notification_type_id INTEGER   NOT NULL,
  user_id              INTEGER   NOT NULL,
  PRIMARY KEY (id)
);

ALTER TABLE notification
  ADD CONSTRAINT UQ_id UNIQUE (id);

CREATE TABLE notification_type
(
  id          INTEGER NOT NULL AUTO_INCREMENT,
  name        VARCHAR(100) NOT NULL,
  description VARCHAR(500) NULL    ,
  PRIMARY KEY (id)
);

ALTER TABLE notification_type
  ADD CONSTRAINT UQ_id UNIQUE (id);

CREATE TABLE post
(
  id          INTEGER   NOT NULL AUTO_INCREMENT,
  caption     VARCHAR(500)   NULL    ,
  is_archived BOOLEAN   NOT NULL,
  created_at  TIMESTAMP NOT NULL,
  updated_at  TIMESTAMP NULL    ,
  deleted_at  TIMESTAMP NULL    ,
  user_id     INTEGER   NOT NULL,
  location_id INTEGER   NOT NULL,
  PRIMARY KEY (id)
);

ALTER TABLE post
  ADD CONSTRAINT UQ_id UNIQUE (id);

CREATE TABLE post_audit_log
(
  id             INTEGER   NOT NULL AUTO_INCREMENT,
  made_by        INTEGER   NOT NULL,
  old_data       JSON      NULL    ,
  new_data       JSON      NULL    ,
  created_at     TIMESTAMP NOT NULL,
  action_type_id INTEGER   NOT NULL,
  PRIMARY KEY (id)
);

ALTER TABLE post_audit_log
  ADD CONSTRAINT UQ_id UNIQUE (id);

CREATE TABLE post_media
(
  id         INTEGER   NOT NULL AUTO_INCREMENT,
  image_url  VARCHAR(2083)   NOT NULL,
  created_at TIMESTAMP NOT NULL,
  deleted_at TIMESTAMP NULL    ,
  post_id    INTEGER   NOT NULL,
  PRIMARY KEY (id)
);

ALTER TABLE post_media
  ADD CONSTRAINT UQ_id UNIQUE (id);

CREATE TABLE post_user_tag
(
  id         INTEGER   NOT NULL AUTO_INCREMENT,
  created_At TIMESTAMP NOT NULL,
  deleted_at TIMESTAMP NULL    ,
  post_id    INTEGER   NOT NULL,
  user_id    INTEGER   NOT NULL,
  PRIMARY KEY (id)
);

ALTER TABLE post_user_tag
  ADD CONSTRAINT UQ_id UNIQUE (id);

CREATE TABLE report_reason
(
  id          INTEGER NOT NULL AUTO_INCREMENT,
  reason      VARCHAR(500) NOT NULL,
  description VARCHAR(500) NULL    ,
  PRIMARY KEY (id)
);

ALTER TABLE report_reason
  ADD CONSTRAINT UQ_id UNIQUE (id);

CREATE TABLE reported_post
(
  id               INTEGER NOT NULL AUTO_INCREMENT,
  comment          VARCHAR(500) NOT NULL,
  created_at       TIMESTAMP        NULL    ,
  report_reason_id INTEGER NOT NULL,
  user_id          INTEGER NOT NULL,
  post_id          INTEGER NOT NULL,
  PRIMARY KEY (id)
);

ALTER TABLE reported_post
  ADD CONSTRAINT UQ_id UNIQUE (id);

CREATE TABLE role
(
  id          INTEGER NOT NULL AUTO_INCREMENT,
  name        VARCHAR(100) NOT NULL,
  description VARCHAR(500) NULL    ,
  PRIMARY KEY (id)
);

ALTER TABLE role
  ADD CONSTRAINT UQ_id UNIQUE (id);

CREATE TABLE saved_post
(
  id         INTEGER   NOT NULL AUTO_INCREMENT,
  created_at TIMESTAMP NOT NULL,
  user_id    INTEGER   NOT NULL,
  post_id    INTEGER   NOT NULL,
  PRIMARY KEY (id)
);

ALTER TABLE saved_post
  ADD CONSTRAINT UQ_id UNIQUE (id);

CREATE TABLE status
(
  id   INTEGER NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  PRIMARY KEY (id)
);

ALTER TABLE status
  ADD CONSTRAINT UQ_id UNIQUE (id);

CREATE TABLE user
(
  id                  INTEGER   NOT NULL,
  username            VARCHAR(50)   NOT NULL,
  fullname            VARCHAR(100)   NOT NULL,
  password_hash       VARCHAR(255)   NOT NULL,
  email               VARCHAR(150)   NOT NULL,
  bio                 VARCHAR(500)   NULL    ,
  profile_picture_url VARCHAR(2083)   NULL    ,
  webside_url         VARCHAR(2083)   NULL    ,
  is_privated         BOOLEAN   NOT NULL,
  created_at          TIMESTAMP NOT NULL,
  updated_at          TIMESTAMP NULL    ,
  deleted_at          TIMESTAMP NULL    ,
  status_id           INTEGER   NOT NULL,
  gender_id           INTEGER   NOT NULL,
  PRIMARY KEY (id)
);

ALTER TABLE user
  ADD CONSTRAINT UQ_id UNIQUE (id);

ALTER TABLE user
  ADD CONSTRAINT UQ_email UNIQUE (email);

CREATE TABLE user_audit_log
(
  id             INTEGER   NOT NULL AUTO_INCREMENT,
  made_by        INTEGER   NOT NULL,
  old_data       JSON      NULL    ,
  new_data       JSON      NULL    ,
  created_at     TIMESTAMP NOT NULL,
  action_type_id INTEGER   NOT NULL,
  PRIMARY KEY (id)
);

ALTER TABLE user_audit_log
  ADD CONSTRAINT UQ_id UNIQUE (id);

CREATE TABLE user_conversation
(
  id              INTEGER   NOT NULL AUTO_INCREMENT,
  created_at      TIMESTAMP NOT NULL,
  usser_id        INTEGER   NOT NULL,
  conversation_id INTEGER   NOT NULL,
  PRIMARY KEY (id)
);

ALTER TABLE user_conversation
  ADD CONSTRAINT UQ_is UNIQUE (id);

CREATE TABLE user_follow
(
  id          INTEGER   NOT NULL AUTO_INCREMENT,
  created_at  TIMESTAMP NOT NULL,
  follower_id INTEGER   NOT NULL,
  followed_id INTEGER   NOT NULL,
  PRIMARY KEY (id)
);

ALTER TABLE user_follow
  ADD CONSTRAINT UQ_id UNIQUE (id);

CREATE TABLE user_follow_audit_log
(
  id             INTEGER   NOT NULL AUTO_INCREMENT,
  made_by        INTEGER   NOT NULL,
  follower_id    INTEGER   NOT NULL,
  followed       INTEGER   NOT NULL,
  old_data       JSON      NULL    ,
  new_data       JSON      NULL    ,
  created_at     TIMESTAMP NOT NULL,
  action_type_id INTEGER   NOT NULL,
  PRIMARY KEY (id)
);

ALTER TABLE user_follow_audit_log
  ADD CONSTRAINT UQ_id UNIQUE (id);

CREATE TABLE user_role
(
  id         INTEGER   NOT NULL AUTO_INCREMENT,
  created_at TIMESTAMP NOT NULL,
  role_id    INTEGER   NOT NULL,
  user_id    INTEGER   NOT NULL,
  PRIMARY KEY (id)
);

ALTER TABLE user_role
  ADD CONSTRAINT UQ_id UNIQUE (id);

ALTER TABLE user_role
  ADD CONSTRAINT FK_role_TO_user_role
    FOREIGN KEY (role_id)
    REFERENCES role (id);

ALTER TABLE user_role
  ADD CONSTRAINT FK_user_TO_user_role
    FOREIGN KEY (user_id)
    REFERENCES user (id);

ALTER TABLE user
  ADD CONSTRAINT FK_status_TO_user
    FOREIGN KEY (status_id)
    REFERENCES status (id);

ALTER TABLE user
  ADD CONSTRAINT FK_gender_TO_user
    FOREIGN KEY (gender_id)
    REFERENCES gender (id);

ALTER TABLE notification
  ADD CONSTRAINT FK_notification_type_TO_notification
    FOREIGN KEY (notification_type_id)
    REFERENCES notification_type (id);

ALTER TABLE reported_post
  ADD CONSTRAINT FK_report_reason_TO_reported_post
    FOREIGN KEY (report_reason_id)
    REFERENCES report_reason (id);

ALTER TABLE notification
  ADD CONSTRAINT FK_user_TO_notification
    FOREIGN KEY (user_id)
    REFERENCES user (id);

ALTER TABLE reported_post
  ADD CONSTRAINT FK_user_TO_reported_post
    FOREIGN KEY (user_id)
    REFERENCES user (id);

ALTER TABLE reported_post
  ADD CONSTRAINT FK_post_TO_reported_post
    FOREIGN KEY (post_id)
    REFERENCES post (id);

ALTER TABLE saved_post
  ADD CONSTRAINT FK_user_TO_saved_post
    FOREIGN KEY (user_id)
    REFERENCES user (id);

ALTER TABLE saved_post
  ADD CONSTRAINT FK_post_TO_saved_post
    FOREIGN KEY (post_id)
    REFERENCES post (id);

ALTER TABLE post
  ADD CONSTRAINT FK_user_TO_post
    FOREIGN KEY (user_id)
    REFERENCES user (id);

ALTER TABLE post
  ADD CONSTRAINT FK_location_TO_post
    FOREIGN KEY (location_id)
    REFERENCES location (id);

ALTER TABLE post_media
  ADD CONSTRAINT FK_post_TO_post_media
    FOREIGN KEY (post_id)
    REFERENCES post (id);

ALTER TABLE comment
  ADD CONSTRAINT FK_post_TO_comment
    FOREIGN KEY (post_id)
    REFERENCES post (id);

ALTER TABLE comment
  ADD CONSTRAINT FK_user_TO_comment
    FOREIGN KEY (user_id)
    REFERENCES user (id);

ALTER TABLE post_user_tag
  ADD CONSTRAINT FK_post_TO_post_user_tag
    FOREIGN KEY (post_id)
    REFERENCES post (id);

ALTER TABLE post_user_tag
  ADD CONSTRAINT FK_user_TO_post_user_tag
    FOREIGN KEY (user_id)
    REFERENCES user (id);

ALTER TABLE user_follow
  ADD CONSTRAINT FK_user_TO_user_follow
    FOREIGN KEY (follower_id)
    REFERENCES user (id);

ALTER TABLE user_follow
  ADD CONSTRAINT FK_user_TO_user_follow1
    FOREIGN KEY (followed_id)
    REFERENCES user (id);

ALTER TABLE message_attachment
  ADD CONSTRAINT FK_attachment_type_TO_message_attachment
    FOREIGN KEY (attachment_type_id)
    REFERENCES attachment_type (id);

ALTER TABLE message
  ADD CONSTRAINT FK_conversation_TO_message
    FOREIGN KEY (conversation_id)
    REFERENCES conversation (id);

ALTER TABLE message_attachment
  ADD CONSTRAINT FK_message_TO_message_attachment
    FOREIGN KEY (message_id)
    REFERENCES message (id);

ALTER TABLE user_conversation
  ADD CONSTRAINT FK_user_TO_user_conversation
    FOREIGN KEY (usser_id)
    REFERENCES user (id);

ALTER TABLE user_conversation
  ADD CONSTRAINT FK_conversation_TO_user_conversation
    FOREIGN KEY (conversation_id)
    REFERENCES conversation (id);

ALTER TABLE liked_post
  ADD CONSTRAINT FK_post_TO_liked_post
    FOREIGN KEY (post_id)
    REFERENCES post (id);

ALTER TABLE liked_post
  ADD CONSTRAINT FK_user_TO_liked_post
    FOREIGN KEY (user_id)
    REFERENCES user (id);

ALTER TABLE post_audit_log
  ADD CONSTRAINT FK_action_type_TO_post_audit_log
    FOREIGN KEY (action_type_id)
    REFERENCES action_type (id);

ALTER TABLE user_audit_log
  ADD CONSTRAINT FK_action_type_TO_user_audit_log
    FOREIGN KEY (action_type_id)
    REFERENCES action_type (id);

ALTER TABLE comment_audit_log
  ADD CONSTRAINT FK_action_type_TO_comment_audit_log
    FOREIGN KEY (action_type_id)
    REFERENCES action_type (id);

ALTER TABLE login_history
  ADD CONSTRAINT FK_action_type_TO_login_history
    FOREIGN KEY (action_type_id)
    REFERENCES action_type (id);

ALTER TABLE user_follow_audit_log
  ADD CONSTRAINT FK_action_type_TO_user_follow_audit_log
    FOREIGN KEY (action_type_id)
    REFERENCES action_type (id);
