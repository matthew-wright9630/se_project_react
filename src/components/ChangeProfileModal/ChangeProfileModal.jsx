import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useForm } from "../../hooks/useForm";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext } from "react";

function ChangeProfileModal({
  isOpen,
  onCloseModal,
  handleChangeProfile,
  isLoading,
}) {
  const user = useContext(CurrentUserContext);

  const { values, handleChange, setValues } = useForm({
    name: "",
    avatar: "",
  });

  const openModal = () => {
    setValues({ name: user.name, avatar: user.avatar });
  }

  const handleReset = () => {
    setValues({ name: "", avatar: "" });
  };

  return (
    <ModalWithForm
      title="Change profile data"
      buttonTitle="Save changes"
      handleCloseModal={onCloseModal}
      isOpen={isOpen}
      buttonText={isLoading ? "Saving..." : "Save changes"}
      handleSubmit={(evt) => {
        evt.preventDefault();
        handleChangeProfile(values, handleReset);
      }}
    >
      <label htmlFor="name" className="modal__label">
        Name *
        <input
          onChange={handleChange}
          type="name"
          className="modal__input"
          name="name"
          id="changeProfileName"
          placeholder="Name"
          value={values.name}
          required={true}
        />
      </label>
      <label htmlFor="changeProfileAvatar" className="modal__label">
        Avatar *
        <input
          onChange={handleChange}
          type="avatar"
          className="modal__input"
          id="changeProfileAvatar"
          name="avatar"
          placeholder="avatar"
          value={values.avatar}
          required={true}
        />
      </label>
    </ModalWithForm>
  );
}

export default ChangeProfileModal;