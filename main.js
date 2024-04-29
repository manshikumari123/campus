// popover
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl);
});

// Gender Select
if (window.location.pathname === "/") {
  const radioBtn1 = document.querySelector("#flexRadioDefault1");
  const radioBtn2 = document.querySelector("#flexRadioDefault2");
  const radioBtn3 = document.querySelector("#flexRadioDefault3");
  const genderSelect = document.querySelector("#genderSelect");

  radioBtn1.addEventListener("change", () => {
    genderSelect.classList.add("d-none");
  });
  radioBtn2.addEventListener("change", () => {
    genderSelect.classList.add("d-none");
  });
  radioBtn3.addEventListener("change", () => {
    genderSelect.classList.remove("d-none");
  });
}
document.addEventListener('DOMContentLoaded', function() {
  const profileForm = document.getElementById('profileForm');
  const fullNameInput = document.getElementById('fullName');
  const emailInput = document.getElementById('email');
  const profileDetails = document.querySelector('.profile-details');
  
  profileForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get the values from the form
    const fullName = fullNameInput.value;
    const email = emailInput.value;
    
    // Update the profile details section
    profileDetails.innerHTML = `
      <h2>User Information</h2>
      <p><strong>Full Name:</strong> ${fullName}</p>
      <p><strong>Email:</strong> ${email}</p>
    `;
    
    // Clear the form fields
    fullNameInput.value = '';
    emailInput.value = '';
  });
});
