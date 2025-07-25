const cards =document.getElementById("cards");
const createCards =(user) =>{
    // if(cards%2==0)
    // {
    //   print (red);
    // }
    // else{
    //     print(green);
    // }
    let card =document.createElement("div");
    cards.appendChild(card);
    card.classList ="user-card"
    let heading =document.createElement("h1");
     heading.innerText=" user profile card"
    card.appendChild(heading);


    const imageDiv =document.createElement("div");
    
    const image =document.createElement("img");
 image.src=user.profilePic;
 image.alt="user Profile picture";
 imageDiv.appendChild(image);
 card.appendChild(imageDiv);
 
 const h3=document.createElement("h3");
 h3.innerText=`Name: ${user.name}`;
 card.appendChild(h3)
 const role=document.createElement("span");
 role.innerText=`Role:${user.role}`;
 card.appendChild(role);
 
 const lko=document.createElement("span");
 lko.innerText=`location:${user.location}`;
 card.appendChild(lko);
 
 const skillsBtn=document.createElement("div");
 skillsBtn.classList="skills";
 user?.skills?.map((skill,index)=>{
    const btn= document.createElement("button");
    btn.innerText=skill;
    skillsBtn.appendChild(btn);

 card.appendChild(skillsBtn);
 }
);
    
}
const user={
    name:"khushi",
    role:"student",
    location:"lucknow",
    profilePic:"./ku.jpg",
    skills:["react","express"]
}
const user2={
    name:"khushi tiwari",
    role:"student",
    location:"lucknow",
    profilePic:"./kT.jpg",
    skills:["react","express"]
}


const user3={
    name:"khushi gupta",
    role:"student",
    location:"lucknow",
    profilePic:"./k.png",
    skills:["react","express"]
}
const user4={
    name:"k t",
    role:"student",
    location:"lucknow",
    profilePic:"./kT.jpg",
    skills:["react","express"]
}
const user5={
    name:"khushi",
    role:"student",
    location:"lucknow",
    profilePic:"./k.png",
    skills:["react","express"]
}



const users =[user,user2,user3,user4,user5]

users.forEach(user=> createCards(user));