"use client";

import { TbPlaylist } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";

import { Song } from "@/types";

interface LibraryProps {
  songs: Song[];
};

const Library = ({
  songs
}: LibraryProps) => {
  return (
    <div>
      Library!
    </div>
  );
};

export default Library;