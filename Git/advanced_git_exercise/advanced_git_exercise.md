### Advanced git exercise

1. Difference between git revert and git reset.

Git revert undo a commit while git reset removes commit from commit history and append a new commit with the resulting content.

2. What is the difference between git merge and git rebase?

Git merge adds a new commit and preserve the commit history while git rebase allows to rewrite the commit history and maintain a cleaner work tree.

3. What is the difference between git stash pop and git stash apply?

Git stash pop would return the saved changed from the stash list and remove it from the list while git stash apply will only return the changed but not remove fro the list.

4. What can be done in interactive mode when rebasing?

In interactive mode, we can amend commit, edit commit, squash commits, remove commits and execute shell commands.