import React from 'react'
import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom'
import ProfileCard from './ProfileCard'

const ProfilePage = () => {
  
    const {username} = useParams()

    const [user, setUser] = useState([]);

  useEffect(() => {
        fetch(`/users/${username}`)
        .then(res => res.json())
        .then(userData => setUser(userData));
    }, []);
  
    return (
        <div>
            <ProfileCard user={user} />
        </div>
    )
}

export default ProfilePage



// ***** TEST CODE *****

// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom'
// import React from 'react';
// import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography } from 'mdb-react-ui-kit';

// export default function ProfilePage() {


//         let { id } = useParams();
//     const [user, setUser] = useState([]);
  
//     useEffect(() => {
//         fetch(`/users/${id}`)
//         .then(res => res.json())
//         .then(userData => setUser(userData));
//     }, [id]);


//   return (
//     <div className="gradient-custom-2" style={{ backgroundColor: '#9de2ff' }}>
//       <MDBContainer className="py-5 h-100">
//         <MDBRow className="justify-content-center align-items-center h-100">
//           <MDBCol lg="9" xl="7">
//             <MDBCard>
//               <div className="rounded-top text-white d-flex flex-row" style={{ backgroundColor: '#000', height: '200px' }}>
//                 <div className="ms-4 mt-5 d-flex flex-column" style={{ width: '150px' }}>
//                   <MDBCardImage src={user.avatar}
//                     alt={user.name} className="mt-4 mb-2 img-thumbnail" fluid style={{ width: '150px', zIndex: '1' }} />
//                   <MDBBtn outline color="dark" style={{height: '36px', overflow: 'visible'}}>
//                     Edit profile
//                   </MDBBtn>
//                 </div>
//                 <div className="ms-3" style={{ marginTop: '130px' }}>
//                   <MDBTypography tag="h5">{user.name}</MDBTypography>
//                   <MDBCardText>New York</MDBCardText>
//                 </div>
//               </div>
//               <div className="p-4 text-black" style={{ backgroundColor: '#f8f9fa' }}>
//                 <div className="d-flex justify-content-end text-center py-1">
//                   <div>
//                     <MDBCardText className="mb-1 h5">253</MDBCardText>
//                     <MDBCardText className="small text-muted mb-0">Photos</MDBCardText>
//                   </div>
//                   <div className="px-3">
//                     <MDBCardText className="mb-1 h5">1026</MDBCardText>
//                     <MDBCardText className="small text-muted mb-0">Followers</MDBCardText>
//                   </div>
//                   <div>
//                     <MDBCardText className="mb-1 h5">478</MDBCardText>
//                     <MDBCardText className="small text-muted mb-0">Following</MDBCardText>
//                   </div>
//                 </div>
//               </div>
//               <MDBCardBody className="text-black p-4">
//                 <div className="mb-5">
//                   <p className="lead fw-normal mb-1">About</p>
//                   <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
//                     <MDBCardText className="font-italic mb-1">Web Developer</MDBCardText>
//                     <MDBCardText className="font-italic mb-1">Lives in New York</MDBCardText>
//                     <MDBCardText className="font-italic mb-0">Photographer</MDBCardText>
//                   </div>
//                 </div>
//                 <div className="d-flex justify-content-between align-items-center mb-4">
//                   <MDBCardText className="lead fw-normal mb-0">Recent photos</MDBCardText>
//                   <MDBCardText className="mb-0"><a href="#!" className="text-muted">Show all</a></MDBCardText>
//                 </div>
//                 <MDBRow>
//                   <MDBCol className="mb-2">
//                     <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp"
//                       alt="image 1" className="w-100 rounded-3" />
//                   </MDBCol>
//                   <MDBCol className="mb-2">
//                     <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(107).webp"
//                       alt="image 1" className="w-100 rounded-3" />
//                   </MDBCol>
//                 </MDBRow>
//                 <MDBRow className="g-2">
//                   <MDBCol className="mb-2">
//                     <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(108).webp"
//                       alt="image 1" className="w-100 rounded-3" />
//                   </MDBCol>
//                   <MDBCol className="mb-2">
//                     <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(114).webp"
//                       alt="image 1" className="w-100 rounded-3" />
//                   </MDBCol>
//                 </MDBRow>
//               </MDBCardBody>
//             </MDBCard>
//           </MDBCol>
//         </MDBRow>
//       </MDBContainer>
//     </div>
//   );
// }