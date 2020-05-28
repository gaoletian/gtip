| 别名      | 命令                                                         | 说明                                                                                                                   |
| --------- | ------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------- |
| g         | git                                                          |                                                                                                                        |
| ga        | git add                                                      |                                                                                                                        |
| gaa       | git add --all                                                |                                                                                                                        |
| gapa      | git add --patch                                              |                                                                                                                        |
| gau       | git add --update                                             |                                                                                                                        |
| gav       | git add --verbose                                            |                                                                                                                        |
| gap       | git apply                                                    |                                                                                                                        |
| gb        | 分支, 列表 本地                                              | git branch                                                                                                             |
| gba       | 分支, 列表 本地和远程                                        | git branch -a                                                                                                          |
| gbd       | 分支, 删除                                                   | git branch -d                                                                                                          |
| gbda      | git branch --no-color --merged                               | command grep -vE ^(\+                                                                                                  | \*                 | \s*(master | develop | dev)\s*$)" | command xargs -n 1 git branch -d' |  |
| gbD       | 分支, 强制删除                                               | git branch -D                                                                                                          |
| gbl       | git blame -b -w                                              |                                                                                                                        |
| gbnm      | git branch --no-merged                                       |                                                                                                                        |
| gbr       | 分支, 远程分支列表                                           | git branch --remote                                                                                                    |
| gbs       | git bisect                                                   |                                                                                                                        |
| gbsb      | git bisect bad                                               |                                                                                                                        |
| gbsg      | git bisect good                                              |                                                                                                                        |
| gbsr      | git bisect reset                                             |                                                                                                                        |
| gbss      | git bisect start                                             |                                                                                                                        |
| gc        | 新提交                                                       | git commit -v                                                                                                          |
| gc!       | 追加提交, 暂存区, 编辑                                       | git commit -v --amend                                                                                                  |
| gcn!      | 追加提交, 暂存区, 不编辑                                     | git commit -v --no-edit --amend                                                                                        |
| gca       | 新提交, 工作区和暂存区                                       | git commit -v -a                                                                                                       |
| gca!      | 追加提交, 工作区和暂存区, 编辑                               | git commit -v -a --amend                                                                                               |
| gcan!     | 追加提交, 工作区和暂存区, 不编辑                             | git commit -v -a --no-edit --amend                                                                                     |
| gcans!    | 追加提交, 工作区和暂存区, 不编辑, 签名                       | git commit -v -a -s --no-edit --amend                                                                                  |
| gcam      | 新提交, 工作区和暂存区, 输入提交                             | git commit -a -m                                                                                                       |
| gcsm      | 新提交, 暂存区, 输入提交, 签名                               | git commit -s -m                                                                                                       |
| gcb       | 新建分支, 检出, 输入分支名称                                 | git checkout -b                                                                                                        |
| gcf       | 查看 git 本地配置                                            | git config --list                                                                                                      |
| gcl       | 克隆 递归 submodules                                         | git clone --recurse-submodules                                                                                         |
| gclean    | 清除 未追踪的文件                                            | git clean -id                                                                                                          |
| gpristine | 清除 hard reset                                              | git reset --hard && git clean -dffx                                                                                    |
| gcm       | 检出 master                                                  | git checkout master                                                                                                    |
| gcd       | 检出 develop                                                 | git checkout develop                                                                                                   |
| gcmsg     | 提交 <提交信息>                                              | git commit -m                                                                                                          |
| gco       | 检出 输入目标分支名称                                        | git checkout                                                                                                           |
| gcount    | 提交 统计                                                    | git shortlog -sn                                                                                                       |
| gcp       | 拣选 其它分支的 <commit id> ==> 当前分支                     | git cherry-pick                                                                                                        |
| gcpa      | 拣选 终止                                                    | git cherry-pick --abort                                                                                                |
| gcpc      | 拣选 继续                                                    | git cherry-pick --continue                                                                                             |
| gcs       | 拣选 继续                                                    | git commit -S                                                                                                          |
| gd        | 差异比较, 工作区 vs 上次提交                                 | git diff                                                                                                               |
| gdca      | 差异比较, 暂存区 vs 上次提交                                 | git diff --cached                                                                                                      |
| gdcw      | 差异比较, 暂存区 vs 上次提交  差异字符级                     | git diff --cached --word-diff                                                                                          |
| gdct      | 标签                                                         | git describe --tags $(git rev-list --tags --max-count=1)                                                               |
| gds       | git diff --staged                                            |                                                                                                                        |
| gdt       | git diff-tree --no-commit-id --name-only -r                  |                                                                                                                        |
| gdw       | git diff --word-diff                                         |                                                                                                                        |
| gf        | git fetch                                                    |                                                                                                                        |
| gfa       | git fetch --all --prune                                      |                                                                                                                        |
| gfo       | git fetch origin                                             |                                                                                                                        |
| gfg       | git ls-files                                                 | grep                                                                                                                   |                    |
| gg        | git gui citool                                               |                                                                                                                        |
| gga       | git gui citool --amend                                       |                                                                                                                        |
| ggpull    | git pull origin $(git_current_branch)"'                      |                                                                                                                        |
| ggpush    | 推送, 远程同名分支                                           | git push origin "$(git_current_branch)"                                                                                |
| ggsup     | git branch --set-upstream-to=origin/$(git_current_branch)    |                                                                                                                        |
| gpsup     | 推送, 上游, 远程, 当前分支                                   | git push --set-upstream origin $(git_current_branch)                                                                   |
| ghh       | git help                                                     |                                                                                                                        |
| gignore   | git update-index --assume-unchanged                          |                                                                                                                        |
| gignored  | git ls-files -v                                              | grep ^[[:lower:]]"'                                                                                                    |                    |
| gk        | \gitk --all --branches                                       |                                                                                                                        |
| gke       | \gitk --all $(git log -g --pretty=%h)                        |                                                                                                                        |
| gl        | 拉取                                                         | git pull                                                                                                               |
| glg       | 日志，多行, 文件状态                                         | git log --stat                                                                                                         |
| glgp      | 日志, 多行, 文件状态, 代码差异                               | git log --stat -p                                                                                                      |
| glgg      | 日志，多行, 图形                                             | git log --graph                                                                                                        |
| glgga     | 日志，多行, 图形, 所有分支                                   | git log --graph --decorate --all                                                                                       |
| glgm      | 日志，多行, 10条                                             | git log --graph --max-count=10                                                                                         |
| glo       | 日志，单行                                                   | git log --oneline --decorate                                                                                           |
| glol      | 日志，文件状态                                               | git log --graph --pretty='%Cred%h%Creset -%C(auto)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset'                 |
| glols     | 日志，文件状态                                               | git log --graph --pretty='%Cred%h%Creset -%C(auto)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --stat          |
| glod      | 日志，文件状态                                               | git log --graph --pretty='%Cred%h%Creset -%C(auto)%d%Creset %s %Cgreen(%ad) %C(bold blue)<%an>%Creset'                 |
| glods     | 日志，文件状态                                               | git log --graph --pretty='%Cred%h%Creset -%C(auto)%d%Creset %s %Cgreen(%ad) %C(bold blue)<%an>%Creset' --date=short    |
| glola     | 日志，文件状态                                               | git log --graph --pretty='%Cred%h%Creset -%C(auto)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --all           |
| glog      | 日志，文件状态                                               | git log --oneline --decorate --graph                                                                                   |
| gloga     | 日志，文件状态                                               | git log --oneline --decorate --graph --all                                                                             |
| glp       | 日志，文件状态                                               | _git_log_prettily                                                                                                      |
| gm        | 合并                                                         | git merge                                                                                                              |
| gmom      | 合并 远程master => 当前分支                                  | git merge origin/master                                                                                                |
| gmt       | 合并 外部工具 需要配置 git config --global merge.tool vscode | git mergetool --no-prompt                                                                                              |
| gmtvim    | 合并                                                         | git mergetool --no-prompt --tool=vimdiff                                                                               |
| gmum      | 合并, master => current                                      | git merge upstream/master                                                                                              |
| gma       | 合并, 终止                                                   | git merge --abort                                                                                                      |
| gp        | 推送                                                         | git push                                                                                                               |
| gpd       | 推送, 空运行,                                                | git push --dry-run                                                                                                     |
| gpf       | 推送, 安全推送,                                              | git push --force-with-lease                                                                                            |
| gpf!      | 推送, 强制推送, 危险                                         | git push --force                                                                                                       |
| gpoat     | 推送, 所有分支, 所有tag                                      | git push origin --all && git push origin --tags                                                                        |
| gpu       | 推送, ==> 上游分支                                           | git push upstream                                                                                                      |
| gpv       | 推送, 显示详情                                               | git push -v                                                                                                            |
| gr        | 远程                                                         | git remote                                                                                                             |
| gra       | 远程, 添加                                                   | git remote add                                                                                                         |
| grb       | 变基                                                         | git rebase                                                                                                             |
| grba      | 变基, 终止                                                   | git rebase --abort                                                                                                     |
| grbc      | 变基, 继续                                                   | git rebase --continue                                                                                                  |
| grbd      | 变基, develop                                                | > 当前提交                                                                                                             | git rebase develop |
| grbi      | git rebase -i                                                |                                                                                                                        |
| grbm      | 变基, master                                                 | > 当前提交                                                                                                             | git rebase master  |
| grbs      | 变基, skip                                                   | git rebase --skip                                                                                                      |
| grev      | git revert                                                   |                                                                                                                        |
| grh       | git reset                                                    |                                                                                                                        |
| grhh      | git reset --hard                                             |                                                                                                                        |
| groh      | git reset origin/$(git_current_branch) --hard                |                                                                                                                        |
| grm       | git rm                                                       |                                                                                                                        |
| grmc      | git rm --cached                                              |                                                                                                                        |
| grmv      | 远程, 重命名                                                 | git remote rename                                                                                                      |
| grrm      | 远程, 删除                                                   | git remote remove                                                                                                      |
| grs       | git restore                                                  |                                                                                                                        |
| grset     | 远程, 设置，地址                                             | git remote set-url                                                                                                     |
| grss      | git restore --source                                         |                                                                                                                        |
| grt       | cd $(git rev-parse --show-toplevel                           |                                                                                                                        | echo .)"'          |            |
| gru       | git reset --                                                 |                                                                                                                        |
| grup      | 远程, 更新                                                   | git remote update                                                                                                      |
| grv       | 远程, 详情                                                   | git remote -v                                                                                                          |
| gsb       | git status -sb                                               |                                                                                                                        |
| gsd       | git svn dcommit                                              |                                                                                                                        |
| gsh       | git show                                                     |                                                                                                                        |
| gsi       | git submodule init                                           |                                                                                                                        |
| gsps      | git show --pretty=short --show-signature                     |                                                                                                                        |
| gss       | git status -s                                                |                                                                                                                        |
| gst       | git status                                                   |                                                                                                                        |
| gsta      | git stash push\                                              |                                                                                                                        |
| gsta      | git stash save                                               |                                                                                                                        |
| gstaa     | git stash apply                                              |                                                                                                                        |
| gstc      | git stash clear                                              |                                                                                                                        |
| gstd      | git stash drop                                               |                                                                                                                        |
| gstl      | git stash list                                               |                                                                                                                        |
| gstp      | git stash pop                                                |                                                                                                                        |
| gsts      | git stash show --text                                        |                                                                                                                        |
| gstu      | git stash --include-untracked                                |                                                                                                                        |
| gstall    | git stash --all                                              |                                                                                                                        |
| gsu       | git submodule update                                         |                                                                                                                        |
| gsw       | Switch branches <branch>                                     | git switch                                                                                                             |
| gswc      | git switch -c                                                |                                                                                                                        |
| gts       | 标签 签名 注解                                               | git tag -s                                                                                                             |
| gtv       | git tag                                                      | sort -V                                                                                                                |                    |
| gtl       | gtl(){ git tag --sort=-v:refname -n -l ${1}*" }; noglob gtl' |                                                                                                                        |
| gunignore | git update-index --no-assume-unchanged                       |                                                                                                                        |
| gunwip    | git log -n 1                                                 | grep -q -c \-\-wip\-\-" && git reset HEAD~1'                                                                           |                    |
| gup       | 拉取, 变基                                                   | git pull --rebase                                                                                                      |
| gupv      | 拉取, 变基, 详情                                             | git pull --rebase -v                                                                                                   |
| gupa      | 拉取, 变基, 自动储藏                                         | git pull --rebase --autostash                                                                                          |
| gupav     | 拉取, 变基, 自动储藏, 详情                                   | git pull --rebase --autostash -v                                                                                       |
| glum      | 拉取, 上游, master                                           | git pull upstream master                                                                                               |
| gwch      | git whatchanged -p --abbrev-commit --pretty=medium           |                                                                                                                        |
| gwip      |                                                              | git add -A; git rm $(git ls-files --deleted) 2> /dev/null; git commit --no-verify --no-gpg-sign -m "--wip-- [skip ci]" |