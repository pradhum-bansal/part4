const dummy = (blogs) => {
    return 1
  }

  const totalLikes = (blogs) => {
    if (!Array.isArray(blogs) || !blogs.length) return 0
  
    if (blogs.length === 1) return blogs[0].likes
  
    return blogs.reduce((total, blog) => total + blog.likes, 0)
  }
  
  const favouriteBlog = (blogs)=>{
      let favouriteAuthor = {}
      let maxLikes = -1

      blogs.forEach(element => {
          if(element.likes > maxLikes){
              favouriteAuthor = {
                  title: element.title,
                  author: element.author,
                  likes: element.likes,
              }
              maxLikes = element.likes
          }
      })
      return favouriteAuthor
  }
  
  module.exports = {
    dummy, totalLikes,favouriteBlog
  }