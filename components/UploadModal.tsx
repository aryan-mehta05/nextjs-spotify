"use client";

import uniqid from "uniqid";
import toast from "react-hot-toast";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import Modal from "@/components/Modal";
import Input from "@/components/Input";
import Button from "@/components/Button";
import { useUser } from "@/hooks/useUser";
import useUploadModal from "@/hooks/useUploadModal";