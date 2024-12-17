
export default async function GenerateHeader(headerContainer){
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
            <li><a href="${origin}/index.html">HOME</a></li>
            <li><a href="${origin}/pages/club.html">CLUB</a></li>
            <li><a href="${origin}/pages/events.html">EVENTS</a></li>
            <li><a href="${origin}/pages/projects.html">PROJECTS</a></li>
            <li><a href="${origin}/pages/rover.html"> ROVER</a></li>
          </ul>
        </div>
      </div>
      <div class="navbar-center hidden w-3/4 lg:flex">
        <ul class="menu menu-horizontal p-4 mx-8 text-xl w-full justify-around">
          <li class="specialHover btn btn-ghost p-2 text-xl font-semibold hover:underline underline-offset-4">
            <a href="${origin}/index.html" class="">HOME</a>
          </li>
          <li class="specialHover btn btn-ghost p-2 text-xl font-semibold hover:underline underline-offset-4">
            <a href="${origin}/pages/club.html" class="">CLUB</a>
          </li>
          <li class="specialHover btn btn-ghost p-2 text-xl font-semibold hover:underline underline-offset-4">
            <a href="${origin}/pages/events.html" class="">EVENTS</a>
          </li>
          <li class="specialHover btn btn-ghost p-2 text-xl font-semibold hover:underline underline-offset-4">
            <a href="${origin}/pages/projects.html" class="">PROJECTS</a>
          </li>
          <li class="specialHover btn btn-ghost p-2 text-xl font-semibold hover:underline underline-offset-4">
            <a href="${origin}/pages/rover.html" class="">ROVER</a>
          </li>
        </ul>
      </div>
      <div class="navbar-end"></div>
    </div>
      `
      headerContainer.innerHTML=headerHTML
      console.log(origin)
      return true
}




 
