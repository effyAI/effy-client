import Image from "next/dist/client/image";
export default function DreamProject() {
  return (
    <section className="py-10">
      <div className="items-center w-11/12 mx-auto space-y-10 2xl:w-9/12 xl:w-5/6">
        <div
          className="bg-center bg-no-repeat bg-cover rounded-3xl bg-gradient-to-r from-[#DB5C98]/40   to-[#6D3AFF]/40"
        >
          <div className="px-3 py-2 lg:px-14 lg:py-16 relative">
            <div className="flex md:flex-row flex-col-reverse gap-10  items-center justify-between  p-4">
              <div className="flex flex-col space-y-10 w-full ">
                <div className="space-y-4 ">
                  <h3 className="text-2xl font-bold text-[#22222] 2xl:text-4xl xl:text-3xl">
                  Take Our Premium Plan 20% Off hurry up !
                  </h3>
                  <p className="text-lg text-[#22222]">
                  Also than having free Webflow cloneables, we create cutting-edge premium Webflow templates too.
                  </p>
                </div>
                <div className="flex items-center ">
                  <a href="https://api.whatsapp.com/send?phone=919587867258">
                    <button className="relative inline-flex items-center justify-center px-8 py-3 space-x-1 overflow-hidden text-lg font-semibold bg-white rounded-full cursor-pointer text-blue-600 w-fit group">
                      <span className="absolute w-0 h-0 transition-all duration-300 ease-out origin-center bg-black rounded-full group-hover:w-60 group-hover:h-60 opacity-10"></span>
                      Try Now Premium
                    </button>
                  </a>
                </div>
              </div>
              <div className="w-full flex justify-center">
             <Image src="/images/call-to-action.svg" alt="call to action effyai" width={400} height={400} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
