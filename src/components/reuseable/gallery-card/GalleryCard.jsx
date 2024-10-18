// dnd import
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const GalleryCard = ({ image, index, handleCheckImage }) => {
  // To drag and drop an image
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: image.id });
  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };
  return (
    <div className="w-full h-full">
      <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
        <img
          className="rounded-2xl bg-blend-overlay border-2 w-full h-full"
          src={`${image?.src}`}
        />
        <div
          className={`absolute top-0 bottom-0 left-0 right-0 h-full w-full opacity-0 ${
            image?.checked && "opacity-75"
          } hover:opacity-50 duration-300 rounded-2xl transition-all bg-gray-900`}
        ></div>
      </div>
      <input
        onChange={(e) => handleCheckImage(index, image?.checked)}
        className="absolute top-5 left-5 h-5 w-5 checked:opacity-100 z-50 group-hover:opacity-100 rounded-3xl opacity-0"
        type="checkbox"
        align="right"
        checked={image?.checked}
      />
    </div>
  );
};

export default GalleryCard;