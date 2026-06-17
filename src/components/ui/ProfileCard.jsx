import { motion } from 'framer-motion'

const MotionAside = motion.aside

const ProfileCard = ({ tags, availability }) => {
  return (
    <MotionAside
      className="profile-card brutal-card"
      whileHover={{ y: -8, scale: 1.015 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
    >
      <div className="myprofile">
        <span className="window-dots" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
        <span className="myprofile">myprofile.jpg</span>
      </div>

      <div className="profile-card__media">
        <img
          className="profile-card__image"
          src="/myprofile.jpg"
          alt="JohnPathish professional portrait"
        />
      </div>

      <div className="profile-card__content">
        <div className="profile-tag-stack">
          {tags.map((tag) => (
            <span key={tag} className="profile-tag">
              {tag}
            </span>
          ))}
        </div>
        <div className="availability-sticker">{availability}</div>
      </div>
    </MotionAside>
  )
}

export default ProfileCard
