const createUserCard=(user)=>{
  console.log(user)
     let name= document.getElementById("name");
    let role= document.getElementById("role");
    let lk= document.getElementById("location");
    let skills= document.getElementById("skills");
    let profilePic= document.getElementById("profilePic");
          console.log(profilePic);
         name.innerText=`Name: ${user.name}`
         role.innerText=`Role: ${user.role}`
         console.log(user.location);
         lk.innerText=`Location :${user.location}`
         profilePic.src=user.profilePic;
         profilePic.alt="user profile image";
         user.skills.map((skill,index) => {
          const btn=document.createElement("button");
          btn.key=index;
          btn.innerText=skill
          skills.appendChild(btn);
         }
        );
  
      }

const user={
  name:"khushi",
  role:"mern developer",
  location:"lucknow",
  profilePic:"./k.png",
  skills:["php","Laravel","bootstrap"],
  tech:{
    fronted:"html",
    backend:"php",
  }
}
createUserCard(user);
// createUserCard(user2);