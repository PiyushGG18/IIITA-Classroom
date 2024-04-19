import React, { useContext } from "react";

function SubjectPost(props) {
  // const { subjects } = useContext(UserContext);
  // const { subId } = useParams();

  // const d = subjects.find((obj) => {
  //   return obj.course_name === subId;
  // });

  const subPosts = props.sub.posts;

  const temp = [...subPosts].reverse();
  console.log(subPosts)
  return (
    <>
      {temp.length > 0?
      <div className="w-full flex flex-col items-center ">
        {temp.map((post) => (
          <div className="border border-gray-300 p-2 w-11/12 my-2 rounded-2xl flex flex-col">
            <div className="p-2 flex">
              <img
                src={post.pfp}
                alt="err"
                className="w-12 rounded-full mr-4"
              />
              <div className="flex flex-col justify-center">
                <div className="text-sm font-bold text-gray-600">
                  {post.Author}
                </div>
                <div className="text-xs text-gray-400">{post.date}</div>
              </div>
            </div>
            <div className="text-sm p-2 text-gray-700 overflow-auto">
              {post.content}
            </div>
          </div>
        ))}
      </div>
      :<div className=" font-semibold text-gray-400  rounded-lg p-2 m-4 flex flex-col items-center">No posts yet</div>}
    </>
  );
}

export default SubjectPost;
