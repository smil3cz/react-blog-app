import articleImage from "./test.jpg";
import "./styles.scss";

const ArticlesListItem = ({ articleData }) => {
  return (
    <article className="article">
      <section className="article__image">
        <img src={articleImage} alt="article image" />
      </section>
      <section className="article__content">
        <h4 className="article__headline">{articleData.title}</h4>
        <div className="article__details">
          <p className="article__author">{articleData.title}</p>
          <p className="article__dot">&diams;</p>
          <p className="article__date">{articleData.createdAt}</p>
        </div>
        <div className="article__perex">{articleData.perex}</div>
        <ul className="article__actions">
          <li className="article__actions-read">Read whole article</li>
          <li className="article__actions-comments">4 comments</li>
        </ul>
      </section>
    </article>
  );
};

export default ArticlesListItem;
