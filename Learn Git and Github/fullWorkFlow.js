// ----- full workflow ------

// step 1 -- github par ek repo create karo and also apna computer mai v ek folder create karo

// step 2 --- jo folder hai usko code editor mai kholo and   git init karo
// git init --- mtlb now git will track this folder its chagnes and history and all.

// step 3 -- git status karo, sika help sai pura project mai kya kya huai pata chalega basically history pata chlega project ka
// untrack -- simple meaning git ko pata hai yeh exist kartai but isko avi track nai karrai


// step 4 -- git add <file ka naam>  yeh kya kartai jo v folder untracked hai woh sab ko ek staging area mai dhaltai fir commit kar sakaga
// staging area --- commit sai phele ek waiting area 


// step 5 -- git commit -m "first commit"  ,  avi yeh ek checkpiont bana dega, jo v staging area mai hai uska ek permanent checkpoint create kardo
// -m -- mtlb messgae "first commit"


// step 6 -- jo github repo create kya tha na uska sath connection build karo, taki local repo ka changes direct apna github repo mai bej saku

// step 7 -- connect karo by uisng git remote add origin <repo url>
// git remote add origin https://github.repo.com   
// jo repo hoga usko avi origin naam mai refer kreaga
// git remote -- to verify   orign arai tho its working



// step 8 --- git push , apna jo v local repo mai changes hai usko github ka repo mai bhego
// git push -u origin main

// git push -- mera local commit repo mai send karo
// origin -- woh repo mai jiska naam origin sai link kya tha
// main -- main branch koo
// -u -- future kye lye jo local main ko github ka main ka sath connect karo/remeber rakho


// ------------------- clone ---------------- workflow 

// step 1 -- git clone ,  jo v repo hai uska ek clone create karo apna computer par
// git clone <repo url>

// git pull -- yeh kya kartai jo v repo github ka repo mai latest changes hai usko apna local repo mai ladetai
// git pull 