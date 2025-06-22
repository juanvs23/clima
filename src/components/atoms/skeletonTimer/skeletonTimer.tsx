export default function SkeletonTimer() {
  return(
    <div className="innerClock text-4xl md:text-5xl xl:text-6xl animate-pulse">
        <div className="inline-block h-12 w-8 md:w-10 xl:w-12 bg-gray-200 rounded mr-1"></div>
        <div className="inline-block h-12 w-1  bg-gray-200 rounded mr-1"></div>
        <div className="inline-block h-12 w-8 md:w-10 xl:w-12 bg-gray-200 rounded mr-1"></div>
        <div className="inline-block h-12 w-8 md:w-10 xl:w-12 bg-gray-200 rounded"></div>
    </div>
  )
}