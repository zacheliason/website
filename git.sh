message="commit from $USER@$(hostname -s) on $(date)"
GIT=`which git`
${GIT} add --all .
${GIT} commit -m "$message"

gitPush=$(${GIT} push -u origin main)

echo "$gitPush"
