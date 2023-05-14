import './index.css'
import ContentHeader from '../ContentHeader'

type Props = {
  nickname: string,
  email: string,
  name?: string,
  avatarImage?: string,
  headerImage?: string,
}

const ProfileForm = ({nickname, email, name, avatarImage, headerImage}: Props) => {
  return (
    <>
      <ContentHeader> Profile </ContentHeader>
      <div className="py-2">
        <label htmlFor="profile-nickname">Nickname</label>
        <input id="profile-nickname" name="nickname" type="text" value={nickname} />
      </div>
    </>
  )
}

export default ProfileForm
