function Footer() {
    return (
        <>
            <div className="h-auto grid gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mx-4 py-8">
                <div >
                    <h3 className="text-lg font-bold">General</h3>
                    <div className="bg-[#c412b5] w-full h-1 my-1"></div>
                    <p className="py-1">Home</p>
                    <p className="py-1">About</p>
                    <p className="py-1">Imprint</p>
                </div>
                <div>
                    <h3 className="text-lg font-bold">Database Search</h3>
                    <div className="bg-[#c412b5] w-full h-1 my-1"></div>
                    <p className="py-1">Books</p>
                    <p className="py-1">Characters</p>
                    <p className="py-1">Movies</p>
                    <p className="py-1">Potions</p>
                    <p className="py-1">Spells</p>
                </div>
                <div>
                    <h3 className="text-lg font-bold">Information</h3>
                    <div className="bg-[#c412b5] w-full h-1 my-1"></div>
                    <p className="py-1">Api Docs</p>
                    <p className="py-1">Source</p>
                    <p className="py-1">Scrabby</p>
                    <p className="py-1">Sitemap</p>
                </div>
            </div>
            <div className="text-center mb-3">
                Copyright © Potter DB 2024
            </div>
        </>
    )
}

export default Footer;