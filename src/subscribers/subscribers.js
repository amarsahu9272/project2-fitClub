// import React, { useState, useEffect } from 'react';
// import { Redirect } from 'react-router-dom';

// const JoinButton = () => {
//     const [isLoggedIn, setIsLoggedIn] = useState(false);
//     const [subscription, setSubscription] = useState(null);
//     const [redirect, setRedirect] = useState(null);

//     useEffect(() => {
//         checkLoginStatus();
//     }, []);

//     const checkLoginStatus = async () => {
//         const response = await fetch('/api/check-login');
//         const json = await response.json();

//         if (json.isLoggedIn) {
//             setIsLoggedIn(true);
//             setSubscription(json.subscription);
//         }
//     }

//     const handleJoin = async () => {
//         if (!isLoggedIn) {
//             setRedirect('/login');
//         } else {
//             if (subscription === 'none') {
//                 setRedirect('/subscribe');
//             } else {
//                 setRedirect('/plan-detail');
//             }
//         }
//     }

//     if (redirect) {
//         return <Redirect to={redirect} />;
//     }

//     return (
//         <button onClick={handleJoin}>
//             Join
//         </button>
//     );
// }

// export default JoinButton;