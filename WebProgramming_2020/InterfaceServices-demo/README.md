# AngularServices

This is an example for students to know about angular services.


An example past change

```
Microsoft Windows [Version 10.0.18363.592]
(c) 2019 Microsoft Corporation. All rights reserved.

C:\Users\ldvandervelden>git
usage: git [--version] [--help] [-C <path>] [-c <name>=<value>]
           [--exec-path[=<path>]] [--html-path] [--man-path] [--info-path]
           [-p | --paginate | -P | --no-pager] [--no-replace-objects] [--bare]
           [--git-dir=<path>] [--work-tree=<path>] [--namespace=<name>]
           <command> [<args>]

These are common Git commands used in various situations:

start a working area (see also: git help tutorial)
   clone             Clone a repository into a new directory
   init              Create an empty Git repository or reinitialize an existing one

work on the current change (see also: git help everyday)
   add               Add file contents to the index
   mv                Move or rename a file, a directory, or a symlink
   restore           Restore working tree files
   rm                Remove files from the working tree and from the index
   sparse-checkout   Initialize and modify the sparse-checkout

examine the history and state (see also: git help revisions)
   bisect            Use binary search to find the commit that introduced a bug
   diff              Show changes between commits, commit and working tree, etc
   grep              Print lines matching a pattern
   log               Show commit logs
   show              Show various types of objects
   status            Show the working tree status

grow, mark and tweak your common history
   branch            List, create, or delete branches
   commit            Record changes to the repository
   merge             Join two or more development histories together
   rebase            Reapply commits on top of another base tip
   reset             Reset current HEAD to the specified state
   switch            Switch branches
   tag               Create, list, delete or verify a tag object signed with GPG

collaborate (see also: git help workflows)
   fetch             Download objects and refs from another repository
   pull              Fetch from and integrate with another repository or a local branch
   push              Update remote refs along with associated objects

'git help -a' and 'git help -g' list available subcommands and some
concept guides. See 'git help <command>' or 'git help <concept>'
to read about a specific subcommand or concept.
See 'git help git' for an overview of the system.

C:\Users\ldvandervelden>git clone https://github.com/LachlanVelden-swin/InterfaceServices.git
Cloning into 'InterfaceServices'...
remote: Enumerating objects: 4, done.
remote: Counting objects: 100% (4/4), done.
remote: Compressing objects: 100% (3/3), done.
remote: Total 4 (delta 0), reused 0 (delta 0), pack-reused 0
Unpacking objects: 100% (4/4), 1.40 KiB | 35.00 KiB/s, done.

C:\Users\ldvandervelden>cd InterfaceServices

C:\Users\ldvandervelden\InterfaceServices>dir
 Volume in drive C is Windows
 Volume Serial Number is 30A7-22DA

 Directory of C:\Users\ldvandervelden\InterfaceServices

22/01/2020  11:48 AM    <DIR>          .
22/01/2020  11:48 AM    <DIR>          ..
22/01/2020  11:48 AM             1,714 .gitignore
22/01/2020  11:48 AM                19 README.md
               2 File(s)          1,733 bytes
               2 Dir(s)  423,460,888,576 bytes free

C:\Users\ldvandervelden\InterfaceServices>git status
On branch master
Your branch is up to date with 'origin/master'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   .gitignore
        modified:   README.md

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        .editorconfig
        Task1.txt
        angular.json
        browserslist
        e2e/
        karma.conf.js
        package-lock.json
        package.json
        src/
        tsconfig.app.json
        tsconfig.json
        tsconfig.spec.json
        tslint.json

no changes added to commit (use "git add" and/or "git commit -a")

C:\Users\ldvandervelden\InterfaceServices>git add *
warning: LF will be replaced by CRLF in .gitignore.
The file will have its original line endings in your working directory
...

C:\Users\ldvandervelden\InterfaceServices>git status
On branch master
Your branch is up to date with 'origin/master'.

Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        new file:   .editorconfig
        modified:   .gitignore
        modified:   README.md
        new file:   Task1.txt
        new file:   angular.json
        new file:   browserslist
        new file:   e2e/protractor.conf.js
        new file:   e2e/src/app.e2e-spec.ts
        new file:   e2e/src/app.po.ts
        new file:   e2e/tsconfig.json
        new file:   karma.conf.js
        new file:   package-lock.json
        new file:   package.json
        new file:   src/app/app.component.css
        new file:   src/app/app.component.html
        new file:   src/app/app.component.spec.ts
        new file:   src/app/app.component.ts
        new file:   src/app/app.module.ts
        new file:   src/app/logger.service.ts
        new file:   src/app/login-component/login-component.component.css
        new file:   src/app/login-component/login-component.component.html
        new file:   src/app/login-component/login-component.component.spec.ts
        new file:   src/app/login-component/login-component.component.ts
        new file:   src/app/signup-component/signup-component.component.css
        new file:   src/app/signup-component/signup-component.component.html
        new file:   src/app/signup-component/signup-component.component.spec.ts
        new file:   src/app/signup-component/signup-component.component.ts
        new file:   src/app/todo-list/todo-list.component.css
        new file:   src/app/todo-list/todo-list.component.html
        new file:   src/app/todo-list/todo-list.component.spec.ts
        new file:   src/app/todo-list/todo-list.component.ts
        new file:   src/app/todo.service.ts
        new file:   src/app/todo.ts
        new file:   src/assets/.gitkeep
        new file:   src/environments/environment.prod.ts
        new file:   src/environments/environment.ts
        new file:   src/favicon.ico
        new file:   src/index.html
        new file:   src/main.ts
        new file:   src/polyfills.ts
        new file:   src/styles.css
        new file:   src/test.ts
        new file:   tsconfig.app.json
        new file:   tsconfig.json
        new file:   tsconfig.spec.json
        new file:   tslint.json


C:\Users\ldvandervelden\InterfaceServices>git commit -m "Added angular service project"
[master aa73ff2] Added angular service project
 Committer: Lachlan Van der velden <ldvandervelden@swin.edu.au>
Your name and email address were configured automatically based
on your username and hostname. Please check that they are accurate.
You can suppress this message by setting them explicitly. Run the
following command and follow the instructions in your editor to edit
your configuration file:

    git config --global --edit

After doing this, you may fix the identity used for this commit with:

    git commit --amend --reset-author

 46 files changed, 13903 insertions(+), 105 deletions(-)
 create mode 100644 .editorconfig
 rewrite .gitignore (99%)
 rewrite README.md (100%)
 create mode 100644 Task1.txt
 create mode 100644 angular.json
 create mode 100644 browserslist
 create mode 100644 e2e/protractor.conf.js
 create mode 100644 e2e/src/app.e2e-spec.ts
 create mode 100644 e2e/src/app.po.ts
 create mode 100644 e2e/tsconfig.json
 create mode 100644 karma.conf.js
 create mode 100644 package-lock.json
 create mode 100644 package.json
 create mode 100644 src/app/app.component.css
 create mode 100644 src/app/app.component.html
 create mode 100644 src/app/app.component.spec.ts
 create mode 100644 src/app/app.component.ts
 create mode 100644 src/app/app.module.ts
 create mode 100644 src/app/logger.service.ts
 create mode 100644 src/app/login-component/login-component.component.css
 create mode 100644 src/app/login-component/login-component.component.html
 create mode 100644 src/app/login-component/login-component.component.spec.ts
 create mode 100644 src/app/login-component/login-component.component.ts
 create mode 100644 src/app/signup-component/signup-component.component.css
 create mode 100644 src/app/signup-component/signup-component.component.html
 create mode 100644 src/app/signup-component/signup-component.component.spec.ts
 create mode 100644 src/app/signup-component/signup-component.component.ts
 create mode 100644 src/app/todo-list/todo-list.component.css
 create mode 100644 src/app/todo-list/todo-list.component.html
 create mode 100644 src/app/todo-list/todo-list.component.spec.ts
 create mode 100644 src/app/todo-list/todo-list.component.ts
 create mode 100644 src/app/todo.service.ts
 create mode 100644 src/app/todo.ts
 create mode 100644 src/assets/.gitkeep
 create mode 100644 src/environments/environment.prod.ts
 create mode 100644 src/environments/environment.ts
 create mode 100644 src/favicon.ico
 create mode 100644 src/index.html
 create mode 100644 src/main.ts
 create mode 100644 src/polyfills.ts
 create mode 100644 src/styles.css
 create mode 100644 src/test.ts
 create mode 100644 tsconfig.app.json
 create mode 100644 tsconfig.json
 create mode 100644 tsconfig.spec.json
 create mode 100644 tslint.json

C:\Users\ldvandervelden\InterfaceServices>git status
On branch master
Your branch is ahead of 'origin/master' by 1 commit.
  (use "git push" to publish your local commits)

nothing to commit, working tree clean

C:\Users\ldvandervelden\InterfaceServices>git push
Enumerating objects: 56, done.
Counting objects: 100% (56/56), done.
Delta compression using up to 8 threads
Compressing objects: 100% (50/50), done.
Writing objects: 100% (53/53), 119.19 KiB | 4.41 MiB/s, done.
Total 53 (delta 3), reused 0 (delta 0)
remote: Resolving deltas: 100% (3/3), done.
To https://github.com/LachlanVelden-swin/InterfaceServices.git
   07ad512..aa73ff2  master -> master

C:\Users\ldvandervelden\InterfaceServices>git status
On branch master
Your branch is up to date with 'origin/master'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   README.md

no changes added to commit (use "git add" and/or "git commit -a")

C:\Users\ldvandervelden\InterfaceServices>git stage *
warning: LF will be replaced by CRLF in README.md.
The file will have its original line endings in your working directory

C:\Users\ldvandervelden\InterfaceServices>git status
On branch master
Your branch is up to date with 'origin/master'.

Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        modified:   README.md


C:\Users\ldvandervelden\InterfaceServices>git commit -m "updated readme.md"
[master 120f8dd] updated readme.md
 Committer: Lachlan Van der velden <ldvandervelden@swin.edu.au>
Your name and email address were configured automatically based
on your username and hostname. Please check that they are accurate.
You can suppress this message by setting them explicitly. Run the
following command and follow the instructions in your editor to edit
your configuration file:

    git config --global --edit

After doing this, you may fix the identity used for this commit with:

    git commit --amend --reset-author

 1 file changed, 3 insertions(+), 27 deletions(-)
 rewrite README.md (98%)

C:\Users\ldvandervelden\InterfaceServices>git push
Enumerating objects: 5, done.
Counting objects: 100% (5/5), done.
Delta compression using up to 8 threads
Compressing objects: 100% (3/3), done.
Writing objects: 100% (3/3), 344 bytes | 344.00 KiB/s, done.
Total 3 (delta 1), reused 0 (delta 0)
remote: Resolving deltas: 100% (1/1), completed with 1 local object.
To https://github.com/LachlanVelden-swin/InterfaceServices.git
   aa73ff2..120f8dd  master -> master

C:\Users\ldvandervelden\InterfaceServices>git pull
remote: Enumerating objects: 5, done.
remote: Counting objects: 100% (5/5), done.
remote: Compressing objects: 100% (3/3), done.
remote: Total 3 (delta 2), reused 0 (delta 0), pack-reused 0
Unpacking objects: 100% (3/3), 692 bytes | 20.00 KiB/s, done.
From https://github.com/LachlanVelden-swin/InterfaceServices
   120f8dd..243d763  master     -> origin/master
Updating 120f8dd..243d763
Fast-forward
 README.md | 5 ++++-
 1 file changed, 4 insertions(+), 1 deletion(-)

C:\Users\ldvandervelden\InterfaceServices>