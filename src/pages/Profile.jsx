import React from "react";
import { useAuth } from "../context/AuthContext";
import pfp from  './../assests/pfp.png'
import edit from  './../assests/cameraIcon.svg'

function Profile() {

    
const {user} = useAuth()

  return (
//          <div className="min-h-screen flex justify-center">

// <div className="w-96 h-[85vh] bg-white shadow rounded-lg flex flex-col justify-start">
//   <div className='w-full h-30 shadow-lg flex flex-col items-start text-2xl '>
//     <h1>Account Settings</h1>
//   </div>
//   <div className='flex flex-row justify-start  bg-[#CBCBCB]'>
//     <div className="relative">
//       <img
//         src={pfp}
//         alt="avatar"
//         className="w-24 h-24 rounded-full border-4 border-white object-cover"
//       />
//       <div className="relative bottom-9 left-16 w-8 h-7  rounded-full object-cover p-1 cursor-pointer">
//         <img
//           className="  text-white object-fill"
//             src={edit}
//         />
//       </div>
//     </div>
//     <div className="mx-5">
//         <h2 className="text-2xl font-semibold">{user.formData.fullName}</h2>
//         <p className="text-gray-600">{user.formData.email}</p>
//     </div>
//   </div>
//   <div className="text-left font-semibold bg-[#CBCBCB]">
//     <p className="px-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio suscipit ipsa ut sed in sit eaque labore deleniti earum consequuntur saepe exercitationem voluptatibus ipsum tempore!</p>
//     <hr className="border-t border-dotted border-gray-400 mt-4" />
//   </div>
// </div>
// </div>
<div className="flex flex-col items-center justify-top min-h-screen px-6 text-center text-[#1D2226]">
    <div className="w-[375px] bg-[#F7F8F9]">

<div className="h-[70px] bg-white px-4 py-4 shadow-md  flex items-start">
  <h1 className="capitalize text-gray-600 text-2xl font-medium ">
    account settings
  </h1>
</div>
<div className="flex gap-4 px-[38px] py-4">
  <div className="relative">
    <img src={pfp} alt="" className="w-20" />
    <img
          className=" absolute text-white object-fill right-0 bottom-1"
            src={edit}
        />
  </div>
  <div>
    <p className="font-medium">
      <strong>{user.formData.fullName}</strong>
    </p>
    <p className="font-medium text-gray-600">{user.formData.email}</p>
  </div>
</div>
<p className="px-8 text-gray-600">
  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias expedita
  maiores corrupti molestias explicabo, eos, corporis sunt minima
  reprehenderit quaerat fugit at! Dolore fugit iste expedita, eos impedit
  modi consequuntur.
</p>
    </div>
</div>
  );
}

export default Profile;