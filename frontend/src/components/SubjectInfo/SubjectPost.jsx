import React, { useContext } from "react";


function formatDate(dateString) {
  const date = new Date(dateString);

  // Extracting date components
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  // Extracting time components
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  return `${hours}:${minutes} ${day}/${month}/${year}`;
}

function SubjectPost(props) {
  // const { subjects } = useContext(UserContext);
  // const { subId } = useParams();

  // const d = subjects.find((obj) => {
  //   return obj.course_name === subId;
  // });

  const subPosts = props.sub.posts;

  const temp = subPosts ? [...subPosts].reverse() : [];
  console.log(temp)
  return (
    <>
      {temp.length > 0 ? (
        <div className="w-full flex flex-col items-center ">
          {temp.map((post) => (
            <div className="border border-gray-300 p-2 w-11/12 my-2 rounded-2xl flex flex-col">
              <div className="p-2 flex">
                <img
                  src={post.authorImage}
                  alt="err"
                  className="w-12 rounded-full mr-4"
                />
                <div className="flex flex-col justify-center">
                  <div className="text-sm font-bold text-gray-600">
                    {post.author}
                  </div>
                  <div className="text-xs text-gray-400">{formatDate(post.date)}</div>
                </div>
              </div>
              <div className="text-sm p-2 text-gray-700 overflow-auto">
                {post.content}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className=" font-semibold text-gray-400  rounded-lg p-2 m-4 flex flex-col items-center">
          No posts yet
        </div>
      )}
    </>
  );
}

export default SubjectPost;
