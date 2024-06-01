import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Profile = ({ user, setUser }) => {
  const [form, setForm] = useState(user);
  const [preview, setPreview] = useState(null);
  const [editMode, setEditMode] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && (file.type === "image/jpeg" || file.type === "image/png")) {
      setForm({ ...form, photo: file });
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      toast.error("Please select a JPG or PNG file.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for updating profile logic
    console.log("Updating profile:", form);
    setUser(form);
    toast.success("Profile updated successfully");
    setEditMode(false); // Exit edit mode after updating profile
  };

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  return (
    <div
      className="flex rounded-2xl bg-[#232323] mx-auto md:w-[50%] overflow-hidden mt-4 px-3"
      style={{ minHeight: "calc(100vh - 2.25rem - 2.25rem - 2.25rem)" }}
    >
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 md:w-1/2 mx-auto my-4 justify-center"
      >
        <div className="w-24 h-24 border-2 border-white rounded-full mx-auto relative group">
          {preview && (
            <img
              src={preview}
              alt="Profile Preview"
              className="w-full h-full object-cover rounded-full"
            />
          )}
          <input
            type="file"
            name="photo"
            accept="image/jpeg, image/png"
            onChange={handleFileChange}
            className={`absolute bottom-0 h-full w-full opacity-0 cursor-pointer z-50 ${
              editMode ? "" : "pointer-events-none"
            }`}
          />
          <div
            className={`absolute bottom-0 -right-0 w-6 h-6 bg-[#19594D] rounded-full items-center justify-center hidden group-hover:flex ${
              editMode ? "" : "pointer-events-none"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={18}
              height={18}
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-camera"
            >
              <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
              <circle cx={12} cy={13} r={3} />
            </svg>
          </div>
        </div>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name"
          required
          className={`py-1 px-3 outline-none bg-[#323232] text-white ${
            editMode ? "" : "pointer-events-none"
          }`}
          disabled={!editMode}
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          required
          className={`py-1 px-3 outline-none bg-[#323232] text-white ${
            editMode ? "" : "pointer-events-none"
          }`}
          disabled={!editMode}
        />
        <input
          type="text"
          name="phone"
          value={form.phone}
          disabled
          placeholder="Phone"
          className="py-1 px-3 outline-none bg-[#323232] text-white opacity-40"
          title="Phone number can not be updated"
        />
        <textarea
          name="pastExperience"
          value={form.pastExperience}
          onChange={handleChange}
          placeholder="Designation"
          className={`py-1 px-3 outline-none bg-[#323232] text-white ${
            editMode ? "" : "pointer-events-none"
          }`}
          disabled={!editMode}
        ></textarea>
        <textarea
          name="skillSets"
          value={form.skillSets}
          onChange={handleChange}
          placeholder="Skills"
          className={`py-1 px-3 outline-none bg-[#323232] text-white ${
            editMode ? "" : "pointer-events-none"
          }`}
          disabled={!editMode}
        ></textarea>
        <textarea
          name="education"
          value={form.education}
          onChange={handleChange}
          placeholder="Highest Education"
          className={`py-1 px-3 outline-none bg-[#323232] text-white ${
            editMode ? "" : "pointer-events-none"
          }`}
          disabled={!editMode}
        ></textarea>
        <button
          type="button"
          onClick={toggleEditMode}
          className={`bg-[#19594D] py-1 px-3 text-white rounded-md ${
            editMode ? "hidden" : ""
          }`}
        >
          Edit Profile
        </button>
        <button
          type="submit"
          className={`bg-[#19594D] py-1 px-3 text-white rounded-md ${
            !editMode ? "hidden" : ""
          }`}
        >
          Update Profile
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Profile;
