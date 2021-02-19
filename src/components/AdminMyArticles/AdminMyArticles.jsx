import FormButton from "../FormComponents/FormButton/FormButton";
import "./styles.scss";

const AdminMyArticles = () => {
  return (
    <section className="admin">
      <header className="admin__header">
        <h1>My articles</h1>
        <FormButton color="primary">Create new article</FormButton>
      </header>
      <div className="admin__data">
        <table className="admin__table">
          <thead>
            <tr className="admin__table-header">
              <th className="table__check-all">
                <input type="checkbox" />
              </th>
              <th className="table__article-title">Article title</th>
              <th className="table__perex">Perex</th>
              <th className="table__author">Author</th>
              <th className="table__comments-numer"># of comments</th>
              <th className="table__actions">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
              <td>6</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AdminMyArticles;
