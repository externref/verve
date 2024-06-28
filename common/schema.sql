CREATE TABLE "verve_posts"(
    "id" BIGINT NOT NULL,
    "authorId" BIGINT NOT NULL,
    "authorName" VARCHAR(255) NOT NULL,
    "state" VARCHAR(255) NOT NULL,
    "district" VARCHAR(255) NOT NULL,
    "title" VARCHAR(1000) NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL,
    "upvotes" INTEGER NOT NULL,
    "resolved" BOOLEAN NOT NULL DEFAULT '0'
);
ALTER TABLE
    "verve_posts" ADD PRIMARY KEY("id");
CREATE TABLE "verve_users"(
    "id" BIGINT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "state" VARCHAR(255) NOT NULL,
    "yearOfBirth" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL,
    "lastPostAt" TIMESTAMP(0) WITHOUT TIME ZONE NULL,
    "lastPostId" BIGINT NULL,
    "password" VARCHAR(255) NOT NULL
);
ALTER TABLE
    "verve_users" ADD PRIMARY KEY("id");
ALTER TABLE
    "verve_users" ADD CONSTRAINT "verve_users_lastpostid_foreign" FOREIGN KEY("lastPostId") REFERENCES "verve_posts"("id");
ALTER TABLE
    "verve_posts" ADD CONSTRAINT "verve_posts_authorid_foreign" FOREIGN KEY("authorId") REFERENCES "verve_users"("id");