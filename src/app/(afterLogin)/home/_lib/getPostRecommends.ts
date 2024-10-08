export const getPostRecommends = async () => {
    const res = await fetch('http://localhost:9090/api/postRecommends', {
      next: {
        tags: ['posts','recommends'],
      }
    })
  
    if(!res.ok) {
      throw new Error('faild');
    }
    return res.json();
  }
  