import { Info, socialLinks} from "../User";

const Footer=()=>{
    const socialIcons=socialLinks.map((socialLink, index)=>{
        return <a   key={index} href={`${socialLink.link}`} target="_blank"  className="font-mono text-lg  hover:text-primaryColor hover:scale-105 transition transform duration-300 ease-in-out">
        <socialLink.icon stroke={1.5}  size={25} />
    </a>
    })
    return <div className="mt-20 mb-10 font-mono flex flex-col gap-2 items-center">
        <div className="text-3xl md-mx:text-2xl text-primaryColor font-semibold">Thank you !!</div>
        <div className="md-mx:flex hidden text-textColor gap-8 sm-mx:gap-6">{socialIcons}</div>
    </div>
}
export default Footer;