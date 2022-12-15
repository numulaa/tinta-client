import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useCookies } from "react-cookie"
import Navbar from "../components/Navbar"
import axios from "axios"

const OnBoarding = () => {
    const [cookies, setCookie, removeCookie] = useCookies(null)
    const [formData, setFormData] = useState({
        userId: cookies.UserId,
        firstName: "",
        dob: "",
        showGenre: false,
        genre: "fiction",
        genreInterest: "fiction",
        snippets: "",
        favBooks: "",
        matches: []

    })

    let navigate = useNavigate()

    const handleSubmit = async (e) => {
        console.log('submitted')
        e.preventDefault()
        try {
            const response = await axios.put('http://localhost:8000/user', {formData})
            console.log(response)
            const success = response.status === 200
            if (success) navigate('/dashboard')
        } catch (err) {
            console.log(err)
        }

    }

    const handleChange = (e) => {
        console.log('e', e)
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value
        const name = e.target.name

        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }
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
                        <label htmlFor="firstName" className="font-bold">First Name</label>
                        <input 
                            className="rounded-md p-3 mt-2 border-solid border-2 border-gray w-fit sm:w-full"
                            type="text"
                            id="firstName"
                            name="firstName"
                            placeholder="First Name"
                            required={true}
                            value={""}
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
                                value={""}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="mb-2">
                        <label for="genre" className="block font-bold mb-2 mt-5">Genre</label>
                        
                        <div className="flex gap-2">
                            <div className="radio border hover:bg-brightOrange hover:text-white rounded-md p-3 border-solid border-2 border-gray cursor-pointer w-fit flex items-center justify-center">
                            <input
                                className="hidden"
                                id="fictionGenre"
                                type="radio"
                                name="genre"
                                value="fiction"
                                onChange={handleChange}
                                checked={formData.genre === "fiction"}
                            />
                            <label htmlFor="fictionGenre" className="font-semibold cursor-pointer">Fiction</label>
                            </div>

                            <div className="inline-block radio border hover:bg-brightOrange hover:text-white rounded-md p-3 border-solid border-2 border-gray cursor-pointer w-fit flex items-center justify-center">
                            <input
                                className="hidden"
                                id="nonFictionGenre"
                                type="radio"
                                name="genre"
                                value="nonfiction"
                                onChange={handleChange}
                                checked={formData.genre === "nonfiction"}
                            />
                            <label htmlFor="nonFictionGenre" className="font-semibold cursor-pointer">Non-fiction</label>
                            </div>

                            <div className="inline-block radio border hover:bg-brightOrange hover:text-white rounded-md p-3 border-solid border-2 border-gray cursor-pointer w-fit flex items-center justify-center">
                            <input
                                className="hidden"
                                id="moreGenre"
                                type="radio"
                                name="genre"
                                value="more"
                                onChange={handleChange}
                                checked={formData.genre === "more"}
                            />
                            <label htmlFor="moreGenre" className="font-semibold cursor-pointer">More</label>
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
                            <div className="inline-block radio border hover:bg-brightOrange hover:text-white rounded-md p-3 border-solid border-2 border-gray cursor-pointer w-fit flex items-center justify-center">
                            <input
                                className="hidden"
                                id="fictionGenreInterest"
                                type="radio"
                                name="genreInterest"
                                value="fiction"
                                onChange={handleChange}
                                checked={formData.genreInterest === "fiction"}
                            />
                            <label htmlFor="fictionGenreInterest" className="font-semibold cursor-pointer">Fiction</label>
                            </div>

                            <div className="inline-block radio border hover:bg-brightOrange hover:text-white rounded-md p-3 border-solid border-2 border-gray cursor-pointer w-fit flex items-center justify-center">
                            <input
                                className="hidden"
                                id="nonFictionGenreInterest"
                                type="radio"
                                name="genreInterest"
                                value="nonfiction"
                                onChange={handleChange}
                                checked={formData.genreInterest === "nonfiction"}
                            />
                            <label htmlFor="fictionGenreInterest" className="font-semibold cursor-pointer">Non-fiction</label>
                            </div>
                            
                            <div className="inline-block radio border hover:bg-brightOrange hover:text-white rounded-md p-3 border-solid border-2 border-gray cursor-pointer w-fit flex items-center justify-center">
                            <input
                                className="hidden"
                                id="everyGenreinterest"
                                type="radio"
                                name="genreInterest"
                                value="every genre"
                                onChange={handleChange}
                                checked={formData.genreInterest === "every genre"}
                            />
                            <label htmlFor="everyGenreinterest" className="font-semibold cursor-pointer">Every Genre</label>
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
                            value={""}
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