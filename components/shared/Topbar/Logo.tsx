import Link from 'next/link'

const Logo = () => {
  return (
     <div className="flex justify-start items-end py-3 pl-1">
        <Link href="/" id="logo" className="text-4xl font-bold ">
          The Running Quail 
        </Link>
      </div>
  )
}

export default Logo