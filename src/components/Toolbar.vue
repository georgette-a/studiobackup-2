<template>
<div class="h-screen w-20 flex bg-gray-300">
	<!-- container -->

	<aside
		class="flex flex-col items-center bg-st-gray text-white shadow h-full w-20">
		<!-- Side Nav Bar-->

		<div class="h-16 flex justify-center items-center w-full">
			<!-- Back Section -->
			<router-link to="/home" tag="button" active-class="active">
                <svg 
                class="h-6 w-6 mx-auto"
                width="24"
				height="24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24">
                <path d="M1.293,12.707a1,1,0,0,1,0-1.414l6-6A1,1,0,0,1,8.707,6.707L4.414,11H22a1,1,0,0,1,0,2H4.414l4.293,4.293a1,1,0,0,1-1.414,1.414Z"/>
                </svg>
            </router-link>
		</div>

		<ul class="pt- w-20">
			<!-- Items Section -->
			
            <!-- Move -->

			<li class="hover:bg-gray-700 px-6 justify-center items-center">
				<span>
                    <a
					href="."
					class="h-16 flex flex-col justify-center items-center w-full
					focus:text-yellow-200">
					<svg
                    
						class="h-5 w-5"
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="currentColor"
						stroke="none"
						>
						<path d="M2.3,11.291l3-3A1,1,0,1,1,6.708,9.706L5.415,11H11V5.413L9.708,6.706A1,1,0,0,1,8.294,5.292l3-3a1,1,0,0,1,1.415,0l3,3a1,1,0,1,1-1.414,1.414L13,5.413V11h5.586L17.294,9.706a1,1,0,1,1,1.414-1.414l3,3a1,1,0,0,1,0,1.416l-3,3a1,1,0,1,1-1.414-1.414L18.587,13H13v5.586l1.293-1.293a1,1,0,0,1,1.414,1.414l-3,3a1,1,0,0,1-1.415,0l-3-3a1,1,0,0,1,1.414-1.414L11,18.585V13H5.415l1.293,1.293a1,1,0,1,1-1.414,1.414l-3-3A1,1,0,0,1,2.3,11.291Z"/>
                        </svg>
                    <span><p class="text-xs pt-1">Move</p></span>
                    </a>
				</span>
                
			</li>
			
            <!-- Text -->

			<li class="hover:bg-gray-700 px-6 justify-center items-center">
				<span>
                    <a
					href="."
					class="h-16 flex flex-col justify-center items-center w-full
					focus:text-yellow-200">
					<svg
						class="h-5 w-5"
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="currentColor"
						stroke="none"
						>
						<path d="M2,5V3A1,1,0,0,1,3,2H21a1,1,0,0,1,1,1V5a1,1,0,0,1-2,0V4H13V20h3a1,1,0,0,1,0,2H8a1,1,0,0,1,0-2h3V4H4V5A1,1,0,0,1,2,5Z"/>
                        </svg>
                    <span><p class="text-xs pt-1">Text</p></span>
				</a></span>
                
			</li>

			
            <!-- Images -->

			<li class="hover:bg-gray-700 px-6 justify-center items-center">
				<span>
                    <a
					href="."
					class="h-16 flex flex-col justify-center items-center w-full
					focus:text-yellow-200">
					<svg
						class="h-5 w-5"
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="currentColor"
						stroke="none"
						>
						<path d="M22,3a1,1,0,0,0-1-1H3A1,1,0,0,0,2,3V21a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1ZM20,20H4V17.481L7.926,14.34l2.367,2.367a1,1,0,0,0,1.414,0l4.367-4.367L20,15.481Zm0-7.081-3.375-2.7a1,1,0,0,0-1.332.074L11,14.586,8.707,12.293a1,1,0,0,0-1.332-.074L4,14.919V4H20ZM6,8a2,2,0,1,1,2,2A2,2,0,0,1,6,8Z"/>
                        </svg>
                    <span><p class="text-xs pt-1">Images</p></span>
				</a></span>
                
			</li>

            <!-- Colours -->

			<li class="hover:bg-gray-700 px-6 justify-center items-center">
				<span>
                    <a
					href="."
					class="h-16 flex flex-col justify-center items-center w-full
					focus:text-yellow-200">
					<svg
						class="h-5 w-5"
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="currentColor"
						stroke="none"
						>
						<path d="M12.022,23a11.053,11.053,0,0,0,10.921-9.5,5.853,5.853,0,0,0-.577-3.5c-1.655-3.146-4.777-2.671-7.056-2.322-1.18.178-2.4.366-2.865-.035A2.416,2.416,0,0,1,12.02,6c0-2.683,0-5-3-5C3.753,1,1,6.534,1,12A11.023,11.023,0,0,0,12.022,23ZM9.016,3c.909,0,1,0,1,3a3.941,3.941,0,0,0,1.122,3.168c1.163,1,2.844.741,4.469.494,2.483-.379,4.061-.482,4.986,1.276a3.844,3.844,0,0,1,.363,2.293A9.024,9.024,0,0,1,3,12C3,8.382,4.6,3,9.016,3ZM5,7.5A1.5,1.5,0,1,1,6.5,9,1.5,1.5,0,0,1,5,7.5ZM4,12a1.5,1.5,0,1,1,1.5,1.5A1.5,1.5,0,0,1,4,12Zm3.5,3A1.5,1.5,0,1,1,6,16.5,1.5,1.5,0,0,1,7.5,15Zm8,3A3.5,3.5,0,1,0,12,14.5,3.5,3.5,0,0,0,15.5,18Zm0-5A1.5,1.5,0,1,1,14,14.5,1.5,1.5,0,0,1,15.5,13Z"/>
					</svg>
                    <span><p class="text-xs pt-1">Colours</p></span>
				</a></span>
                
			</li>

            <!-- DL -->
            <li class="hover:bg-gray-700 px-6 justify-center items-center">
				<span>
                    <a
					href="."
					class="h-16 flex flex-col justify-center items-center w-full
					focus:text-yellow-200">
					<svg
						class="h-5 w-5"
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="currentColor"
						stroke="none"
						>
                        <path d="M4,20H20a1,1,0,0,1,0,2H4a1,1,0,0,1,0-2ZM12,2a1,1,0,0,0-1,1V14.586L8.707,12.293a1,1,0,1,0-1.414,1.414l4,4a1,1,0,0,0,.325.216.986.986,0,0,0,.764,0,1,1,0,0,0,.325-.216l4-4a1,1,0,0,0-1.414-1.414L13,14.586V3A1,1,0,0,0,12,2Z"/>
						</svg>
                    <span><p class="text-xs pt-1">Download</p></span>
				</a></span>
                
			</li>

		</ul>

		<div class="mt-auto h-16 flex items-center w-full">
			<!-- Action Section -->
			<button
				class="h-16 mx-auto flex justify-center items-center
				w-full focus:text-orange-500 hover:bg-yellow-600 focus:outline-none">
				<svg
					class="h-5 w-5"
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round">
					<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
					<polyline points="16 17 21 12 16 7"></polyline>
					<line x1="21" y1="12" x2="9" y2="12"></line>
				</svg>

			</button>
		</div>

	</aside>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
button.active{
    color: #FFC600;

}
a:visited{
    color:white

}
</style>