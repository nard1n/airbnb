import Image from "next/image";

function LargeCard( { img, title, description, buttonText }) {
    return (
        <section className="relative h-96 min-w-[300px]">
            <div>
                <Image 
                    src={img}
                    objectFit="cover"
                    layout="fill"
                    className="rounded-2xl"
                />
            </div>
            <div>

            </div>
            
        </section>
    )
}

export default LargeCard
