import './index.css';
import ContentHeader from '../ContentHeader';

type Props = {
  name?: string;
  sciname: string;
  mainImage: string
};

const PlantSettings = ({ name, sciname, mainImage }: Props) => {
  return (
    <>
      {/* Header */}
      <ContentHeader> Plant Settings </ContentHeader>

      {/* name */}
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
            Name
          </label>
        </p>
        <p>
          <input
            id="profile-name"
            name="name"
            type="text"
            placeholder="Plant Name here"
            className="
              p-2 w-full 
              bg-white text-slate-700
              border-2 border-gray-300 rounded-lg
            "
            value={name}
          />
        </p>
      </div>

      {/* sciname */}
      <div className="py-2">
        <p>
          <label
            htmlFor="profile-sciname"
            className="
              ml-2
              text-sm font-semibold
              text-slate-700
            "
          >
            Scientific Name
          </label>
        </p>
        <p>
          <input
            id="profile-sciname"
            name="sciname"
            type="text"
            placeholder="Specimen Scienfic Name Here"
            className="
              p-2 w-full 
              bg-white text-slate-700
              border-2 border-gray-300 rounded-lg
            "
            value={sciname}
          />
        </p>
      </div>

      {/* main image */}
      <div className="py-2">
        <p>
          <label
            htmlFor="plant-main-image"
            className="
              ml-2 
              text-sm font-semibold 
              text-slate-700
              "
          >
            Main Image
          </label></p>
        <p>
          <input
            id="mainImage"
            name="mainImage"
            type="file"
            placeholder=">Main Image"
            className="
              p-2 w-full 
              bg-white text-slate-700
              border-2 border-gray-300 rounded-lg
            "
            value={mainImage}
          />
        </p>
      </div>

    </>
  );
};

export default PlantSettings;
