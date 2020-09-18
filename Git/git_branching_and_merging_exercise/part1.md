### Git branching and merging exercise Part 1

1. What does git clean do?

It removes files in the working directory that has not been staged yet.

2. What do the -d and -f flags for git clean do?

-d removes both untracked files and directories while -f means to forcefully remove, for instance to remove untracked diretory in nested git repositories.

3. Git command to create a branch.

git checkout -b 

4. Difference between fast forward and recursive merge.

Fast forward merge happens when git can easily tell when the commits happened and arrange the commits chronologically while recursive merge occur when git cannot determine what order commits happened.

5. Git command to change to another branch.

git checkout

6. To remove modified or deleted files from the working directory

git checkout

7. Git coomand to delete a branch

git branch -D

8. Git diff

Shows diffrence between two different commits

9. To remove files from the staging area

git rm --cached file

10. How merge conflicts happen

When there are different commits with changes to the same file, git will not be able to determine what file or folder to choose when merging.
