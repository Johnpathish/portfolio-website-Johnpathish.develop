const ProfileCard = ({ image, tags, availability }) => {
  return (
    <aside className="profile-card brutal-card">
      <div className="profile-card__header">
        <span className="window-dots" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
        <span className="profile-card__filename">profile_v2.jpg</span>
      </div>

      <div className="profile-card__media">
        <div className="profile-tag-stack">
          {tags.map((tag) => (
            <span key={tag} className="profile-tag">
              {tag}
            </span>
          ))}
        </div>
        <img className="profile-card__image" src={image} alt="Profile" />
      </div>

      <div className="availability-sticker">{availability}</div>
    </aside>
  )
}

export default ProfileCard
