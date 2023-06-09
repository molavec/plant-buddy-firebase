import './index.css';
import ContentHeader from '../ContentHeader';

type Props = {
  deviceName?: string;
  deviceToken: string;
};

const SensorSettings = ({ deviceName, deviceToken}: Props) => {
  return (
    <>
      {/* Header */}
      <ContentHeader> Sensor Settings </ContentHeader>

      {/* deviceName */}
      <div className="py-2">
        <p>
          <label
            htmlFor="profile-name"
            className="
              ml-2
              text-sm font-semibold
              text-slate-700
            "
          >
            Device Name
          </label>
        </p>
        <p>
          <input
            id="device-name"
            name="deviceName"
            type="text"
            placeholder="Your device Name"
            className="
              p-2 w-full 
              bg-white text-slate-700
              border-2 border-gray-300 rounded-lg
            "
            value={deviceName}
          />
        </p>
      </div>

      {/* deviceToken */}
      <div className="py-2">
        <p>
          <label
            htmlFor="sensor-deviceToken"
            className="
              ml-2
              text-sm font-semibold
              text-slate-700
            "
          >
            Device Token
          </label>
        </p>
        <p>
          <input
            id="sensor-deviceToken"
            name="deviceToken"
            type="text"
            placeholder="Your device Token"
            className="
              p-2 w-full 
              bg-white text-slate-700
              border-2 border-gray-300 rounded-lg
            "
            value={deviceToken}
          />
        </p>
      </div>

      {/* Buttons */}
      <div className="flex p-2 place-content-end ">
        <div className=" w-max gap-4 rounded-md  text-white bg-gradient-to-r +
       from-red-400 via-red-500 to-red-600 + hover:bg-gradient-to-br focus:ring-4 +
       focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium 
       text-sm px-5 py-2.5 text-center mr-2 mb-2" > Cancel
        </div>
        <div className=" w-max gap-4 rounded-md text-white bg-gradient-to-r +
         from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br +
          focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 +
           font-medium text-sm px-5 py-2.5 text-center mr-2 mb-2" > Add Sensor
        </div>

      </div>


    </>
  );
};

export default SensorSettings;
