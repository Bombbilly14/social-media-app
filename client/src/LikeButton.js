import React, { useState, useEffect } from 'react';


const LikeButton = () => {
  const [likes, setLikes] = useState(0);
  const [isClicked, setIsClicked] = useState(false);

//   useEffect(() => {
//     fetch("/posts")
//       .then((r) => r.json())
//       .then((data) => setPosts(data));
//   }, []);
 
//   const mappedLikes = posts?.map(post => {
//     return <LikeButton
//     key={post.id}
//     likes={post.likes}
//     />
//     })

  const handleClick = () => {
    if (isClicked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsClicked(!isClicked);
  };

  return (
    <button className={ `like-button ${isClicked && 'liked'} button-react button-create`  }  onClick={ handleClick }>
      <span className="likes-counter">{ `React | ${likes}` }</span>
    </button>
  );
};

export default LikeButton;