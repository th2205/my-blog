import { useEffect } from "react";

interface UseDragAndDrop {
  targetEl: HTMLElement;
  onSuccess: () => void;
  onDrop: () => void | Promise<void>;
  onDragEnter: (e: DragEvent) => void;
  onDragLeave: (e: DragEvent) => void;
}

export default function useDragAndDrop({
  targetEl,
  onDragEnter,
  onDrop,
  onDragLeave,
  onSuccess,
}: UseDragAndDrop) {
  useEffect(() => {
    console.log(targetEl);
    if (targetEl) {
      console.log(33);
      targetEl.addEventListener("dragenter", onDragEnter);
      targetEl.addEventListener("dragleave", onDragLeave);
      //   targetEl.addEventListener("drop", function (e) {
      //     e.preventDefault();

      //     console.log("drop");
      //     this.style.backgroundColor = "white";

      //     console.dir(e.dataTransfer);

      //     var data = e.dataTransfer.files[0];
      //     console.dir(data);
      //   });

      return () => {
        targetEl.removeEventListener("dragenter", onDragEnter);
        targetEl.removeEventListener("dragleave", onDragLeave);
      };
    }
  }, [targetEl]);
}
