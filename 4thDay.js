/*
┌──(abhishek㉿linux)-[~/Desktop/test-git]
└─$ ls
                                                                                                                                                                        
┌──(abhishek㉿linux)-[~/Desktop/test-git]
└─$ echo "# Staish-test" >> README.md
                                                                                                                                                                        
┌──(abhishek㉿linux)-[~/Desktop/test-git]
└─$ ls
README.md
                                                                                                                                                                        
┌──(abhishek㉿linux)-[~/Desktop/test-git]
└─$ git init
hint: Using 'master' as the name for the initial branch. This default branch name
hint: is subject to change. To configure the initial branch name to use in all
hint: of your new repositories, which will suppress this warning, call:
hint: 
hint: 	git config --global init.defaultBranch <name>
hint: 
hint: Names commonly chosen instead of 'master' are 'main', 'trunk' and
hint: 'development'. The just-created branch can be renamed via this command:
hint: 
hint: 	git branch -m <name>
Initialized empty Git repository in /home/abhishek/Desktop/test-git/.git/
                                                                                                                                                                        
┌──(abhishek㉿linux)-[~/Desktop/test-git]
└─$ git add .
                                                                                                                                                                        
┌──(abhishek㉿linux)-[~/Desktop/test-git]
└─$ git commit -m "testing purpose"
[master (root-commit) 989f336] testing purpose
 1 file changed, 1 insertion(+)
 create mode 100644 README.md
                                                                                                                                                                        
┌──(abhishek㉿linux)-[~/Desktop/test-git]
└─$ git branch -M master
                                                                                                                                                                        
┌──(abhishek㉿linux)-[~/Desktop/test-git]
└─$ git push git@github.com:AbhishekChauhan9036/Staish-test.git
fatal: The current branch master has no upstream branch.
To push the current branch and set the remote as upstream, use

    git push --set-upstream git@github.com:AbhishekChauhan9036/Staish-test.git master

To have this happen automatically for branches without a tracking
upstream, see 'push.autoSetupRemote' in 'git help config'.

                                                                                                                                                                        
┌──(abhishek㉿linux)-[~/Desktop/test-git]
└─$ git push --set-upstream git@github.com:AbhishekChauhan9036/Staish-test.git master
Enumerating objects: 3, done.
Counting objects: 100% (3/3), done.
Writing objects: 100% (3/3), 236 bytes | 236.00 KiB/s, done.
Total 3 (delta 0), reused 0 (delta 0), pack-reused 0
To github.com:AbhishekChauhan9036/Staish-test.git
 * [new branch]      master -> master
branch 'master' set up to track 'git@github.com:AbhishekChauhan9036/Staish-test.git/master'.
                                                                                                                                                                        
┌──(abhishek㉿linux)-[~/Desktop/test-git]
└─$ touch helo.js                
                                                                                                                                                                        
┌──(abhishek㉿linux)-[~/Desktop/test-git]
└─$ ls                                                                               
helo.js  README.md
                                                                                                                                                                        
┌──(abhishek㉿linux)-[~/Desktop/test-git]
└─$ git stat                                                                         
git: 'stat' is not a git command. See 'git --help'.

The most similar commands are
	status
	stage
	stash
                                                                                                                                                                        
┌──(abhishek㉿linux)-[~/Desktop/test-git]
└─$ git status
On branch master
Untracked files:
  (use "git add <file>..." to include in what will be committed)
	helo.js

nothing added to commit but untracked files present (use "git add" to track)
                                                                                                                                                                        
┌──(abhishek㉿linux)-[~/Desktop/test-git]
└─$ git add . 
                                                                                                                                                                        
┌──(abhishek㉿linux)-[~/Desktop/test-git]
└─$ git status
On branch master
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
	new file:   helo.js

                                                                                                                                                                        
┌──(abhishek㉿linux)-[~/Desktop/test-git]
└─$ git add . 


*/


                            
