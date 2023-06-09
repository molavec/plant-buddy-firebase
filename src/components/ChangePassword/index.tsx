import './index.css';
import ContentHeader from '../ContentHeader';

type Props = {
  currentpw?: string,
  newpw: string,
  renewpw?: string,

}

const ProfileForm = ({currentpw, newpw, renewpw}: Props) => {
  return (
    <>
      { /* Header */ }
      <ContentHeader> Change Password </ContentHeader>

      { /* Current Password */ }
      <div className="py-2">
        <p>
          <label 
            htmlFor="profile-currentpw" 
            className="
              ml-2
              text-sm font-semibold
              text-slate-700
            "
          >
              Current Password
          </label></p>
        <p>
          <input
            id="profile-currentpw"
            name="currentpw"
            type="text"
            placeholder="Your Password"
            className="
              p-2 w-full 
              bg-white text-slate-700
              border-2 border-gray-300 rounded-lg
            "
            value={currentpw}
          />
        </p>
      </div>

      { /* New Password */ }
      <div className="py-2">
        <p>
          <label 
            htmlFor="newpw" 
            className="
              ml-2
              text-sm font-semibold
              text-slate-700
            "
          >
              New Password
          </label></p>
        <p>
          <input
            id="newpw"
            name="newpw"
            type="text"
            placeholder="Your New Password"
            className="
              p-2 w-full 
              bg-white text-slate-700
              border-2 border-gray-300 rounded-lg
            "
            value={newpw}
          />
        </p>
      </div>

      { /* Retype New Password */ }
      <div className="py-2">
        <p>
          <label 
            htmlFor="retype-password" 
            className="
              ml-2
              text-sm font-semibold
              text-slate-700
            "
          >
              Retype New Password
          </label></p>
        <p>
          <input
            id="retype-password"
            name="name"
            type="text"
            placeholder="******"
            className="
              p-2 w-full 
              bg-white text-slate-700
              border-2 border-gray-300 rounded-lg
            "
            value={renewpw}
          />
        </p>
      </div>

      {/* Update */}

      <div className="flex p-2 place-content-end ">
        <div className=" w-max gap-4 rounded-md text-white bg-gradient-to-r +
         from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br +
          focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 +
           font-medium text-sm px-5 py-2.5 text-center mr-2 mb-2" > Update
        </div>

      </div>

      

    </>
  );
};

export default ProfileForm;
