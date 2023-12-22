import { Link } from "react-router-dom"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"




const Banner = () => {
    const [sliderRef] = useKeenSlider(
        {
            loop: true,
        },
        [
            (slider) => {
                let timeout
                let mouseOver = false
                function clearNextTimeout() {
                    clearTimeout(timeout)
                }
                function nextTimeout() {
                    clearTimeout(timeout)
                    if (mouseOver) return
                    timeout = setTimeout(() => {
                        slider.next()
                    }, 2000)
                }
                slider.on("created", () => {
                    slider.container.addEventListener("mouseover", () => {
                        mouseOver = false
                        clearNextTimeout()
                    })
                    slider.container.addEventListener("mouseout", () => {
                        mouseOver = false
                        nextTimeout()
                    })
                    nextTimeout()
                })
                slider.on("dragStarted", clearNextTimeout)
                slider.on("animationEnded", nextTimeout)
                slider.on("updated", nextTimeout)
            },
        ]
    )





    return (
        <div ref={sliderRef} className="keen-slider my-5">
            <div className="keen-slider__slide number-slide1 relative">
                <div id="slide1" className="carousel-item w-full max-h-[800px] rounded-xl overflow-hidden relative">
                    <img className="w-full h-full object-cover" src='https://projectsly.com/images/blog/task-management-app-challenges.png?v=1686553999071005322' alt="Background" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent w-full h-full"></div>
                    <div className="p-8 md:p-16 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black text-center">
                        <h1 className='mb-5 text-3xl md:text-5xl lg:text-7xl font-extrabold  w-full block'>Task Management</h1>
                        <div className='flex justify-center'>
                            <Link to={'/dashboard'}><button className='text-sm lg:text-base px-3 py-2 rounded-lg font-bold bg-blue-500 hover:bg-red-600 btn text-white border-none mr-2 lg:mr-3'>Lets Explore</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="keen-slider__slide number-slide1 relative">
                <div id="slide2" className="carousel-item w-full max-h-[800px] rounded-xl overflow-hidden relative">
                    <img className="w-full h-full object-cover" src='https://snacknation.com/wp-content/uploads/2020/12/Best-Task-Management-Software-Platforms.png' alt="Background" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent w-2/3 h-full"></div>
                    <div className="p-8 md:p-16 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black text-center">
                        <h1 className='mb-5 text-3xl md:text-5xl lg:text-7xl font-extrabold  w-full block'>Task Management</h1>
                        <div className='flex justify-center'>
                            <Link to={'/dashboard'}><button className='text-sm lg:text-base px-3 py-2 rounded-lg font-bold bg-blue-500 hover:bg-red-600 btn text-white border-none mr-2 lg:mr-3'>Lets Explore</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="keen-slider__slide number-slide1 relative">
                <div id="slide3" className="carousel-item w-full max-h-[800px] rounded-xl overflow-hidden relative">
                    <img className="w-full h-full object-cover" src='https://img.officetimeline.com/website/Content/images/articles/PM-Task-Management/task-management-hero-banner.png' alt="Background" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent w-2/3 h-full"></div>
                    <div className="p-8 md:p-16 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black text-center">
                        <h1 className='mb-5 text-3xl md:text-5xl lg:text-7xl font-extrabold  w-full block'>Task Management</h1>
                        <div className='flex justify-center'>
                            <Link to={'/dashboard'}><button className='text-sm lg:text-base px-3 py-2 rounded-lg font-bold bg-blue-500 hover:bg-red-600 btn text-white border-none mr-2 lg:mr-3'>Lets Explore</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="keen-slider__slide number-slide1 relative">
                <div id="slide4" className="carousel-item w-full max-h-[800px] rounded-xl overflow-hidden relative">
                    <img className="w-full h-full object-cover" src='https://projectsly.com/images/blog/task-management-app-challenges.png?v=1686553999071005322' alt="Background" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent w-2/3 h-full"></div>
                    <div className="p-8 md:p-16 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black text-center">
                        <h1 className='mb-5 text-3xl md:text-5xl lg:text-7xl font-extrabold  w-full block'>Task Management</h1>
                        <div className='flex justify-center'>
                            <Link to={'/dashboard'}><button className='text-sm lg:text-base px-3 py-2 rounded-lg font-bold bg-blue-500 hover:bg-red-600 btn text-white border-none mr-2 lg:mr-3'>Lets Explore</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="keen-slider__slide number-slide1 relative">
                <div id="slide5" className="carousel-item w-full max-h-[800px] rounded-xl overflow-hidden relative">
                    <img className="w-full h-full object-cover" src='https://snacknation.com/wp-content/uploads/2020/12/Best-Task-Management-Software-Platforms.png' alt="Background" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent w-2/3 h-full"></div>
                    <div className="p-8 md:p-16 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black text-center">
                        <h1 className='mb-5 text-3xl md:text-5xl lg:text-7xl font-extrabold  w-full block'>Task Management</h1>
                        <div className='flex justify-center'>
                            <Link to={'/dashboard'}><button className='text-sm lg:text-base px-3 py-2 rounded-lg font-bold bg-blue-500 hover:bg-red-600 btn text-white border-none mr-2 lg:mr-3'>Lets Explore</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="keen-slider__slide number-slide1 relative">
                <div id="slide6" className="carousel-item w-full max-h-[800px] rounded-xl overflow-hidden relative">
                    <img className="w-full h-full object-cover" src='https://img.officetimeline.com/website/Content/images/articles/PM-Task-Management/task-management-hero-banner.png' alt="Background" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent w-2/3 h-full"></div>
                    <div className="p-8 md:p-16 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black text-center">
                        <h1 className='mb-5 text-3xl md:text-5xl lg:text-7xl font-extrabold  w-full block'>Task Management</h1>
                        <div className='flex justify-center'>
                            <Link to={'/dashboard'}><button className='text-sm lg:text-base px-3 py-2 rounded-lg font-bold bg-blue-500 hover:bg-red-600 btn text-white border-none mr-2 lg:mr-3'>Lets Explore</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Banner;