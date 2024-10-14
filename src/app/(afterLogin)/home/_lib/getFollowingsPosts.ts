export const getFollowingsPosts = async () => {
    const res = await fetch('http://localhost:9090/api/followingPosts', {
      next: {
        tags: ['posts','followings'],
      },
      cache: 'no-store'
    })
  
    if(!res.ok) {
      throw new Error('faild');
    }
    return res.json();
  }
  