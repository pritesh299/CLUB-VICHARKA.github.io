
export default async function GenerateFooter(footerContainer){
    const origin = window.location.origin;
    const  headerHTML=`
 <div class="footer bg-transparent text-white p-10 flex  justify-center gap-[20vw] items-center z-10">
        <!-- Left Section -->
        <div class="flex flex-col items-center mb-6 md:mb-0">
          <a href="${origin}"><img src="${origin}/images/vicharaka.png" class="w-80 h-52 bg-gray-300 rounded-3xl hover:scale-110 ease-in-out duration-500 "></img></a>
         
        </div>
    
        <!-- Right Section -->
        <div class="flex flex-col justify-center items-center">
          <p class="text-center text-xl mt-4">
            <span class="font-semibold">VICHARAKA</span> - The Robotics Club <br />
            Indian Institute of Science-Bangalore
          </p>
          <h3 class="text-xl font-semibold mb-2">Contact us</h3>
          <div class="flex justify-center md:justify-start space-x-4 mb-4">
            <img src="${origin}/images/github.png" class="w-10 h-10  hover:scale-150 ease-in-out duration-300"><a href="" ></a></img>
            <img src="${origin}/images/linkedin.png" class="w-10 h-10  hover:scale-150 ease-in-out duration-300 "><a href="" ></a></img>
            <img src="${origin}/images/instagram.png" class="w-10 h-10  hover:scale-150 ease-in-out duration-300 "><a href="" ></a></img>
            <img src="${origin}/images/facebook.png" class="w-10 h-10  hover:scale-150 ease-in-out duration-300 "><a href="" ></a></img>
            <img src="${origin}/images/youtube.png" class="w-10 h-10  hover:scale-150 ease-in-out duration-300 "><a href="" ></a></img>
          </div>
          <p class="text-lg"> vicharaka@iisc.ac.in</p>
        </div>
        <div></div>
    </div>
      `  
      footerContainer.innerHTML=headerHTML
      return true
}




 
