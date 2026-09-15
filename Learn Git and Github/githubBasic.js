// 1. github kya hai 

// git -- ek tool hai jo hamluk ka computer ka jo project hai woh sab ka history ko track kartai 

// github -- git hub ek online platform/service hai jaha mai ham luk apna git project ko online rakh saktai taki, dursra log dhek sake, ek jagah project save rahe and all.

// repository -- ek project ke jagah, project ka file jaha par project ka code hoga 

// repository in computer -- local repostitory  (sirip user dhek saktai)
// github par hai -- remote repostitory (other can see if allowed)


// github website mai jake we should create a online git repositroy, also we can say remote repository


// -----------------------------------

// git remote 

// git remote -- ka mtlb hai ki git ko puchna mera yeh local repo kis remote repository sai connected hai
// kuch v nai aya that mean local repo is not connected to any github repo


// ---------------------------

// git remote add <name> <github-repo-url> 

// yeh git ko boltai avi yeh online repo sa sath connection estalished karo, so that in future jo v code push karega yeh repo mai direct push hoga

// git remote add orgin https://github.com/username/git-github-pracitse.git 

// origin --- yeh bass remote ka name hai, mtlb jo github repo ka url hai uksa short name dedeya origin bolke, so that future mai git push origin main karsaku
// main branch ko origin naam wala remote github par push karo

// git branch --set-upstream-to=origin/main main
// mtlb hotai local main trackes origin/main , github main

// -------------------------------------

// git push
// apna jo v commit keyai woh sab ko github ka repo mai send karna 

// git push -- local repo ka commit ko remote repo mai vegna 

// git push origin main 

// git push --- bhejo,  origin ---> kis remote ko ? github ,  main ---> kaunsa branch ? main



// ----------------------

// git pull

// git pull -- ka use hotai github sai apan computer par lana files woh v latest changes wala


// -------------------

// git clone <repo-url>

// git clone ka use hotai online sai repo ko copy karke apna computer par lana 

// git init karna ka koi jarurt nai sab sizz git khud setup karke dega, just git clone karne sai alag ka repo khud ka computer par copy hojaiga 



// -------------------

// .gitignore 

// using .gitgnore folder ham git ko yeh boltai ki yeh sab files folder ko track maat karo and github par push mat karo

// iska andar jo v files add hoga woh ignore hoga, git usko track and ignore nai krega



// ------------------

// README.md
// .md  ka mtlb hotai markdown, ek file hai, jaha mai project ka introduction, hotai

