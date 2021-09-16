import Image from "next/image";
import Link from "next/link";
import Logo from "../public/logo.png";
import Benner from '../public/benner2.jpg'

export default function Home() {
  //const [active, setActive] = useState("");

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="flex flex-row flex-wrap">
        <div className="w-2/12 min-h-screen bg-gray-50 sticky">
          <div className="logo-benner ">
            <div className="flex-col  divide-y-2 divide-gray-400">
              <div className="logo p-2">
                <Image src={Logo} alt="logo" width={120} height={40} />
              </div>
              <div className="menu">
                <div className="flex items-center pt-2 pb-2 pl-5 active:border-r-2 border-blue-600">
                  <Link href="#">
                    <a
                      type="button"
                      className="dashboard flex items-center w-full pt-3 pl-3 pb-3 transition duration-200 hover:bg-blue-600 hover:text-gray-200 rounded-l-lg"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-7 w-7"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                        />
                      </svg>
                      Dashboard
                    </a>
                  </Link>
                </div>
                <div className="flex items-center pt-2 pb-2 pl-5 active:border-r-2 border-blue-600">
                  <Link href="#">
                    <a className="dashboard flex items-center w-full pt-3 pl-3 pb-3 transition duration-200 hover:bg-blue-600 hover:text-gray-200 rounded-l-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-7 w-7"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                        />
                      </svg>
                      Kelas
                    </a>
                  </Link>
                </div>
                <div className="flex items-center pt-2 pb-2 pl-5 active:border-r-2 border-blue-600">
                  <Link href="#">
                    <a className="dashboard flex items-center w-full pt-3 pl-3 pb-3 transition duration-200 hover:bg-blue-600 hover:text-gray-200 rounded-l-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-7 w-7"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                        />
                      </svg>
                      Materi
                    </a>
                  </Link>
                </div>
                <div className="flex items-center pt-2 pb-2 pl-5 active:border-r-2 border-blue-600">
                  <Link href="#">
                    <a className="dashboard flex items-center w-full pt-3 pl-3 pb-3 transition duration-200 hover:bg-blue-600 hover:text-gray-200 rounded-l-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-7 w-7 stroke-current"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        />
                      </svg>
                      Tugas
                    </a>
                  </Link>
                </div>
              </div>
              <div>
                <div className="logout absolute bottom-0 inset-x-0 flex pt-2 pb-2 pl-5">
                  <Link href="#">
                    <a className="dashboard flex items-center w-full pt-3 pl-3 pb-3 transition duration-200 hover:bg-blue-600 hover:text-gray-200 rounded-l-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                      </svg>
                      logout
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-5/12 min-h-screen w-full relative">
          <div className="block benner relative bg-gray-50 m-2 rounded h-60 shadow">
            <Image
              className="rounded"
              src={Benner}
              alt="Welcome"
              width={500}
              height={240}
              layout='responsive'
              
            />
          </div>
          <div className="today-class flex flex-col p-2">
            <h1 className='text-2xl font-semibold text-yellow-400'>Kelas Hari Ini...</h1>
          </div>
        </div>
        <div className="w-5/12"></div>
      </div>
    </div>
  );
}
