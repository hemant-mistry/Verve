"use client";
import { useEffect, useState } from "react";
import { Button, Image,Link } from "@nextui-org/react";

import { Card, CardHeader, CardBody } from "@nextui-org/react";
import postIcon from "../../public/images/post-icon.png";
import growIcon from "../../public/images/grow-icon.png";
import encryptIcon from "../../public/images/encrypt-icon.png";
import whyIcon from "../../public/images/why-icon.png";

import "./homepage.css";



export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize); // Add event listener for resize

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

 

  if (isMobile) {
    return (
      <div
        className="flex justify-center items-center"
        style={{ marginTop: "20vh" }}
      >
        <div className="main-header-section text-center">
          <p className="text-center">Currently unavailable on mobiles.</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="main-container flex flex-col items-center justify-center">
        <div
          className="flex justify-center items-center"
          style={{ marginTop: "10vh" }}
        >
          <div className="main-header-section text-center">
            <div className="main-heading">
              <h2 className="welcome-message tracking-tight first:mt-0">
                Welcome to Verve!
              </h2>
            </div>
            <div className="main-sub-heading">
              <p className="text-center">
                To think beyond the norms made by the society and create
                something extraordinary
              </p>
            </div>
            <Link href="/post">
              <Button
                className="main-header-button"
                color="default"
                variant="shadow"
              >
                Escape your reality
              </Button>
            </Link>
          </div>
        </div>
        <br />

        {/* Cards section */}
        <div className="card-container">
          <div className="card">
            <Card className="py-4">
              <CardBody className="overflow-visible py-2 flex items-center justify-center">
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl"
                  src={postIcon.src}
                  width={50}
                />
              </CardBody>
              <CardHeader className="pb-0 pt-2 px-4 flex-col justify-center">
                <h4 className="font-bold text-large">Create posts</h4>
                <p className="mt-2 text-tiny uppercase text-center">
                  Verve helps you open up, write out. How your day went, writing
                  always helps so does sharing.
                </p>
              </CardHeader>
            </Card>
          </div>
          <div className="card">
            <Card className="py-4">
              <CardBody className="overflow-visible py-2 flex items-center justify-center">
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl"
                  src={growIcon.src}
                  width={50}
                />
              </CardBody>
              <CardHeader className="pb-0 pt-2 px-4 flex-col justify-center">
                <h4 className="font-bold text-large">Grow</h4>
                <p className="mt-2 text-tiny uppercase text-center">
                  Reach all your milestones with us, while we keep the track of
                  your journey.
                </p>
              </CardHeader>
            </Card>
          </div>
          <div className="card">
            <Card className="py-4">
              <CardBody className="overflow-visible py-2 flex items-center justify-center">
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl"
                  src={encryptIcon.src}
                  width={50}
                />
              </CardBody>
              <CardHeader className="pb-0 pt-2 px-4 flex-col justify-center">
                <h4 className="font-bold text-large">E2E</h4>
                <p className="mt-2 text-tiny uppercase text-center">
                  Verve does not hold information about anything you write,
                  everything will be encrypted.
                </p>
              </CardHeader>
            </Card>
          </div>
        </div>
        {/* Cards section ends */}

        {/* More info section */}

        <div className="info-container">
          <div className="info-content flex items-center">
            <div className="info-heading pl-8">
              <h2 className="more-info-message tracking-tight first:mt-0">
                Why Journaling?
              </h2>
              {/* List of bullet points */}
              <ul className="bullet-list">
                <li>Helps in organizing thoughts and emotions.</li>
                <li>Facilitates self-reflection and personal growth.</li>
                <li>Improves problem-solving and decision-making skills.</li>
                <li>Reduces stress and promotes mental well-being.</li>
              </ul>
            </div>
            <div className="info-image">
              <Image src={whyIcon.src} width={360} alt="Why Journaling Icon" />
            </div>
          </div>
        </div>
      </div>
      <footer className="main-footer py-6">
        <div className="mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="mt-4 md:mt-0 md:order-1 flex justify-center md:justify-start">
              <p className="scroll-m-20 pb-2 text-2xl tracking-tight first:mt-0">
                © {new Date().getFullYear()} Verve Beta . All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
