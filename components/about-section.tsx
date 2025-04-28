import { Button } from "@/components/ui/button"

export function AboutSection() {
    return (
        <section id="about-us" className="bg-[#030419] text-white py-20">
            <div className="container max-w-7xl px-6 mx-auto">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    {/* Left side - Image placeholder */}
                    <div className="hidden md:block bg-[#D9D9D9] rounded-xl aspect-square md:w-[490px] md:h-[620px]"></div>

                    {/* Right side - Content */}
                    <div className="space-y-10 max-w-[516px] ">
                        <h2 className="text-4xl md:text-5xl font-bold">
                            Want to know More
                            <br />
                            About Us
                        </h2>

                        <div className="space-y-8">
                            <p className="leading-6">
                                We offer you the flexibility to buy and sell your Gift cards anytime and everywhere around the globe.
                                <span className="block font-semibold">Relax, Trade your Gift Cards like a Boss!</span>
                            </p>

                            <p className="leading-6">
                                We offer you the flexibility to buy and sell your Gift cards anytime and everywhere around the globe.
                                <span className="block font-semibold">Relax, Trade your Gift Cards like a Boss!</span>
                            </p>
                        </div>

                        <Button className="bg-primary hover:bg-blue-600 rounded-sm !py-6 px-10 hover:cursor-pointer">Get Started</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
