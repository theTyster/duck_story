#!/bin/sh

git filter-branch --env-filter '
OLD_EMAIL="ty@debian.attlocal.net"
CORRECT_NAME="T"
CORRECT_EMAIL="noreply@mylegendary.quest"
if [ "$GIT_COMMITTER_EMAIL" = "$OLD_EMAIL" ]
then
    export GIT_COMMITTER_NAME="$CORRECT_NAME"
    export GIT_COMMITTER_EMAIL="$CORRECT_EMAIL"
fi
if [ "$GIT_AUTHOR_EMAIL" = "$OLD_EMAIL" ]
then
    export GIT_AUTHOR_NAME="$CORRECT_NAME"
    export GIT_AUTHOR_EMAIL="$CORRECT_EMAIL"
fi
' -f --tag-name-filter cat -- --branches --tags

echo "When you are ready run: "
echo "git push --force origin HEAD:main"
