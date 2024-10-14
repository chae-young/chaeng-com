export const getTrends = async () => {
    const res = await fetch('http://localhost:9090/api/trends', {
      next: {
        tags: ['posts','trends'],
      },
      cache: 'no-store'
    })
  
    if(!res.ok) {
      throw new Error('faild');
    }
    return res.json();
  }
  