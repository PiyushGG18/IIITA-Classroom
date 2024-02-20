
import { ChevronRight } from "lucide-react";
import ImageCard from "./ImageCard";
const Image1 = "/photos/Subjects/img1.png";
const Image2 = "/photos/Subjects/img2.png";
const Image3 = "/photos/Subjects/img3.png";

const data = [
  {
    Image: Image1,
    course_name: "Business Analytics",
    course: "Btech - IT/ITBI",
    proffesor: "Dr. Ranjana Vyas",
  },
  {
    Image: Image2,
    course_name: "Data Visualization 2024",
    course:
      "M.Tech-IT Data Engineering / Software Eng (Elective) & BTech Elective ",
    proffesor: "Pavan Chakraborty",
  },

  {
    Image: Image3,
    course_name: "Data Mining C",
    course: "2024",
    proffesor: "Dr. OP Vyas",
  },
  {
    Image: Image1,
    course_name: "IBO",
    course: "Btech - ITBI",
    proffesor: "Dr. Ranjit",
  },
  {
    Image: Image2,
    course_name: "Business Analytics",
    course: "Btech - IT/ITBI",
    proffesor: "Dr. Ranjana Vyas",
  },
];
function Cards() {

  return (
    <div className="flex flex-wrap mt-10 ">
      {data.map((d) => (
        <div className="p-4 w-1/2 md:w-1/4">
          <ImageCard imgSrc={d.Image}>
            <div className="flex flex-col justify-between rounded-lg h-full">
              <div className="flex flex-col overflow-hidden mb-4">
                <h2 className=" text-white text-base md:text-lg font-bold ">
                  {d.course_name}
                </h2>
                <p className="hidden md:flex  text-sm text-gray-300">
                  {d.course}
                </p>
              </div>
              <div className="flex overflow-hidden">
                <div className=" text-white inline-flex items-center mr-1">
                  {d.proffesor}
                </div>
                <div className=" text-white inline-flex items-center">
                  <ChevronRight />
                </div>
              </div>
            </div>
          </ImageCard>
        </div>
      ))}
    </div>
  );
}

export default Cards;
