"use client"
// dnd import
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  rectSortingStrategy,
} from "@dnd-kit/sortable";
// React import
import React, { useState } from "react";
// project import


// react icons import
import { BiImageAdd } from "react-icons/bi";
import GalleryCard from "../reuseable/gallery-card/GalleryCard";

const Gallery = () => {
  // Initialize all image data
  const [images, setImages] = useState([
    { id: 1, src: "/image-1.webp", checked: false },
    { id: 2, src: "/image-1.webp", checked: false },
    { id: 3, src: "/image-1.webp", checked: false },
    { id: 4, src: "/image-1.webp", checked: false },
    { id: 5, src: "/image-1.webp", checked: false },
    { id: 6, src: "/image-1.webp", checked: false },
    { id: 7, src: "/image-1.webp", checked: false },
    { id: 8, src: "/image-1.webp", checked: false },
    { id: 9, src: "/image-1.webp", checked: false },
    { id: 10, src: "/image-10.jpeg", checked: false },
    { id: 11, src: "/image-1.webp", checked: false },
  ]);

  const [isDelete, setIsDelete] = useState([]);

  // handle On Change Image
  const handleCheckImage = (value, checkedOrNot) => {
    const exist = isDelete.includes(value);
    const demoArray = [...images];
    demoArray[value].checked = !checkedOrNot;
    //if it's already check
    if (exist) {
      const demoArray2 = isDelete.filter((val) => val !== value);
      setIsDelete(demoArray2);
    } else {
      setIsDelete([...isDelete, value]);
    }
    setImages(demoArray);
  };

  // handle On Drag End function
  const handleOnDragEnd = (image) => {
    const { active, over } = image;
    if (active.id === over.id) {
      return;
    }
    setImages((images) => {
      const oldIndex = images.findIndex((user) => user.id === active.id);
      const newIndex = images.findIndex((user) => user.id === over.id);
      console.log(oldIndex);
      return arrayMove(images, oldIndex, newIndex);
    });
  };

  // handle On Change Image function
  const handleOnChangeImage = (image) => {
    if (image.target.files && image.target.files[0]) {
      const file = image.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        // console.log(reader.result);
        setImages([
          ...images,
          { id: images.length + 1, src: reader.result, checked: false },
        ]);
        image.target.value = null;
      };
    }
  };

  // Allow users to select multiple images and delete them.
  const handleOnDelete = () => {
    const demoArray = images.filter((_, i) => {
      return !isDelete.includes(i);
    });
    setIsDelete([]);
    setImages(
      demoArray.map((img) => {
        img.checked = false;
        return img;
      })
    );
  };

  return (
  <div className="mb-5 lg:mb-10">
      <div className="container">
        <h2 className="lg:text-4xl text-2xl font-bold text-gradient text-center mb-5">Gallery</h2>
      <div className="">
        <div className="text-current">
          {/*is checkbox input that checks if it is checked or not and then handles showing a heading,   */}
          {!isDelete.length ? (
            <h4 className="text-2xl font-semibold text-gradient text-center">{"All Images"}</h4>
          ) : (
            <div className="grid md:grid-cols-2">
              <div>
                <h4 className="text-2xl font-semibold text-gradient text-center">{isDelete.length} files selected</h4>
              </div>
              <div>
                <button
                  onClick={handleOnDelete}
                  className="theme-btn lg:text-sm bg-custom-gradient text-white montserrat font-semibold"
                >
                  Delete files
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Implement a grid layout for the image gallery. */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 p-10 [&>*:first-child]:md:col-span-2 [&>*:first-child]:md:row-span-2">
          {/* Implement drag-and-drop functionality or any other intuitive method for reordering*/}
          <DndContext
            collisionDetection={closestCenter}
            onDragEnd={handleOnDragEnd}
          >
            <SortableContext items={images} strategy={rectSortingStrategy}>
              {/* To map all images to show on the frontend  */}
              {images?.map((image, index) => (
                <div className="group relative rounded" key={index}>
                  <GalleryCard
                    handleCheckImage={handleCheckImage}
                    index={index}
                    image={image}
                  />
                </div>
              ))}

              {/* add a new image function on the front end. */}
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-full min-h- border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <BiImageAdd size="35px" />
                  <p>Add Images</p>
                </div>
                <input
                  onChange={handleOnChangeImage}
                  id="dropzone-file"
                  type="file"
                  className="hidden"
                />
              </label>
            </SortableContext>
          </DndContext>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Gallery;