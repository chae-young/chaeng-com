export const getPostRecommends = async ({pageParam}: {pageParam?: number}) => {
    const res = await fetch(`http://localhost:9090/api/postRecommends?cursor=${pageParam}`, {
      next: {
        tags: ['posts','recommends'],
      }
    })
  
    if(!res.ok) {
      throw new Error('faild');
    }
    return res.json();
  }
  