// 1. what is git 
// git ek version control system hai jo ham luk ka project ka changes ko track kartai and unka ek history maintain kartai


// 2. git  vs github 

// git is a version control, yeh apna computer par kaam kartai, khud ka project ko manage karne mai help kartai

// github -- github ek online platform hai jaha par ham luk apna git reposiories ko rakhsaktai, i can say apna code ko rakh saktai online 


// 3. Repository 
// woh  project ka folder jisko git track/maange karrai
// .git -- yaha mai ek .git naam ka hiden folder hotai jo git ka important information luk ko rakhtai



// 4. git init
// git init ka mltb hotai git, is folder ko track karo, track karna start karo
// yeh files ko upload nai kartai, bass git ko boltai git, now track this folder
// .git init  -- this is command terminal mai run karna hai



// 5. git status 
// git status ka help sai ham luk pata kar saktai ki project mai avi tak kya kya huai, kya changes huai, kya add huai, kya remove huai etc etc, basically project ka bare mai batatai
// git status -- this is the command, terminal mai run karna hai



// 6. git add
// git add ka mtlb hotai changes ko jo v change huai usko "staging ares" mai rakhna, taki next commit mai include kya ja sake
// git add -- yeh karne sai jo v files folder create keyai woh staging area mai jatai

// git add about.html --- ek specific file ko just add karna 

// git add .  -->  . ka meaning hai ki current folder mai jo v chnages huai woh sab ko staging area mai add karo



// 7. git commit 
// git commit ka simple meaning hai jo v files changes files hia staging area hai woh sab ka ek permanent checkpoint/history point create karna 

// git commit -m "first check point"   --> this is the syntax, jo v file hai woh sab ka ek checkpoint banao with -m message "first check point"




// 8. commit history 
// simple mtlb hai ki avi tak jo v project mai commit huai, jo v checkpoint banai woh sab ka history
// in commit history ham luk dheksakti
// 1. kya kya comit huai
// 2. kis order mai huai
// 3. commit messgae kya tha
// 4. har commit ka unique id 

// git log --> this command is used to look the commit ka history


// 9. main kya hai
// jab git ek new repo creat kartai, git ko commit ka ek main line rakhne ke lye ek branch meltai usko naam main hotai, mtlb main line(just ek naam/label hai) mai sab commit luk jatai 




// 10.  HEAD kya hai
// HEAD ka simple meaing hai ki avi ham kaha par hai
// commit 1 --> commit 2 --> commit 3
//                             main
//                             HEAD
// mtlb now HEAD currently commit 3 ko point karrai



// U - untracked
// A - added staging area mai ajana adn now next can move to commit