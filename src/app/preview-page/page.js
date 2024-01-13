"use client";
import Header from "../components/Header";
import { useState } from "react";


function PreviewPage() {
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState("");
    const [company, setCompany] = useState("");
    const [degree, setDegree] = useState("");
    const [position, setPosition] = useState("");
    const [experience, setExperience] = useState("");
    const [specialtyOne, setSpecialtyOne] = useState("");
    const [specialtyTwo, setSpecialtyTwo] = useState("");
    const [selectedValue, setSelectedValue] = useState(null);

    const title = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
  </svg><span>Create Cover Letter</span>
  `

    const handleRadioChange = (event) => {
        setSelectedValue(event.target.value);
    };

    return (
        <main className="flex min-h-[100vh]">

            {/* Section 1 */}
            <section className="min-h-screen w-[5%] flex flex-col items-center gap-y-8  bg-[#163677] pt-8">
                <img src="https://res.cloudinary.com/dtduf2ehv/image/upload/v1705113902/j4utweqw9tl7lzlhkkff.jpg" alt="Logo" className='w-[2.5rem] h-[2.5rem]' />
                <button className="bg-[#0B58F4] px-4 py-2 text-center text-white rounded-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>

                </button>
            </section>

            {/* Section 2 */}
            <section className="w-full min-h-screen bg-[#F8FAFE]">
                <Header title={title} email={'nicholas.okeke87@gmail.com'} />
                {/* section 2a */}
                <div className="flex px-10 w-full h-full">
                    <section className="w-1/2 py-5">
                        <h1>Cover Letter For Design</h1>
                        {/* Preview of the generated letter */}
                        <div>

                        </div>
                    </section>
                    <section className="flex flex-col gap-y-5 py-5 w-1/2 pl-12 bg-[white]">
                        <header className="flex justify-between">
                            <h1 className="w-[90%] text-center border border-slate-200 py-3 bg-[#F8FAFE] rounded-md flex items-center justify-center">Letter Body</h1>
                            <button className="bg-[#163677] px-4 py-2 text-center text-white rounded-md">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                </svg>

                            </button>
                        </header>
                        <div className="w-full flex justify-end">
                            <button className="flex gap-x-3">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 self-center">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                </svg>

                                <span>
                                    Delete
                                </span>
                            </button>
                        </div>
                        {/* Input for the letter */}
                        <form className="grid grid-cols-3"
                            onSubmit={
                                (event) => { event.preventDefault() }
                                // handleSubmit
                            }
                        >
                            <div className="mb-4 col-span-3">
                                {/* Company Name */}
                               
                                <input
                                    className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
                                    type="text"
                                    placeholder="Company Name"
                                    value={name}
                                    // onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-4 col-span-3">
                               {/* Company Address */}
                                <input
                                    className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
                                    type="text"
                                    placeholder="Company Address: Street"
                                    value={company}
                                    // onChange={(e) => setCompany(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-4 col-span-3">
                                {/* Company address: city */}
                                <input
                                    className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500 "
                                    type="text"
                                    placeholder="Company Address: City"
                                    value={position}
                                    // onChange={(e) => setPosition(e.target.value)}
                                    required
                                />
                            </div>

                            {/* Letter body type */}

                            <div className="mb-4 col-span-3 flex justify-between">
                                <span
                                    className="font-bold text-gray-700"
                                >
                                    Letter Body type
                                </span>

                                <div className="flex gap-x-8">

                                    <div className="flex gap-x-3">
                                        <input
                                            className="border text-gray-700 focus:outline-none focus:border-blue-500 border border-black w-4 "
                                            type="radio"
                                            name="body-type"
                                            value={'Recommended'}
                                            checked={selectedValue === 'Recommended'}
                                            onChange={handleRadioChange}
                                            required
                                        />
                                        <label
                                            className="font-bold text-gray-700"
                                            htmlFor="experience"
                                        >
                                            Recommended
                                        </label>
                                    </div>

                                    <div className="flex gap-x-3">
                                        <input
                                            className="border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500 border border-black w-4"
                                            type="radio"
                                            name="body-type"
                                            value={'Free Form'}
                                            checked={selectedValue === 'Free Form'}
                                            onChange={handleRadioChange}
                                            required
                                        />
                                        <label
                                            className="font-bold text-gray-700"
                                            htmlFor="experience"
                                        >
                                            Free Form
                                        </label>
                                    </div>

                                </div>

                            </div>

                            {/* Greeting of the letter */}
                            <div className="mb-4 col-span-3">
                                <input
                                    className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
                                    type="text"
                                    placeholder="Greeting"
                                    value={degree}
                                    // onChange={(e) => setDegree(e.target.value)}
                                    required
                                />
                            </div>

                            {/* 1st paragraph */}
                            <div className="mb-4 col-span-3">
                                <textarea
                                    className="w-full px-3 py-2 h-[8rem] border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
                                    placeholder="1st Paragraph: Briefly introduce Yourself"
                                    value={experience}
                                    // onChange={(e) => setExperience(e.target.value)}
                                    required
                                ></textarea>
                            </div>

                            {/* Second Paragraph */}
                            <div className="mb-4 col-span-3">
                                <textarea
                                    className="w-full px-3 py-2 h-[8rem] border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
                                    placeholder="2nd Paragraph:Why You? Why this Company?"
                                    value={experience}

                                    // onChange={(e) => setExperience(e.target.value)}
                                    required
                                ></textarea>

                            </div>

                            {/* Third paragraph */}
                            <div className="mb-4 col-span-3">
                                <textarea
                                    className="w-full px-3 py-2 h-[8rem] border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
                                    placeholder="3rd Paragraph:Call to action"
                                    value={experience}
                                    // onChange={(e) => setExperience(e.target.value)}
                                    required
                                ></textarea>
                            </div>

                            {/* Closing */}
                            <div className="mb-4 col-span-3">
                                <input
                                    className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
                                    type="text"
                                    placeholder="Closing"
                                    value={degree}
                                    // onChange={(e) => setDegree(e.target.value)}
                                    required
                                />
                            </div>

                            {/* Generate button */}
                            <div className="flex justify-center mb-20 col-span-3">
                                <button
                                    className="  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    type="submit"
                                >
                                    {loading ? "loading..." : "Generate Cover Letter"}
                                </button>
                            </div>
                        </form>
                    </section>
                </div>

            </section>
        </main>
    )
}

export default PreviewPage
