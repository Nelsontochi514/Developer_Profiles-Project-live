// global variables

const modalOverlay = document.getElementById('modalOverlay');
const confirmDeleteProfileButton = document.getElementById(
  'confirmDeleteProfileButton'
);
const cancelDeleteProfileButton = document.getElementById(
  'cancelDeleteProfileButton'
);
let taskId = '';

const url =
  'https://developer-profile-project-live-g3bn.onrender.com/api/v1/profiles/get-all-profiles';

const handleFetchData = async () => {
  // implementing data fetching with axios

  // const fetchedData = await axios.get(
  //   'https://developer-profile-project-live-g3bn.onrender.com/api/v1/profiles/get-all-profiles'
  // );

  // return fetchedData.data;

  // implementing data fetching with the fetch API

  const response = await fetch(url);
  const fetchedData = response.json();

  return fetchedData;
};

const handleGetProfiles = async function () {
  const cardsWrapper = document.getElementById('userCardsWrapper');
  const userCount = document.getElementById('userCount');
  const profilesData = await handleFetchData();
  // console.log(profilesData);

  if (profilesData.allProfiles.length < 1) {
    cardsWrapper.innerHTML = 'No Profiles created yet';
    userCount.innerHTML = profiles.length;
  }

  if (profilesData.allProfiles.length > 0) {
    const profiles = profilesData.allProfiles.map((each) => {
      const avatarAlphabet = each.fullName.slice(0, 1).toUpperCase();
      const { website, email, about, _id } = each;

      return `
      <div
            class="card bg-white rounded p-5 sm:w-[80%] sm:mx-auto md:mx-0 md:w-[45%] lg:w-[30%]"
          >
            <section class="image-wrapper flex justify-between items-center">
              <div
                class="poppins font-bold user_image bg-pink-200 w-[50px] h-[50px] rounded-full text-center text-[28px] p-[5px]"
              >
                ${avatarAlphabet}
              </div>
              <div class="flex gap-6 items-center">
                <a class="edit-profile-page-link" href="./pages/update-profile.html?id=${_id}">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                    <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
                    <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
                  </svg>
                </a>
                <button data-id="${_id}">
                  <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path class="delete-profile-icon" fill-rule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z" clip-rule="evenodd" />
                  </svg>
                </button>
              </div>
            </section>
            <section class="flex flex-col justify-between min-h-[200px]">
              <section>
                <div class="name font-bold text-[18px] mt-4 poppins">${each.fullName}</div>
                <div class="mt-3 text-[14px]">
                  ${about}
                </div>
              </section>
              <section class="flex flex-col gap-4 mt-4 text-gray-400 font-bold text-[12px]">
                <div class="flex gap-3 items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                  </svg>
                  <span>
                    ${email}
                  </span>
                </div>
                <div class="flex gap-3 items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                    <path d="M21.721 12.752a9.711 9.711 0 00-.945-5.003 12.754 12.754 0 01-4.339 2.708 18.991 18.991 0 01-.214 4.772 17.165 17.165 0 005.498-2.477zM14.634 15.55a17.324 17.324 0 00.332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 00.332 4.647 17.385 17.385 0 005.268 0zM9.772 17.119a18.963 18.963 0 004.456 0A17.182 17.182 0 0112 21.724a17.18 17.18 0 01-2.228-4.605zM7.777 15.23a18.87 18.87 0 01-.214-4.774 12.753 12.753 0 01-4.34-2.708 9.711 9.711 0 00-.944 5.004 17.165 17.165 0 005.498 2.477zM21.356 14.752a9.765 9.765 0 01-7.478 6.817 18.64 18.64 0 001.988-4.718 18.627 18.627 0 005.49-2.098zM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 001.988 4.718 9.765 9.765 0 01-7.478-6.816zM13.878 2.43a9.755 9.755 0 016.116 3.986 11.267 11.267 0 01-3.746 2.504 18.63 18.63 0 00-2.37-6.49zM12 2.276a17.152 17.152 0 012.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0112 2.276zM10.122 2.43a18.629 18.629 0 00-2.37 6.49 11.266 11.266 0 01-3.746-2.504 9.754 9.754 0 016.116-3.985z" />
                  </svg>
                  <span>
                    ${website}
                  </span>
                </div>
              </section>
            </section>
          </div>
        `;
    });

    cardsWrapper.innerHTML = profiles.join(' ');
    userCount.innerHTML = profilesData.allProfiles.length;
  }
};

handleGetProfiles();

async function handleShowOverlay() {
  const profilesData = await handleFetchData();

  if (profilesData && profilesData.allProfiles.length > 0) {
    const showOverlayButtons = document.querySelectorAll(
      '.delete-profile-icon'
    );

    showOverlayButtons.forEach((each) => {
      each.addEventListener('click', (e) => {
        modalOverlay.style.display = 'flex';
        taskId = e.target.parentElement.parentElement.dataset.id;
        // console.log(taskId);
      });
    });
  }
}

handleShowOverlay();

async function handleConfirmDeleteProfile() {
  const deletedProfile = await axios.delete(
    `https://developer-profile-project-live-g3bn.onrender.com/api/v1/profiles/delete-profile/${taskId}`
  );

  modalOverlay.style.display = 'none';
  console.log(deletedProfile);
  handleGetProfiles();
}

confirmDeleteProfileButton.addEventListener(
  'click',
  handleConfirmDeleteProfile
);

function handleCancelDeleteProfile() {
  modalOverlay.style.display = 'none';
}

cancelDeleteProfileButton.addEventListener('click', handleCancelDeleteProfile);
