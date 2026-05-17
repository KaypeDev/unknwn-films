
import UnknwnFilms from "@/components/about/UnknwnFilms"
import MessyGallery from "@/components/about/MessyGallery"

export default function About() {
    return (
        <div>
            <div className="w-full max-w-[1440px] mx-auto px-2 md:px-13 my-10 lg:my-20">
                <UnknwnFilms />
                <div className="pt-10">
                          <MessyGallery/>
                        </div>
            </div>
           
        </div>
    )
}