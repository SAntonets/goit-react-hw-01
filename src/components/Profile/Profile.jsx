import clsx from "clsx";
import css from "./profile.module.css";

const Profile = (props) => {

     const { name, tag, location, image, stats} = props;
  const { followers, views, likes } = stats;

  return (
   <div className={css.profileWraper}>
<div>
<img
src={image}
alt="User avatar"
/>
              <p>{name}</p>
              <p>@{tag}</p>
              <p>{location}</p>
</div>

<ul>
<li>
<span>Followers</span>
<span>{followers}</span>
</li>
<li>
<span>Views</span>
                  <span>{views}</span>
</li>
<li>
<span>Likes</span>
<span>{likes}</span>
</li>
</ul>
</div>

  );
};

export default Profile;

