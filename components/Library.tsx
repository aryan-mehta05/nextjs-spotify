"use client";

import { TbPlaylist } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";

import { Song } from "@/types";
import { useUser } from "@/hooks/useUser";
import useOnPlay from "@/hooks/useOnPlay";
import useAuthModal from "@/hooks/useAuthModal";
import useUploadModal from "@/hooks/useUploadModal";
import useSubscribeModal from "@/hooks/useSubscribeModal";

import MediaItem from "@/components/MediaItem";

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