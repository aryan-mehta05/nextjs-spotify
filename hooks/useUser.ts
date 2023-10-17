import { useEffect, useState, createContext, useContext } from "react";
import {
  useUser as useSupaUser,
  useSessionContext,
  User
} from "@supabase/auth-helpers-react";

import { UserDetails, Subscription } from "@/types";