import design from './Blog.module.css';
import blogObjects from '../../utils/Data';

export const Blog = () => {
  return (
    <div className={design.container}>
      <main className={design.content}>
        <section className={design.title}>
          <p className={design['sub-title']}>Practice Advice</p>
          <h2 className={design['main-title']}>Featured Posts</h2>
        </section>
        <section className={design['featured-post']}>
          {blogObjects.map((blog) => (
            <div key={blog.id} className={design.card}>
                <img src={blog.imgURL} alt="Card" />
                <div className={design['card-details']}>
                    <ul className={design['card-list']}>
                        <li>{blog.li1}</li>
                        <li>{blog.li2}</li>
                        <li>{blog.li3}</li>
                    </ul>
                    <p className={design.description}>{blog.description}</p>
                    <p className={design.focus}>{blog.focus}</p>
                    <div className={design.reaction}>
                        <p className={design['reaction-item']}>
                        <img src={blog.imgURL2} alt="Clock" />
                        {blog.date}
                        </p>
                        <p className={design['reaction-item']}>
                        <img src={blog.imgURL3} alt="Gallery" />
                        {blog.comment}
                        </p>
                    </div>
                    <p className={design.learn}>
                        {blog.learn} <img src={blog.imgURL4} alt="Arrow" />
                    </p>   
                </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default Blog;
