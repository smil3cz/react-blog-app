import "./styles.scss";

const AdminHome = () => {
  return (
    <section className="admin">
      <header className="admin__header">
        <h1>My articles</h1>
        <button type="button">Create new article</button>
      </header>
      <div className="admin__data">
        <table className="admin__table">
          <thead>
            <tr>
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

export default AdminHome;
