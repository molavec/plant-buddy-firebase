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

    </>
  );
};

export default SensorSettings;
