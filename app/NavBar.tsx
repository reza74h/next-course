"use client";
import Link from "next/link";
import React from "react";
import { signIn, signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

const NavBar = () => {
  const { status, data: session } = useSession();

  return (
    <div className="flex bg-slate-200 p-5 space-x-3">
      <Link href="/" className="mr-5">
        Next.js
      </Link>
      <Link href="/users">Users</Link>
      {status === "authenticated" && (
        <div>
          {session.user!.name}
          <Link href="#" className="ml-3" onClick={() => signOut()}>
            Sign Out
          </Link>
        </div>
      )}
      {status === "unauthenticated" && (
        <Link href="#" type="submit" onClick={() => signIn()}>
          Sign In
        </Link>
      )}
    </div>
  );
};

export default NavBar;
