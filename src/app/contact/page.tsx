import Navbar from "@/components/Navbar";

const page = () => {
  return (
    <div>
      <Navbar logoVariant="wlogo" textVariant="white" headerVariant="blue" />
      <div className="min-h-screen bg-purple-400 flex items-center justify-center">
        pages
      </div>
    </div>
  );
};

export default page;
