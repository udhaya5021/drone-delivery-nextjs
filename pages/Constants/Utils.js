export const removeToast = () => {
    document
      .querySelectorAll(".toast-error-drone")
      .forEach((el) => el.remove());
  };
  export const toastShow = (msg, id, index) => {
    console.log(msg, id, index, "udhay");
    if (index) {
      const errSection = document.createElement("div");
      errSection.classList.add("toast-error-drone");
      errSection.innerHTML = msg;
      const inputFields = document.getElementsByName(id);
      if (inputFields && inputFields.length > index) {
        inputFields[index].insertAdjacentElement("afterend", errSection);
        inputFields[index].focus();
      }
    } else {
      // alert("")
      const errSection = document.createElement("div");
      errSection.classList.add("toast-error-drone");
      errSection.innerHTML = msg;
      document
        .getElementsByName(id)[0]
        .insertAdjacentElement("afterend", errSection);
      document.getElementsByName(id)[0].focus();
    }
  };