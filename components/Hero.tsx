
function Hero() {
  return (
    <div className='text-center mt-24 flex flex-col justify-center items-center'>
      <p>
        An AI tool made for conversion rate optimization
      </p>

      <h1 className='text-5xl font-bold pt-8'>
        Increase your <br /> conversion rate <br />
        <span className='text-pink-500'> using Ai</span>
      </h1>

      <div className="pt-8">
        <button className="bg-black text-white px-8 py-3 rounded-md text-md">Create Account</button>
      </div>


      <div className="flex text-gray-500 pt-8 space-x-8">
        <p>30 Days free trial</p>
        <p>|</p>
        <p>No credit card required</p>
      </div>
    </div>
  )
}

export default Hero
