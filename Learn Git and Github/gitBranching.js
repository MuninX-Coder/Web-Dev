// 1. Branch kya hai
// branch ka simple mtlb hai ki, exisiting main branch mai ek new branch create karna taki uder kuch changes karu, jo main branch ko affect na kare.
// branch -- ek alag development line
// branch ka simple bolu tho ek exisitng file hai uska main code mai kuch changes karna hai but direct main file mai karna risk hai so ek seperate file ya branch create karleya copy and then waha mai changes keyai

// git branch <branch-name> -- yeh command use hotai
// git branch payment  -- now payment,  naaam ka ek new branch creat hua
// git branch -- just too see kkonsa branch mai hai avi ham


// 2. git switch 
// git branch ka help sai ham luk ek branch create kartai and 
// git switch ka help sai we move to that branch jo v ham luk create keyai

// git switch <branch name>

// git switch login --> now Head hogeya login par, main branch sai, mtlb we move to login branch now


// Commit 1 ── Commit 2 ── Commit 3
//                          ↑
//                         main
//                          ↑
//                         HEAD
// main = branch ka naam
// HEAD = tum abhi kahan ho
// git branch login = Commit 3 se login branch banana
// git switch login = login branch par jaana
// Previous commit par jaana = possible hai; uske liye commit ID/hash samjhenge



// 3. git merge 
// git merge ka kaam hotai ki ek branch ka changes ko doosra branch mai combile karna 
// ** jo branch mai chnanges lana hai phele woh branch mai move karna hoga 
// agar login ka changes main mai chiaye so first main mai move karo

// git switch main  -- move to main branch 
// git merge login  -- merge kardo login branch ko main branch mai



// 4. merge conflict basics
// yeh tab hotai sab same place mai different changes kartai then git comfused hojatai ki konsa changes ko accept karna hai

//  <<<<<<<< HEAD  -- yeh current brach main wala contain
//  MAIN branch ka change 
// ========
// login bracn ka change 
// >>>>>>> login  -- yeh login branch sa ane wala content

// now jisko rakhan hai usko rakho jisko hatana hai usko delete kardo