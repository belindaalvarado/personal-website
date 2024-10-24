'use client'

import Image from "next/image";
import { useState } from 'react';
import belindaPic1 from "/src/app/assets/pictures/belinda-pic-1.png";
import belindaPic2 from "/src/app/assets/pictures/belinda-pic-2.png";
import envelopeLogo from '/src/app/assets/pictures/envelope-logo.png';
import footerPic from '/src/app/assets/pictures/footer-pic.png';
import instagramLogo from '/src/app/assets/pictures/instagram-logo.png';
import linkedinLogo from '/src/app/assets/pictures/linkedin-logo.png';
import projectPic1 from "/src/app/assets/pictures/project-pic-1.png";
import projectPic2 from "/src/app/assets/pictures/project-pic-2.png";
import projectPic3 from "/src/app/assets/pictures/project-pic-3.png";

export default function Home() {
  const currentTime = Date.now()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const mailtoLink = `mailto:your-email@example.com?subject=Message from ${encodeURIComponent(
      formData.name
    )}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${encodeURIComponent(
      formData.name
    )}%0AEmail: ${encodeURIComponent(formData.email)}`;

    window.location.href = mailtoLink; // Opens email client with pre-filled details
  };

  return <div className="min-h-screen bg-customBackground flex flex-col w-full font-playfair">
    {/* header section start */}
    <header className=" w-full h-14 text-white shadow-lg fixed top-0 flex">
      <h1 className="flex w-7/12 max-md:w-2/5 items-center text-black font-comfortaa font-bold text-lg">
        <a href="#Home" className="bg-white h-full max-md:text-sm max-md:p-0 max-md:flex flex-col max-md:justify-center max-md:items-center max-md:w-full w-3/4 p-5">
        Belinda Alvarado
        </a>
      </h1>
        <div className="flex justify-evenly items-center max-md:w-full bg-customBerry w-5/12 p-5 max-md:p-1 gap-2 text-white">
          {/* font here needs to be added and changed to raleway */}
          {/* <a href="#">Home</a> */}
          <a className="hover:text-white/50 transition-colors" href="#About">About</a>
          <a className="hover:text-white/50 transition-colors" href="#Projects">Projects</a>
          <a className="hover:text-white/50 transition-colors" href="#Contact">Contact</a>
        </div>
    </header>
    {/* header section end */}
    {/* main section start */}
    <main id="Home" className="h-screen">
      <div className="flex max-md:flex-col w-full justify-between">
        <Image src={belindaPic1} alt="hero" className="w-full md:hidden" width={1920} height={1080} />

          <section className="mt-20 w-fit flex flex-col p-5 items-center">
          <div className="w-10/12 max-md:w-full">
          <span className="font-nunito font-bold text-customBerry text-lg">Graduate Student</span>
            <h2 className="font-playfair leading-10 mt-4 font-bold flex flex-col text-black text-3xl max-md:text-2xl">
            Hello, my name is <span>
            Belinda Alvarado
            </span>
            </h2>
            <p className="font-nunito text-customLightGray leading-10 font-normal text-lg max-md:text-sm mt-4 w-10/12">
            I am pursuing a Master&apos;s degree in Computer Science (MSCS) at the University of Texas Rio Grande Valley(UTRGV). 
            I also work as an Instructor and as a Graduate Research Assistant at my university.
            </p>
            <div className="self-start mt-5 gap-3 flex max-md:flex-col">
          <a href="#Projects" className="bg-customBerry  max-md:text-sm text-center p-2 hover:bg-white hover:text-customBerry transition-colors hover:outline outline-customBerry rounded w-40 text-white">
            Projects</a>
            <a href="https://www.linkedin.com/in/belindaalvarado653/" className="bg-white max-md:text-sm outline-customBerry outline p-2 rounded w-40 text-center hover:bg-customBerry transition-colors hover:text-white text-customBerry">Linked In</a></div>
          </div>
        
          </section>
      <Image src={belindaPic1} alt="hero" className="w-1/2 self-start max-md:hidden" width={1920} height={1080} />
      </div>      
    </main>
    {/* main section end */}
    {/* about section start */}
    <section id="About" className="max-md:mt-96 lg:mt-16 min-h-screen flex max-md:flex-col gap-10 justify-center items-center w-full">
      <Image src={belindaPic2} alt="BelindaPic2" className="w-2/5 max-md:w-full max-sm:w-3/4"></Image>
      <div className=" w-2/5 max-md:w-full max-md:p-5 flex flex-col gap-5">
        <h3 className="text-4xl font-playfair font-bold text-black max-md:text-2xl">About Me</h3>
        <span className="font-nunito font-normal text-xl max-md:text-sm leading-10 text-customLightGray">
        I&apos;m passionate about making tech more inclusive and accessible. Recently, I&apos;ve developed a newfound interest in bioinformatics, 
        which I&apos;m exploring as a Graduate Research Assistant at UTRGV. I love working on meaningful projects, and I&apos;m always 
        eager to tackle new challenges in tech. Whether it&apos;s teaching, developing software, organizing hackathons, or diving into bioinformatics. 
        I&apos;m driven by the impact technology can have in solving real-world problems.
        </span>
        <a 
        href="/Resume.pdf" 
        download="Belinda_Alvarado_Resume.pdf"      
        className="bg-customBerry text-center p-2 hover:bg-white hover:text-customBerry transition-colors hover:outline outline-customBerry rounded w-40 text-white max-md:text-sm">
                  Resume</a>
      </div>
    </section>
    {/* about section end */}
    {/* projects section start */}
    <section id="Projects" className="min-h-screen gap-10 mt-20 items-center w-full flex flex-col justify-center">
          <h4 className="flex flex-col items-center justify-end text-black font-playfair mb-10 font-bold text-5xl max-md:text-2xl">Projects
            <span className="bg-customBerry w-2/3 p-0.5"></span>
          </h4>
      {/* first project */}
      <div className="w-full flex justify-center items-center max-md:flex-col">
        <div className="bg-white self-center py-20 px-10 gap-5 w-1/3 flex flex-col justify-center items-center max-md:w-full">
        <span className="font-playfair text-3xl font-bold text-black max-md:text-2xl">Trimming Trends</span>
          <p className="text-customLightGray font-nunito font-normal leading-10 text-base max-md:text-sm">
          This was my undergraduate capstone project. My group and 
          I created this flutter mobile app in order to allow users 
          to visualize new hairstyles on themselves while leveraging existing 
          machine learning models to add accuracy to the final output image.
          </p>
        <a 
        href="https://github.com/belindaalvarado/Senior-Project"
        className="w-40 rounded-full p-2 self-start mt-5 text-center outline outline-black bg-white hover:bg-white/50 transition-colors max-md:text-sm">View Project</a>
        </div>
        <div className="w-1/3 max-md:w-full bg-transparent">
        <Image src={projectPic1} alt="TrimmingTrends" className="w-fit max-md:w-full max-md:hidden"></Image></div>
      </div>
      {/* second project */}
      <div className="w-full flex justify-center items-center max-md:flex-col">
        <div className="w-1/3 max-md:w-full bg-transparent">
        <Image src={projectPic2} alt="FronteraHacks" className="w-fit max-md:w-full max-md:hidden"></Image></div>
        <div className="bg-white self-center py-20 px-10 gap-5 w-1/3 flex flex-col justify-center items-center max-md:w-full">
        <span className="font-playfair text-3xl font-bold text-black max-md:text-2xl">Frontera Hacks</span>
          <p className="text-customLightGray font-nunito font-normal leading-10 text-base max-md:text-sm">
          This is a web application that allows users to register for and learn about Frontera Hacks,
          a hackathon event hosted by Frontera Devs, a student organization I&apos;m apart of at UTRGV. 
          I contributed to the front-end development of the landing page.
          </p>
        <a 
        href="https://www.fronterahacks.org/"
        className="w-40 rounded-full p-2 self-start mt-5 text-center outline outline-black bg-white hover:bg-white/50 transition-colors max-md:text-sm">View Project</a>
        </div>
      </div>
      {/* third project */}
      <div className="w-full flex justify-center items-center max-md:flex-col">
        <div className="bg-white self-center py-20 px-10 gap-5 w-1/3 flex flex-col justify-center items-center max-md:w-full">
        <span className="font-playfair text-3xl font-bold text-black max-md:text-2xl">Intro to CS Projects</span>
          <p className="text-customLightGray font-nunito font-normal leading-10 text-base max-md:text-sm">
          As an instructor at UTRGV, I teach Intro to Computer Science. 
          I&apos;m responsible for helping my students decide if they would like to pursue
          a career in Computer Science. Therefore, I try to expose them to a wide variety of topics, including:
          game development, web development, data science, etc.
          </p>
        <a 
        href="https://github.com/stars/belindaalvarado/lists/intro-to-cs-fall-24"
        className="w-40 rounded-full p-2 self-start mt-5 text-center outline outline-black bg-white hover:bg-white/50 transition-colors max-md:text-sm">View Project</a>
        </div>
        <div className="w-1/3 max-md:w-full bg-transparent">
        <Image src={projectPic3} alt="TrimmingTrends" className="w-fit max-md:w-full max-md:hidden"></Image></div>
      </div>
    </section>
    {/* projects section end */}
    {/* contact section start */}
    <section id="Contact" className="min-h-screen flex justify-center items-center w-full">
      <div className="w-full flex flex-col gap-5 items-center">
        <h5 className="flex flex-col items-center justify-end text-black font-playfair mb-10 font-bold text-5xl max-md:text-2xl">Contact Me
          <span className="bg-customBerry w-2/3 p-0.5"></span>
        </h5>
        <form className="flex flex-col items-center gap-5 w-full" onSubmit={handleSubmit}>
        <div className="flex flex-col w-1/2 max-md:w-10/12">
        <label className="font-nunito text-base text-black py-1" htmlFor="">Name</label>
          <input
          className="w-full p-3 border border-customBorder"
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col w-1/2 max-md:w-10/12">
        <label className="font-nunito text-base text-black py-1" htmlFor="">Email</label>
          <input
          className="w-full p-3 border border-customBorder"
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col w-1/2 max-md:w-10/12">
        <label className="font-nunito text-base text-black py-1" htmlFor="">Message</label>
        <textarea
            className="w-full p-3 border border-customBorder"
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
      <div className="w-1/2 flex justify-end">
      <button type="submit" className=" bg-customBerry w-40 p-2 text-white font-roboto text-lg hover:bg-white hover:outline outline-customBerry transition-colors hover:text-customBerry rounded w-40 max-md:text-sm">Send Message</button>
      </div>
        </form>
      </div>
    </section>
      <div className="flex flex-col w-full h-full items-center">
        <div className="w-full flex justify-center gap-3 max-md:mt-6">
          <a href="https://www.instagram.com/basic.berry.belinda/">
            <Image className="max-md:w-4/5 lg:w-4/5" src={instagramLogo} alt="instagram"></Image>
            </a>
          <a href="https://www.linkedin.com/in/belindaalvarado653/">
            <Image className="max-md:w-4/5 lg:w-4/5" src={linkedinLogo} alt="linkedin"></Image>
          </a>
          <a href="mailto:alvaradobelinda653@gmail.com">
            <Image className="max-md:w-4/5 lg:w-4/5" src={envelopeLogo} alt="email"></Image>
          </a>
        </div>
        <span className="font-nunito text-customLightGray text-base max-md:text-xs">
        Belinda Alvarado {new Date(currentTime).getFullYear()}
        </span>
      </div>
    {/* contact section end */}
    <footer>
      <Image src={footerPic} alt="footer" className="w-full"></Image>
    </footer>
</div>;
}
