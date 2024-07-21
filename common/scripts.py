import asyncio
from asyncpg import *
from tabulate import tabulate
import datetime

key = ""


async def _list_users():
    conn = await connect(key)
    rows = await conn.fetch(
        'SELECT "id", "name", "email", "state", "yearOfBirth", "createdAt", "lastPostAt", "lastPostId" FROM "verve_users"'
    )
    # Convert rows to a list of dictionaries to make it compatible with tabulate
    rows_list = [dict(row) for row in rows]
    # Use tabulate to format the output, assuming the first row contains the column names
    print(tabulate(rows_list, headers="keys", tablefmt="grid"))
    await conn.close()
    await conn.close()


async def _insert_user(
    id: int,
    name: str,
    email: str,
    state: str,
    yearOfBirth,
    createdAt: int,
    lastPostAt: int,
    lastPostId: int,
    password: str,
):
    conn = await connect(key)
    res = await conn.execute(
        'INSERT INTO "verve_users" ("id", "name", "email", "state", "yearOfBirth", "createdAt", "lastPostAt", "lastPostId", "password") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)',
        id,
        name,
        email,
        state,
        yearOfBirth,
        createdAt,
        lastPostAt,
        lastPostId,
        password,
    )
    if res:
        print(True)
    await conn.close()


async def _insert_user_post(
    id: int,
    authorId: int,
    authorName: str,
    state: str,
    district: str,
    title: str,
    content: str,
    createdAt: datetime,
    upvotes: int,
):
    conn = await connect(key)
    res = await conn.execute(
        'INSERT INTO "verve_posts" ("id", "authorId", "authorName", "state", "district", "title", "content", "createdAt", "upvotes") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)',
        id,
        authorId,
        authorName,
        state,
        district,
        title,
        content,
        createdAt,
        upvotes,
    )
    if res:
        print(True)
        # _update_User_if_post(id , createdAt , authorId)
    await conn.close()


async def _insert_user_email(email: str, code: int):
    conn = await connect(key)
    res = await conn.execute(
        'INSERT INTO "signup_codes" VALUES ($1 , $2) ', email, code
    )
    if res:
        print(True)
    await conn.close()


async def _update_User_if_post(lastpostid, lastpostat, authorid):
    conn = await connect(key)
    res = await conn.execute(
        'UPDATE "verve_users" SET "lastPostId" = $1 AND "lastPostAt"= $2 WHERE id = $3 ',
        lastpostid,
        lastpostat,
        authorid,
    )
    if res:
        print(True)
    await conn.close()


def list_users():
    asyncio.run(_list_users())


list_users()

"""
async def execute_sql_file(file_path, connection):
    # Read the SQL file
    with open(file_path, 'r') as file:
        sql_commands = file.read()

    # Split the commands by semicolon to handle multiple statements
    commands = sql_commands.split(';')
    
    # Execute each command
    for command in commands:
        command = command.strip()
        if command:
            print("Executing command: ", command)
            await connection.execute(command)
            print("Command Executed Successfully")
"""
