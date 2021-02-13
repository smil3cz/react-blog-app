import { addNewArticle } from "..//../api/apiArticleHelper.js";

const AddArticleItem = () => {
  const data = {
    title: "First article",
    perex: "Some stuff from first article",
    content: `They must be delivered safely or other star systems will suffer the same fate as Alderaan. Your destiny lies along a different path than mine. The Force will be with you...always! Boy you said it, Chewie. Where did you dig up that old fossil? Ben is a great man. Yeah, great at getting us into trouble. I didn't hear you give any ideas... Well, anything would be better than just hanging around waiting for him to pick us up... Who do you think...`,
  };
  addNewArticle(data);
  return <div>Add article item</div>;
};

export default AddArticleItem;
