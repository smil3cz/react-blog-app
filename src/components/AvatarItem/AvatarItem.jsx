import DefaultAvatarImg from "./images/default_avatar.png";

const AvatarItem = ({ style }) => {
  return (
    <div className={style}>
      <img src={DefaultAvatarImg} alt="User Avatar" />
    </div>
  );
};

export default AvatarItem;
