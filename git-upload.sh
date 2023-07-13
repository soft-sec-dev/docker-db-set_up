# !/bin/bash 
#
#? basic script o upload changes to github
#
clear
echo Add name of the commit👌:
read COMMIT

git add .
git commit -m "$COMMIT"
git push
exit 0