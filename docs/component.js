
export  async function GenerateHeader(headerContainer){
    const origin = window.location.origin;
    const  headerHTML=`
    <div class="navbar bg-transparent text-white p-4 top-0 z-10 ">
      <div class="navbar-start">
        <div class="dropdown">
          <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabindex="0"
            class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li><a href="./index.html">HOME</a></li>
            <li><a href="./club.html">CLUB</a></li>
            <li><a href="./activities.html">ACTIVITIES</a></li>
          </ul>
        </div>
      </div>
      <div class="navbar-center hidden w-3/4 lg:flex">
        <ul class="menu menu-horizontal p-4 mx-8 text-xl w-full justify-around">
          <li class="specialHover btn btn-ghost p-2 text-xl font-semibold hover:underline underline-offset-4">
            <a href="./index.html" class="">HOME</a>
          </li>
          <li class="specialHover btn btn-ghost p-2 text-xl font-semibold hover:underline underline-offset-4">
            <a href="./club.html" class="">CLUB</a>
          </li>
          <li class="specialHover btn btn-ghost p-2 text-xl font-semibold hover:underline underline-offset-4">
            <a href="./activities.html" class="">ACTIVITIES</a>
          </li>
        </ul>
      </div>
      <div class="navbar-end"></div>
    </div>
      `
      if (headerContainer){
       headerContainer.innerHTML=headerHTML
      }
      return true
}

export  async function GenerateFooter(footerContainer){
    const origin = window.location.origin;
    const  headerHTML=`
<div class="divider divider-primary w-[80%] m-auto py-8"></div>

<div class="footer bg-transparent text-white p-4 lg:p-10 flex flex-col md:flex-row justify-center md:justify-around gap-8 md:gap-[20vw] items-center z-10">
  <!-- Left Section -->
  <div class="flex flex-col items-center mb-6 md:mb-0">
    <a href=".">
      <img src="./images/vicharaka.png" class="w-40 h-28 md:w-80 md:h-52 bg-gray-300 rounded-3xl hover:scale-110 ease-in-out duration-200">
    </a>
  </div>

  <!-- Right Section -->
  <div class="flex flex-col justify-center items-center text-center md:text-left">
    <p class="text-xl mt-4">
      <span class="font-semibold">VICHARAKA</span> - The Robotics Club <br />
      Indian Institute of Science-Bangalore
    </p>
    <h3 class="text-xl font-semibold mt-4 mb-2">Contact us</h3>
    <div class="flex justify-center md:justify-start space-x-4 mb-4">
      <a href="#">
        <img src="./images/github.png" class="w-10 h-10 hover:scale-150 ease-in-out duration-300">
      </a>
      <a href="#">
        <img src="./images/linkedin.png" class="w-10 h-10 hover:scale-150 ease-in-out duration-300">
      </a>
      <a href="#">
        <img src="./images/instagram.png" class="w-10 h-10 hover:scale-150 ease-in-out duration-300">
      </a>

      <a href="#">
        <img src="./images/youtube.png" class="w-10 h-10 hover:scale-150 ease-in-out duration-300">
      </a>
    </div>
    <p class="text-lg">vicharaka@iisc.ac.in</p>
  </div>
</div>

      `  

      if (footerContainer){
        footerContainer.innerHTML=headerHTML

       }
      return true
}


export async function GenerateEvents(EventsContainer) {
  try {
    const response = await fetch("./data.json");
    if (!response.ok) throw new Error("Network response was not ok");

    const jsonData = await response.json();
    const eventsList = jsonData.events;

    function addEventToLocalStorage(eventName) {
      localStorage.setItem("selectedEventName", eventName);
    }

    eventsList.forEach((event, index) => {
      const eventHTML = document.createElement("div");

      const baseId = `event-${index}`;

      eventHTML.innerHTML = `
        <div class="mt-5 collapse collapse-plus border border-base-300 bg-base-200 rounded-lg shadow-md text-white">
          <input type="checkbox" />
          <div class="collapse-title text-2xl font-semibold text-white">${event.event_name}</div>
          <div class="collapse-content text-sm sm:text-base">
            <p class="mb-4 text-xl text-white">${event.event_detail}</p>
            
            <div  id="${baseId+"-carousel"}"   class="flex flex-col items-center">
            
              <div  class=">
              </div>

            </div>
          </div>
        </div>
      `;
      
      const button = eventHTML.querySelector(".learn-more-btn");
      if (button) {
        button.addEventListener("click", () => {
          addEventToLocalStorage(event.event_name);
          window.location.href = "./event.html";
        });
      }

      EventsContainer.appendChild(eventHTML);
      if (event.images_array && event.images_array.length > 0) {
        GenerateCoruoselImages(baseId, event.images_array);
      }
      

    });
  } catch (error) {
    console.error("Failed to load events:", error);
  }
}

export async function GenerateCoruoselImages(eventBaseId,imageLinkArray) {
  const corouselConatiner = document.getElementById(eventBaseId + "-carousel");
  const corousel = document.createElement("div")
  corousel.classList = "carousel w-full sm:w-11/12 lg:w-3/4 lg:h-[60vh] sm:h-[20vh] m-4 overflow rounded-md "
  corouselConatiner.appendChild(corousel)
  

  imageLinkArray.forEach((imageLink,index)=>{
    const corouselElement = document.createElement("div")
    corouselElement.classList = "carousel-item w-full p-4"
    corouselElement.id = eventBaseId + '-item' + index
    corouselElement.innerHTML=`
    <img src="${imageLink}"
                       alt="Event photo 4"
                       class="w-full h-full object-contain  rounded-md " />
    `
    corousel.appendChild(corouselElement)
  })

  const navWrapper = document.createElement("div");
  navWrapper.classList = "flex flex-wrap justify-center gap-2 py-2 ";

  imageLinkArray.forEach((_, index) => {
    const navButton = document.createElement("a");
    navButton.href = `#${eventBaseId}-item${index}`;
    navButton.classList = "btn btn-xs sm:btn-sm";
    navButton.innerText = `${index + 1}`;
    navWrapper.appendChild(navButton);
  });

  // Append navigation buttons *after* the carousel
  corouselConatiner.appendChild(navWrapper);
}

export async function GenerateActivities(activitiesContainer) {
  try {
    const response = await fetch("./data.json");
    if (!response.ok) throw new Error("Network response was not ok");

    const jsonData = await response.json();
    const activityList = jsonData.activities;

    // Optional: Store activity name in localStorage
    // function addActivityToLocalStorage(activityName) {
    //   localStorage.setItem("selectedActivityName", activityName);
    // }

    activityList.forEach((activity) => {
      const activityElement = document.createElement("div");
      activityElement.classList="card bg-base-200 w-80 "
      activityElement.innerHTML = `

          <figure class=" w-full object-cover">
            <img
              class= "h-72 w-full object-cover"
              src="${activity.activity_image || 'https://images.unsplash.com/photo-1614315517650-3771cf72d18a?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}"
              alt="${activity.activity_name || 'Activity Image'}" />
          </figure>
          <div class="card-body text-blue-50 p-4">
            <h2 class="card-title">${activity.activity_name || 'Untitled Activity'}</h2>
            <p>${activity.activity_detail || 'No description available.'}</p>
            <div class="card-actions justify-end">
              <a href="./${activity.activity_page_link}"> 
                <button class="btn btn-primary mt-5 text-gray-100">
                  Know more!
                </button>
              </a>
            </div>
          </div>
      `;

      activitiesContainer.appendChild(activityElement);
    });

  } catch (error) {
    console.error("Failed to load activities:", error);
  }
}







 


 