import articleImage from "./test.jpg";

const ArticleItem = (props) => {
  console.log(props.match.params.articleId);
  const articlesFromStorage = JSON.parse(localStorage.getItem("articles"));
  const [articleData] = articlesFromStorage.items.filter(
    (article) => article.articleId === props.match.params.articleId
  );
  console.log(articleData);
  const { name: userName } = JSON.parse(localStorage.getItem("userLogin"));

  const articleTime = () => {
    const now = new Date(articleData.createdAt);
    const options = {
      day: "numeric",
      month: "long",
      year: "numeric",
    };

    const locale = navigator.language;
    return new Intl.DateTimeFormat(locale, options).format(now);
  };

  return (
    <article className="article-detail">
      <section className="article-detail__detail">
        <header className="article-detail__header">
          <h1>{articleData.title}</h1>
          <div className="article-detail__informations">
            <p className="article-detail__author">{userName}</p>
            <p className="article-detail__date">{articleTime()}</p>
          </div>
        </header>
        <img src={articleImage} alt="Article Image" />
        <div className="article-detail__text">PLACEHOLDER</div>
      </section>
      <section className="article-detail__sidebar"></section>
    </article>
  );
};

export default ArticleItem;
