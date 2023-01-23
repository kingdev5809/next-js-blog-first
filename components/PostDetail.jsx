import moment from "moment";
import React from "react";

const PostDetail = ({ post }) => {
  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = <b key={index}>{text}</b>;
      }
      if (obj.italic) {
        modifiedText = <i key={index}>{text}</i>;
      }
    }

    switch (type) {
      case "heading-three":
        return (
          <h3 className="text-xl font-semibold mb-4" key={index}>
            {modifiedText.map((item, i) => (
              <React.Fragment key={index}>{item}</React.Fragment>
            ))}
          </h3>
        );
      case "paragraph":
        <p className=" mb-8" key={index}>
          {modifiedText.map((item, i) => (
            <React.Fragment key={index}>{item}</React.Fragment>
          ))}
        </p>;

      case "image":
        <img
          src={obj.src}
          alt={obj.title}
          key={index}
          width={obj.width}
          height={obj.height}
        />;

      default:
        return modifiedText;
    }
  };

  console.log(post.content);
  return (
    <div className="bg-white rounded-lg shadow-lg lg:p-8 mb-12 pb-12">
      <div className="relative overflow-hidden shadow-md mb-6 ">
        <img
          src={post.featuredImage.url}
          alt={post.title}
          className="object-top h-full w-full rounded-t-lg"
        />
      </div>
      <div className="px-4 lg:p-0">
        <div className="flex items-center mb-8 w-full">
          <div className="flex items-center  mb-4 lg:mb-0 w-full lg:w-auto mr-8">
            <img
              className="align-middle rounded-full"
              src={post.author.photo.url}
              alt={post.author.name}
              height="30px"
              width="30px"
            />
            <p className="inline align-middle text-gray-700 ml-2 text-lg">
              {post.author.name}
            </p>
          </div>
          <div className="font-medium text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 inline mr-2 text-pink-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span>{moment(post.createdAt).format("MMM DD,YYYY")}</span>
          </div>
        </div>
        <h1 className="mb-8 text-3xl font-semibold">{post.title}</h1>
        {post.content.raw.children.map((typeObj, index) => {
          const children = typeObj.children.map((item, itemIndex) =>
            getContentFragment(itemIndex, item.text, item)
          );
          return getContentFragment(index, children, typeObj, typeObj.type);
        })}
      </div>
    </div>
  );
};

export default PostDetail;
// 18:00
