export default function ImageCard({children,imgSrc,...props}){
    return(
        <div {...props} className="w-full relative overflow-hidden rounded-2xl shadow-lg group ">
            <img src={imgSrc}
            alt=""
            className="w-full transition-transform group-hover:scale-110 duration-200"
            />
            <div 
            className="absolute inset-0 flex-col text-start bg-gradient-to-t from-black/60 to-black/60"
            >
                <div className="p-4 h-full  font-bold">{children}</div>
            </div>
        </div>
    )
}