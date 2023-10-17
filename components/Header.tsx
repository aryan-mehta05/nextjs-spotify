"use client";

import { toast } from "react-hot-toast";
import { HiHome } from "react-icons/hi";
import { twMerge } from "tailwind-merge";
import { BiSearch } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

import Button from "@/components/Button";
import { useUser } from "@/hooks/useUser";
import usePlayer from "@/hooks/usePlayer";
import useAuthModal from "@/hooks/useAuthModal";