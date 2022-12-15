import { useState } from "react"
import Navbar from "../components/Navbar"

const OnBoarding = () => {
    const [formData, setFormData] = useState({
        userId: "",
        userName: "",
        dob: "",
        showGenre: false,
        genre: "fiction",
        genreInterest: "fiction",
        favBooks: "",
        snippets: "",
        matches: []
    })

    const handleSubmit = async (e) => {
        console.log('submitted')

    }

    const handleChange = (e) => {
        console.log('e', e)
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value
        const name = e.target.name
        console.log('value' + value, 'name' + name);

        setFormData((prevState) => ({
            ...prevState,
            [name] : value
        }))
    }

    console.log(formData);

    return (
        <div className="bg-brightOrange">
            <Navbar 
                minimal={true}
                setShowModal= {() => {}}
                showModal={false}
            />
            <main className="bg-white flex flex-col px-12">

                <h2 className="text-3xl mt-7 text-center font-extrabold">Create Account</h2>

                <form onSubmit={handleSubmit} className="flex flex-col">
                    <div className="flex gap-7 lg:flex-row min-[280px]:flex-col">
                    <section className="flex flex-col p-7 mt-3 basis-1/2 items-center sm:items-start text-center sm:text-left">
                        <label htmlFor="userName" className="font-bold">Name</label>
                        <input 
                            className="rounded-md p-3 mt-2 border-solid border-2 border-gray w-fit sm:w-full"
                            type="text"
                            id="userName"
                            name="userName"
                            placeholder="Zee"
                            required={true}
                            value={formData.userName}
                            onChange={handleChange}
                        />

                        <label htmlFor="dob" className="mt-5 font-bold">Birthday</label>
                        <div className="flex gap-2 mt-2">
                            <input 
                                className="rounded-md p-3 border-solid border-2 border-gray w-fit sm:w-full"
                                type="date"
                                id="dob"
                                name="dob"
                                required={true}
                                value={formData.dob}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="mb-2">
                        <label htmlFor="genre" className="block font-bold mb-2 mt-5">Genre</label>
                        
                        <div className="flex gap-2">
                            <div>
                            <input
                                className="hidden peer"
                                id="fictionGenre"
                                type="radio"
                                name="genre"
                                value="fiction"
                                onChange={handleChange}
                                checked={formData.genre === "fiction"}
                            />
                            <label htmlFor="fictionGenre" className="border rounded-md p-3 border-solid border-2 border-gray w-fit flex items-center justify-center font-semibold cursor-pointer peer-checked:bg-brightOrange peer-checked:text-white w-full">Fiction</label>
                            </div>

                            <div>
                            <input
                                className="hidden peer"
                                id="nonFictionGenre"
                                type="radio"
                                name="genre"
                                value="nonfiction"
                                onChange={handleChange}
                                checked={formData.genre === "nonfiction"}
                            />
                            <label htmlFor="nonFictionGenre" className="border rounded-md p-3 border-solid border-2 border-gray w-fit flex items-center justify-center font-semibold cursor-pointer peer-checked:bg-brightOrange peer-checked:text-white w-full">Non-fiction</label>
                            </div>

                            <div>
                            <input
                                className="hidden peer"
                                id="moreGenre"
                                type="radio"
                                name="genre"
                                value="more"
                                onChange={handleChange}
                                checked={formData.genre === "more"}
                            />
                            <label htmlFor="moreGenre" className="border rounded-md p-3 border-solid border-2 border-gray w-fit flex items-center justify-center font-semibold cursor-pointer peer-checked:bg-brightOrange peer-checked:text-white w-full">More</label>
                            </div>

                        </div>
                        
                        </div>

                        <div className="flex gap-1">
                        <input
                            className="mt-1"
                            id="showGenre"
                            type="checkbox"
                            name="showGenre"
                            onChange={handleChange}
                            checked={formData.showGenre}
                        />
                        <label htmlFor="showGenre" className="mt-1 font-bold">Show Genre on my Profile</label>
                        </div>

                        <label className="mt-7 font-bold">Show Me</label>
                        <div className="flex gap-2">
                            <div>
                            <input
                                className="hidden peer"
                                id="fictionGenreInterest"
                                type="radio"
                                name="genreInterest"
                                value="fiction"
                                onChange={handleChange}
                                checked={formData.genreInterest === "fiction"}
                            />
                            <label htmlFor="fictionGenreInterest" className="border rounded-md p-3 border-solid border-2 border-gray w-fit flex items-center justify-center font-semibold cursor-pointer peer-checked:bg-brightOrange peer-checked:text-white w-full">Fiction</label>
                            </div>

                            <div>
                            <input
                                className="hidden peer"
                                id="nonFictionGenreInterest"
                                type="radio"
                                name="genreInterest"
                                value="nonfiction"
                                onChange={handleChange}
                                checked={formData.genreInterest === "nonfiction"}
                            />
                            <label htmlFor="nonFictionGenreInterest" className="border rounded-md p-3 border-solid border-2 border-gray w-fit flex items-center justify-center font-semibold cursor-pointer peer-checked:bg-brightOrange peer-checked:text-white w-full">Non-fiction</label>
                            </div>
                            
                            <div>
                            <input
                                className="hidden peer"
                                id="everyGenreinterest"
                                type="radio"
                                name="genreInterest"
                                value="every genre"
                                onChange={handleChange}
                                checked={formData.genreInterest === "every genre"}
                            />
                            <label htmlFor="everyGenreinterest" className="border rounded-md p-3 border-solid border-2 border-gray w-fit flex items-center justify-center font-semibold cursor-pointer peer-checked:bg-brightOrange peer-checked:text-white w-full">Every Genre</label>
                            </div>

                        </div>

                        <label htmlFor="favBooks" className="mt-5 font-bold">Favorite Books</label>
                        <input
                            className="rounded-md mt-1 p-3 border-solid border-2 border-gray w-fit min-[420px]:w-full"
                            id="favBooks"
                            type="text"
                            name="favBooks"
                            required={true}
                            placeholder="Babel, The Song of Achilles"
                            value={formData.favBooks}
                            onChange={handleChange}
                        />

                    </section>

                    <section className="flex flex-col gap-7 basis-1/2 mx-7 mt-10 h-96">
                        <label htmlFor="snippets" className=" font-bold">Writing Snippets</label>
                        <textarea
                        className="rounded-md p-12 border-solid border-2 border-gray w-full h-full"
                        name="snippets"
                        id="snippets"
                        required={true}
                        placeholder="Language was always..."
                        value={formData.snippets}
                        onChange={handleChange}
                        />
                        <div></div>
                    </section>
                    </div>

                    <input type="submit" className="rounded-md p-3 mt-3 bg-brightOrange text-white w-full font-bold"/>
                </form>
            </main>
        </div>
    )
}

export default OnBoarding