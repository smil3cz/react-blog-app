import DefaultAvatarImg from "./images/default_avatar.png";

// TODO check if the user avatar is possible to assign to each registration
const AvatarItem = ({ style }) => {
  return (
    <div className={style}>
      <img src={DefaultAvatarImg} alt="User Avatar" />
    </div>
  );
};

export default AvatarItem;
